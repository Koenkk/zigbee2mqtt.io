---
title: "HOBEIAN ZG-227ZP control via MQTT"
description: "Integrate your HOBEIAN ZG-227ZP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-01T15:13:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HOBEIAN ZG-227ZP

|     |     |
|-----|-----|
| Model | ZG-227ZP  |
| Vendor  | [HOBEIAN](/supported-devices/#v=HOBEIAN)  |
| Description | Temperature(NTC) & humidity sensor |
| Exposes | ntc_temperature, temperature, humidity, ntc_alarm, ntc_temperature_calibration, temperature_unit, temperature_calibration, humidity_calibration, temperature_sampling, ntc_high_temp_alarm_threshold, ntc_low_temp_alarm_threshold, battery |
| Picture | ![HOBEIAN ZG-227ZP](https://www.zigbee2mqtt.io/images/devices/ZG-227ZP.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Ntc temperature (numeric)
External NTC temperature.
Value can be found in the published state on the `ntc_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

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

### Ntc alarm (enum)
NTC temperature alarm.
Value can be found in the published state on the `ntc_alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `loweralarm`, `upperalarm`, `cancel`.

### Ntc temperature calibration (numeric)
NTC temperature calibration.
Value can be found in the published state on the `ntc_temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ntc_temperature_calibration": NEW_VALUE}`.
The minimal value is `-5` and the maximum value is `5`.
The unit of this value is `°C`.

### Temperature unit (enum)
Temperature unit.
Value can be found in the published state on the `temperature_unit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_unit": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Temperature calibration (numeric)
Temperature calibration.
Value can be found in the published state on the `temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_calibration": NEW_VALUE}`.
The minimal value is `-2` and the maximum value is `2`.
The unit of this value is `°C`.

### Humidity calibration (numeric)
Humidity calibration.
Value can be found in the published state on the `humidity_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_calibration": NEW_VALUE}`.
The minimal value is `-30` and the maximum value is `30`.
The unit of this value is `%`.

### Temperature sampling (numeric)
Air temperature and humidity sampling.
Value can be found in the published state on the `temperature_sampling` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_sampling": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `3600`.
The unit of this value is `s`.

### Ntc high temp alarm threshold (numeric)
NTC high temp alarm threshold.
Value can be found in the published state on the `ntc_high_temp_alarm_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ntc_high_temp_alarm_threshold": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `130`.
The unit of this value is `°C`.

### Ntc low temp alarm threshold (numeric)
NTC high temp alarm threshold.
Value can be found in the published state on the `ntc_low_temp_alarm_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ntc_low_temp_alarm_threshold": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `130`.
The unit of this value is `°C`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

