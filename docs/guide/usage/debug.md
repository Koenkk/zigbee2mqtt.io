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
