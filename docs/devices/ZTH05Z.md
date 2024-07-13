---
title: "Tuya ZTH05Z control via MQTT"
description: "Integrate your Tuya ZTH05Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-01-31T20:08:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZTH05Z

|     |     |
|-----|-----|
| Model | ZTH05Z  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Temperature and humidity sensor |
| Exposes | temperature, humidity, battery, temperature_unit, max_temperature_alarm, min_temperature_alarm, max_humidity_alarm, min_humidity_alarm, temperature_alarm, humidity_alarm, temperature_periodic_report, humidity_periodic_report, temperature_sensitivity, humidity_sensitivity, linkquality |
| Picture | ![Tuya ZTH05Z](https://www.zigbee2mqtt.io/images/devices/ZTH05Z.png) |


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

### Temperature unit (enum)
Temperature unit.
Value can be found in the published state on the `temperature_unit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_unit": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Max temperature alarm (numeric)
Alarm temperature max.
Value can be found in the published state on the `max_temperature_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature_alarm": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `60`.
The unit of this value is `°C`.

### Min temperature alarm (numeric)
Alarm temperature min.
Value can be found in the published state on the `min_temperature_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature_alarm": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `60`.
The unit of this value is `°C`.

### Max humidity alarm (numeric)
Alarm humidity max.
Value can be found in the published state on the `max_humidity_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_humidity_alarm": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Min humidity alarm (numeric)
Alarm humidity min.
Value can be found in the published state on the `min_humidity_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_humidity_alarm": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature alarm (enum)
Temperature alarm.
Value can be found in the published state on the `temperature_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_alarm": NEW_VALUE}`.
The possible values are: `lower_alarm`, `upper_alarm`, `cancel`.

### Humidity alarm (enum)
Humidity alarm.
Value can be found in the published state on the `humidity_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_alarm": NEW_VALUE}`.
The possible values are: `lower_alarm`, `upper_alarm`, `cancel`.

### Temperature periodic report (numeric)
Temp periodic report.
Value can be found in the published state on the `temperature_periodic_report` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_periodic_report": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Humidity periodic report (numeric)
Humidity periodic report.
Value can be found in the published state on the `humidity_periodic_report` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_periodic_report": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature sensitivity (numeric)
Sensitivity of temperature.
Value can be found in the published state on the `temperature_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_sensitivity": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `10`.
The unit of this value is `°C`.

### Humidity sensitivity (numeric)
Sensitivity of humidity.
Value can be found in the published state on the `humidity_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_sensitivity": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `10`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

