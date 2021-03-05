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
| Exposes | switch (state), linkquality |
| Picture | ![Nue / 3A NUE-ZBFLB](../images/devices/NUE-ZBFLB.jpg) |

## Notes

None


## Exposes

### Switch (button_light endpoint)
The current state of this switch is in the published state under the `state_button_light` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_light": "ON"}`, `{"state_button_light": "OFF"}` or `{"state_button_light": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_button_light": ""}`.

### Switch (button_fan_high endpoint)
The current state of this switch is in the published state under the `state_button_fan_high` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_fan_high": "ON"}`, `{"state_button_fan_high": "OFF"}` or `{"state_button_fan_high": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_button_fan_high": ""}`.

### Switch (button_fan_med endpoint)
The current state of this switch is in the published state under the `state_button_fan_med` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_fan_med": "ON"}`, `{"state_button_fan_med": "OFF"}` or `{"state_button_fan_med": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_button_fan_med": ""}`.

### Switch (button_fan_low endpoint)
The current state of this switch is in the published state under the `state_button_fan_low` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_fan_low": "ON"}`, `{"state_button_fan_low": "OFF"}` or `{"state_button_fan_low": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_button_fan_low": ""}`.

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
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    icon: "mdi:signal"
```
{% endraw %}


