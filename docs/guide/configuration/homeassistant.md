---
sidebarDepth: 1
---

# Home Assistant integration

See: [Home Assistant integration guide](../usage/integrations/home_assistant.md).

```yaml
# Optional: Home Assistant integration (MQTT discovery) (default: false)
homeassistant: true

advanced:
  # Optional: Home Assistant discovery topic (default: shown below)
  homeassistant_discovery_topic: 'homeassistant'
  # Optional: Home Assistant status topic (default: shown below)
  homeassistant_status_topic: 'homeassistant/status'
  # Optional: Home Assistant legacy entity attributes, (default: shown below), when enabled:
  # Zigbee2MQTT will send additional states as attributes with each entity. For example,
  # A temperature & humidity sensor will have 2 entities for the temperature and
  # humidity, with this setting enabled both entities will also have
  # an temperature and humidity attribute.
  # Note: Disabling this option, requires a Home Assistant restart
  homeassistant_legacy_entity_attributes: true
  # Optional: Home Assistant legacy triggers (default: shown below), when enabled:
  # - Zigbee2mqt will send an empty 'action' or 'click' after one has been send
  # - A 'sensor_action' and 'sensor_click' will be discoverd
  homeassistant_legacy_triggers: true
```
