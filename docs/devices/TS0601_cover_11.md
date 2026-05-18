---
title: "Tuya TS0601_cover_11 control via MQTT"
description: "Integrate your Tuya TS0601_cover_11 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:37:29
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
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Cover motor |
| Exposes | cover (state, position), dot_mode, direction, border, speed, work_state |
| Picture | ![Tuya TS0601_cover_11](https://www.zigbee2mqtt.io/images/devices/TS0601_cover_11.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Dot mode (enum)
Dot mode.
Value can be found in the published state on the `dot_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dot_mode": NEW_VALUE}`.
The possible values are: `single`, `multi`.

### Direction (enum)
Motor direction.
Value can be found in the published state on the `direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"direction": NEW_VALUE}`.
The possible values are: `normal`, `reversed`.

### Border (enum)
Border mode.
Value can be found in the published state on the `border` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"border": NEW_VALUE}`.
The possible values are: `UP`, `Down`, `Delete`.

### Speed (numeric)
Motor speed.
Value can be found in the published state on the `speed` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"speed": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `5`.

### Work state (text)
Value can be found in the published state on the `work_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.

