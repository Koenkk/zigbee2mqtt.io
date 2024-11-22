---
title: "Tuya RB-SRAIN01 control via MQTT"
description: "Integrate your Tuya RB-SRAIN01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-09-01T12:39:25
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya RB-SRAIN01

|     |     |
|-----|-----|
| Model | RB-SRAIN01  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Solar rain sensor |
| Exposes | illuminance, illuminance_average_20min, illuminance_maximum_today, cleaning_reminder, rain_intensity, rain, battery, linkquality |
| Picture | ![Tuya RB-SRAIN01](https://www.zigbee2mqtt.io/images/devices/RB-SRAIN01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Illuminance (numeric)
Raw measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Illuminance average 20min (numeric)
Illuminance average for the last 20 minutes.
Value can be found in the published state on the `illuminance_average_20min` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Illuminance maximum today (numeric)
Illuminance maximum for the last 24 hours.
Value can be found in the published state on the `illuminance_maximum_today` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Cleaning reminder (binary)
Cleaning reminder.
Value can be found in the published state on the `cleaning_reminder` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` cleaning reminder is ON, if `false` OFF.

### Rain intensity (numeric)
Rainfall intensity.
Value can be found in the published state on the `rain_intensity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Rain (binary)
Indicates whether the device detected rainfall.
Value can be found in the published state on the `rain` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` rain is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

