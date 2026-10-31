---
title: "Aqara ZNMHLDJ01LM control via MQTT"
description: "Integrate your Aqara ZNMHLDJ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-03T18:55:25
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara ZNMHLDJ01LM

|     |     |
|-----|-----|
| Model | ZNMHLDJ01LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Smart vertical blinds motor H1 |
| Exposes | identify, cover (state, position, tilt), manual_open_close, status, last_manual_operation, traverse_time, calibration_status, calibrated, identify_beep |
| Picture | ![Aqara ZNMHLDJ01LM](https://www.zigbee2mqtt.io/images/devices/ZNMHLDJ01LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `invert_cover`: Inverts the reported cover position and the state derived from it, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.
To change the tilt publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tilt": VALUE}` where `VALUE` is a number between `0` and `100`.

### Manual open close (binary)
Gently pull to open/close the curtain automatically.
Value can be found in the published state on the `manual_open_close` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_open_close": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_open_close": NEW_VALUE}`.
If value equals `ON` manual open close is ON, if `OFF` OFF.

### Status (enum)
Current status of the curtain (Opening, Closing, Stopped, Blocked).
Value can be found in the published state on the `status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `closing`, `opening`, `stopped`, `blocked`.

### Last manual operation (enum)
Last triggered manual operation.
Value can be found in the published state on the `last_manual_operation` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"last_manual_operation": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `open`, `close`, `stop`.

### Traverse time (numeric)
Time in seconds to get from one end to another.
Value can be found in the published state on the `traverse_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"traverse_time": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `sec`.

### Calibration status (enum)
Calibration status of the curtain (Not calibrated, Half calibrated, Fully calibrated).
Value can be found in the published state on the `calibration_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `not_calibrated`, `half_calibrated`, `fully_calibrated`.

### Calibrated (binary)
Indicates if this device is calibrated.
Value can be found in the published state on the `calibrated` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibrated": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` calibrated is ON, if `false` OFF.

### Identify beep (enum)
Device will beep for chosen time duration.
Value can be found in the published state on the `identify_beep` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"identify_beep": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify_beep": NEW_VALUE}`.
The possible values are: `off`, `short`, `long`.

