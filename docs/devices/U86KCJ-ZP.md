---
title: "Tuya U86KCJ-ZP control via MQTT"
description: "Integrate your Tuya U86KCJ-ZP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-02-04T20:38:05Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya U86KCJ-ZP

|     |     |
|-----|-----|
| Model | U86KCJ-ZP  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart 6 key scene wall switch |
| Exposes | action, linkquality |
| Picture | ![Tuya U86KCJ-ZP](https://www.zigbee2mqtt.io/images/devices/U86KCJ-ZP.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `scene_1`, `scene_2`, `scene_3`, `scene_4`, `scene_5`, `scene_6`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

