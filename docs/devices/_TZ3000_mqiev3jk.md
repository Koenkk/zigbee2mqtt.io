---
title: "Tuya _TZ3000_mqiev3jk control via MQTT"
description: "Integrate your Tuya _TZ3000_mqiev3jk via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya _TZ3000_mqiev3jk

|     |     |
|-----|-----|
| Model | _TZ3000_mqiev3jk  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Solar powered rain sensor |
| Exposes | water_leak, battery_low, battery, tamper |
| Picture | ![Tuya _TZ3000_mqiev3jk](https://www.zigbee2mqtt.io/images/devices/_TZ3000_mqiev3jk.png) |


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

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

