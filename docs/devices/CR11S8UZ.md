---
title: "ORVIBO CR11S8UZ control via MQTT"
description: "Integrate your ORVIBO CR11S8UZ via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/CR11S8UZ.md)*

# ORVIBO CR11S8UZ

| Model | CR11S8UZ  |
| Vendor  | ORVIBO  |
| Description | Smart sticker switch |
| Exposes | action, linkquality |
| Picture | ![ORVIBO CR11S8UZ](../images/devices/CR11S8UZ.jpg) |

## Notes

None


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `button_1_click`, `button_1_hold`, `button_1_release`, `button_2_click`, `button_2_hold`, `button_2_release`, `button_3_click`, `button_3_hold`, `button_3_release`, `button_4_click`, `button_4_hold`, `button_4_release`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.action }}"
    icon: "mdi:gesture-double-tap"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    icon: "mdi:signal"
```
{% endraw %}


