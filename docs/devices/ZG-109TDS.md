---
title: "Excellux ZG-109TDS control via MQTT"
description: "Integrate your Excellux ZG-109TDS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-31T19:17:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Excellux ZG-109TDS

|     |     |
|-----|-----|
| Model | ZG-109TDS  |
| Vendor  | [Excellux](/supported-devices/#v=Excellux)  |
| Description | Probe Temperature with EC && TDS && Salinity && SG && ht(humidity and temperature) Sensor |
| Exposes | probe_temperature_warning, temperature_warning, humidity_warning, tds_warning, ec_warning, mode, battery, probe_temperature, temperature, humidity, tds, salinity, ec, sg, sampling_interval, probe_temperature_calibration, probe_temperature_v0_set, probe_temperature_v1_set, tds_warning_set, ec_v0_set, ec_v1_set, temperature_calibration, temperature_v0_set, temperature_v1_set, humidity_calibration, humidity_v0_set, humidity_v1_set |
| Picture | ![Excellux ZG-109TDS](https://www.zigbee2mqtt.io/images/devices/ZG-109TDS.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Probe temperature warning (enum)
Probe temperature sensor warning.low :temperature is lower than v0 and v1.high:temperature is higher than v0 and v1.
Value can be found in the published state on the `probe_temperature_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Temperature warning (enum)
Temperature warning.low :temperature is lower than v0 and v1.high:temperature is higher than v0 and v1.
Value can be found in the published state on the `temperature_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Humidity warning (enum)
Humidity warning.low :humidity is lower than v0 and v1.high:humidity is higher than v0 and v1.
Value can be found in the published state on the `humidity_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Tds warning (enum)
TDS warning.high:TDS is higher than user setting.
Value can be found in the published state on the `tds_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `high`.

### Ec warning (enum)
ec warning.low :ec is lower than v0 and v1.high:ec is higher than v0 and v1.
Value can be found in the published state on the `ec_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Mode (enum)
Freshwater or Seawater.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `freshwater`, `seawater`.

### Battery (numeric)
Battery percentage.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `1` and the maximum value is `100`.
The unit of this value is `%`.

### Probe temperature (numeric)
Probe temperature sensor.
Value can be found in the published state on the `probe_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-40` and the maximum value is `120`.
The unit of this value is `°C`.

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

### Tds (numeric)
Total Dissolved Solids(0~13000 ppm).
Value can be found in the published state on the `tds` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `13000`.
The unit of this value is `ppm`.

### Salinity (numeric)
Salinity value(0.1‰~50‰).
Value can be found in the published state on the `salinity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0.1` and the maximum value is `50`.
The unit of this value is `‰`.

### Ec (numeric)
EC value @ 25°C Standard Temperature (0~20000us/cm).
Value can be found in the published state on the `ec` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `20000`.
The unit of this value is `μS/cm`.

### Sg (numeric)
specific gravity(1.000~1.100).
Value can be found in the published state on the `sg` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `1000` and the maximum value is `1100`.

### Sampling interval (numeric)
sampling interval.
Value can be found in the published state on the `sampling_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sampling_interval": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `1200`.
The unit of this value is `s`.

### Probe temperature calibration (numeric)
Probe temperature sensor calibration.
Value can be found in the published state on the `probe_temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"probe_temperature_calibration": NEW_VALUE}`.
The minimal value is `-2` and the maximum value is `2`.
The unit of this value is `°C`.

### Probe temperature v0 set (numeric)
Probe temperature sensor v0 threshold setting.
Value can be found in the published state on the `probe_temperature_v0_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"probe_temperature_v0_set": NEW_VALUE}`.
The minimal value is `-40` and the maximum value is `125`.
The unit of this value is `°C`.

### Probe temperature v1 set (numeric)
Probe temperature sensor v1 threshold setting.
Value can be found in the published state on the `probe_temperature_v1_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"probe_temperature_v1_set": NEW_VALUE}`.
The minimal value is `-40` and the maximum value is `125`.
The unit of this value is `°C`.

### Tds warning set (numeric)
TDS alarm threshold settings.
Value can be found in the published state on the `tds_warning_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tds_warning_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `13000`.
The unit of this value is `ppm`.

### Ec v0 set (numeric)
EC v0 threshold setting.
Value can be found in the published state on the `ec_v0_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ec_v0_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `20000`.
The unit of this value is `μS/cm`.

### Ec v1 set (numeric)
EC v1 threshold setting.
Value can be found in the published state on the `ec_v1_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ec_v1_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `20000`.
The unit of this value is `μS/cm`.

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

### Humidity calibration (numeric)
Humidity calibration.
Value can be found in the published state on the `humidity_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_calibration": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `10`.
The unit of this value is `%`.

### Humidity v0 set (numeric)
Humidity v0 threshold setting.
Value can be found in the published state on the `humidity_v0_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_v0_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Humidity v1 set (numeric)
Humidity v1 threshold setting.
Value can be found in the published state on the `humidity_v1_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_v1_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

