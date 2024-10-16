---
title: "ORVIBO SE20-O control via MQTT"
description: "Integrate your ORVIBO SE20-O via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-01T19:01:34
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ORVIBO SE20-O

|     |     |
|-----|-----|
| Model | SE20-O  |
| Vendor  | [ORVIBO](/supported-devices/#v=ORVIBO)  |
| Description | Smart emergency button |
| Exposes | action, linkquality |
| Picture | ![ORVIBO SE20-O](https://www.zigbee2mqtt.io/images/devices/SE20-O.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

