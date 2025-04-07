# Docker Stack device mapping

_This is only relevant when using Docker Stack_

Docker stack doesn't support device mappings with option `--devices` when deploying a stack in swarm mode. There are two solutions to this. Both of these solutions start with binding the devices as volumes.

## Automatic device mapping for cgroup v1 and v2

The easiest solution for enabling devices on Docker Stacks is the [allfro device-mapping-manager docker image](https://github.com/allfro/device-mapping-manager). This container has a tiny program that reads all of the volume mounts on its own host, identifies devices, and then modifies the permissions on the host to allow the container to use them. Unlike other solutions, this works for both versions of cgroups.

This container has to be deployed directly to docker, not through a stack. It's possible to work around this by creating a stack with a privileged service that acts as a proxy to launch the actual device mapper container.

```yaml
version: '3.8'

services:
    dmm:
        image: docker
        entrypoint: docker
        restart: unless-stopped
        privileged: true
        command: |
            run
            -i
            --rm
            --privileged
            --cgroupns=host
            --pid=host
            --userns=host
            -v /sys:/host/sys
            -v /var/run/docker.sock:/var/run/docker.sock
            -v /dev:/dev
            ghcr.io/allfro/allfro/device-mapping-manager:latest
        volumes:
            - /var/run/docker.sock:/var/run/docker.sock
        deploy:
            mode: global
```

## Manual cgroup v1

A workaround is to manually set the right permissions. The workaround is based on the solution found at [Add support for devices with "service create"](https://github.com/docker/swarmkit/issues/1244#issuecomment-285935430), all credits goes this him.

This workaround only works with cgroup v1, which is not enabled on many newer distro releases.

1. Identify serial adapter
   Identify the serial adapter using the following command:

    ```shell
    sudo lsusb -v
    ```

    ```
    Bus 001 Device 005: ID 0451:16a8 Texas Instruments, Inc.
    Device Descriptor:
      bLength                18
      bDescriptorType         1
      bcdUSB               2.00
      bDeviceClass            2 Communications
      bDeviceSubClass         0
      bDeviceProtocol         0
      bMaxPacketSize0        32
      idVendor           0x0451 Texas Instruments, Inc.
      idProduct          0x16a8
      bcdDevice            0.09
      iManufacturer           1 Texas Instruments
      iProduct                2 TI CC2531 USB CDC
      iSerial                 3 __0X00124B001936AC60
      bNumConfigurations      1
      Configuration Descriptor:
    	bLength                 9
    	bDescriptorType         2
    	wTotalLength           67
    	bNumInterfaces          2
    	bConfigurationValue     1
    	iConfiguration          0
    	bmAttributes         0x80
    	  (Bus Powered)
    	MaxPower               50mA
    	Interface Descriptor:
    	  bLength                 9
    	  bDescriptorType         4
    	  bInterfaceNumber        0
    	  bAlternateSetting       0
    	  bNumEndpoints           1
    	  bInterfaceClass         2 Communications
    	  bInterfaceSubClass      2 Abstract (modem)
    	  bInterfaceProtocol      1 AT-commands (v.25ter)
    	  iInterface              0
    	  CDC Header:
    		bcdCDC               1.10
    	  CDC ACM:
    		bmCapabilities       0x02
    		  line coding and serial state
    	  CDC Union:
    		bMasterInterface        0
    		bSlaveInterface         1
    	  CDC Call Management:
    		bmCapabilities       0x00
    		bDataInterface          1
    	  Endpoint Descriptor:
    		bLength                 7
    		bDescriptorType         5
    		bEndpointAddress     0x82  EP 2 IN
    		bmAttributes            3
    		  Transfer Type            Interrupt
    		  Synch Type               None
    		  Usage Type               Data
    		wMaxPacketSize     0x0040  1x 64 bytes
    		bInterval              64
    	Interface Descriptor:
    	  bLength                 9
    	  bDescriptorType         4
    	  bInterfaceNumber        1
    	  bAlternateSetting       0
    	  bNumEndpoints           2
    	  bInterfaceClass        10 CDC Data
    	  bInterfaceSubClass      0 Unused
    	  bInterfaceProtocol      0
    	  iInterface              0
    	  Endpoint Descriptor:
    		bLength                 7
    		bDescriptorType         5
    		bEndpointAddress     0x84  EP 4 IN
    		bmAttributes            2
    		  Transfer Type            Bulk
    		  Synch Type               None
    		  Usage Type               Data
    		wMaxPacketSize     0x0040  1x 64 bytes
    		bInterval               0
    	  Endpoint Descriptor:
    		bLength                 7
    		bDescriptorType         5
    		bEndpointAddress     0x04  EP 4 OUT
    		bmAttributes            2
    		  Transfer Type            Bulk
    		  Synch Type               None
    		  Usage Type               Data
    		wMaxPacketSize     0x0040  1x 64 bytes
    		bInterval               0
    Device Status:     0x0000
      (Bus Powered)
    ```

2. UDEV Rules

    Create a new udev rule for serial adapter, `idVendor` and `idProduct` must be equal to values from `lsusb` command. The rule below creates device `/dev/zigbee-serial`:

    ```shell
    echo "SUBSYSTEM==\"tty\", ATTRS{idVendor}==\"0451\", ATTRS{idProduct}==\"16a8\", SYMLINK+=\"zigbee-serial\",  RUN+=\"/usr/local/bin/docker-setup-zigbee-serial.sh\"" | sudo tee /etc/udev/rules.d/99-zigbee-serial.rules
    ```

    Reload newly created rule using the following command:

    ```shell
    sudo udevadm control --reload-rules
    ```

3. Create docker-setup-zigbee-serial.sh

    ```shell
    sudo nano /usr/local/bin/docker-setup-zigbee-serial.sh
    ```

    Copy the following content:

    ```shell
    #!/bin/bash
    USBDEV=`readlink -f /dev/zigbee-serial`
    read minor major < <(stat -c '%T %t' $USBDEV)
    if [[ -z $minor || -z $major ]]; then
    	echo 'Device not found'
    	exit
    fi
    dminor=$((0x${minor}))
    dmajor=$((0x${major}))
    CID=`docker ps -a --no-trunc | grep koenkk/zigbee2mqtt | head -1 |  awk '{print $1}'`
    if [[ -z $CID ]]; then
    	echo 'CID not found'
    	exit
    fi
    echo 'Setting permissions'
    echo "c $dmajor:$dminor rwm" > /sys/fs/cgroup/devices/docker/$CID/devices.allow
    ```

    Set permissions:

    ```shell
    sudo chmod 744 /usr/local/bin/docker-setup-zigbee-serial.sh
    ```

4. Create docker-event-listener.sh

    ```shell
    sudo nano /usr/local/bin/docker-event-listener.sh
    ```

    Copy the following content:

    ```shell
    #!/bin/bash
    docker events --filter 'event=start'| \
    while read line; do
    	/usr/local/bin/docker-setup-zigbee-serial.sh
    done
    ```

    Set permissions:

    ```shell
    sudo chmod 744 /usr/local/bin/docker-event-listener.sh
    ```

5. Create docker-event-listener.service

    ```shell
    sudo nano /etc/systemd/system/docker-event-listener.service
    ```

    Copy the following content:

    ```shell
    [Unit]
    Description=Docker Event Listener for Zigbee serial adapter
    After=network.target
    StartLimitIntervalSec=0
    [Service]
    Type=simple
    Restart=always
    RestartSec=1
    User=root
    ExecStart=/bin/bash /usr/local/bin/docker-event-listener.sh

    [Install]
    WantedBy=multi-user.target
    ```

    Set permissions:

    ```shell
    sudo chmod 744 /etc/systemd/system/docker-event-listener.service
    ```

    Reload daemon

    ```shell
    sudo systemctl daemon-reload
    ```

    Start Docker event listener

    ```shell
    sudo systemctl start docker-event-listener.service
    ```

    Status Docker event listener

    ```shell
    sudo systemctl status docker-event-listener.service
    ```

    Enable Docker event listener

    ```shell
    sudo systemctl enable docker-event-listener.service
    ```

6. Verify and deploy Zigbee2MQTT stack

    Now reconnect the serial adapter. Verify using the following command:

    ```shell
    ls -al /dev/zigbee-serial
    ```

    ```shell
    lrwxrwxrwx 1 root root 7 Sep 28 21:14 /dev/zigbee-serial -> ttyACM0
    ```

    Below an example of a `docker-stack-zigbee2mqtt.yml`:

    ```yaml
    version: "3.7"
    services:
      zigbee2mqtt:
    	image: koenkk/zigbee2mqtt:latest-dev
    	environment:
    	  - TZ=Europe/Amsterdam
    	volumes:
    	  - /mnt/docker-cluster/zigbee2mqtt/data:/app/data
    	  - /dev/zigbee-serial:/dev/zigbee-serial
    	networks:
    	  - proxy_traefik-net
    	deploy:
    	  placement:
    		constraints: [node.hostname == rpi-3]
    	  replicas: 1

    networks:
      proxy_traefik-net:
    	external: true
    ```

    In the above example, `proxy_traefik-net` is the network to connect to the mqtt broker. The constraint makes sure Docker deploys only to this (`rpi-3`) node, where the serial adapter is connected to. The volume binding `/mnt/docker-cluster/zigbee2mqtt/data` is the zigbee2mqtt persistent directory, where `configuration.yaml` is saved.

    The Zigbee2MQTT `configuration.yaml` should point to `/dev/zigbee-serial`:

    ```yaml
    [...]
      port: /dev/zigbee-serial
    [...]
    ```

    Deploy the stack:

    ```shell
    docker stack deploy zigbee2mqtt --compose-file docker-stack-zigbee2mqtt.yml
    ```

## Troubleshooting

It could happen that even after the above the container is not starting correctly and bringing a "Operation not permitted" message in the log of the service for the device:

```
Error: Error while opening serialport 'Error: Error: Operation not permitted, cannot open /dev/zigbee-serial'
```

This is due to the usage of cgroupv2 instead of cgroupv1 which is not fully supported by docker/containerd.
To switch from cgroupv2 to cgroupv1 you have to add `systemd.unified_cgroup_hierarchy=false` to the grub cmdline.
E.g. on an Raspberry Pi 4 with Raspian Bullseye you can add it to the end of the line in the /boot/cmdline.txt file:

```
[...] rootfstype=ext4 fsck.repair=yes rootwait cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1 systemd.unified_cgroup_hierarchy=false
```
