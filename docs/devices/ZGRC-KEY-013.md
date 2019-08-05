---
title: "RGB Genie ZGRC-KEY-013 control via MQTT"
description: "Integrate your RGB Genie ZGRC-KEY-013 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZGRC-KEY-013.md)*

# RGB Genie ZGRC-KEY-013

| Model | ZGRC-KEY-013  |
| Vendor  | RGB Genie  |
| Description | 3 Zone remote and dimmer |
| Supports | click |
| Picture | ![RGB Genie ZGRC-KEY-013](../images/devices/ZGRC-KEY-013.jpg) |

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
    icon: "mdi:toggle-switch"
    value_template: "{{ value_json.click }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


