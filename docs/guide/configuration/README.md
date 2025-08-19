---
next: adapter-settings.md
---

# Configuration

::: warning ATTENTION
Never rely solely on configurations produced by LLMs like ChatGPT! Always verify the generated configurations against the relevant documentation. Not doing so can potentially break your setup.
:::

Zigbee2MQTT is configured using [YAML](https://en.wikipedia.org/wiki/YAML) based `configuration.yaml` file.
The file have to be located in the `data` directory within your installation. The `data` directory and the `configuration.yaml` has to be writeable for Zigbee2MQTT process because it can get updated - e.g. if you change the settings in the frontend. It's possible specify a custom data directory by setting the `ZIGBEE2MQTT_DATA` environment variable.

::: tip CONVENTION
The _dot-notation_ of a config-key like `mqtt.server` means `server` property within the `mqtt`
section. All _dot-notation_ references are absolute.
:::

## Generate minimal configuration

<Configurator />

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

Configuration options can be changed at runtime by publishing the appropriate MQTT payload with the topic `zigbee2mqtt/bridge/request/options`.
See [MQTT Topics and Messages](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request) for details.

::: tip NOTE
Some options will require a restart before being effective.
:::
