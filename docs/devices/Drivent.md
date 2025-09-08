---
title: "Sprut.device Drivent control via MQTT"
description: "Integrate your Sprut.device Drivent via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sprut.device Drivent

|     |     |
|-----|-----|
| Model | Drivent  |
| Vendor  | [Sprut.device](/supported-devices/#v=Sprut.device)  |
| Description | Drivent window drive |
| Exposes | cover (state, position), drive_state, blocked_jam, blocked_many, reset_block, speed, open_limit, close_limit, reset_limit, calibrate, wifi |
| Picture | ![Sprut.device Drivent](https://www.zigbee2mqtt.io/images/devices/Drivent.png) |


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

### Drive state (enum)
Drive state.
Value can be found in the published state on the `drive_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"drive_state": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `closing`, `opening`, `stopped`.

### Blocked jam (binary)
Blocked after 5 jam.
Value can be found in the published state on the `blocked_jam` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"blocked_jam": ""}`.
It's not possible to write (`/set`) this value.
If value equals `ON` blocked jam is ON, if `OFF` OFF.

### Blocked many (binary)
Blocked after 45 attempts.
Value can be found in the published state on the `blocked_many` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"blocked_many": ""}`.
It's not possible to write (`/set`) this value.
If value equals `ON` blocked many is ON, if `OFF` OFF.

### Reset block (enum)
Reset block.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_block": NEW_VALUE}`.
The possible values are: `SEND`.

### Speed (numeric)
Speed.
Value can be found in the published state on the `speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"speed": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Open limit (enum)
Set open limit.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_limit": NEW_VALUE}`.
The possible values are: `SEND`.

### Close limit (enum)
Set close limit.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"close_limit": NEW_VALUE}`.
The possible values are: `SEND`.

### Reset limit (enum)
Reset limits.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_limit": NEW_VALUE}`.
The possible values are: `SEND`.

### Calibrate (binary)
Calibration.
Value can be found in the published state on the `calibrate` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibrate": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibrate": NEW_VALUE}`.
If value equals `ON` calibrate is ON, if `OFF` OFF.

### Wifi (binary)
Enable Wifi AP.
Value can be found in the published state on the `wifi` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wifi": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"wifi": NEW_VALUE}`.
If value equals `ON` wifi is ON, if `OFF` OFF.

