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
| Exposes | switch (state), mode, click_sustain_time, arm_down_percent, arm_up_percent, auto_adjustment, set_switch_state, battery |
| Picture | ![Lincukoo CZF02](https://www.zigbee2mqtt.io/images/devices/CZF02.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Mode (enum)
work mode of the finger robot.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `click`, `long_press`.

### Click sustain time (numeric)
keep times for click.
Value can be found in the published state on the `click_sustain_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"click_sustain_time": NEW_VALUE}`.
The minimal value is `0.3` and the maximum value is `10`.
The unit of this value is `s`.

### Arm down percent (numeric)
the position for arm moving down.
Value can be found in the published state on the `arm_down_percent` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"arm_down_percent": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.

### Arm up percent (numeric)
the position for arm moving up.
Value can be found in the published state on the `arm_up_percent` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"arm_up_percent": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.

### Auto adjustment (binary)
auto adjustment the arm position.
Value can be found in the published state on the `auto_adjustment` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_adjustment": NEW_VALUE}`.
If value equals `ON` auto adjustment is ON, if `OFF` OFF.

### Set switch state (binary)
set the switch display status.
Value can be found in the published state on the `set_switch_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_switch_state": NEW_VALUE}`.
If value equals `ON` set switch state is ON, if `OFF` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

