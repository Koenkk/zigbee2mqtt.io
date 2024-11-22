---
next: ../configuration/
---

# Docker

It is possible to run Zigbee2MQTT in a Docker container using the official [Zigbee2MQTT Docker image](https://hub.docker.com/r/koenkk/zigbee2mqtt/).

This image support the following architectures: `386`, `amd64`, `arm/v6`, `arm/v7`, `arm64`.
Since Zigbee2MQTT images are manifest listed, Docker will auto-detect the architecture and pull the right image.

Start by figuring out the location of your adapter as explained [here](./01_linux.md#determine-location-of-the-adapter-and-checking-user-permissions).

**IMPORTANT**: Using a Raspberry Pi? Make sure to check [Notes for Raspberry Pi users](#notes-for-raspberry-pi-users).

## Creating the initial configuration

Navigate to the directory where you will store the Zigbee2MQTT data and execute the following command:

```bash
wget https://raw.githubusercontent.com/Koenkk/zigbee2mqtt/master/data/configuration.yaml -P data
```

Now configure the MQTT server and adapter location as explained [here](./01_linux.md#configuring).

## Running the container

Execute the following command, update the `--device` parameter to match the location of your adapter.

```bash
$ docker run \
   --name zigbee2mqtt \
   --restart=unless-stopped \
   --device=/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0 \
   -p 8080:8080 \
   -v $(pwd)/data:/app/data \
   -v /run/udev:/run/udev:ro \
   -e TZ=Europe/Amsterdam \
   koenkk/zigbee2mqtt
```

**Parameters explanation:**

-   `--name zigbee2mqtt`: Name of container
-   `--restart=unless-stopped`: Automatically start on boot and restart after a crash
-   `--device=/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0`: Location of adapter (e.g. CC2531). The path before the `:` is the path on the host, the path after it is the path that is mapped to inside the container. You should always use the `/dev/serial/by-id/` path on the host.
-   `-v $(pwd)/data:/app/data`: Directory where Zigbee2MQTT stores it configuration (pwd maps to the current working directory)
-   `-v /run/udev:/run/udev:ro`: only required for auto-detecting the port and some adapters like ConBee
-   `-e TZ=Europe/Amsterdam`: Configure the timezone
-   `-p 8080:8080`: port forwarding from inside Docker container to host (for the frontend)

::: tip
If you run the MQTT-Server on the same host (localhost) you could use the IP
of the `docker0` bridge to establish the connection: `server: mqtt://172.17.0.1`.
:::

### Rootless container

To improve the security of the deployment you may want to run Zigbee2MQTT as a _non-root_ user.

1. Identify the group that has access to the adapter (in Ubuntu, e.g. it might be assigned to `dialout`). Update `ttyACM0` to match your adapter location.

```
$ ls -l /dev/ttyACM0
crw-rw---- 1 root dialout 166, 0 Nov 5 16:31 /dev/ttyACM0
```

2. If you want to run Zigbee2MQTT using your current user find the `uid` (UserID) and `gid` (GroupID):

```
$ id
uid=1001(pi) gid=1001(pi) Groups=...
```

3. Start the docker container after updating `device`, `user` (uid:gid) and `group-add`:

```
$ sudo docker run \
   --name=zigbee2mqtt \
   --restart=unless-stopped \
   -p 8080:8080 \
   -v $(pwd)/data:/app/data \
   -v /run/udev:/run/udev:ro \
   --device=/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0 \
   --user 1001:1001 \
   --group-add dialout \
   -e TZ=Europe/Amsterdam \
   koenkk/zigbee2mqtt
```

3.1

**Parameters explanation:**

-   `--user 1001:1001`: Run the Zigbee2MQTT process within the container using the provided UserID and GroupID
-   `--group-add dialout`: Assign the `dialout` group to the user to be able to access the device

### Rootless with Podman (>3.2)

```
$ podman run \
   --name=zigbee2mqtt \
   --restart=unless-stopped \
   -p 8080:8080 \
   -v $(pwd)/data:/app/data \
   -v /run/udev:/run/udev:ro \
   --device=/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0 \
   --group-add keep-groups \
   -e TZ=Europe/Amsterdam \
   koenkk/zigbee2mqtt
```

## Updating

To update to the latest Docker image:

```bash
docker pull koenkk/zigbee2mqtt:latest
docker rm -f zigbee2mqtt
# Now run the container again with the instructions above
```

## Tags

The following tags are available:

-   Latest release version: `latest`
-   Latest dev version (based on [`dev`](https://github.com/Koenkk/zigbee2mqtt/tree/dev) branch): `latest-dev`
-   Specific release version, e.g: `1.7.0`

## Docker Compose

Example of a Docker Compose file:

```yaml
version: '3.8'
services:
    zigbee2mqtt:
        container_name: zigbee2mqtt
        image: koenkk/zigbee2mqtt
        restart: unless-stopped
        volumes:
            - ./data:/app/data
            - /run/udev:/run/udev:ro
        ports:
            # Frontend port
            - 8080:8080
        environment:
            - TZ=Europe/Berlin
        devices:
            # Make sure this matched your adapter location
            - /dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0
```

You can also run a rootless container with Docker Compose by adding the required attributes to the `zigbee2mqtt` service block in your `docker-compose.yml`:

```yaml
group_add:
    - dialout
user: 1000:1000
```

### Starting the container

To start the Docker container:

```bash
docker compose up -d zigbee2mqtt
```

You can optionally skip `zigbee2mqtt` and it will start all containers listed in the compose file.

### Updating

To update to the latest Docker image:

```bash
docker compose pull zigbee2mqtt
docker compose up -d zigbee2mqtt
```

You can optionally skip `zigbee2mqtt` and it will pull any new images for all containers in the compose file, and then restart those that were updated.

## Notes for Raspberry Pi users

-   If you are running Raspbian Buster (not Bullseye nor Bookworm!) (find out by executing `grep "PRETTY_NAME" /etc/os-release`) you need to install `libseccomp2`, this can be done by executing the following commands:

```bash
sudo apt-key adv --keyserver hkps://keyserver.ubuntu.com:443 --recv-keys 04EE7237B7D453EC 648ACFD622F3D138
echo "deb http://httpredir.debian.org/debian buster-backports main contrib non-free" | sudo tee -a "/etc/apt/sources.list.d/debian-backports.list"
sudo apt update
sudo apt install libseccomp2 -t buster-backports
```

If you do not do this you will get the following error when starting the Zigbee2MQTT container:

```bash
#
# Fatal error in , line 0
# unreachable code
#
#
#
#FailureMessage Object: 0x7eace25c
```

-   For Raspberry Pi 1 and zero users: there is a bug in Docker which selects the wrong image architecture.
    Before executing `docker run` pull the correct image with `docker pull koenkk/zigbee2mqtt --platform linux/arm/v6`.

## Docker Stack device mapping

_This is only relevant when using Docker Stack_

Docker stack doesn't support device mappings with option `--devices` when deploying a stack in swarm mode. There are two solutions to this. Both of these solutions start with binding the devices as volumes.

### Automatic device mapping for cgroup v1 and v2

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

### Manual cgroup v1

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

### Troubleshooting

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

## Docker on Synology DSM 7.0

> **_NOTE:_** This may not work with all Zigbee controllers, but has been tested with the CC2531.

As of Disk Station Manager version 7, Synology removed the built-in support for USB-devices like a Zigbee controller.
The USB support can be installed to the Linux kernel by issuing the following commands as _root_.

```
modprobe usbserial
modprobe ftdi_sio
modprobe cdc-acm
```

After issuing the commands, the Zigbee controller may need to be unplugged and re-inserted to the USB port.

You may also need additional drivers based on your USB Zigbee controller setup, e.g. CH341 module is not included by default. You can download precompiled modules from jadahl.com pages - select module directory based on NAS CPU architecture (DS218+ -> INTEL Celeron J3355 -> Apollo Lake).

```
cd /lib/modules
wget http://www.jadahl.com/iperf-arp-scan/DSM_7.0/apollolake/ch341.ko
insmod /lib/modules/ch341.ko
```

It is possible to create a start-up task that issues the above commands:

1. Create an executable script file that contains the three modprobe commands.
1. Using DSM's _Control Panel_ -> _Task Scheduler_ -> _Create_ -> _Triggered Task_ -> _User-defined script_ with the settings: **User:** root, **Event:** Boot-up, and a `bash` command executing the executable file under _Task Settings_.
