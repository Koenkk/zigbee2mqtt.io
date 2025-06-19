---
title: "Xiaomi LYWSD03MMC-z control via MQTT"
description: "Integrate your Xiaomi LYWSD03MMC-z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-05-01T19:18:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi LYWSD03MMC-z

|     |     |
|-----|-----|
| Model | LYWSD03MMC-z  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Temperature and Humidity Monitor (pvxx/ZigbeeTLc) |
| Exposes | temperature, humidity, enable_display, temperature_display_mode, comfort_smiley, comfort_temperature_min, comfort_temperature_max, comfort_humidity_min, comfort_humidity_max, temperature_calibration, humidity_calibration, measurement_interval, battery, voltage |
| Picture | ![Xiaomi LYWSD03MMC-z](https://www.zigbee2mqtt.io/images/devices/LYWSD03MMC-z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
Go [here (pvvx github)](https://github.com/pvvx/ATC_MiThermometer) for the firmware file & instructions on how to flash
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


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
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Enable display (binary)
Whether to enable the device display..
Value can be found in the published state on the `enable_display` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_display": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_display": NEW_VALUE}`.
If value equals `true` enable display is ON, if `false` OFF.

### Temperature display mode (enum)
The unit of the temperature displayed on the device screen..
Value can be found in the published state on the `temperature_display_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_display_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_display_mode": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Comfort smiley (binary)
Whether to show a comfort indicator on the device screen..
Value can be found in the published state on the `comfort_smiley` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_smiley": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_smiley": NEW_VALUE}`.
If value equals `true` comfort smiley is ON, if `false` OFF.

### Comfort temperature min (numeric)
Minimum temperature that is considered comfortable (default 20.00°C)..
Value can be found in the published state on the `comfort_temperature_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_temperature_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature_min": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `120`.
The unit of this value is `°C`.

### Comfort temperature max (numeric)
Maximum temperature that is considered comfortable (default 25.00°C)..
Value can be found in the published state on the `comfort_temperature_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_temperature_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature_max": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `120`.
The unit of this value is `°C`.

### Comfort humidity min (numeric)
Minimum relative humidity that is considered comfortable (default 40.00%).
Value can be found in the published state on the `comfort_humidity_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_humidity_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_humidity_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Comfort humidity max (numeric)
Maximum relative humidity that is considered comfortable (default 60.00%)..
Value can be found in the published state on the `comfort_humidity_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_humidity_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_humidity_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature calibration (numeric)
Offset to add/subtract to the reported temperature (default 0°C)..
Value can be found in the published state on the `temperature_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_calibration": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `°C`.

### Humidity calibration (numeric)
Offset to add/subtract to the reported relative humidity (default 0%)..
Value can be found in the published state on the `humidity_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_calibration": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `%`.

### Measurement interval (numeric)
Configure sensor measurement interval (default 10 seconds)..
Value can be found in the published state on the `measurement_interval` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"measurement_interval": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"measurement_interval": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `30`.
The unit of this value is `s`.

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

