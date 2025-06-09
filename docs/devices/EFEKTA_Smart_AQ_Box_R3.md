---
title: "EFEKTA EFEKTA_Smart_AQ_Box_R3 control via MQTT"
description: "Integrate your EFEKTA EFEKTA_Smart_AQ_Box_R3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-03-01T20:31:41
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_Smart_AQ_Box_R3

|     |     |
|-----|-----|
| Model | EFEKTA_Smart_AQ_Box_R3  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | EFEKTA Smart Air Quality Box, can control the relay, binding on some other devices |
| Exposes | pm1, pm25, pm4, pm10, pm_size, aqi_25_index, co2, voc_index, pressure, temperature, humidity, reading_delay, alarm, light_indicator, light_indicator_level, temperature_offset, humidity_offset, auto_clean_interval, manual_clean, forced_recalibration, manual_forced_recalibration, automatic_self_calibration, factory_reset_co2, enable_pm25, high_pm25, low_pm25, enable_co2_gas, high_co2_gas, low_co2_gas, enable_voc, high_voc, low_voc |
| Picture | ![EFEKTA EFEKTA_Smart_AQ_Box_R3](https://www.zigbee2mqtt.io/images/devices/EFEKTA_Smart_AQ_Box_R3.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `pm25_calibration`: Calibrates the pm25 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `pressure_calibration`: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.

* `pressure_precision`: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Pm1 (numeric)
Measured PM1.0 (particulate matter) concentration.
Value can be found in the published state on the `pm1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Pm25 (numeric)
Measured PM2.5 (particulate matter) concentration.
Value can be found in the published state on the `pm25` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Pm4 (numeric)
Measured PM4.0 (particulate matter) concentration.
Value can be found in the published state on the `pm4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Pm10 (numeric)
Measured PM10.0 (particulate matter) concentration.
Value can be found in the published state on the `pm10` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µg/m³`.

### Pm size (numeric)
Typical Particle Size.
Value can be found in the published state on the `pm_size` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µm`.

### Aqi 25 index (numeric)
PM 2.5 INDEX.
Value can be found in the published state on the `aqi_25_index` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `PM2.5 Index`.

### CO2 (numeric)
Measured value.
Value can be found in the published state on the `co2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### Voc index (numeric)
VOC index.
Value can be found in the published state on the `voc_index` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VOC Index points`.

### Pressure (numeric)
The measured atmospheric pressure.
Value can be found in the published state on the `pressure` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kPa`.

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

### Reading delay (numeric)
Setting the sensor reading delay..
Value can be found in the published state on the `reading_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reading_delay": NEW_VALUE}`.
The minimal value is `6` and the maximum value is `600`.
The unit of this value is `sec`.

### Alarm (binary)
Alarm.
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `ON` alarm is ON, if `OFF` OFF.

### Light indicator (binary)
Enable or Disable light indicator.
Value can be found in the published state on the `light_indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_indicator": NEW_VALUE}`.
If value equals `ON` light indicator is ON, if `OFF` OFF.

### Light indicator level (numeric)
Light indicator level.
Value can be found in the published state on the `light_indicator_level` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_indicator_level": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature offset (numeric)
Adjust temperature.
Value can be found in the published state on the `temperature_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `°C`.

### Humidity offset (numeric)
Adjust humidity.
Value can be found in the published state on the `humidity_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_offset": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `%`.

### Auto clean interval (numeric)
Auto clean interval PM2.5 sensor.
Value can be found in the published state on the `auto_clean_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_clean_interval": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `day`.

### Manual clean (binary)
Manual clean PM2.5 sensor.
Value can be found in the published state on the `manual_clean` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_clean": NEW_VALUE}`.
If value equals `ON` manual clean is ON, if `OFF` OFF.

### Forced recalibration (binary)
Start FRC (Perform Forced Recalibration of the CO2 Sensor).
Value can be found in the published state on the `forced_recalibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"forced_recalibration": NEW_VALUE}`.
If value equals `ON` forced recalibration is ON, if `OFF` OFF.

### Manual forced recalibration (numeric)
Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor).
Value can be found in the published state on the `manual_forced_recalibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_forced_recalibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Automatic self calibration (binary)
Automatic self calibration.
Value can be found in the published state on the `automatic_self_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"automatic_self_calibration": NEW_VALUE}`.
If value equals `ON` automatic self calibration is ON, if `OFF` OFF.

### Factory reset co2 (binary)
Factory Reset CO2 sensor.
Value can be found in the published state on the `factory_reset_co2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset_co2": NEW_VALUE}`.
If value equals `ON` factory reset co2 is ON, if `OFF` OFF.

### Enable pm25 (binary)
Enable PM2.5 Control.
Value can be found in the published state on the `enable_pm25` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_pm25": NEW_VALUE}`.
If value equals `ON` enable pm25 is ON, if `OFF` OFF.

### High pm25 (numeric)
Setting High PM2.5 Border.
Value can be found in the published state on the `high_pm25` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_pm25": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `µg/m³`.

### Low pm25 (numeric)
Setting Low PM2.5 Border.
Value can be found in the published state on the `low_pm25` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_pm25": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `µg/m³`.

### Enable co2 gas (binary)
Enable CO2 Gas Control.
Value can be found in the published state on the `enable_co2_gas` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_co2_gas": NEW_VALUE}`.
If value equals `ON` enable co2 gas is ON, if `OFF` OFF.

### High co2 gas (numeric)
Setting High CO2 Gas Border.
Value can be found in the published state on the `high_co2_gas` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_co2_gas": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Low co2 gas (numeric)
Setting Low CO2 Gas Border.
Value can be found in the published state on the `low_co2_gas` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_co2_gas": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Enable voc (binary)
Enable VOC Control.
Value can be found in the published state on the `enable_voc` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_voc": NEW_VALUE}`.
If value equals `ON` enable voc is ON, if `OFF` OFF.

### High voc (numeric)
Setting High VOC Border.
Value can be found in the published state on the `high_voc` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_voc": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `500`.
The unit of this value is `VOC Index points`.

### Low voc (numeric)
Setting Low VOC Border.
Value can be found in the published state on the `low_voc` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_voc": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `500`.
The unit of this value is `VOC Index points`.

