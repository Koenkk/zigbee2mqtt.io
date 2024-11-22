---
next: adapter-settings.md
---

# Configuration

Zigbee2MQTT is configured using [YAML](https://en.wikipedia.org/wiki/YAML) based `configuration.yaml` file.
The file have to be located in the `data` directory within your installation. The `data` directory and the `configuration.yaml` has to be writeable for Zigbee2MQTT process because it can get updated - e.g. if you change the settings in the frontend. It's possible specify a custom data directory by setting the `ZIGBEE2MQTT_DATA` environment variable.

```yaml
# Minimal configuration.yml example
permit_join: true
mqtt:
    server: mqtt://localhost:1883
serial:
    # Could be either USB port (/dev/ttyUSB0), network Zigbee adapters (tcp://192.168.1.1:6638) or mDNS adapter (mdns://my-adapter).
    port: /dev/ttyUSB0
# Will run frontend on port 8080
frontend: true
```

::: tip CONVENTION
The _dot-notation_ of a config-key like `mqtt.server` means `server` property within the `mqtt`
section. All _dot-notation_ references are absolute.
:::

::: warning ATTENTION
Be aware of the implications using `permit_join: true` and read the details in the [Permit join](zigbee-network.md#permit-join) documentation.
:::

## Environment variables

It is possible to override the values in `configuration.yaml` via environment variables. The name of the environment
variable should start with `ZIGBEE2MQTT_CONFIG_` followed by the path to the property you want to set in uppercase split
by a `_`.

In case you want to for example override:

```yaml
mqtt:
    base_topic: zigbee2mqtt
```

set `ZIGBEE2MQTT_CONFIG_MQTT_BASE_TOPIC` to the desired value.

## Config changes at runtime

Some configuration options can be changed at runtime by issuing a MQTT-publish at the topic `zigbee2mqtt/bridge/request/options`.
See [MQTT Topics and Messages](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request) for details.
