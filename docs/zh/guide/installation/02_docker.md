---
next: 14_securing.md
redirectFrom: /information/docker.md
---

# Docker

可以使用官方的 [Zigbee2MQTT Docker 镜像](https://github.com/Koenkk/zigbee2mqtt/pkgs/container/zigbee2mqtt) 在 Docker 容器中运行 Zigbee2MQTT。

该镜像支持以下架构：`linux/386`、`linux/amd64`、`linux/arm/v6`、`linux/arm/v7`、`linux/arm64` 和 `linux/riscv64`。

可用的标签如下：

- 最新发行版本：`latest`
- 最新开发版本（基于 [`dev`](https://github.com/Koenkk/zigbee2mqtt/tree/dev) 分支）：`latest-dev`
- 特定发行版本，例如：`2.0.0`、`2.0`、`2`

::: warning
对于 Raspberry Pi 1 和 Zero 用户：Docker 存在一个会选错镜像架构的 bug。
在运行容器之前，请使用 `docker pull ghcr.io/koenkk/zigbee2mqtt --platform linux/arm/v6` 拉取正确的镜像。
:::

## 运行容器

首先按照[这里](../configuration/adapter-settings.md#determine-location-of-the-adapter)的说明确定你的适配器（adapter）位置。

执行以下命令，并更新 `--device` 参数以匹配你的适配器位置。

```bash
$ docker run \
   --name zigbee2mqtt \
   --restart=unless-stopped \
   --device=/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0 \
   -p 8080:8080 \
   -v $(pwd)/data:/app/data \
   -v /run/udev:/run/udev:ro \
   -e TZ=Europe/Amsterdam \
   ghcr.io/koenkk/zigbee2mqtt
```

**参数说明：**

- `--name zigbee2mqtt`：容器名称
- `--restart=unless-stopped`：开机自动启动，并在崩溃后自动重启
- `--device=/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0`：适配器的位置。`:` 前面的路径是宿主机上的路径，后面的路径是映射到容器内部的路径。宿主机路径应始终使用 `/dev/serial/by-id/` 路径。
- `-v $(pwd)/data:/app/data`：Zigbee2MQTT 存储配置的目录（pwd 对应当前工作目录）
- `-v /run/udev:/run/udev:ro`：自动检测适配器所需
- `-e TZ=Europe/Amsterdam`：配置时区
- `-p 8080:8080`：从 Docker 容器内部到宿主机的端口转发（用于前端界面（frontend））

::: tip
如果你在同一台主机（localhost）上运行 MQTT 服务器，可以使用 `docker0` 网桥的 IP 来建立连接：`server: mqtt://172.17.0.1`。
:::

首次启动时，Zigbee2MQTT 会在 8080 端口启动引导设置（onboarding）。
请访问该端口并进行相应配置。
关于[引导设置](../getting-started/README.md#引导设置)的更多信息。

引导设置完成后，Zigbee2MQTT 将会启动。

::: details （备选方案）使用 Docker 以非 root 用户运行容器

为了提高部署的安全性，你可能希望以 _非 root_ 用户身份运行 Zigbee2MQTT。

1. 确定有权访问该适配器的用户组（例如在 Ubuntu 中，它可能被分配给 `dialout` 组）。请将 `ttyACM0` 改为你的适配器实际位置。

```
$ ls -l /dev/ttyACM0
crw-rw---- 1 root dialout 166, 0 Nov 5 16:31 /dev/ttyACM0
```

2. 如果你想使用当前用户运行 Zigbee2MQTT，请找到 `uid`（用户 ID）和 `gid`（组 ID）：

```
$ id
uid=1001(pi) gid=1001(pi) Groups=...
```

3. 更新 `device`、`user`（uid:gid）和 `group-add` 后启动 docker 容器：

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
   ghcr.io/koenkk/zigbee2mqtt
```

**参数说明：**

- `--user 1001:1001`：使用给定的用户 ID 和组 ID 在容器内运行 Zigbee2MQTT 进程
- `--group-add dialout`：为该用户分配 `dialout` 组，以便能够访问设备

:::

::: details （备选方案）使用 Podman（>3.2）以无 root 方式运行

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
   ghcr.io/koenkk/zigbee2mqtt
```

::: tip
启用 SELinux 后，你可能需要在卷挂载后追加 `:z` 后缀：`-v $(pwd)/data:/app/data:z`
:::

### 更新

更新到最新的 Docker 镜像：

```bash
docker pull ghcr.io/koenkk/zigbee2mqtt:latest
docker rm -f zigbee2mqtt
# Now run the container again with the instructions above
```

## Docker Compose

Docker Compose 文件示例：

```yaml
services:
    zigbee2mqtt:
        container_name: zigbee2mqtt
        image: ghcr.io/koenkk/zigbee2mqtt
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

你也可以通过在 `docker-compose.yml` 中的 `zigbee2mqtt` 服务块内添加所需属性，使用 Docker Compose 运行无 root 容器：

```yaml
group_add:
    - dialout
user: 1000:1000
```

### 启动容器

启动 Docker 容器：

```bash
docker compose up -d zigbee2mqtt
```

你也可以省略 `zigbee2mqtt`，这样会启动 compose 文件中列出的所有容器。

### 更新

更新到最新的 Docker 镜像：

```bash
docker compose pull zigbee2mqtt
docker compose up -d zigbee2mqtt
```

你也可以省略 `zigbee2mqtt`，这样会拉取 compose 文件中所有容器的新镜像，并重启已更新的容器。

## 相关链接

- [Docker Stack 设备映射](./docker//docker_stack.md)
- [在 Synology DSM 7.0 上使用 Docker](./docker//docker_synology.md)
