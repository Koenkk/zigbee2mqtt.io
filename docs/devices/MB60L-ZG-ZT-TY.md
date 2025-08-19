---
title: "Manhot MB60L-ZG-ZT-TY control via MQTT"
description: "Integrate your Manhot MB60L-ZG-ZT-TY via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-07-01T17:54:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Manhot MB60L-ZG-ZT-TY

|     |     |
|-----|-----|
| Model | MB60L-ZG-ZT-TY  |
| Vendor  | [Manhot](/supported-devices/#v=Manhot)  |
| Description | Smart blinds motor |
| Exposes | battery, cover (state, position), set_limits, motor_direction, tilt_mode, child_lock |
| Picture | ![Manhot MB60L-ZG-ZT-TY](https://www.zigbee2mqtt.io/images/devices/MB60L-ZG-ZT-TY.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Set limits (enum)
Value can be found in the published state on the `set_limits` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_limits": NEW_VALUE}`.
The possible values are: `up`, `down`, `reset`.

### Motor direction (enum)
Motor Steering.
Value can be found in the published state on the `motor_direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_direction": NEW_VALUE}`.
The possible values are: `normal`, `reversed`.

### Tilt mode (binary)
Step movement.
Value can be found in the published state on the `tilt_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tilt_mode": NEW_VALUE}`.
If value equals `ON` tilt mode is ON, if `OFF` OFF.

### Child lock (binary)
Child Lock.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `ON` child lock is ON, if `OFF` OFF.

