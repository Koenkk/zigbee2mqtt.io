---
title: "Tuya DCR-RQJ control via MQTT"
description: "Integrate your Tuya DCR-RQJ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-30T19:41:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya DCR-RQJ

|     |     |
|-----|-----|
| Model | DCR-RQJ  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Carbon monoxide sensor gas leak detector |
| Exposes | gas, gas_value, carbon_monoxide, co, linkquality |
| Picture | ![Tuya DCR-RQJ](https://www.zigbee2mqtt.io/images/devices/DCR-RQJ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co_calibration`: Calibrates the co value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Gas (binary)
Indicates whether the device detected gas.
Value can be found in the published state on the `gas` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` gas is ON, if `false` OFF.

### Gas value (numeric)
Measured gas concentration.
Value can be found in the published state on the `gas_value` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `LEL %`.

### Carbon monoxide (binary)
Indicates if CO (carbon monoxide) is detected.
Value can be found in the published state on the `carbon_monoxide` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` carbon monoxide is ON, if `false` OFF.

### CO (numeric)
The measured CO (carbon monoxide) value.
Value can be found in the published state on the `co` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

