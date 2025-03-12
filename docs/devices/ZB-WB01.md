---
title: "easyiot ZB-WB01 control via MQTT"
description: "Integrate your easyiot ZB-WB01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-31T20:34:53
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# easyiot ZB-WB01

|     |     |
|-----|-----|
| Model | ZB-WB01  |
| Vendor  | [easyiot](/supported-devices/#v=easyiot)  |
| Description | 1-button remote control |
| Exposes | action, battery |
| Picture | ![easyiot ZB-WB01](https://www.zigbee2mqtt.io/images/devices/ZB-WB01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `1_single`, `1_double`, `1_long`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

