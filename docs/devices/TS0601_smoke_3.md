---
title: "Tuya TS0601_smoke_3 control via MQTT"
description: "Integrate your Tuya TS0601_smoke_3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-04-27T17:39:26
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_smoke_3

|     |     |
|-----|-----|
| Model | TS0601_smoke_3  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Photoelectric smoke detector |
| Exposes | smoke, battery_state, linkquality |
| Picture | ![Tuya TS0601_smoke_3](https://www.zigbee2mqtt.io/images/devices/TS0601_smoke_3.png) |
| White-label | KnockautX SMOAL024 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery state (enum)
State of the battery.
Value can be found in the published state on the `battery_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `medium`, `high`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

