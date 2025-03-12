---
title: "EFEKTA EFEKTA_ePST_POW_E_LR control via MQTT"
description: "Integrate your EFEKTA EFEKTA_ePST_POW_E_LR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-18T14:54:46
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_ePST_POW_E_LR

|     |     |
|-----|-----|
| Model | EFEKTA_ePST_POW_E_LR  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | Water, gas smart pressure monitor with e-ink display |
| Exposes | pressure, bar, psi, temperature, pressure_offset, raw_temperature_calibration, mains_voltage, battery, battery_low, reading_interval, tx_radio_power, comparison_previous_data, invert, fastmode |
| Picture | ![EFEKTA EFEKTA_ePST_POW_E_LR](https://www.zigbee2mqtt.io/images/devices/EFEKTA_ePST_POW_E_LR.png) |


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
Pressure in kPa.
Value can be found in the published state on the `pressure` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kPa`.

### Bar (numeric)
Pressure in bar.
Value can be found in the published state on the `bar` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `bar`.

### Psi (numeric)
Pressure in psi.
Value can be found in the published state on the `psi` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `psi`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Pressure offset (numeric)
Adjust pressure sensor.
Value can be found in the published state on the `pressure_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pressure_offset": NEW_VALUE}`.
The minimal value is `-100` and the maximum value is `100`.
The unit of this value is `kPa`.

### Raw temperature calibration (numeric)
Adjust temperature sensor.
Value can be found in the published state on the `raw_temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"raw_temperature_calibration": NEW_VALUE}`.
The minimal value is `-8192` and the maximum value is `8192`.
The unit of this value is `raw unit`.

### Mains voltage (numeric)
Mains voltage.
Value can be found in the published state on the `mains_voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Reading interval (numeric)
Setting the sensor reading interval in seconds, by default 20 seconds.
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

### Comparison previous data (binary)
Enable сontrol of comparison with previous data.
Value can be found in the published state on the `comparison_previous_data` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comparison_previous_data": NEW_VALUE}`.
If value equals `ON` comparison previous data is ON, if `OFF` OFF.

### Invert (enum)
Invert display color.
Value can be found in the published state on the `invert` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"invert": NEW_VALUE}`.
The possible values are: `BW`, `WB`.

### Fastmode (enum)
Display refresh mode.
Value can be found in the published state on the `fastmode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fastmode": NEW_VALUE}`.
The possible values are: `Fast`, `Ultra Fast`.

