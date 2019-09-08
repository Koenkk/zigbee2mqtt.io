---
title: "Xiaomi ZNMS13LM control via MQTT"
description: "Integrate your Xiaomi ZNMS13LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZNMS13LM.md)*

# Xiaomi ZNMS13LM

| Model | ZNMS13LM  |
| Vendor  | Xiaomi  |
| Description | Aqara S2 Lock Pro |
| Supports | report: open, close, operation |
| Picture | ![Xiaomi ZNMS13LM](../images/devices/ZNMS13LM.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:gesture-double-tap"
    value_template: "{{ value_json.action }}"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: "UNLOCK"
    payload_off: "LOCK"
    value_template: "{{ value_json.state}}"
    device_class: "lock"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: "UNLOCK"
    payload_off: "LOCK"
    value_template: "{{ value_json.reverse}}"
    device_class: "lock"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


