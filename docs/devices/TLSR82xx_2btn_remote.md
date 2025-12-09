---
title: "Telink TLSR82xx_2btn_remote control via MQTT"
description: "Integrate your Telink TLSR82xx_2btn_remote via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Telink TLSR82xx_2btn_remote

|     |     |
|-----|-----|
| Model | TLSR82xx_2btn_remote  |
| Vendor  | [Telink](/supported-devices/#v=Telink)  |
| Description | 2 button remote |
| Exposes | battery, action |
| Picture | ![Telink TLSR82xx_2btn_remote](https://www.zigbee2mqtt.io/images/devices/TLSR82xx_2btn_remote.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on_1`, `off_1`, `on_2`, `off_2`.

