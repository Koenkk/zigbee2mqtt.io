---
title: "Excellux ZS-300TF control via MQTT"
description: "Integrate your Excellux ZS-300TF via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:20:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Excellux ZS-300TF

|     |     |
|-----|-----|
| Model | ZS-300TF  |
| Vendor  | [Excellux](/supported-devices/#v=Excellux)  |
| Description | Soil fertility sensor |
| Exposes | water_warning, soil_fertility_warning, battery, soil_moisture, soil_fertility, temperature, humidity, illuminance, report_period, soil_calibration, humidity_calibration, illuminance_calibration, temperature_calibration, soil_warning, soil_fertility_calibration, soil_fertility_set_v0, soil_fertility_set_v1 |
| Picture | ![Excellux ZS-300TF](https://www.zigbee2mqtt.io/images/devices/ZS-300TF.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `soil_moisture_calibration`: Calibrates the soil_moisture value (absolute offset), takes into effect on next report of device. The value must be a number.

* `soil_moisture_precision`: Number of digits after decimal point for soil_moisture, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Water warning (enum)
Water shortage warning.
Value can be found in the published state on the `water_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `alarm`.

### Soil fertility warning (enum)
Soil fertility warning.
Value can be found in the published state on the `soil_fertility_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Battery (numeric)
Battery percentage.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `1` and the maximum value is `100`.
The unit of this value is `%`.

### Soil moisture (numeric)
Measured soil moisture value.
Value can be found in the published state on the `soil_moisture` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Soil fertility (numeric)
Soil fertility value,between 0-5000.
Value can be found in the published state on the `soil_fertility` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `5000`.
The unit of this value is `μS/cm`.

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

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Report period (numeric)
sensor reporting period.
Value can be found in the published state on the `report_period` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"report_period": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `1200`.
The unit of this value is `S`.

### Soil calibration (numeric)
Soil Humidity calibration.
Value can be found in the published state on the `soil_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"soil_calibration": NEW_VALUE}`.
The minimal value is `-30` and the maximum value is `30`.
The unit of this value is `%`.

### Humidity calibration (numeric)
Humidity calibration.
Value can be found in the published state on the `humidity_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_calibration": NEW_VALUE}`.
The minimal value is `-30` and the maximum value is `30`.
The unit of this value is `%`.

### Illuminance calibration (numeric)
Illuminance calibration.
Value can be found in the published state on the `illuminance_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_calibration": NEW_VALUE}`.
The minimal value is `-15` and the maximum value is `1000`.
The unit of this value is `lux`.

### Temperature calibration (numeric)
Temperature calibration.
Value can be found in the published state on the `temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_calibration": NEW_VALUE}`.
The minimal value is `-2` and the maximum value is `2`.
The unit of this value is `°C`.

### Soil warning (numeric)
Soil water shortage humidity value.
Value can be found in the published state on the `soil_warning` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"soil_warning": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Soil fertility calibration (numeric)
Soil Fertility Calibration.
Value can be found in the published state on the `soil_fertility_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"soil_fertility_calibration": NEW_VALUE}`.
The minimal value is `-1000` and the maximum value is `1000`.
The unit of this value is `μS/cm`.

### Soil fertility set v0 (numeric)
When the soil fertility value is lower than what threshold should a warning be issued.
Value can be found in the published state on the `soil_fertility_set_v0` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"soil_fertility_set_v0": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5000`.
The unit of this value is `μS/cm`.

### Soil fertility set v1 (numeric)
When the soil fertility value is lower than what threshold should a warning be issued.
Value can be found in the published state on the `soil_fertility_set_v1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"soil_fertility_set_v1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5000`.
The unit of this value is `μS/cm`.

