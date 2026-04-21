---
title: "Tuya TS0601_water_valve_1 control via MQTT"
description: "Integrate your Tuya TS0601_water_valve_1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:39
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_water_valve_1

|     |     |
|-----|-----|
| Model | TS0601_water_valve_1  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Water valve |
| Exposes | switch (state), position, position_current |
| Picture | ![Tuya TS0601_water_valve_1](https://www.zigbee2mqtt.io/images/devices/TS0601_water_valve_1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Position (numeric)
Target valve position.
Value can be found in the published state on the `position` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Position current (numeric)
Current valve position (feedback, steps of 10%).
Value can be found in the published state on the `position_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

