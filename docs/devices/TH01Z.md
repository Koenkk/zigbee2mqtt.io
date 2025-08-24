---
title: "Tuya TH01Z control via MQTT"
description: "Integrate your Tuya TH01Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-30T19:41:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TH01Z

|     |     |
|-----|-----|
| Model | TH01Z  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Temperature and humidity sensor with clock |
| Exposes | temperature, humidity, battery, temperature_report_interval, humidity_report_interval, temperature_unit_convert, temperature_alarm, max_temperature, min_temperature, temperature_sensitivity, humidity_alarm, max_humidity, min_humidity, humidity_sensitivity |
| Picture | ![Tuya TH01Z](https://www.zigbee2mqtt.io/images/devices/TH01Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

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

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature report interval (numeric)
Temperature Report interval.
Value can be found in the published state on the `temperature_report_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_report_interval": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `120`.
The unit of this value is `min`.

### Humidity report interval (numeric)
Humidity Report interval.
Value can be found in the published state on the `humidity_report_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_report_interval": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `120`.
The unit of this value is `min`.

### Temperature unit convert (enum)
Current display unit.
Value can be found in the published state on the `temperature_unit_convert` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_unit_convert": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Temperature alarm (enum)
Temperature alarm status.
Value can be found in the published state on the `temperature_alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `canceled`, `lower_alarm`, `upper_alarm`.

### Max temperature (numeric)
Alarm temperature max.
Value can be found in the published state on the `max_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `60`.
The unit of this value is `°C`.

### Min temperature (numeric)
Alarm temperature min.
Value can be found in the published state on the `min_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `60`.
The unit of this value is `°C`.

### Temperature sensitivity (numeric)
Temperature sensitivity.
Value can be found in the published state on the `temperature_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_sensitivity": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `50`.
The unit of this value is `°C`.

### Humidity alarm (enum)
Humidity alarm status.
Value can be found in the published state on the `humidity_alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `canceled`, `lower_alarm`, `upper_alarm`.

### Max humidity (numeric)
Alarm humidity max.
Value can be found in the published state on the `max_humidity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Min humidity (numeric)
Alarm humidity min.
Value can be found in the published state on the `min_humidity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Humidity sensitivity (numeric)
Humidity sensitivity.
Value can be found in the published state on the `humidity_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.
The unit of this value is `%`.

