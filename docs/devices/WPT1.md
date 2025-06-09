---
title: "Hive WPT1 control via MQTT"
description: "Integrate your Hive WPT1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-02-04T20:38:05Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive WPT1

|     |     |
|-----|-----|
| Model | WPT1  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Heating thermostat remote control |
| Exposes | battery |
| Picture | ![Hive WPT1](https://www.zigbee2mqtt.io/images/devices/WPT1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

