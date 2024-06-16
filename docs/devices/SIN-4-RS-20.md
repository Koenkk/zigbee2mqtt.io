---
title: "NodOn SIN-4-RS-20 control via MQTT"
description: "Integrate your NodOn SIN-4-RS-20 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-01-31T17:42:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# NodOn SIN-4-RS-20

|     |     |
|-----|-----|
| Model | SIN-4-RS-20  |
| Vendor  | [NodOn](/supported-devices/#v=NodOn)  |
| Description | Roller shutter relay switch |
| Exposes | cover (state, position, tilt), cover_mode, calibration_vertical_run_time_up, calibration_vertical_run_time_down, calibration_rotation_run_time_up, calibration_rotation_run_time_down, linkquality |
| Picture | ![NodOn SIN-4-RS-20](https://www.zigbee2mqtt.io/images/devices/SIN-4-RS-20.png) |


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
To change the tilt publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tilt": VALUE}` where `VALUE` is a number between `0` and `100`.

### Cover mode (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_mode": {"reversed": VALUE, "calibration": VALUE, "maintenance": VALUE, "led": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"cover_mode": ""}`.
- `reversed` (binary): Reversal of the motor rotating direction allowed values: `true` or `false`
- `calibration` (binary): Set the cover calibration mode allowed values: `true` or `false`
- `maintenance` (binary): Set the cover maintenance mode, enabling will disable the cover motor allowed values: `true` or `false`
- `led` (binary): Set the LED allowed values: `true` or `false`

### Calibration vertical run time up (numeric)
Manuel calibration: Set vertical run time up of the roller shutter. Do not change it if your roller shutter is already calibrated..
Value can be found in the published state on the `calibration_vertical_run_time_up` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_vertical_run_time_up": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_vertical_run_time_up": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `10 ms`.

### Calibration vertical run time down (numeric)
Manuel calibration: Set vertical run time down of the roller shutter. Do not change it if your roller shutter is already calibrated..
Value can be found in the published state on the `calibration_vertical_run_time_down` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_vertical_run_time_down": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_vertical_run_time_down": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `10 ms`.

### Calibration rotation run time up (numeric)
Manuel calibration: Set rotation run time up of the roller shutter. Do not change it if your roller shutter is already calibrated..
Value can be found in the published state on the `calibration_rotation_run_time_up` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_rotation_run_time_up": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_rotation_run_time_up": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `ms`.

### Calibration rotation run time down (numeric)
Manuel calibration: Set rotation run time down of the roller shutter. Do not change it if your roller shutter is already calibrated..
Value can be found in the published state on the `calibration_rotation_run_time_down` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_rotation_run_time_down": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_rotation_run_time_down": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `ms`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

