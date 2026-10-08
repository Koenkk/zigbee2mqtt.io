---
title: "Rti-Tek STHZB control via MQTT"
description: "Integrate your Rti-Tek STHZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-03T18:55:25
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Rti-Tek STHZB

|     |     |
|-----|-----|
| Model | STHZB  |
| Vendor  | [Rti-Tek](/supported-devices/#v=Rti-Tek)  |
| Description | Temperature and humidity sensor |
| Exposes | temperature, humidity, battery, dew_point, vpd, humidity_comfort, comfort_humidity_lower_limit, comfort_humidity_upper_limit, comfort_temperature_lower_limit, comfort_temperature_upper_limit, product_name, temperature_unit, internal_temperature_calibration, internal_humidity_calibration, sample_interval, temperature_alarm_upper, temperature_alarm_lower, humidity_alarm_upper, humidity_alarm_lower, fault_status, temperature_alarm_status, humidity_alarm_status |
| Picture | ![Rti-Tek STHZB](https://www.zigbee2mqtt.io/images/devices/STHZB.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Temperature (numeric)
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Dew point (numeric)
Value can be found in the published state on the `dew_point` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Vpd (numeric)
Value can be found in the published state on the `vpd` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kPa`.

### Humidity comfort (enum)
Value can be found in the published state on the `humidity_comfort` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `dry`, `comfort`, `wet`, `normal`.

### Comfort humidity lower limit (numeric)
Value can be found in the published state on the `comfort_humidity_lower_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_humidity_lower_limit": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Comfort humidity upper limit (numeric)
Value can be found in the published state on the `comfort_humidity_upper_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_humidity_upper_limit": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Comfort temperature lower limit (numeric)
Value can be found in the published state on the `comfort_temperature_lower_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature_lower_limit": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `60`.
The unit of this value is `°C`.

### Comfort temperature upper limit (numeric)
Value can be found in the published state on the `comfort_temperature_upper_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature_upper_limit": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `60`.
The unit of this value is `°C`.

### Product name (text)
Value can be found in the published state on the `product_name` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"product_name": ""}`.
It's not possible to write (`/set`) this value.

### Temperature unit (enum)
Value can be found in the published state on the `temperature_unit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_unit": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Internal temperature calibration (numeric)
Value can be found in the published state on the `internal_temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"internal_temperature_calibration": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `10`.
The unit of this value is `°C`.

### Internal humidity calibration (numeric)
Value can be found in the published state on the `internal_humidity_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"internal_humidity_calibration": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `10`.
The unit of this value is `%`.

### Sample interval (numeric)
Value can be found in the published state on the `sample_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sample_interval": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `3600`.
The unit of this value is `s`.

### Temperature alarm upper (numeric)
Value can be found in the published state on the `temperature_alarm_upper` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_alarm_upper": NEW_VALUE}`.
The minimal value is `-30` and the maximum value is `60`.
The unit of this value is `°C`.

### Temperature alarm lower (numeric)
Value can be found in the published state on the `temperature_alarm_lower` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_alarm_lower": NEW_VALUE}`.
The minimal value is `-30` and the maximum value is `60`.
The unit of this value is `°C`.

### Humidity alarm upper (numeric)
Value can be found in the published state on the `humidity_alarm_upper` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_alarm_upper": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Humidity alarm lower (numeric)
Value can be found in the published state on the `humidity_alarm_lower` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_alarm_lower": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Fault status (text)
Value can be found in the published state on the `fault_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fault_status": ""}`.
It's not possible to write (`/set`) this value.

### Temperature alarm status (enum)
Value can be found in the published state on the `temperature_alarm_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_alarm_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `normal`, `low`, `high`.

### Humidity alarm status (enum)
Value can be found in the published state on the `humidity_alarm_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_alarm_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `normal`, `low`, `high`.

