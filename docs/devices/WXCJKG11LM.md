---
title: "Xiaomi WXCJKG11LM control via MQTT"
description: "Integrate your Xiaomi WXCJKG11LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/WXCJKG11LM.md)*

# Xiaomi WXCJKG11LM

| Model | WXCJKG11LM  |
| Vendor  | Xiaomi  |
| Description | Aqara Opple switch 1 band |
| Supports | action |
| Picture | ![Xiaomi WXCJKG11LM](../images/devices/WXCJKG11LM.jpg) |

## Notes

### Binding 
By default the switch is bound with the Coordinator and command all the lights of the network.
You probably want to unbind it from the coordinator first.
You can then bind it directly to any light or group. (see https://www.zigbee2mqtt.io/information/binding.html )
Press the reset button once after sending the bind/unbind mqtt message.

When bound to a lamp, the behavior is as follows:
left click: turn off
right click: turn on
left double click: light dim down (by 33% step)
right double click: light dim up (by 33% step)
long left click: warm white
long right click: cold white

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


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


