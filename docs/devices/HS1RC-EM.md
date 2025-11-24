---
title: "Heiman HS1RC-EM control via MQTT"
description: "Integrate your Heiman HS1RC-EM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-01T19:02:25Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS1RC-EM

|     |     |
|-----|-----|
| Model | HS1RC-EM  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Smart remote controller |
| Exposes | battery, action |
| Picture | ![Heiman HS1RC-EM](https://www.zigbee2mqtt.io/images/devices/HS1RC-EM.png) |


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
The possible values are: `emergency`, `disarm`, `arm_partial_zones`, `arm_all_zones`.

