---
title: "DIYRuZ DIYRuZ_Geiger control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_Geiger via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DIYRuZ_Geiger.md)*

# DIYRuZ DIYRuZ_Geiger

| Model | DIYRuZ_Geiger  |
| Vendor  | DIYRuZ  |
| Description | [DiY Geiger counter](https://modkam.ru/?p=1591) |
| Exposes | action, radioactive_events_per_minute, radiation_dose_per_hour, linkquality |
| Picture | ![DIYRuZ DIYRuZ_Geiger](../images/devices/DIYRuZ_Geiger.jpg) |

## Notes

None


## Exposes
### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`.

### Radioactive_events_per_minute (numeric)
Value can be found in the published state on the `radioactive_events_per_minute` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `rpm`.

### Radiation_dose_per_hour (numeric)
Value can be found in the published state on the `radiation_dose_per_hour` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `rph`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimimal value is `0` and the maximum value is `255`.
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
    unit_of_measurement: "rpm"
    value_template: "{{ value_json.radioactive_events_per_minute }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "rph"
    value_template: "{{ value_json.radiation_dose_per_hour }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
    icon: "mdi:signal"
```
{% endraw %}


