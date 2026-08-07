---
title: "Lincukoo CZF02 control via MQTT"
description: "Integrate your Lincukoo CZF02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-07-01T17:54:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lincukoo CZF02

|     |     |
|-----|-----|
| Model | CZF02  |
| Vendor  | [Lincukoo](/supported-devices/#v=Lincukoo)  |
| Description | Finger Robot |
| Exposes | switch (state), switch_states, mode, button_hold_duration, auto_adjustment, arm_start_position, arm_end_position, battery |
| Picture | ![Lincukoo CZF02](https://www.zigbee2mqtt.io/images/devices/CZF02.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch states (enum)
Changes the displayed state to the opposite state.
Value can be found in the published state on the `switch_states` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_states": NEW_VALUE}`.
The possible values are: `SWITCH`.

### Mode (enum)
Work mode of the finger robot. Button: press and release, Switch: press.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `button`, `switch`.

### Button hold duration (numeric)
Sets the press duration for button mode.
Value can be found in the published state on the `button_hold_duration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"button_hold_duration": NEW_VALUE}`.
The minimal value is `0.3` and the maximum value is `10`.
The unit of this value is `s`.

### Auto adjustment (enum)
Auto select the end position. Slowly lower the arm until it fully presses the button, and save the result.
Value can be found in the published state on the `auto_adjustment` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_adjustment": NEW_VALUE}`.
The possible values are: `START`.

### Arm start position (numeric)
Sets arm position when idle.
Value can be found in the published state on the `arm_start_position` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"arm_start_position": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.

### Arm end position (numeric)
Sets arm position when fully pressed.
Value can be found in the published state on the `arm_end_position` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"arm_end_position": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

