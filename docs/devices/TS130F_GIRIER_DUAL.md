---
title: "Girier TS130F_GIRIER_DUAL control via MQTT"
description: "Integrate your Girier TS130F_GIRIER_DUAL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-08-01T15:19:08
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Girier TS130F_GIRIER_DUAL

|     |     |
|-----|-----|
| Model | TS130F_GIRIER_DUAL  |
| Vendor  | [Girier](/supported-devices/#v=Girier)  |
| Description | Dual smart curtain switch |
| Exposes | moving, calibration_time, cover (state, position), calibration, motor_reversal |
| Picture | ![Girier TS130F_GIRIER_DUAL](https://www.zigbee2mqtt.io/images/devices/TS130F_GIRIER_DUAL.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Moving (enum, left endpoint)
Value can be found in the published state on the `moving_left` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `UP`, `STOP`, `DOWN`.

### Moving (enum, right endpoint)
Value can be found in the published state on the `moving_right` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `UP`, `STOP`, `DOWN`.

### Calibration time (numeric, left endpoint)
Calibration time.
Value can be found in the published state on the `calibration_time_left` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_time_left": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_time_left": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `500`.
The unit of this value is `s`.

### Calibration time (numeric, right endpoint)
Calibration time.
Value can be found in the published state on the `calibration_time_right` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_time_right": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_time_right": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `500`.
The unit of this value is `s`.

### Cover (left endpoint)
The current state of this cover is in the published state under the `state_left` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_left": "OPEN"}`, `{"state_left": "CLOSE"}`, `{"state_left": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_left": VALUE}` where `VALUE` is a number between `0` and `100`.

### Calibration (binary, left endpoint)
Value can be found in the published state on the `calibration_left` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_left": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_left": NEW_VALUE}`.
If value equals `ON` calibration is ON, if `OFF` OFF.

### Motor reversal (binary, left endpoint)
Value can be found in the published state on the `motor_reversal_left` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motor_reversal_left": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_reversal_left": NEW_VALUE}`.
If value equals `ON` motor reversal is ON, if `OFF` OFF.

### Cover (right endpoint)
The current state of this cover is in the published state under the `state_right` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_right": "OPEN"}`, `{"state_right": "CLOSE"}`, `{"state_right": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_right": VALUE}` where `VALUE` is a number between `0` and `100`.

### Calibration (binary, right endpoint)
Value can be found in the published state on the `calibration_right` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_right": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_right": NEW_VALUE}`.
If value equals `ON` calibration is ON, if `OFF` OFF.

### Motor reversal (binary, right endpoint)
Value can be found in the published state on the `motor_reversal_right` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motor_reversal_right": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_reversal_right": NEW_VALUE}`.
If value equals `ON` motor reversal is ON, if `OFF` OFF.

