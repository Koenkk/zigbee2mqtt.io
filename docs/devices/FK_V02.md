---
title: "FrankEver FK_V02 control via MQTT"
description: "Integrate your FrankEver FK_V02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-05-01T14:47:09Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# FrankEver FK_V02

|     |     |
|-----|-----|
| Model | FK_V02  |
| Vendor  | [FrankEver](/supported-devices/#v=FrankEver)  |
| Description | Zigbee smart water valve |
| Exposes | switch (state), threshold, timer |
| Picture | ![FrankEver FK_V02](https://www.zigbee2mqtt.io/images/devices/FK_V02.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Threshold (numeric)
Valve open percentage (multiple of 10).
Value can be found in the published state on the `threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Timer (numeric)
Countdown timer in minutes.
Value can be found in the published state on the `timer` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"timer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `min`.

