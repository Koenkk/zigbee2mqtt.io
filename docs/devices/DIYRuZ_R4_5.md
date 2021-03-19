---
title: "DIYRuZ DIYRuZ_R4_5 control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_R4_5 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DIYRuZ_R4_5.md)*

# DIYRuZ DIYRuZ_R4_5

| Model | DIYRuZ_R4_5  |
| Vendor  | DIYRuZ  |
| Description | [DiY 4 Relays + 4 switches + 1 buzzer](http://modkam.ru/?p=1054) |
| Exposes | switch (state), linkquality |
| Picture | ![DIYRuZ DIYRuZ_R4_5](../images/devices/DIYRuZ_R4_5.jpg) |

## Notes

None


## Exposes

### Switch (bottom_left endpoint)
The current state of this switch is in the published state under the `state_bottom_left` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_bottom_left": "ON"}`, `{"state_bottom_left": "OFF"}` or `{"state_bottom_left": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_bottom_left": ""}`.

### Switch (bottom_right endpoint)
The current state of this switch is in the published state under the `state_bottom_right` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_bottom_right": "ON"}`, `{"state_bottom_right": "OFF"}` or `{"state_bottom_right": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_bottom_right": ""}`.

### Switch (top_left endpoint)
The current state of this switch is in the published state under the `state_top_left` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_top_left": "ON"}`, `{"state_top_left": "OFF"}` or `{"state_top_left": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_top_left": ""}`.

### Switch (top_right endpoint)
The current state of this switch is in the published state under the `state_top_right` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_top_right": "ON"}`, `{"state_top_right": "OFF"}` or `{"state_top_right": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_top_right": ""}`.

### Switch (center endpoint)
The current state of this switch is in the published state under the `state_center` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_center": "ON"}`, `{"state_center": "OFF"}` or `{"state_center": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_center": ""}`.

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
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_bottom_left }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/bottom_left/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_bottom_right }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/bottom_right/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_top_left }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/top_left/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_top_right }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/top_right/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_center }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/center/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    icon: "mdi:signal"
```
{% endraw %}


