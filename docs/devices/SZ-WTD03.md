---
title: "Sercomm SZ-WTD03 control via MQTT"
description: "Integrate your Sercomm SZ-WTD03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-26T06:45:18
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sercomm SZ-WTD03

|     |     |
|-----|-----|
| Model | SZ-WTD03  |
| Vendor  | [Sercomm](/supported-devices/#v=Sercomm)  |
| Description | Water leak detector |
| Exposes | water_leak, battery_low |
| Picture | ![Sercomm SZ-WTD03](https://www.zigbee2mqtt.io/images/devices/SZ-WTD03.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Water leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water leak is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

