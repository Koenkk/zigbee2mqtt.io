---
title: "HEIMAN HS2AQ-EM control via MQTT"
description: "Integrate your HEIMAN HS2AQ-EM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-09-30T20:52:56Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HEIMAN HS2AQ-EM

|     |     |
|-----|-----|
| Model | HS2AQ-EM  |
| Vendor  | [HEIMAN](/supported-devices/#v=HEIMAN)  |
| Description | Air quality monitor |
| Exposes | battery, temperature, humidity, pm25, hcho, voc, aqi, pm10, battery_state, linkquality |
| Picture | ![HEIMAN HS2AQ-EM](https://www.zigbee2mqtt.io/images/devices/HS2AQ-EM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `pm25_calibration`: Calibrates the pm25 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `voc_calibration`: Calibrates the voc value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### PM25 (numeric)
Measured PM2.5 (particulate matter) concentration.
Value can be found in the published state on the `pm25` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### HCHO (numeric)
Measured HCHO value.
Value can be found in the published state on the `hcho` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mg/m³`.

### VOC (numeric)
Measured VOC value.
Value can be found in the published state on the `voc` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Aqi (numeric)
Air quality index.
Value can be found in the published state on the `aqi` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### PM10 (numeric)
Measured PM10 (particulate matter) concentration.
Value can be found in the published state on the `pm10` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Battery state (enum)
Value can be found in the published state on the `battery_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `not_charging`, `charging`, `charged`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

