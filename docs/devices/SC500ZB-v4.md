---
title: "LoraTap SC500ZB-v4 control via MQTT"
description: "Integrate your LoraTap SC500ZB-v4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-07-01T17:54:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# LoraTap SC500ZB-v4

|     |     |
|-----|-----|
| Model | SC500ZB-v4  |
| Vendor  | [LoraTap](/supported-devices/#v=LoraTap)  |
| Description | Smart curtain/shutter switch |
| Exposes | cover (state, position), moving, motor_reversal, calibration, calibration_time, indicator_mode, backlight_mode |
| Picture | ![LoraTap SC500ZB-v4](https://www.zigbee2mqtt.io/images/devices/SC500ZB-v4.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Moving (enum)
Value can be found in the published state on the `moving` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `UP`, `STOP`, `DOWN`.

### Motor reversal (binary)
Value can be found in the published state on the `motor_reversal` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motor_reversal": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_reversal": NEW_VALUE}`.
If value equals `ON` motor reversal is ON, if `OFF` OFF.

### Calibration to open (binary)
Value can be found in the published state on the `calibration_to_open` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_to_open": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_to_open": NEW_VALUE}`.
If value equals `ON` calibration to open is ON, if `OFF` OFF.

### Calibration to close (binary)
Value can be found in the published state on the `calibration_to_close` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_to_close": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_to_close": NEW_VALUE}`.
If value equals `ON` calibration to close is ON, if `OFF` OFF.

### Calibration time to open (numeric)
Value can be found in the published state on the `calibration_time_to_open` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_time_to_open": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_time_to_open": NEW_VALUE}`.
The unit of this value is `s`.

### Calibration time to close (numeric)
Value can be found in the published state on the `calibration_time_to_close` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_time_to_close": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_time_to_close": NEW_VALUE}`.
The unit of this value is `s`.

### Switch type curtain (enum)
External switch type.
Value can be found in the published state on the `switch_type_curtain` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_curtain": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_curtain": NEW_VALUE}`.
The possible values are: `flip-switch`, `sync-switch`, `button-switch`, `button2-switch`.

