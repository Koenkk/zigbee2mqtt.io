---
title: "Spacetronik ZB-DG03 control via MQTT"
description: "Integrate your Spacetronik ZB-DG03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Spacetronik ZB-DG03

|     |     |
|-----|-----|
| Model | ZB-DG03  |
| Vendor  | [Spacetronik](/supported-devices/#v=Spacetronik)  |
| Description | LPG gas sensor |
| Exposes | gas, preheat, fault, lifecycle |
| Picture | ![Spacetronik ZB-DG03](https://www.zigbee2mqtt.io/images/devices/ZB-DG03.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Gas (binary)
Indicates whether the device detected gas.
Value can be found in the published state on the `gas` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` gas is ON, if `false` OFF.

### Preheat (binary)
Sensor preheat active.
Value can be found in the published state on the `preheat` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` preheat is ON, if `false` OFF.

### Fault (enum)
Fault status of the device (none = no fault).
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `fault`, `serious_fault`, `sensor_fault`, `probe_fault`, `power_fault`.

### Lifecycle (binary)
Sensor lifetime limit.
Value can be found in the published state on the `lifecycle` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` lifecycle is ON, if `false` OFF.

