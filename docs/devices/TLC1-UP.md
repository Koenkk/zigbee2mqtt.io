---
title: "YOKIS TLC1-UP control via MQTT"
description: "Integrate your YOKIS TLC1-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# YOKIS TLC1-UP

|     |     |
|-----|-----|
| Model | TLC1-UP  |
| Vendor  | [YOKIS](/supported-devices/#v=YOKIS)  |
| Description | Tabletop Design series 1-button remote control |
| Exposes | action, linkquality |
| Picture | ![YOKIS TLC1-UP](https://www.zigbee2mqtt.io/images/devices/TLC1-UP.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `toggle`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

