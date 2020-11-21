---
title: "SmartThings SZ-SRN12N control via MQTT"
description: "Integrate your SmartThings SZ-SRN12N via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SZ-SRN12N.md)*

# SmartThings SZ-SRN12N

| Model | SZ-SRN12N  |
| Vendor  | SmartThings  |
| Description | Smart siren |
| Supports | warning |
| Picture | ![SmartThings SZ-SRN12N](../images/devices/SZ-SRN12N.jpg) |

## Notes

None


## Exposes
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
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
    icon: "mdi:signal"
```
{% endraw %}


