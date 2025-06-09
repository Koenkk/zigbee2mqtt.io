---
sidebarDepth: 1
---

# Home Assistant integration

See: [Home Assistant integration guide](../usage/integrations/home_assistant.md).

```yaml
# Optional: Home Assistant integration (MQTT discovery)
homeassistant:
    # Enable the integration (default: false)
    enabled: true
```

## Advanced configuration

```yaml
homeassistant:
    enabled: true
    # Optional: Home Assistant discovery topic (default: shown below)
    # Note: should be different from [MQTT base topic](../mqtt.md) to prevent errors in HA software
    discovery_topic: 'homeassistant'
    # Optional: Home Assistant status topic (default: shown below)
    status_topic: 'homeassistant/status'
    # Optional: Experimental support for Home Assistant event entities, may break in the future (default: shown below) when enabled:
    # - An `event` entity will be discovered for each 'action'.
    # - The `event_type` attribute will contain the action itself, additional attributes like `button` will have further information.
    experimental_event_entities: false
    # Optional: Home Assistant legacy action sensor (default: `false`), when enabled:
    # - Zigbee2MQTT will send an empty 'action' after one has been send
    # - A 'sensor_action' will be discovered
    legacy_action_sensor: false
```
