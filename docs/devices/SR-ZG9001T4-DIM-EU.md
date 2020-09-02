---
title: "Sunricher SR-ZG9001T4-DIM-EU control via MQTT"
description: "Integrate your Sunricher SR-ZG9001T4-DIM-EU via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SR-ZG9001T4-DIM-EU.md)*

# Sunricher SR-ZG9001T4-DIM-EU

| Model | SR-ZG9001T4-DIM-EU  |
| Vendor  | Sunricher  |
| Description | Zigbee wireless touch dimmer switch |
| Supports | action |
| Picture | ![Sunricher SR-ZG9001T4-DIM-EU](../images/devices/SR-ZG9001T4-DIM-EU.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:gesture-double-tap"
    value_template: "{{ value_json.action }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


