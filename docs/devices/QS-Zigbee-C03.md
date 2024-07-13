---
title: "Lonsonho QS-Zigbee-C03 control via MQTT"
description: "Integrate your Lonsonho QS-Zigbee-C03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-03-31T18:55:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lonsonho QS-Zigbee-C03

|     |     |
|-----|-----|
| Model | QS-Zigbee-C03  |
| Vendor  | [Lonsonho](/supported-devices/#v=Lonsonho)  |
| Description | Curtain/blind motor controller |
| Exposes | cover (state, position), moving, calibration, motor_reversal, calibration_time, linkquality |
| Picture | ![Lonsonho QS-Zigbee-C03](https://www.zigbee2mqtt.io/images/devices/QS-Zigbee-C03.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

_How to use calibration_
* Activate calibration mode
* Open the shutter completely and press stop
* Set the number to 100 and press the refresh button
* Close the shutter completely and when it comes to an end, press STOP.
* Set the position to 0, press the refresh button and deactivate the calibration.
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

### Calibration (binary)
Value can be found in the published state on the `calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration": NEW_VALUE}`.
If value equals `ON` calibration is ON, if `OFF` OFF.

### Motor reversal (binary)
Value can be found in the published state on the `motor_reversal` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motor_reversal": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_reversal": NEW_VALUE}`.
If value equals `ON` motor reversal is ON, if `OFF` OFF.

### Calibration time (numeric)
Calibration time.
Value can be found in the published state on the `calibration_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

