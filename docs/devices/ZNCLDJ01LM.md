---
title: "Aqara ZNCLDJ01LM control via MQTT"
description: "Integrate your Aqara ZNCLDJ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-09-01T12:36:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara ZNCLDJ01LM

|     |     |
|-----|-----|
| Model | ZNCLDJ01LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Curtain controller C3 |
| Exposes | limits_calibration, automatic_calibration, cover (state, position), curtain_speed, manual_open_close, adaptive_pulling_speed, manual_stop, reverse_direction, status, last_manual_operation, curtain_position, traverse_time, calibration_status, calibrated, identify_beep, identify, linkquality |
| Picture | ![Aqara ZNCLDJ01LM](https://www.zigbee2mqtt.io/images/devices/ZNCLDJ01LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`


## Exposes

### Limits calibration (enum)
Calibrate the position limits.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"limits_calibration": NEW_VALUE}`.
The possible values are: `start`, `end`, `reset`.

### Automatic calibration (enum)
Performs an automatic calibration process similar to Aqara’s method to set curtain limits..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"automatic_calibration": NEW_VALUE}`.
The possible values are: `calibrate`.

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Curtain speed (numeric)
Speed of curtain movement.
Value can be found in the published state on the `curtain_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"curtain_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"curtain_speed": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.
The unit of this value is `%`.

### Manual open close (binary)
Gently pull to open/close the curtain automatically.
Value can be found in the published state on the `manual_open_close` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_open_close": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_open_close": NEW_VALUE}`.
If value equals `ON` manual open close is ON, if `OFF` OFF.

### Adaptive pulling speed (binary)
The faster/slower the curtain is pulled manually, the faster/slower the curtain will move.
Value can be found in the published state on the `adaptive_pulling_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"adaptive_pulling_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"adaptive_pulling_speed": NEW_VALUE}`.
If value equals `ON` adaptive pulling speed is ON, if `OFF` OFF.

### Manual stop (binary)
Manually pulling the curtain during operation stops the motor.
Value can be found in the published state on the `manual_stop` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_stop": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_stop": NEW_VALUE}`.
If value equals `ON` manual stop is ON, if `OFF` OFF.

### Reverse direction (binary)
Whether the curtain direction is inverted.
Value can be found in the published state on the `reverse_direction` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"reverse_direction": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reverse_direction": NEW_VALUE}`.
If value equals `true` reverse direction is ON, if `false` OFF.

### Status (enum)
Current status of the curtain (Opening, Closing, Stopped, Blocked).
Value can be found in the published state on the `status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `closing`, `opening`, `stopped`, `blocked`.

### Last manual operation (enum)
Last triggered manual operation.
Value can be found in the published state on the `last_manual_operation` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `open`, `close`, `stop`.

### Curtain position (numeric)
Current position of the curtain.
Value can be found in the published state on the `curtain_position` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `1` and the maximum value is `100`.
The unit of this value is `%`.

### Traverse time (numeric)
Time in seconds to get from one end to another.
Value can be found in the published state on the `traverse_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `sec`.

### Calibration status (enum)
Calibration status of the curtain (Not calibrated, Half calibrated, Fully calibrated).
Value can be found in the published state on the `calibration_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `not_calibrated`, `half_calibrated`, `fully_calibrated`.

### Calibrated (binary)
Indicates if this device is calibrated.
Value can be found in the published state on the `calibrated` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` calibrated is ON, if `false` OFF.

### Identify beep (enum)
Device will beep for chosen time duration.
Value can be found in the published state on the `identify_beep` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"identify_beep": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify_beep": NEW_VALUE}`.
The possible values are: `short`, `1_sec`, `2_sec`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

