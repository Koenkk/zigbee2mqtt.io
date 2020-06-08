---
title: "Swann SWO-WDS1PA control via MQTT"
description: "Integrate your Swann SWO-WDS1PA via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SWO-WDS1PA.md)*

# Swann SWO-MOS1PA

| Model | SWO-MOS1PA  |
| Vendor  | Swann  |
| Description | Motion sensor |
| Supports | occupancy |
| Picture | ![Swann SWO-MOS1PA](../images/devices/SWO-MOS1PA.jpg) |

## Notes

Device is listed as having temperature detection. This feature is still being investigated.

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: true
    payload_off: false
    value_template: "{{ value_json.occupancy }}"
    device_class: "motion"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


