---
title: "Nova Digital ZVL-PRO control via MQTT"
description: "Integrate your Nova Digital ZVL-PRO via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:20:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nova Digital ZVL-PRO

|     |     |
|-----|-----|
| Model | ZVL-PRO  |
| Vendor  | [Nova Digital](/supported-devices/#v=Nova%20Digital)  |
| Description | Water walve |
| Exposes | switch (state), battery, countdown, work_state, water_once |
| Picture | ![Nova Digital ZVL-PRO](https://www.zigbee2mqtt.io/images/devices/ZVL-PRO.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Countdown (numeric)
Countdown time in seconds.
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Work state (enum)
Current state of operation.
Value can be found in the published state on the `work_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `auto`, `manual`, `idle`.

### Water once (numeric)
Consumption from the last watering.
Value can be found in the published state on the `water_once` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `L`.

