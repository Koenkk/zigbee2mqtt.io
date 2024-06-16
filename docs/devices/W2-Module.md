---
title: "FireAngel W2-Module control via MQTT"
description: "Integrate your FireAngel W2-Module via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-01T19:02:25Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# FireAngel W2-Module

|     |     |
|-----|-----|
| Model | W2-Module  |
| Vendor  | [FireAngel](/supported-devices/#v=FireAngel)  |
| Description | Carbon monoxide sensor |
| Exposes | carbon_monoxide, battery, linkquality |
| Picture | ![FireAngel W2-Module](https://www.zigbee2mqtt.io/images/devices/W2-Module.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Carbon monoxide (binary)
Indicates if CO (carbon monoxide) is detected.
Value can be found in the published state on the `carbon_monoxide` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` carbon monoxide is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

