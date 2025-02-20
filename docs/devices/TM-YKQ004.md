---
title: "Tuya TM-YKQ004 control via MQTT"
description: "Integrate your Tuya TM-YKQ004 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-01T18:54:40
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TM-YKQ004

|     |     |
|-----|-----|
| Model | TM-YKQ004  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Zigbee 4 button remote - 12 scene |
| Exposes | battery, action |
| Picture | ![Tuya TM-YKQ004](https://www.zigbee2mqtt.io/images/devices/TM-YKQ004.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Reset/Re-pairing
Unfortunately it is currently unknown how to bring the device in reset or re-pairing mode.
Please be that kind and add this information, if your are in knowledge of it.
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
The possible values are: `1_single`, `1_double`, `1_hold`, `2_single`, `2_double`, `2_hold`, `3_single`, `3_double`, `3_hold`, `4_single`, `4_double`, `4_hold`.
