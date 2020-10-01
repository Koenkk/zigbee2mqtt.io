---
title: "Nue / 3A NUE-ZBFLB control via MQTT"
description: "Integrate your Nue / 3A NUE-ZBFLB via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/NUE-ZBFLB.md)*

# Nue / 3A NUE-ZBFLB

| Model | NUE-ZBFLB  |
| Vendor  | Nue / 3A  |
| Description | Smart fan light switch |
| Supports | on/off |
| Picture | ![Nue / 3A NUE-ZBFLB](../images/devices/NUE-ZBFLB.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_button_light }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/button_light/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_button_fan_high }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/button_fan_high/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_button_fan_med }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/button_fan_med/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_button_fan_low }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/button_fan_low/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


