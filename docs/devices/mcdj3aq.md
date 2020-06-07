---
title: "Zemismart ZM25TQ control via MQTT"
description: "Integrate your Zemismart ZM25TQ tubular motor (Zigbee connectivity Tuya based) via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZM25TQ.md)*

# Zemismart ZM25TQ

| Model | ZM25TQ  |
| Vendor  | Zemismart  |
| Description | Tubular motor |
| Supports | open, close, stop, position |
| Picture | ![Zemismart ZM25TQ](../images/devices/ZM25TQ.jpg) |
| White-label | Zemismart ZM25TQ |

## Notes


### Configuration of device attributes
By publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set` various device attributes can be configured:
```json
{
    "options":{
        "reverse_direction": xxx
    }
}
```

- **reverse_direction**: (`true`/`false`, default: `false`). Device can be configured to act in an opposite direction.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
cover:
  - platform: "mqtt"
    availability_topic: "zigbee2mqtt/bridge/state"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    position_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    set_position_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    set_position_template: "{ \"position\": {{ position }} }"
    value_template: "{{ value_json.position }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}
