---
title: "HEIMAN HS1CG-E control via MQTT"
description: "Integrate your HEIMAN HS1CG-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-04-08T17:49:06Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HEIMAN HS1CG-E

|     |     |
|-----|-----|
| Model | HS1CG-E  |
| Vendor  | [HEIMAN](/supported-devices/#v=HEIMAN)  |
| Description | Combustible gas sensor |
| Exposes | gas, battery_low, tamper |
| Picture | ![HEIMAN HS1CG-E](https://www.zigbee2mqtt.io/images/devices/HS1CG-E.png) |
| White-label | Piri HSIO18008 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Gas (binary)
Indicates whether the device detected gas.
Value can be found in the published state on the `gas` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` gas is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

