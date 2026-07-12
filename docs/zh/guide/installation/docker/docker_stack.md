# Docker Stack 设备映射

_此内容仅在使用 Docker Stack 时有意义_

以 swarm 模式部署 stack 时，Docker stack 不支持使用 `--devices` 选项进行设备映射。对此有两种解决方案，两者都是先将设备绑定为卷（volume）。

## cgroup v1 和 v2 的自动设备映射

在 Docker Stack 上启用设备最简单的方案是使用 [allfro 的 device-mapping-manager docker 镜像](https://github.com/allfro/device-mapping-manager)。这个容器内置了一个小程序，它会读取宿主机上自身的所有卷挂载，识别出设备，然后修改宿主机上的权限以允许容器使用这些设备。与其他方案不同，它对两个版本的 cgroups 都适用。

这个容器必须直接部署到 docker，而不是通过 stack 部署。可以通过创建一个带有特权（privileged）服务的 stack 来变通实现，该服务作为代理来启动实际的设备映射容器。

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
            # Uncomment the line below if Docker version > 29.0.0
            # -e DOCKER_API_VERSION=1.44
            ghcr.io/allfro/allfro/device-mapping-manager:latest
        volumes:
            - /var/run/docker.sock:/var/run/docker.sock
        deploy:
            mode: global
```

## 手动配置 cgroup v1

一种变通方法是手动设置正确的权限。此方案基于 [为 "service create" 添加设备支持](https://github.com/docker/swarmkit/issues/1244#issuecomment-285935430) 中的方案，所有功劳归于该方案作者。

此变通方法仅适用于 cgroup v1，而许多较新的发行版并未启用 cgroup v1。

1. 识别串口适配器
   使用以下命令识别串口适配器：

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

2. UDEV 规则

    为串口适配器创建一条新的 udev 规则，`idVendor` 和 `idProduct` 必须与 `lsusb` 命令得到的值一致。下面的规则会创建设备 `/dev/zigbee-serial`：

    ```shell
    echo "SUBSYSTEM==\"tty\", ATTRS{idVendor}==\"0451\", ATTRS{idProduct}==\"16a8\", SYMLINK+=\"zigbee-serial\",  RUN+=\"/usr/local/bin/docker-setup-zigbee-serial.sh\"" | sudo tee /etc/udev/rules.d/99-zigbee-serial.rules
    ```

    使用以下命令重新加载新创建的规则：

    ```shell
    sudo udevadm control --reload-rules
    ```

3. 创建 docker-setup-zigbee-serial.sh

    ```shell
    sudo nano /usr/local/bin/docker-setup-zigbee-serial.sh
    ```

    复制以下内容：

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

    设置权限：

    ```shell
    sudo chmod 744 /usr/local/bin/docker-setup-zigbee-serial.sh
    ```

4. 创建 docker-event-listener.sh

    ```shell
    sudo nano /usr/local/bin/docker-event-listener.sh
    ```

    复制以下内容：

    ```shell
    #!/bin/bash
    docker events --filter 'event=start'| \
    while read line; do
    	/usr/local/bin/docker-setup-zigbee-serial.sh
    done
    ```

    设置权限：

    ```shell
    sudo chmod 744 /usr/local/bin/docker-event-listener.sh
    ```

5. 创建 docker-event-listener.service

    ```shell
    sudo nano /etc/systemd/system/docker-event-listener.service
    ```

    复制以下内容：

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

    设置权限：

    ```shell
    sudo chmod 744 /etc/systemd/system/docker-event-listener.service
    ```

    重新加载 daemon

    ```shell
    sudo systemctl daemon-reload
    ```

    启动 Docker 事件监听器

    ```shell
    sudo systemctl start docker-event-listener.service
    ```

    查看 Docker 事件监听器状态

    ```shell
    sudo systemctl status docker-event-listener.service
    ```

    启用 Docker 事件监听器

    ```shell
    sudo systemctl enable docker-event-listener.service
    ```

6. 验证并部署 Zigbee2MQTT stack

    现在重新连接串口适配器。使用以下命令验证：

    ```shell
    ls -al /dev/zigbee-serial
    ```

    ```shell
    lrwxrwxrwx 1 root root 7 Sep 28 21:14 /dev/zigbee-serial -> ttyACM0
    ```

    下面是一个 `docker-stack-zigbee2mqtt.yml` 的示例：

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

    在上面的示例中，`proxy_traefik-net` 是用于连接 mqtt broker 的网络。该约束（constraint）确保 Docker 只会将其部署到串口适配器所连接的这个节点（`rpi-3`）上。卷绑定 `/mnt/docker-cluster/zigbee2mqtt/data` 是 zigbee2mqtt 的持久化目录，`configuration.yaml` 就保存在其中。

    Zigbee2MQTT 的 `configuration.yaml` 应指向 `/dev/zigbee-serial`：

    ```yaml
    [...]
      port: /dev/zigbee-serial
    [...]
    ```

    部署该 stack：

    ```shell
    docker stack deploy zigbee2mqtt --compose-file docker-stack-zigbee2mqtt.yml
    ```

## 故障排除

有可能即使按上述步骤操作后，容器仍无法正常启动，并在该设备对应服务的日志中出现 "Operation not permitted" 的提示：

```
Error: Error while opening serialport 'Error: Error: Operation not permitted, cannot open /dev/zigbee-serial'
```

这是由于使用了 cgroupv2 而非 cgroupv1，而 docker/containerd 尚未完全支持 cgroupv2。
要从 cgroupv2 切换到 cgroupv1，需要在 grub 的 cmdline 中添加 `systemd.unified_cgroup_hierarchy=false`。
例如，在运行 Raspian Bullseye 的 Raspberry Pi 4 上，可以将其添加到 /boot/cmdline.txt 文件中该行的末尾：

```
[...] rootfstype=ext4 fsck.repair=yes rootwait cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1 systemd.unified_cgroup_hierarchy=false
```
