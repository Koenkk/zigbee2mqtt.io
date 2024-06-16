---
title: "HEIMAN HS1CG-E_3.0 control via MQTT"
description: "Integrate your HEIMAN HS1CG-E_3.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-01T19:02:25Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HEIMAN HS1CG-E_3.0

|     |     |
|-----|-----|
| Model | HS1CG-E_3.0  |
| Vendor  | [HEIMAN](/supported-devices/#v=HEIMAN)  |
| Description | Combustible gas sensor |
| Exposes | gas, battery_low, tamper, linkquality |
| Picture | ![HEIMAN HS1CG-E_3.0](https://www.zigbee2mqtt.io/images/devices/HS1CG-E_3.0.png) |


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

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

