---
sidebarDepth: 1
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
To enable debug logging for Zigbee-herdman start Zigbee2MQTT with: `DEBUG=zigbee-herdsman* npm start`. Zigbee-herdsman is the Zigbee library where Zigbee2MQTT is based up-on.

**Important:** this is **not** logged to the log files and is only available on the STDOUT/STDERR.

To enable debug logging in the Zigbee2MQTT Docker container add `-e DEBUG=zigbee-herdsman*` to your `docker run` command. The logging can be retrieved via `docker logs ZIGBEE2MQTT_CONTAINER_NAME > log.txt 2>&1`.

### Home Assistant OS/Supervised addon
- Go to `Supervisor` in the main menu and click on the `Zigbee2MQTT` addon or follow this deep [link](https://my.home-assistant.io/redirect/supervisor_addon/?addon=45df7312_zigbee2mqtt&repository_url=https%3A%2F%2Fgithub.com%2Fzigbee2mqtt%2Fhassio-zigbee2mqtt) 
- In the top tabs, click on `Configuration`
- Toggle the option: `zigbee_herdsman_debug`
- Click `Save`, and when prompted to restart, click `Restart add-on`

Herdsman debug logs should now be available in the log tab.

## Change log level during runtime
See [MQTT topics and message structure](./mqtt_topics_and_messages.md)
