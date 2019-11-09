---
title: "Zemismart ZM-CSW032-D control via MQTT"
description: "Integrate your Zemismart ZM-CSW032-D via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZM-CSW032-D.md)*

# Zemismart ZM-CSW032-D

| Model | ZM-CSW032-D  |
| Vendor  | Zemismart  |
| Description | Curtain/roller blind switch |
| Supports | open, close, stop |
| Picture | ![Zemismart ZM-CSW032-D](../images/devices/ZM-CSW032-D.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


{% raw %}
```yaml
cover:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    optimistic: true

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


