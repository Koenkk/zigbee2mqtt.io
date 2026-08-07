---
title: "Excellux EZ-104UPT control via MQTT"
description: "Integrate your Excellux EZ-104UPT via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-07-30T18:55:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Excellux EZ-104UPT

|     |     |
|-----|-----|
| Model | EZ-104UPT  |
| Vendor  | [Excellux](/supported-devices/#v=Excellux)  |
| Description | Contact sensor and vibration sensor |
| Exposes | uv_warning, pressure_warn, pressure_tend, temperature_warning, illuminance_warning, battery, temperature, illuminance, uv, uv_level, pressure, pressure_calibration, pressure_v0_set, pressure_v1_set, uv_calibration, sampling_interval, temperature_calibration, temperature_v0_set, temperature_v1_set, illuminance_v0, illuminance_v1, illuminance_calibration |
| Picture | ![Excellux EZ-104UPT](https://www.zigbee2mqtt.io/images/devices/EZ-104UPT.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `pressure_calibration`: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.

* `pressure_precision`: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Uv warning (enum)
UV Warning.Low < Moderate < High < Very High < Extreme.
Value can be found in the published state on the `uv_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `Low`, `Moderate`, `High`, `Very High`, `Extreme`.

### Pressure warn (enum)
none: pressure is between v0 and v1;low : pressure is lower than v0 and v1;high: pressure is higher than v0 and v1.
Value can be found in the published state on the `pressure_warn` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Pressure tend (enum)
normal: Minor fluctuations in air pressure;Rising: Air pressure shows a steady upward trend;Falling: Air pressure shows a steady downward trend.
Value can be found in the published state on the `pressure_tend` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `rise`, `fall`.

### Temperature warning (enum)
Temperature warning. Low: temperature is lower than v0 and v1. High: temperature is higher than v0 and v1.
Value can be found in the published state on the `temperature_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Illuminance warning (enum)
Illuminance warning level,low:low,high:high,none.
Value can be found in the published state on the `illuminance_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

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

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Uv (numeric)
uv Value.
Value can be found in the published state on the `uv` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `3300`.
The unit of this value is `Volt`.

### Uv level (numeric)
uv level from 0.0 to 15.0.
Value can be found in the published state on the `uv_level` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `15`.

### Pressure (numeric)
pressure by sensor.
Value can be found in the published state on the `pressure` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `300` and the maximum value is `1100`.
The unit of this value is `hPa`.

### Pressure calibration (numeric)
calibration pressure.
Value can be found in the published state on the `pressure_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pressure_calibration": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `10`.
The unit of this value is `hPa`.

### Pressure v0 set (numeric)
set v0 pressure.
Value can be found in the published state on the `pressure_v0_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pressure_v0_set": NEW_VALUE}`.
The minimal value is `300` and the maximum value is `1100`.
The unit of this value is `hPa`.

### Pressure v1 set (numeric)
set v1 pressure.
Value can be found in the published state on the `pressure_v1_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pressure_v1_set": NEW_VALUE}`.
The minimal value is `300` and the maximum value is `1100`.
The unit of this value is `hPa`.

### Uv calibration (numeric)
calibration uv.
Value can be found in the published state on the `uv_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"uv_calibration": NEW_VALUE}`.
The minimal value is `-1` and the maximum value is `1`.

### Sampling interval (numeric)
Sampling interval.
Value can be found in the published state on the `sampling_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sampling_interval": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `1200`.
The unit of this value is `s`.

### Temperature calibration (numeric)
Temperature calibration.
Value can be found in the published state on the `temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_calibration": NEW_VALUE}`.
The minimal value is `-2` and the maximum value is `2`.
The unit of this value is `°C`.

### Temperature v0 set (numeric)
Temperature v0 threshold setting.
Value can be found in the published state on the `temperature_v0_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_v0_set": NEW_VALUE}`.
The minimal value is `-40` and the maximum value is `85`.
The unit of this value is `°C`.

### Temperature v1 set (numeric)
Temperature v1 threshold setting.
Value can be found in the published state on the `temperature_v1_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_v1_set": NEW_VALUE}`.
The minimal value is `-40` and the maximum value is `85`.
The unit of this value is `°C`.

### Illuminance v0 (numeric)
Illuminance v0 threshold setting.
Value can be found in the published state on the `illuminance_v0` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_v0": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.
The unit of this value is `lux`.

### Illuminance v1 (numeric)
Illuminance v1 threshold setting.
Value can be found in the published state on the `illuminance_v1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_v1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.
The unit of this value is `lux`.

### Illuminance calibration (numeric)
Illuminance calibration.
Value can be found in the published state on the `illuminance_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_calibration": NEW_VALUE}`.
The minimal value is `-1000` and the maximum value is `1000`.
The unit of this value is `lux`.

