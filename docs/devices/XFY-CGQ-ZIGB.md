---
title: "Tuya XFY-CGQ-ZIGB control via MQTT"
description: "Integrate your Tuya XFY-CGQ-ZIGB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-01-31T17:42:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya XFY-CGQ-ZIGB

|     |     |
|-----|-----|
| Model | XFY-CGQ-ZIGB  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Illuminance sensor |
| Exposes | illuminance, brightness_state |
| Picture | ![Tuya XFY-CGQ-ZIGB](https://www.zigbee2mqtt.io/images/devices/XFY-CGQ-ZIGB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Brightness state (enum)
Brightness state.
Value can be found in the published state on the `brightness_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `middle`, `high`, `strong`.

