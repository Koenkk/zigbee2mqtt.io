---
title: "easyiot ZB-WB08 control via MQTT"
description: "Integrate your easyiot ZB-WB08 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-31T20:34:53
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# easyiot ZB-WB08

|     |     |
|-----|-----|
| Model | ZB-WB08  |
| Vendor  | [easyiot](/supported-devices/#v=easyiot)  |
| Description | 8-button remote control |
| Exposes | action, battery, linkquality |
| Picture | ![easyiot ZB-WB08](https://www.zigbee2mqtt.io/images/devices/ZB-WB08.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `1_single`, `1_double`, `1_long`, `2_single`, `2_double`, `2_long`, `3_single`, `3_double`, `3_long`, `4_single`, `4_double`, `4_long`, `5_single`, `5_double`, `5_long`, `6_single`, `6_double`, `6_long`, `7_single`, `7_double`, `7_long`, `8_single`, `8_double`, `8_long`.

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

