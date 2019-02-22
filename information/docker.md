# Docker
It is possible to run Zigbee2mqtt in a Docker container using the official [Zigbee2mqtt Docker image](https://hub.docker.com/r/koenkk/zigbee2mqtt/).

First run the container, this will create the configuration directory. Change `configuration.yaml` according to your situation and start again.

### Parameters
* `-v $(pwd)/data:/app/data`: Directory where Zigbee2mqtt stores it configuration
* `--device=/dev/ttyACM0`: Location of CC2531 USB sniffer

## Supported architectures
### amd64
```bash
docker run \
   -it \
   -v $(pwd)/data:/app/data \
   --device=/dev/ttyACM0 \
   koenkk/zigbee2mqtt
```

### arm32v6 (E.G. Raspberry Pi)
```bash
docker run \
   -it \
   -v $(pwd)/data:/app/data \
   --device=/dev/ttyACM0 \
   koenkk/zigbee2mqtt:arm32v6
```

### arm64v8
```bash
docker run \
   -it \
   -v $(pwd)/data:/app/data \
   --device=/dev/ttyACM0 \
   koenkk/zigbee2mqtt:arm64v8
```

## Updating
To update to the latest Docker image:
```bash
docker rm -f [ZIGBEE2MQTT_CONTAINER_NAME]
docker rmi -f [ZIGBEE2MQTT_IMAGE_NAME] # e.g. koenkk/zigbee2mqtt:arm32v6
# Now run the container again, Docker will automatically pull the latest image.
```

## Tags
The following tags are available:
- Latest release version: `latest`, `arm32v6`, `arm64v8`
- Latest dev version (based on [`dev`](https://github.com/Koenkk/zigbee2mqtt/tree/dev) branch): `latest-dev`, `arm32v6-dev`, `arm64v8-dev`
- Locked to a specific release version: `X.X.X` (e.g. `0.2.0`), `X.X.X-arm32v6` (e.g. `0.2.0-arm32v6`), `X.X.X-arm64v8` (e.g. `0.2.0-arm64v8`)

## Support new devices
To add support for new devices, you'll need to git clone zigbee-shepherd-converters to ```$(pwd)/data/zigbee-shepherd-converters``` first:

```bash
git clone https://github.com/Koenkk/zigbee-shepherd-converters.git $(pwd)/data/zigbee-shepherd-converters
```

If you're integrating zigbee2mqtt with HomeAssistant, you'll also need to copy homeassistant.js (https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/extension/homeassistant.js) to ```$(pwd)/data/lib/extension/homeassistant.js```.

Then run the docker command like this:

```bash
docker run \
   -it \
   -v $(pwd)/data:/app/data \
   -v $(pwd)/data/zigbee-shepherd-converters:/app/node_modules/zigbee-shepherd-converters
   -v $(pwd)/data/lib/extension/homeassistant.js:/app/node_modules/lib/extension/homeassistant.js
   --device=/dev/ttyACM0 \
   koenkk/zigbee2mqtt
```

After that follow the [guide](https://www.zigbee2mqtt.io/how_tos/how_to_support_new_devices.html) to add support for new devices.
