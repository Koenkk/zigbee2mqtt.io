---
title: "Heiman HM1RC-2-E control via MQTT"
description: "Integrate your Heiman HM1RC-2-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-02-03T17:47:43Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HM1RC-2-E

|     |     |
|-----|-----|
| Model | HM1RC-2-E  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Smart remote controller |
| Exposes | battery, action |
| Picture | ![Heiman HM1RC-2-E](https://www.zigbee2mqtt.io/images/devices/HM1RC-2-E.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
At the top of the device there is a small hole, insert a thin needle and hold it for around five seconds.
Green LED should start flashing, and the pairing process will begin.

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
The possible values are: `emergency`, `disarm`, `arm_day_zones`, `arm_all_zones`.

