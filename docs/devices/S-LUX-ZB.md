---
title: "Tuya S-LUX-ZB control via MQTT"
description: "Integrate your Tuya S-LUX-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-08-01T20:41:55Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya S-LUX-ZB

|     |     |
|-----|-----|
| Model | S-LUX-ZB  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Light sensor |
| Exposes | battery, illuminance, brightness_level |
| Picture | ![Tuya S-LUX-ZB](https://www.zigbee2mqtt.io/images/devices/S-LUX-ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Brightness level (enum)
Value can be found in the published state on the `brightness_level` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `LOW`, `MEDIUM`, `HIGH`.

