---
title: "Novato ZSM-01 control via MQTT"
description: "Integrate your Novato ZSM-01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-31T19:17:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Novato ZSM-01

|     |     |
|-----|-----|
| Model | ZSM-01  |
| Vendor  | [Novato](/supported-devices/#v=Novato)  |
| Description | Curtain motor |
| Exposes | cover (state, position), control_back_mode, click_control, position_best |
| Picture | ![Novato ZSM-01](https://www.zigbee2mqtt.io/images/devices/ZSM-01.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Control back mode (enum)
Motor direction.
Value can be found in the published state on the `control_back_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"control_back_mode": NEW_VALUE}`.
The possible values are: `forward`, `back`.

### Click control (enum)
Step control (up/down).
Value can be found in the published state on the `click_control` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"click_control": NEW_VALUE}`.
The possible values are: `up`, `down`.

### Position best (numeric)
Preferred position.
Value can be found in the published state on the `position_best` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_best": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

