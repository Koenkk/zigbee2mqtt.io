---
title: "Custom devices (DiY) MHO-C401N control via MQTT"
description: "Integrate your Custom devices (DiY) MHO-C401N via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-12-05T22:02:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) MHO-C401N

|     |     |
|-----|-----|
| Model | MHO-C401N  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | Xiaomi temperature & humidity sensor with custom firmware |
| Exposes | battery, temperature, humidity, temperature_display_mode, show_smile, temperature_calibration, humidity_calibration, comfort_temperature_min, comfort_temperature_max, comfort_humidity_min, comfort_humidity_max, linkquality |
| Picture | ![Custom devices (DiY) MHO-C401N](https://www.zigbee2mqtt.io/images/devices/MHO-C401N.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

Originally this device does not support Zigbee (only Bluetooth).
To use this device with Zigbee2MQTT a custom firmware has to be flashed which is explained [here](https://github.com/pvvx/ZigbeeTLc). This firmware converts the device from Bluetooth to Zigbee.
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

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Temperature display mode (enum)
The units of the temperature displayed on the device screen..
Value can be found in the published state on the `temperature_display_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_display_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_display_mode": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Show smile (binary)
Whether to show a smile on the device screen..
Value can be found in the published state on the `show_smile` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"show_smile": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"show_smile": NEW_VALUE}`.
If value equals `HIDE` show smile is ON, if `SHOW` OFF.

### Temperature calibration (numeric)
The temperature calibration, in 0.1° steps. Requires v0.1.1.6 or newer..
Value can be found in the published state on the `temperature_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_calibration": NEW_VALUE}`.
The minimal value is `-12.7` and the maximum value is `12.7`.
The unit of this value is `C`.

### Humidity calibration (numeric)
The humidity offset is set in 0.1 % steps. Requires v0.1.1.6 or newer..
Value can be found in the published state on the `humidity_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_calibration": NEW_VALUE}`.
The minimal value is `-12.7` and the maximum value is `12.7`.
The unit of this value is `%`.

### Comfort temperature min (numeric)
Comfort parameters/Temperature minimum, in 1° steps. Requires v0.1.1.7 or newer..
Value can be found in the published state on the `comfort_temperature_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_temperature_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature_min": NEW_VALUE}`.
The minimal value is `-127` and the maximum value is `127`.
The unit of this value is `C`.

### Comfort temperature max (numeric)
Comfort parameters/Temperature maximum, in 1° steps. Requires v0.1.1.7 or newer..
Value can be found in the published state on the `comfort_temperature_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_temperature_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature_max": NEW_VALUE}`.
The minimal value is `-127` and the maximum value is `127`.
The unit of this value is `C`.

### Comfort humidity min (numeric)
Comfort parameters/Humidity minimum, in 1% steps. Requires v0.1.1.7 or newer..
Value can be found in the published state on the `comfort_humidity_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_humidity_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_humidity_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Comfort humidity max (numeric)
Comfort parameters/Humidity maximum, in 1% steps. Requires v0.1.1.7 or newer..
Value can be found in the published state on the `comfort_humidity_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_humidity_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_humidity_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

