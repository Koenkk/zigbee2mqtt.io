---
---

# Configuration

Zigbee2MQTT is configured using [YAML](https://en.wikipedia.org/wiki/YAML) based `configuration.yml` file.
The file have to be located in the `data` directory within your install-dir. The `data` directory and the `configuration.yml` has to be writeable for Zigbee2MQTT process.

To specify a different data directory, set the `ZIGBEE2MQTT_DATA` environment variable. The value
of `ZIGBEE2MQTT_DATA` should be a path to a directory e.g. `/tmp/z2m_data`, this directory should at least contain
a `configuration.yaml`.

```yaml
# Minimal config example
permit_join: true
mqtt:
  base_topic: zigbee2mqtt
serial:
  port: /dev/ttyUSB0
frontend:
  port: 8080
```

::: tip CONVENTION The _dot-notation_ of a config-key like `mqtt.server` means `server` property within the `mqtt`
section. All _dot-notation_ references are absolute.
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
