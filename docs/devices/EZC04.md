---
title: "Lincukoo EZC04 control via MQTT"
description: "Integrate your Lincukoo EZC04 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:10:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lincukoo EZC04

|     |     |
|-----|-----|
| Model | EZC04  |
| Vendor  | [Lincukoo](/supported-devices/#v=Lincukoo)  |
| Description | Smart air quality monitor (CO2) |
| Exposes | co2, temperature, humidity, temperature_unit_convert, co2_alarm_value, alarm_ringtone, co2_state, reset_co2 |
| Picture | ![Lincukoo EZC04](https://www.zigbee2mqtt.io/images/devices/EZC04.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### CO2 (numeric)
The measured CO2 (carbon dioxide) value.
Value can be found in the published state on the `co2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

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

### Temperature unit convert (enum)
Current display unit.
Value can be found in the published state on the `temperature_unit_convert` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_unit_convert": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Co2 alarm value (numeric)
CO2 alarm value.
Value can be found in the published state on the `co2_alarm_value` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"co2_alarm_value": NEW_VALUE}`.
The minimal value is `1000` and the maximum value is `10000`.
The unit of this value is `ppm`.

### Alarm ringtone (enum)
alarm_ringtone.
Value can be found in the published state on the `alarm_ringtone` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_ringtone": NEW_VALUE}`.
The possible values are: `ringtone_0`, `ringtone_1`, `ringtone_2`, `ringtone_3`.

### Co2 state (enum)
CO2 alarm status.
Value can be found in the published state on the `co2_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `alarm`, `normal`.

### Reset co2 (enum)
reset the CO2.
Value can be found in the published state on the `reset_co2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_co2": NEW_VALUE}`.
The possible values are: `reset_co2`.

