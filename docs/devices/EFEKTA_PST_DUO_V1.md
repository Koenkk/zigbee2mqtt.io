---
title: "EFEKTA EFEKTA_PST_DUO_V1 control via MQTT"
description: "Integrate your EFEKTA EFEKTA_PST_DUO_V1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-18T14:54:46
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_PST_DUO_V1

|     |     |
|-----|-----|
| Model | EFEKTA_PST_DUO_V1  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | Water, gas smart pressure monitor with two sensors |
| Exposes | pressure, bar, psi, temperature, pressure_offset, raw_temperature_calibration, raw_temperature_cal, battery, voltage, battery_low, uptime, reading_interval, smart_sleep, config_report_enable, comparison_previous_data |
| Picture | ![EFEKTA EFEKTA_PST_DUO_V1](https://www.zigbee2mqtt.io/images/devices/EFEKTA_PST_DUO_V1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `pressure_calibration`: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.

* `pressure_precision`: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Pressure (numeric, 1 endpoint)
Measured pressure value оf the first sensor in kPa.
Value can be found in the published state on the `pressure_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kPa`.

### Bar (numeric, 1 endpoint)
Measured pressure value оf the first sensor in bar.
Value can be found in the published state on the `bar_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `bar`.

### Psi (numeric, 1 endpoint)
Measured pressure value оf the first sensor in psi.
Value can be found in the published state on the `psi_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `psi`.

### Temperature (numeric, 1 endpoint)
Measured value of the first temperature sensor.
Value can be found in the published state on the `temperature_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Pressure offset (numeric, 1 endpoint)
Adjust first pressure sensor.
Value can be found in the published state on the `pressure_offset_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pressure_offset_1": NEW_VALUE}`.
The minimal value is `-100` and the maximum value is `100`.
The unit of this value is `kPa`.

### Raw temperature calibration (numeric, 1 endpoint)
Adjust first temperature sensor.
Value can be found in the published state on the `raw_temperature_calibration_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"raw_temperature_calibration_1": NEW_VALUE}`.
The minimal value is `-8192` and the maximum value is `8192`.
The unit of this value is `raw unit`.

### Pressure (numeric, 2 endpoint)
Measured pressure value оf the second sensor in kPa.
Value can be found in the published state on the `pressure_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kPa`.

### Bar (numeric, 2 endpoint)
Measured pressure value оf the second sensor in bar.
Value can be found in the published state on the `bar_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `bar`.

### Psi (numeric, 2 endpoint)
pressure in psi.
Value can be found in the published state on the `psi_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `psi`.

### Temperature (numeric, 2 endpoint)
Measured value of the second temperature sensor.
Value can be found in the published state on the `temperature_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Pressure offset (numeric, 2 endpoint)
Adjust second pressure sensor.
Value can be found in the published state on the `pressure_offset_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pressure_offset_2": NEW_VALUE}`.
The minimal value is `-100` and the maximum value is `100`.
The unit of this value is `kPa`.

### Raw temperature cal (numeric, 2 endpoint)
Adjust second temperature sensor.
Value can be found in the published state on the `raw_temperature_cal_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"raw_temperature_cal_2": NEW_VALUE}`.
The minimal value is `-8192` and the maximum value is `8192`.
The unit of this value is `raw unit`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Uptime (numeric)
Uptime.
Value can be found in the published state on the `uptime` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Hours`.

### Reading interval (numeric)
Setting sensor reading interval in seconds, by default 20 seconds.
Value can be found in the published state on the `reading_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reading_interval": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `360`.
The unit of this value is `sec`.

### Smart sleep (binary)
Enable Smart Sleep, short wakeup every 7 seconds.
Value can be found in the published state on the `smart_sleep` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"smart_sleep": NEW_VALUE}`.
If value equals `ON` smart sleep is ON, if `OFF` OFF.

### Config report enable (binary)
Enable reporting based on reporting configuration.
Value can be found in the published state on the `config_report_enable` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_report_enable": NEW_VALUE}`.
If value equals `ON` config report enable is ON, if `OFF` OFF.

### Comparison previous data (binary)
Enable сontrol of comparison with previous data.
Value can be found in the published state on the `comparison_previous_data` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comparison_previous_data": NEW_VALUE}`.
If value equals `ON` comparison previous data is ON, if `OFF` OFF.

