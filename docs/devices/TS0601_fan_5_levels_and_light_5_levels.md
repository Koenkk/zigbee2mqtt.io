---
title: "Tuya TS0601_fan_5_levels_and_light_5_levels control via MQTT"
description: "Integrate your Tuya TS0601_fan_5_levels_and_light_5_levels via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:20:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_fan_5_levels_and_light_5_levels

|     |     |
|-----|-----|
| Model | TS0601_fan_5_levels_and_light_5_levels  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Fan with 5 levels and light with 5 levels |
| Exposes | light (state, brightness), fan_state, fan_speed |
| Picture | ![Tuya TS0601_fan_5_levels_and_light_5_levels](https://www.zigbee2mqtt.io/images/devices/TS0601_fan_5_levels_and_light_5_levels.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Light 
This light supports the following features: `state`, `brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.

### Fan state (binary)
Fan on/off.
Value can be found in the published state on the `fan_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_state": NEW_VALUE}`.
If value equals `ON` fan state is ON, if `OFF` OFF.

### Fan speed (numeric)
Fan speed (1=slowest, 5=fastest).
Value can be found in the published state on the `fan_speed` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_speed": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `5`.

