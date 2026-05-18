---
title: "Tuya TS0301_dual_rail control via MQTT"
description: "Integrate your Tuya TS0301_dual_rail via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:20:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0301_dual_rail

|     |     |
|-----|-----|
| Model | TS0301_dual_rail  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Top-down bottom-up dual motor shade |
| Exposes | cover (state, position), battery |
| Picture | ![Tuya TS0301_dual_rail](https://www.zigbee2mqtt.io/images/devices/TS0301_dual_rail.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Cover (bottom endpoint)
The current state of this cover is in the published state under the `state_bottom` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_bottom": "OPEN"}`, `{"state_bottom": "CLOSE"}`, `{"state_bottom": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_bottom": VALUE}` where `VALUE` is a number between `0` and `100`.

### Cover (top endpoint)
The current state of this cover is in the published state under the `state_top` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_top": "OPEN"}`, `{"state_top": "CLOSE"}`, `{"state_top": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_top": VALUE}` where `VALUE` is a number between `0` and `100`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

