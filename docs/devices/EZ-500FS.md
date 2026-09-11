---
title: "Excellux EZ-500FS control via MQTT"
description: "Integrate your Excellux EZ-500FS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-08-30T18:06:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Excellux EZ-500FS

|     |     |
|-----|-----|
| Model | EZ-500FS  |
| Vendor  | [Excellux](/supported-devices/#v=Excellux)  |
| Description | Split-type sensor for detecting soil moisture, temperature and humidity |
| Exposes | battery, probe_temperature_warning, temperature_warning, humidity_warning, moisture_warning, probe_temperature, moisture, temperature, humidity, sampling_interval, probe_temperature_calibration, probe_temperature_v0_set, probe_temperature_v1_set, temperature_calibration, temperature_v0_set, temperature_v1_set, humidity_calibration, humidity_v0_set, humidity_v1_set, moisture_calibration, moisture_v0_set, moisture_v1_set |
| Picture | ![Excellux EZ-500FS](https://www.zigbee2mqtt.io/images/devices/EZ-500FS.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Battery (numeric)
Battery level.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Probe temperature warning (enum)
Probe temperature sensor warning. Low: temperature is lower than v0 and v1. High: temperature is higher than v0 and v1.
Value can be found in the published state on the `probe_temperature_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Temperature warning (enum)
Temperature warning. Low: temperature is lower than v0 and v1. High: temperature is higher than v0 and v1.
Value can be found in the published state on the `temperature_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Humidity warning (enum)
Humidity warning. Low: humidity is lower than v0 and v1. High: humidity is higher than v0 and v1.
Value can be found in the published state on the `humidity_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Moisture warning (enum)
Moisture warning. Low: Moisture is lower than v0 and v1. High: Moisture is higher than v0 and v1.
Value can be found in the published state on the `moisture_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Probe temperature (numeric)
Probe temperature sensor.
Value can be found in the published state on the `probe_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-40` and the maximum value is `120`.
The unit of this value is `°C`.

### Moisture (numeric)
Soil moisture.
Value can be found in the published state on the `moisture` property.
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

### Sampling interval (numeric)
Sampling interval.
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

### Moisture calibration (numeric)
Coefficient 0.2~1.5. Higher for loose‑hard soil, lower for wet soft clay..
Value can be found in the published state on the `moisture_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"moisture_calibration": NEW_VALUE}`.
The minimal value is `0.2` and the maximum value is `1.5`.

### Moisture v0 set (numeric)
Moisture v0 threshold setting.
Value can be found in the published state on the `moisture_v0_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"moisture_v0_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Moisture v1 set (numeric)
MMoisture v1 threshold setting.
Value can be found in the published state on the `moisture_v1_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"moisture_v1_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

