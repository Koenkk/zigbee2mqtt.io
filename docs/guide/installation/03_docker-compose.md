---
next: ../configuration/
---

# Docker-Compose

See the [Docker](./02_docker.md) instructions for supported architectures. 

```yaml
version: '3'
services:
  zigbee2mqtt:
    container_name: zigbee2mqtt
    image: koenkk/zigbee2mqtt:latest
    restart: unless-stopped
    volumes:
      - ./_data:/app/data
      - /run/udev:/run/udev:ro
    ports:
      # WebUI port
      - 8087:8080
    environment:
      - TZ=Europe/Berlin
    group_add:
      # Let Zigbee2MQTT access the device
      - dialout
    devices:
      # Map the device into the container
      - /dev/ttyUSB0:/dev/ttyACM0
```
