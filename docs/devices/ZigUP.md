---
title: "Custom devices (DiY) ZigUP control via MQTT"
description: "Integrate your Custom devices (DiY) ZigUP via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZigUP.md)*

# Custom devices (DiY) ZigUP

| Model | ZigUP  |
| Vendor  | Custom devices (DiY)  |
| Description | [CC2530 based ZigBee relais, switch, sensor and router](https://github.com/formtapez/ZigUP/) |
| Supports | relais, RGB-stripe, sensors, S0-counter, ADC, digital I/O |
| Picture | ![Custom devices (DiY) ZigUP](../images/devices/ZigUP.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


