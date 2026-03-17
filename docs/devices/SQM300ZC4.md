---
title: "ShinaSystem SQM300ZC4 control via MQTT"
description: "Integrate your ShinaSystem SQM300ZC4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:30:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ShinaSystem SQM300ZC4

|     |     |
|-----|-----|
| Model | SQM300ZC4  |
| Vendor  | [ShinaSystem](/supported-devices/#v=ShinaSystem)  |
| Description | SiHAS remote control 4 full button |
| Exposes | battery, action |
| Picture | ![ShinaSystem SQM300ZC4](https://www.zigbee2mqtt.io/images/devices/SQM300ZC4.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `1_single`, `1_double`, `1_long`, `2_single`, `2_double`, `2_long`, `3_single`, `3_double`, `3_long`, `4_single`, `4_double`, `4_long`.

