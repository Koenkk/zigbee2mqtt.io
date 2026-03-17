---
title: "Slacky-DIY SLACKY_DIY_CO2_SENSOR_R01 control via MQTT"
description: "Integrate your Slacky-DIY SLACKY_DIY_CO2_SENSOR_R01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:29:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Slacky-DIY SLACKY_DIY_CO2_SENSOR_R01

|     |     |
|-----|-----|
| Model | SLACKY_DIY_CO2_SENSOR_R01  |
| Vendor  | [Slacky-DIY](/supported-devices/#v=Slacky-DIY)  |
| Description | Tuya CO2 sensor with custom Firmware |
| Exposes | co2 |
| Picture | ![Slacky-DIY SLACKY_DIY_CO2_SENSOR_R01](https://www.zigbee2mqtt.io/images/devices/SLACKY_DIY_CO2_SENSOR_R01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
[Original project description](https://github.com/slacky1965/tuya_co2sensor_zrd)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### CO2 (numeric)
Measured value.
Value can be found in the published state on the `co2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `ppm`.

