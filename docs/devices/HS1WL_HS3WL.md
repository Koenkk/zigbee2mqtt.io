---
title: "HEIMAN HS1WL/HS3WL control via MQTT"
description: "Integrate your HEIMAN HS1WL/HS3WL via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HS1WL/HS3WL.md)*

# HEIMAN HS1WL/HS3WL

| Model | HS1WL/HS3WL  |
| Vendor  | HEIMAN  |
| Description | Water leakage sensor |
| Supports | water leak |
| Picture | ![HEIMAN HS1WL/HS3WL](../images/devices/HS1WL-HS3WL.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


{% raw %}
```yaml
binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: true
    payload_off: false
    value_template: "{{ value_json.water_leak }}"
    device_class: "moisture"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


