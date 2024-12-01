---
sidebarDepth: 1
---

# Home Assistant integration

See: [Home Assistant integration guide](../usage/integrations/home_assistant.md).

```yaml
# Optional: Home Assistant integration (MQTT discovery) (default: false)
homeassistant: true
```

## Advanced configuration

```yaml
homeassistant:
    # Optional: Home Assistant discovery topic (default: shown below)
    # Note: should be different from [MQTT base topic](../mqtt.md) to prevent errors in HA software
    discovery_topic: 'homeassistant'
    # Optional: Home Assistant status topic (default: shown below)
    # Note: in addition to the `status_topic`, 'homeassistant/status' will also be used
    status_topic: 'hass/status'
    # Optional: Experimental support for Home Assistant event entities, may break in the future (default: shown below) when enabled:
    # - An `event` entity will be discovered for each 'action'.
    # - The `event_type` attribute will contain the action itself, additional attributes like `button` will have further information.
    experimental_event_entities: false
```
