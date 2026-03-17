---
title: "Hejhome GKZ-SA141 control via MQTT"
description: "Integrate your Hejhome GKZ-SA141 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:37:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hejhome GKZ-SA141

|     |     |
|-----|-----|
| Model | GKZ-SA141  |
| Vendor  | [Hejhome](/supported-devices/#v=Hejhome)  |
| Description | Sound and flash siren |
| Exposes | battery, alarm, volume |
| Picture | ![Hejhome GKZ-SA141](https://www.zigbee2mqtt.io/images/devices/GKZ-SA141.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Alarm (binary)
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `true` alarm is ON, if `false` OFF.

### Volume (numeric)
Volume of siren.
Value can be found in the published state on the `volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"volume": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"volume": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

