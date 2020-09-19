---
---
# Debug

In case Zigbee2MQTT isn't working as expected the following tips can help you in finding the problem.

## Enabling logging

### Zigbee2MQTT debug logging
To enable debug logging for Zigbee2MQTT add the following in your `configuration.yaml`

```yaml
advanced:
  log_level: debug
```

### Zigbee-herdsman debug logging
To enable debug logging for Zigbee-herdman start Zigbee2MQTT with: `DEBUG=zigbee-herdsman* npm start`. Zigbee-herdsman is the Zigbee library where Zigbee2MQTT is based up-on

### Docker
To enable debug logging in the Zigbee2MQTT Docker container add `-e DEBUG=zigbee-herdsman*` to your `docker run` command.

### Hass.io addon
Set `"zigbee_herdsman_debug": true` in the configuration.

## Change log level during runtime
See [MQTT topics and message structure](../information/mqtt_topics_and_message_structure.md)