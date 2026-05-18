---
title: "Heiman HS2AQ-EF-3.0 control via MQTT"
description: "Integrate your Heiman HS2AQ-EF-3.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-12-01T20:18:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS2AQ-EF-3.0

|     |     |
|-----|-----|
| Model | HS2AQ-EF-3.0  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Air quality monitor |
| Exposes | temperature, pm25, hcho, aqi, pm10, battery, humidity, charging_status |
| Picture | ![Heiman HS2AQ-EF-3.0](https://www.zigbee2mqtt.io/images/devices/HS2AQ-EF-3.0.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `pm25_calibration`: Calibrates the pm25 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

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

### Aqi (numeric)
Air quality index.
Value can be found in the published state on the `aqi` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### PM10 (numeric)
Measured PM10 (particulate matter) concentration.
Value can be found in the published state on the `pm10` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Charging status (enum)
Current charging status.
Value can be found in the published state on the `charging_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"charging_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `NotCharged`, `Charging`, `FullyCharged`.

