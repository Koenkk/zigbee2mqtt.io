---
title: "Feibit TZSN408W-V1 control via MQTT"
description: "Integrate your Feibit TZSN408W-V1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-09-01T12:39:25
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Feibit TZSN408W-V1

|     |     |
|-----|-----|
| Model | TZSN408W-V1  |
| Vendor  | [Feibit](/supported-devices/#v=Feibit)  |
| Description | Four-Gang Scene Switch |
| Exposes | action, linkquality |
| Picture | ![Feibit TZSN408W-V1](https://www.zigbee2mqtt.io/images/devices/TZSN408W-V1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on_1`, `on_2`, `on_3`, `on_4`, `off_1`, `off_2`, `off_3`, `off_4`, `toggle_1`, `toggle_2`, `toggle_3`, `toggle_4`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

