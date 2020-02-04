---
title: "TUYATEC U86KCJ-ZP control via MQTT"
description: "Integrate your TUYATEC U86KCJ-ZP via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/U86KCJ-ZP.md)*

# TUYATEC U86KCJ-ZP

| Model | U86KCJ-ZP  |
| Vendor  | TUYATEC  |
| Description | Smart 6 key scene wall switch |
| Supports | action |
| Picture | ![TUYATEC U86KCJ-ZP](../images/devices/U86KCJ-ZP.jpg) |

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


