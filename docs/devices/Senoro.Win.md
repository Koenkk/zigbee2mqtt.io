---
title: "Senoro Senoro.Win control via MQTT"
description: "Integrate your Senoro Senoro.Win via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-06-01T17:54:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Senoro Senoro.Win

|     |     |
|-----|-----|
| Model | Senoro.Win  |
| Vendor  | [Senoro](/supported-devices/#v=Senoro)  |
| Description | Senoro window alarm |
| Exposes | opening_state, alarm, battery |
| Picture | ![Senoro Senoro.Win](https://www.zigbee2mqtt.io/images/devices/Senoro.Win.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Opening state (enum)
Value can be found in the published state on the `opening_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `open`, `closed`, `tilted`.

### Alarm (binary)
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `true` alarm is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

