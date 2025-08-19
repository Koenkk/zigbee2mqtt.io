---
title: "Bacchus Bacchus Water level meter control via MQTT"
description: "Integrate your Bacchus Bacchus Water level meter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:59:08
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bacchus Bacchus Water level meter

|     |     |
|-----|-----|
| Model | Bacchus Water level meter  |
| Vendor  | [Bacchus](/supported-devices/#v=Bacchus)  |
| Description | Bacchus tank water level sensor |
| Exposes | water_level, out_of_service, filling, temperature, tank_height, alarm_min_threshold, alarm_max_threshold, invert_threshold, measurment_period, battery, voltage |
| Picture | ![Bacchus Bacchus Water level meter](https://www.zigbee2mqtt.io/images/devices/Bacchus-Water-level-meter.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
[Original project description](https://github.com/Bacchus777/Water_level_meter)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Water level (numeric)
Current water level in cm.
Value can be found in the published state on the `water_level` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `cm`.

### Out of service (binary)
Level is out if service.
Value can be found in the published state on the `out_of_service` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `True` out of service is ON, if `False` OFF.

### Filling (numeric)
Tank filling.
Value can be found in the published state on the `filling` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Tank height (numeric)
Water tank height in cm.
Value can be found in the published state on the `tank_height` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tank_height": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `450`.
The unit of this value is `cm`.

### Alarm min threshold (numeric)
Min threshold for alarm binding.
Value can be found in the published state on the `alarm_min_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_min_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Alarm max threshold (numeric)
Max threshold for alarm binding.
Value can be found in the published state on the `alarm_max_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_max_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Invert threshold (binary)
Invert thresholds for on and off commands.
Value can be found in the published state on the `invert_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"invert_threshold": NEW_VALUE}`.
If value equals `True` invert threshold is ON, if `False` OFF.

### Measurment period (numeric)
Max threshold for alarm binding.
Value can be found in the published state on the `measurment_period` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"measurment_period": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `min`.

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

