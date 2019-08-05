---
title: "Xiaomi MFKZQ01LM control via MQTT"
description: "Integrate your Xiaomi MFKZQ01LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/MFKZQ01LM.md)*

# Xiaomi MFKZQ01LM

| Model | MFKZQ01LM  |
| Vendor  | Xiaomi  |
| Description | Mi/Aqara smart home cube |
| Supports | shake, wakeup, fall, tap, slide, flip180, flip90, rotate_left and rotate_right |
| Picture | ![Xiaomi MFKZQ01LM](../images/devices/MFKZQ01LM.jpg) |

## Notes


### Pairing
[Video: Pairing Xiaomi Aqara Cube MFKZQ01LM](https://www.youtube.com/watch?v=uhMrcIAdGxg&feature=youtu.be)

*NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.*


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

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "%"
    device_class: "battery"
    value_template: "{{ value_json.battery }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


