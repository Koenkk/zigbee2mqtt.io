---
title: "TuYa TS0601_smoke_2 control via MQTT"
description: "Integrate your TuYa TS0601_smoke_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-01-01T08:59:10
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa TS0601_smoke_2

|     |     |
|-----|-----|
| Model | TS0601_smoke_2  |
| Vendor  | [TuYa](/supported-devices/#v=TuYa)  |
| Description | Photoelectric smoke detector |
| Exposes | smoke, battery, test, smoke_concentration, device_fault, linkquality |
| Picture | ![TuYa TS0601_smoke_2](https://www.zigbee2mqtt.io/images/devices/TS0601_smoke_2.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported..
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Test (binary)
Indicates whether the device is being tested.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

### Smoke concentration (numeric)
Parts per million of smoke detected.
Value can be found in the published state on the `smoke_concentration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### Device fault (binary)
Indicates a fault with the device.
Value can be found in the published state on the `device_fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` device fault is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

