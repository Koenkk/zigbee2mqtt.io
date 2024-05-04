---
sidebarDepth: 1
---

# Debug

In case Zigbee2MQTT isn't working as expected the following tips can help you in finding the problem.

## Enabling logging
To enable debug logging, add the following in your `configuration.yaml`

```yaml
advanced:
  log_level: debug
```

In the logging you will see the following abbreviations:
- `z2m`: Zigbee2MQTT
- `zh`: [zigbee-herdsman](https://github.com/koenkk/zigbee-herdsman), logged events from the Zigbee library used by Zigbee2MQTT.
- `zhc`: [zigbee-herdsman-converters](https://github.com/koenkk/zigbee-herdsman-converters), logged events from the devices support library.

## Change log level during runtime
See [MQTT topics and message structure](./mqtt_topics_and_messages.md)

## Publishing to MQTT and to frontend

In an effort to improve performance, `debug`-level logs are no longer published to MQTT and to frontend by default. If you want them published, you can use the following setting:

```yaml
advanced:
  log_debug_to_mqtt_frontend: true
```

## Preventing specific namespaces from being logged

A regex-based way to filter out certain `debug` lines based on their namespaces.

Examples:

Filter out log namespaces starting with:

- `zhc:legacy:fz:tuya`
- or `zhc:legacy:fz:moes`

```yaml
advanced:
  log_debug_namespace_ignore: '^zhc:legacy:fz:(tuya|moes)'
```

Filter out log namespaces starting with:

- `zhc:legacy:fz:tuya`
- or `zhc:legacy:fz:moes`
- or `zh:ember:uart:` (any namespace below `uart`)
- or `zh:controller` (any namespace below `controller` and `controller` itself)

```yaml
advanced:
  log_debug_namespace_ignore: '^zhc:legacy:fz:(tuya|moes)|^zh:ember:uart:|^zh:controller'
```

See [https://regex101.com/](https://regex101.com/) if you need some help building a regex. Make sure to use Flavor: `ECMAScript (JavaScript)`.
