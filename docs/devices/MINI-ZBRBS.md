---
title: "SONOFF MINI-ZBRBS control via MQTT"
description: "Integrate your SONOFF MINI-ZBRBS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:37:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF MINI-ZBRBS

|     |     |
|-----|-----|
| Model | MINI-ZBRBS  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee smart roller shutter switch |
| Exposes | cover (state, position), motor_travel_calibration_status, motor_run_status, external_trigger_mode |
| Picture | ![SONOFF MINI-ZBRBS](https://www.zigbee2mqtt.io/images/devices/MINI-ZBRBS.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


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

### Motor travel calibration status (enum)
The calibration status of the curtain motor's stroke..
Value can be found in the published state on the `motor_travel_calibration_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motor_travel_calibration_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `Uncalibrated`, `Calibrated`.

### Motor run status (enum)
The motor's current operating status, such as forward rotation, reverse rotation, and stop..
Value can be found in the published state on the `motor_run_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motor_run_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `Stop`, `Forward`, `Reverse`.

### External trigger mode (enum)
External trigger mode, which can be one of edge, pulse, following(off), following(on). The appropriate triggering mode can be selected according to the type of external switch to achieve a better use experience..
Value can be found in the published state on the `external_trigger_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"external_trigger_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"external_trigger_mode": NEW_VALUE}`.
The possible values are: `edge`, `pulse`, `following(off)`, `following(on)`.

