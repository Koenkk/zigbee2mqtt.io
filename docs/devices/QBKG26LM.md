---
title: "Xiaomi QBKG26LM control via MQTT"
description: "Integrate your Xiaomi QBKG26LM via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/QBKG26LM.md)*

# Xiaomi QBKG26LM

| Model | QBKG26LM  |
| Vendor  | Xiaomi  |
| Description | Aqara D1 3 gang smart wall switch (with neutral wire) |
| Exposes | switch (state), action, linkquality |
| Picture | ![Xiaomi QBKG26LM](../images/devices/QBKG26LM.jpg) |

## Notes


### Decoupled mode
Decoupled mode allows to turn wired switch into wireless button with separately controlled relay.
This might be useful to assign some custom actions to buttons and control relay remotely.
This command also allows to redefine which button controls which relay for the double switch (not supported for QBKG25LM).

Topic `zigbee2mqtt/FRIENDLY_NAME/system/set` should be used to modify operation mode.

**NOTE:** For QBKG25LM instead of `system` use `left`, `center` or `right` and leave out the `button` property in the payload.

Payload:
```js
{
  "operation_mode": {
    "button": "single"|"left"|"right", // Always use single for a single switch
    "state": "VALUE"
  }
}
```

Values                | Description
----------------------|---------------------------------------------------------
`control_relay`       | Button directly controls relay (for single switch and QBKG25LM)
`control_left_relay`  | Button directly controls left relay (for double switch, not supported for QBKG25LM)
`control_right_relay` | Button directly controls right relay (for double switch, not supported for QBKG25LM)
`decoupled`           | Button doesn't control any relay

`zigbee2mqtt/FRIENDLY_NAME/system/get` to read current mode.

Payload:
```js
{
  "operation_mode": {
    "button": "single"|"left"|"right" // Always use single for a single switch
  }
}
```

Response will be sent to `zigbee2mqtt/FRIENDLY_NAME`, example: `{"operation_mode_right":"control_right_relay"}`



## Exposes

### Switch (left endpoint)
The current state of this switch is in the published state under the `state_left` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_left": "ON"}`, `{"state_left": "OFF"}` or `{"state_left": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_left": ""}`.

### Switch (center endpoint)
The current state of this switch is in the published state under the `state_center` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_center": "ON"}`, `{"state_center": "OFF"}` or `{"state_center": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_center": ""}`.

### Switch (right endpoint)
The current state of this switch is in the published state under the `state_right` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_right": "ON"}`, `{"state_right": "OFF"}` or `{"state_right": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_right": ""}`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `hold_left`, `single_left`, `double_left`, `triple_left`, `release_left`, `hold_center`, `single_center`, `double_center`, `triple_center`, `release_center`, `hold_right`, `single_right`, `double_right`, `triple_right`, `release_right`.

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
    value_template: "{{ value_json.state_left }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/left/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_center }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/center/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_right }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/right/set"

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
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    icon: "mdi:signal"
```
{% endraw %}


