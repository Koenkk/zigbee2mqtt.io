---
title: "Tuya TS0301_cover_2 control via MQTT"
description: "Integrate your Tuya TS0301_cover_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-08-30T18:06:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0301_cover_2

|     |     |
|-----|-----|
| Model | TS0301_cover_2  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Cover motor |
| Exposes | cover (state, position), motor_state, click_control, slow_mode, favorite_position, cover_limit, motor_direction, cover_type, battery |
| Picture | ![Tuya TS0301_cover_2](https://www.zigbee2mqtt.io/images/devices/TS0301_cover_2.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Motor state (enum)
Current motor movement status.
Value can be found in the published state on the `motor_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `opening`, `closing`, `stopped`.

### Click control (enum)
Step control.
Value can be found in the published state on the `click_control` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"click_control": NEW_VALUE}`.
The possible values are: `up`, `down`.

### Slow mode (binary)
Operate the motor slower and quieter than normal.
Value can be found in the published state on the `slow_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"slow_mode": NEW_VALUE}`.
If value equals `ON` slow mode is ON, if `OFF` OFF.

### Favorite position (numeric)
Store the preferred cover position.
Value can be found in the published state on the `favorite_position` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"favorite_position": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Cover limit (enum)
Set current position as the limit position.
Value can be found in the published state on the `cover_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_limit": NEW_VALUE}`.
The possible values are: `set_up`, `set_down`, `delete_up`, `delete_down`, `delete_both`.

### Motor direction (enum)
Motor rotation direction.
Value can be found in the published state on the `motor_direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_direction": NEW_VALUE}`.
The possible values are: `normal`, `reversed`.

### Cover type (enum)
Type of window covers installed.
Value can be found in the published state on the `cover_type` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_type": NEW_VALUE}`.
The possible values are: `roman_pole`, `roller_blind`, `canopy_curtain`, `roman_blind`, `honeycomb_curtain`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

