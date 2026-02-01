---
title: "Excellux VABRATE-01 control via MQTT"
description: "Integrate your Excellux VABRATE-01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:20:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Excellux VABRATE-01

|     |     |
|-----|-----|
| Model | VABRATE-01  |
| Vendor  | [Excellux](/supported-devices/#v=Excellux)  |
| Description | Vibration sensor |
| Exposes | vibration, battery, vibration_sensitivity |
| Picture | ![Excellux VABRATE-01](https://www.zigbee2mqtt.io/images/devices/VABRATE-01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Vibration (binary)
Vibration state.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Vibration sensitivity (numeric)
Vibration sensitivity.
Value can be found in the published state on the `vibration_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"vibration_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `50`.
The unit of this value is `times`.

