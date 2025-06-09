---
title: "Sunricher SR-ZG9033TH control via MQTT"
description: "Integrate your Sunricher SR-ZG9033TH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-03T20:11:47
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9033TH

|     |     |
|-----|-----|
| Model | SR-ZG9033TH  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Zigbee temperature and humidity sensor |
| Exposes | battery, temperature, humidity, temperature_sensor_compensation, temperature_display_unit, humidity_sensor_compensation |
| Picture | ![Sunricher SR-ZG9033TH](https://www.zigbee2mqtt.io/images/devices/SR-ZG9033TH.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 2 endpoint)
Measured relative humidity.
Value can be found in the published state on the `humidity_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Temperature sensor compensation (numeric, 1 endpoint)
Temperature sensor compensation (-5~+5°C).
Value can be found in the published state on the `temperature_sensor_compensation_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_sensor_compensation_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_sensor_compensation_1": NEW_VALUE}`.
The minimal value is `-5` and the maximum value is `5`.
The unit of this value is `°C`.

### Temperature display unit (enum, 1 endpoint)
Temperature display unit.
Value can be found in the published state on the `temperature_display_unit_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_display_unit_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_display_unit_1": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Humidity sensor compensation (numeric, 2 endpoint)
Humidity sensor compensation (-5~+5%).
Value can be found in the published state on the `humidity_sensor_compensation_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_sensor_compensation_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_sensor_compensation_2": NEW_VALUE}`.
The minimal value is `-5` and the maximum value is `5`.
The unit of this value is `%`.

