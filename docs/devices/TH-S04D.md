---
title: "Aqara TH-S04D control via MQTT"
description: "Integrate your Aqara TH-S04D via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:59:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara TH-S04D

|     |     |
|-----|-----|
| Model | TH-S04D  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Climate Sensor W100 |
| Exposes | temperature, humidity, sensor, external_temperature, external_humidity, display_off, high_temperature, low_temperature, high_humidity, low_humidity, sampling, period, temp_report_mode, temp_period, temp_threshold, humi_report_mode, humi_period, humi_threshold, identify, action |
| Picture | ![Aqara TH-S04D](https://www.zigbee2mqtt.io/images/devices/TH-S04D.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`


## Exposes

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Sensor (enum)
Select mode to display sensor: internal or both with external.
Value can be found in the published state on the `sensor` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `internal`, `external`.

### External temperature (numeric)
Value for external temperature sensor.
Value can be found in the published state on the `external_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"external_temperature": NEW_VALUE}`.
The minimal value is `-100` and the maximum value is `100`.
The unit of this value is `°C`.

### External humidity (numeric)
Value for external humidity sensor.
Value can be found in the published state on the `external_humidity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"external_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Display off (binary)
Enables/disables auto display off.
Value can be found in the published state on the `display_off` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_off": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_off": NEW_VALUE}`.
If value equals `true` display off is ON, if `false` OFF.

### High temperature (numeric)
High temperature alert.
Value can be found in the published state on the `high_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_temperature": NEW_VALUE}`.
The minimal value is `26` and the maximum value is `60`.
The unit of this value is `°C`.

### Low temperature (numeric)
Low temperature alert.
Value can be found in the published state on the `low_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_temperature": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `20`.
The unit of this value is `°C`.

### High humidity (numeric)
High humidity alert.
Value can be found in the published state on the `high_humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_humidity": NEW_VALUE}`.
The minimal value is `65` and the maximum value is `100`.
The unit of this value is `%`.

### Low humidity (numeric)
Low humidity alert.
Value can be found in the published state on the `low_humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.
The unit of this value is `%`.

### Sampling (enum)
Temperature and Humidity sampling settings.
Value can be found in the published state on the `sampling` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sampling": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sampling": NEW_VALUE}`.
The possible values are: `low`, `standard`, `high`, `custom`.

### Period (numeric)
Sampling period.
Value can be found in the published state on the `period` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"period": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"period": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `600`.
The unit of this value is `sec`.

### Temp report mode (enum)
Temperature reporting mode.
Value can be found in the published state on the `temp_report_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temp_report_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_report_mode": NEW_VALUE}`.
The possible values are: `no`, `threshold`, `period`, `threshold_period`.

### Temp period (numeric)
Temperature reporting period.
Value can be found in the published state on the `temp_period` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temp_period": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_period": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.
The unit of this value is `sec`.

### Temp threshold (numeric)
Temperature reporting threshold.
Value can be found in the published state on the `temp_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temp_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_threshold": NEW_VALUE}`.
The minimal value is `0.2` and the maximum value is `3`.
The unit of this value is `°C`.

### Humi report mode (enum)
Humidity reporting mode.
Value can be found in the published state on the `humi_report_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humi_report_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humi_report_mode": NEW_VALUE}`.
The possible values are: `no`, `threshold`, `period`, `threshold_period`.

### Humi period (numeric)
Temperature reporting period.
Value can be found in the published state on the `humi_period` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humi_period": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humi_period": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.
The unit of this value is `sec`.

### Humi threshold (numeric)
Humidity reporting threshold.
Value can be found in the published state on the `humi_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humi_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humi_threshold": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `10`.
The unit of this value is `%`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `hold_plus`, `hold_center`, `hold_minus`, `single_plus`, `single_center`, `single_minus`, `double_plus`, `double_center`, `double_minus`, `release_plus`, `release_center`, `release_minus`.

