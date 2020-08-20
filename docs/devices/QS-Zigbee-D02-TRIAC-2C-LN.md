---
title: "TuYa QS-Zigbee-D02-TRIAC-2C-LN control via MQTT"
description: "Integrate your TuYa QS-Zigbee-D02-TRIAC-2C-LN via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/TS0043.md)*

# TuYa QS-Zigbee-D02-TRIAC-2C-LN

| Model | QS-Zigbee-D02-TRIAC-2C-LN  |
| Vendor  | TuYa  |
| Description | Wireless switch with 2 gang |
| Supports | on/off, brightness |
| Picture | ![TuYa QS-Zigbee-D02-TRIAC-2C-LN](../images/devices/QS-Zigbee-D02-TRIAC-2C-LN.jpg) |
| White-label | Lonsonho QS-Zigbee-D02-TRIAC-2C-LN |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/l1/set"
    brightness_scale: 254

light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    schema: "json"
    value_template: "{{ value_json.state_l2 }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/l2/set"
    brightness_scale: 254

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}

