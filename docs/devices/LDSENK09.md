---
title: "ADEO LDSENK09 control via MQTT"
description: "Integrate your ADEO LDSENK09 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-07-01T08:15:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ADEO LDSENK09

|     |     |
|-----|-----|
| Model | LDSENK09  |
| Vendor  | [ADEO](/supported-devices/#v=ADEO)  |
| Description | Security system key fob |
| Exposes | action, linkquality |
| Picture | ![ADEO LDSENK09](https://www.zigbee2mqtt.io/images/devices/LDSENK09.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `panic`, `disarm`, `arm_partial_zones`, `arm_all_zones`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

