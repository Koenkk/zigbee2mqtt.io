---
title: "Yoolax Day-Night Shade control via MQTT"
description: "Integrate your Yoolax Day-Night Shade via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-06-30T19:08:32
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Yoolax Day-Night Shade

|     |     |
|-----|-----|
| Model | Day-Night Shade  |
| Vendor  | [Yoolax](/supported-devices/#v=Yoolax)  |
| Description | Top-down bottom-up day/night shade |
| Exposes | cover (state, position), battery |
| Picture | ![Yoolax Day-Night Shade](https://www.zigbee2mqtt.io/images/devices/Day-Night-Shade.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_top_rail`: Invert the top rail so that 'open' (position 100) raises the rail instead of lowering it; default false keeps the upstream convention (position 100 = down). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

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
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

