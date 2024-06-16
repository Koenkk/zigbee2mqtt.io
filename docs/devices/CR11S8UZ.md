---
title: "ORVIBO CR11S8UZ control via MQTT"
description: "Integrate your ORVIBO CR11S8UZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-11-09T18:37:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ORVIBO CR11S8UZ

|     |     |
|-----|-----|
| Model | CR11S8UZ  |
| Vendor  | [ORVIBO](/supported-devices/#v=ORVIBO)  |
| Description | Smart sticker switch |
| Exposes | action, linkquality |
| Picture | ![ORVIBO CR11S8UZ](https://www.zigbee2mqtt.io/images/devices/CR11S8UZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `button_1_click`, `button_1_hold`, `button_1_release`, `button_2_click`, `button_2_hold`, `button_2_release`, `button_3_click`, `button_3_hold`, `button_3_release`, `button_4_click`, `button_4_hold`, `button_4_release`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

