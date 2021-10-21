---
sidebarDepth: 1
next: ../usage/
---

# Quickstart

## Prerequisites

In order to use Zigbee2MQTT we need the following hardware:

1. **A Zigbee Adapter** which is the interface between the Computer (or Server) where you run Zigbee2MQTT and the Zigbee radio
communication. Zigbee2MQTT supports a variety of adapters with different kind of connections like USB, GPIO or remote via WIFI or Ethernet.  
  Recommended adapters the ones with a CC2652R, CC2652P, CC2652RB or CC1352P chip. See [Supported Adapters](../adapters/README.md).  
  ![ZZH](../../images/zzh.jpg)


2. **A Server** where you would run Zigbee2MQTT. Most Raspberry-Pi models are known to work but you can run it nearly anywhere.  
  ![Raspberry Pi](../../images/pi.jpg)


3. One or more **Zigbee Devices** we will pair with Zigbee2MQTT.  
   ![Zigbee devices](../../images/xiaomi_sensors.jpg)


## Installation

You can run Zigbee2MQTT in different ways, see [Installation](../installation/).

### Find the Zigbee-Adapter

After you plug the adapter see the `dmesg` output to find the mapped device:

```bash
sudo dmesg

...
usbcore: registered new interface driver ch341
usbserial: USB Serial support registered for ch341-uart
ch341 3-1:1.0: ch341-uart converter detected
usb 3-1: ch341-uart converter now attached to ttyUSB0
```

As we can see our adapter was bound to `ttyUSB`.

```bash
$ ls -l /dev/ttyUSB0
crw-rw---- 1 root dialout 188, May 16 19:15 /dev/ttyUSB0
```

### Docker-Compose

Let's use [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) to setup Zigbee2MQTT here.

We can use this `docker-compose.yml` example to setup a Zigbe2MQTT stack including Mosquitto (a MQTT-Server).

```yaml
version: '3.5'
services:
  mqtt:
    image: eclipse-mosquitto:2.0
    restart: unless-stopped
    volumes:
      - "./mosquitto-data:/mosquitto"
    ports:
      - "1883:1883"
      - "9001:9001"
    command: "mosquitto -c /mosquitto-no-auth.conf"

  zigbee2mqtt:
    container_name: zigbee2mqtt
    restart: unless-stopped
    image: koenkk/zigbee2mqtt
    volumes:
      - ./zigbee2mqtt-data:/app/data
    ports:
      - 8080:8080
    environment:
      - TZ=Europe/Berlin
    group_add:
      - dialout
    devices:
      - /dev/ttyUSB0:/dev/ttyUSB0
```

```bash
# First, start the MQTT-Server
docker-compose up -d mqtt
```

```bash 
# Second, start Zigbee2MQTT to let it generate the config-files
docker-compose up zigbee2mqtt
```

It likely will fail cause of wrong configuration but is has generated `zigbee2mqtt-data/configuration.yaml` for us.
In our example the device is `ttyUSB0` so let's adopt it in the config:

```yaml
# Home Assistant integration (MQTT discovery)
homeassistant: false

# allow new devices to join
permit_join: true

# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://mqtt'

# Serial settings
serial:
  # Location of Zigbee Adapter
  port: /dev/ttyUSB0

# Enable frontend on port 8080
frontend:
  port: 8080
```

Also see that the `mqtt.server` was set to `mqtt`. The docker networking makes the server available using this hostname.



## Connect a device

### Allowing devices to join

Before you start, make sure that `permit_join: true` is set in your `_data/configuration.yaml`. Otherwise new devices cannot
join the network!

It's equally important that `permit_join: false` is set in your `configuration.yaml` after initial setup is done to keep
your Zigbee network safe and to avoid accidental joining of other Zigbee devices.

### Pairing

First check if the device page ([Supported devices](../../supported-devices/), click on the model number) contains
instructions on how to pair your device.

If no instructions are available, the device can probably be paired by factory resetting it.

Once you see something similar to below in the log your device is paired.

```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
```
