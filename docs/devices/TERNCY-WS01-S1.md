---
title: "TERNCY TERNCY-WS01-S1 control via MQTT"
description: "Integrate your TERNCY TERNCY-WS01-S1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-08-30T18:06:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TERNCY TERNCY-WS01-S1

|     |     |
|-----|-----|
| Model | TERNCY-WS01-S1  |
| Vendor  | [TERNCY](/supported-devices/#v=TERNCY)  |
| Description | 1-gang no-neutral wall switch |
| Exposes | operation_mode, wireless_led_status, led_feedback_mode, action, action_duration, switch (state), power_on_behavior |
| Picture | ![TERNCY TERNCY-WS01-S1](https://www.zigbee2mqtt.io/images/devices/TERNCY-WS01-S1.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Operation mode (enum, l1 endpoint)
Control relay or act as wireless switch.
Value can be found in the published state on the `operation_mode_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode_l1": NEW_VALUE}`.
The possible values are: `control_relay`, `wireless`.

### Wireless led status (enum, l1 endpoint)
LED state while in wireless switch mode.
Value can be found in the published state on the `wireless_led_status_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"wireless_led_status_l1": NEW_VALUE}`.
The possible values are: `off`, `on`.

### Led feedback mode (enum, l1 endpoint)
Relay-mode LED feedback relation.
Value can be found in the published state on the `led_feedback_mode_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_feedback_mode_l1": NEW_VALUE}`.
The possible values are: `positive`, `negative`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_l1`, `double_l1`, `triple_l1`, `quadruple_l1`, `5_click_l1`, `6_click_l1`, `7_click_l1`, `hold_l1`, `release_l1`, `single_l2`, `double_l2`, `triple_l2`, `quadruple_l2`, `5_click_l2`, `6_click_l2`, `7_click_l2`, `hold_l2`, `release_l2`, `single_l3`, `double_l3`, `triple_l3`, `quadruple_l3`, `5_click_l3`, `6_click_l3`, `7_click_l3`, `hold_l3`, `release_l3`, `single_l4`, `double_l4`, `triple_l4`, `quadruple_l4`, `5_click_l4`, `6_click_l4`, `7_click_l4`, `hold_l4`, `release_l4`.

### Action duration (numeric)
Triggered action duration in seconds.
Value can be found in the published state on the `action_duration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power-on behavior (enum, l1 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l1": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

