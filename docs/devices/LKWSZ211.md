---
title: "Adaprox LKWSZ211 control via MQTT"
description: "Integrate your Adaprox LKWSZ211 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-01-31T19:37:46
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Adaprox LKWSZ211

|     |     |
|-----|-----|
| Model | LKWSZ211  |
| Vendor  | [Adaprox](/supported-devices/#v=Adaprox)  |
| Description | Remote wireless switch (2-key) |
| Exposes | battery, action, linkquality |
| Picture | ![Adaprox LKWSZ211](https://www.zigbee2mqtt.io/images/devices/LKWSZ211.png) |


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
The possible values are: `button_1_single`, `button_1_double`, `button_1_hold`, `button_2_single`, `button_2_double`, `button_2_hold`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

