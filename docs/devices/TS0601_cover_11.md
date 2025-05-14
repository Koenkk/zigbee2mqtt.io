---
title: "Tervix TS0601_cover_11 control via MQTT"
description: "Integrate your Tervix Pro Line Curtain (Tuya TS0601) via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-14T08:20:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_cover_11

|     |     |
|-----|-----|
| Model | TS0601_cover_11  |
| Vendor  | [Tervix](/supported-devices/#v=Tervix)  |
| Description | Cover motor |
| Exposes | work_state, cover (state, position), opening_mode, motor_direction, set_upper_limit, factory_reset |
| Picture | ![Tuya TS0601_cover_1](https://www.zigbee2mqtt.io/images/devices/TS0601_cover_11.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Work state (text)
Value can be found in the published state on the `work_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Opening mode (enum)
Opening mode.
Value can be found in the published state on the `opening_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"opening_mode": NEW_VALUE}`.
The possible values are: `tilt`, `lift`.

### Motor direction (enum)
Motor side.
Value can be found in the published state on the `motor_direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_direction": NEW_VALUE}`.
The possible values are: `left`, `right`.

### Set upper limit (enum)
Learning.
Value can be found in the published state on the `set_upper_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_upper_limit": NEW_VALUE}`.
The possible values are: `start`, `stop`.

### Factory reset (enum)
Remove limits.
Value can be found in the published state on the `factory_reset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset": NEW_VALUE}`.
The possible values are: `SET`.

