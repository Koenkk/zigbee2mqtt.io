---
title: "Tuya TS0601_smart_CO_air_box control via MQTT"
description: "Integrate your Tuya TS0601_smart_CO_air_box via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-03-01T09:06:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_smart_CO_air_box

|     |     |
|-----|-----|
| Model | TS0601_smart_CO_air_box  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart air box (carbon monoxide) |
| Exposes | carbon_monoxide, co, linkquality |
| Picture | ![Tuya TS0601_smart_CO_air_box](https://www.zigbee2mqtt.io/images/devices/TS0601_smart_CO_air_box.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co_calibration`: Calibrates the co value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

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

