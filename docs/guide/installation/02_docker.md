---
next: ../configuration/
---

# Docker

It is possible to run Zigbee2MQTT in a Docker container using the official [Zigbee2MQTT Docker image](https://github.com/Koenkk/zigbee2mqtt/pkgs/container/zigbee2mqtt).

This image support the following architectures: `linux/386`, `linux/amd64`, `linux/arm/v6`, `linux/arm/v7`, `linux/arm64` and `linux/riscv64`.

The following tags are available:

- Latest release version: `latest`
- Latest dev version (based on [`dev`](https://github.com/Koenkk/zigbee2mqtt/tree/dev) branch): `latest-dev`
- Specific release version, e.g: `2.0.0`, `2.0`, `2`

::: warning
For Raspberry Pi 1 and zero users: there is a bug in Docker which selects the wrong image architecture.
Before running the container pull the correct image with `docker pull ghcr.io/koenkk/zigbee2mqtt --platform linux/arm/v6`.
:::

## Running the container

Start by figuring out the location of your adapter as explained [here](../configuration/adapter-settings.md#determine-location-of-the-adapter).

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
   ghcr.io/koenkk/zigbee2mqtt
```

**Parameters explanation:**

- `--name zigbee2mqtt`: Name of container
- `--restart=unless-stopped`: Automatically start on boot and restart after a crash
- `--device=/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00:/dev/ttyACM0`: Location of adapter. The path before the `:` is the path on the host, the path after it is the path that is mapped to inside the container. You should always use the `/dev/serial/by-id/` path on the host.
- `-v $(pwd)/data:/app/data`: Directory where Zigbee2MQTT stores it configuration (pwd maps to the current working directory)
- `-v /run/udev:/run/udev:ro`: required for auto-detecting the adapter
- `-e TZ=Europe/Amsterdam`: configure the timezone
- `-p 8080:8080`: port forwarding from inside Docker container to host (for the frontend)

::: tip
If you run the MQTT-Server on the same host (localhost) you could use the IP
of the `docker0` bridge to establish the connection: `server: mqtt://172.17.0.1`.
:::

On first start, Zigbee2MQTT will start the onboarding on port 8080.
Navigate to this board and configure accordingly.
More information about [onboarding](../getting-started/README.md#onboarding).

Once the onboarding is completed Zigbee2MQTT will start.

::: details (Alternative) Rootless container with Docker

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
   ghcr.io/koenkk/zigbee2mqtt
```

**Parameters explanation:**

- `--user 1001:1001`: Run the Zigbee2MQTT process within the container using the provided UserID and GroupID
- `--group-add dialout`: Assign the `dialout` group to the user to be able to access the device

:::

::: details (Alternative) Rootless with Podman (>3.2)

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
With SELinux enabled you may need to append a `:z` suffix to the volume mount: `-v $(pwd)/data:/app/data:z`
:::

### Updating

To update to the latest Docker image:

```bash
docker pull ghcr.io/koenkk/zigbee2mqtt:latest
docker rm -f zigbee2mqtt
# Now run the container again with the instructions above
```

## Docker Compose

Example of a Docker Compose file:

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

## Additional links

- [Docker Stack device mapping](./docker//docker_stack.md)
- [Docker on Synology DSM 7.0](./docker//docker_synology.md)
