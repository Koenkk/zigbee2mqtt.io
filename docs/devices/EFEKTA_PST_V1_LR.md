---
title: "EFEKTA EFEKTA_PST_V1_LR control via MQTT"
description: "Integrate your EFEKTA EFEKTA_PST_V1_LR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-18T14:54:46
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_PST_V1_LR

|     |     |
|-----|-----|
| Model | EFEKTA_PST_V1_LR  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | Water, gas smart pressure monitor with signal amplifier |
| Exposes | pressure, bar, psi, temperature, pressure_offset, raw_temperature_calibration, raw_temperature, raw_temperature_recalibrated, battery, voltage, battery_low, uptime, reading_interval, tx_radio_power, smart_sleep, config_report_enable, comparison_previous_data |
| Picture | ![EFEKTA EFEKTA_PST_V1_LR](https://www.zigbee2mqtt.io/images/devices/EFEKTA_PST_V1_LR.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `pressure_calibration`: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.

* `pressure_precision`: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Pressure (numeric)
Measured pressure value in kPa.
Value can be found in the published state on the `pressure` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kPa`.

### Bar (numeric)
Measured pressure value in bar.
Value can be found in the published state on the `bar` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `bar`.

### Psi (numeric)
Measured pressure value in psi.
Value can be found in the published state on the `psi` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `psi`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Pressure offset (numeric)
Adjust first pressure sensor.
Value can be found in the published state on the `pressure_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pressure_offset": NEW_VALUE}`.
The minimal value is `-100` and the maximum value is `100`.
The unit of this value is `kPa`.

### Raw temperature calibration (numeric)
Adjust first temperature sensor.
Value can be found in the published state on the `raw_temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"raw_temperature_calibration": NEW_VALUE}`.
The minimal value is `-8192` and the maximum value is `8192`.
The unit of this value is `raw unit`.

### Raw temperature (numeric)
Sensor raw temperature.
Value can be found in the published state on the `raw_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `raw unit`.

### Raw temperature recalibrated (numeric)
Recalibrated sensor raw temperature.
Value can be found in the published state on the `raw_temperature_recalibrated` property.
It's not possible to read (`/get`) or write (`/set`) this value.
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
Setting the sensor reading interval in seconds, by default 15 seconds.
Value can be found in the published state on the `reading_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reading_interval": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `300`.
The unit of this value is `sec`.

### Tx radio power (enum)
Set TX Radio Power, dbm.
Value can be found in the published state on the `tx_radio_power` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tx_radio_power": NEW_VALUE}`.
The possible values are: `4dbm`, `19dbm`.

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

