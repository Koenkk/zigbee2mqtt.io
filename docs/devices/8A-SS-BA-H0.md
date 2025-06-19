---
title: "Leedarson 8A-SS-BA-H0 control via MQTT"
description: "Integrate your Leedarson 8A-SS-BA-H0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-11-30T20:10:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Leedarson 8A-SS-BA-H0

|     |     |
|-----|-----|
| Model | 8A-SS-BA-H0  |
| Vendor  | [Leedarson](/supported-devices/#v=Leedarson)  |
| Description | Motion Sensor |
| Exposes | battery, occupancy |
| Picture | ![Leedarson 8A-SS-BA-H0](https://www.zigbee2mqtt.io/images/devices/8A-SS-BA-H0.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

