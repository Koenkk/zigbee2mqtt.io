---
title: "Swann SWO-MOS1PA control via MQTT"
description: "Integrate your Swann SWO-MOS1PA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-06-08T17:35:15Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Swann SWO-MOS1PA

|     |     |
|-----|-----|
| Model | SWO-MOS1PA  |
| Vendor  | [Swann](/supported-devices/#v=Swann)  |
| Description | Motion and temperature sensor |
| Exposes | occupancy, battery_low, tamper |
| Picture | ![Swann SWO-MOS1PA](https://www.zigbee2mqtt.io/images/devices/SWO-MOS1PA.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Temperature not supported
Device is listed as having temperature detection. This feature is still being investigated.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

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

