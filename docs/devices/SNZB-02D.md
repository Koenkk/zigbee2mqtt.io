---
title: "SONOFF SNZB-02D control via MQTT"
description: "Integrate your SONOFF SNZB-02D via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-01-01T08:59:10
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-02D

|     |     |
|-----|-----|
| Model | SNZB-02D  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Temperature and humidity sensor with screen |
| Exposes | battery, temperature, humidity, comfort_temperature_min, comfort_temperature_max, comfort_humidity_min, comfort_humidity_max, temperature_units, temperature_calibration, humidity_calibration |
| Picture | ![SONOFF SNZB-02D](https://www.zigbee2mqtt.io/images/devices/SNZB-02D.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Troubleshooting
In case the sensor gets stuck and stops reporting (correct) data, you can try to restore it by following these steps:
  1. Force remove the device via the frontend.
  2. Restart Zigbee2MQTT.
  3. Re-pair the device.

Zigbee2MQTT version v2.3.0 introduced firmware version v2.3.0 which seems to improve data reporting. \
To update your device, short press the pairing button once and use the web interface to start the firmware update.

### Battery
Uses a CR2450 battery

### Pairing
Long press the pairing button for five seconds. The signal indicator on the display will begin to blink when in pairing mode.

### Temperature display
Double click the pairing button to toggle the display between Celsius and Fahrenheit. This does not change the unit of the measured temperature value.
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

### Comfort temperature min (numeric)
Minimum temperature that is considered comfortable. The device will display ❄️ when the temperature is lower than this value. Note: wake up the device by pressing the button on the back before changing this value..
Value can be found in the published state on the `comfort_temperature_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_temperature_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature_min": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `60`.
The unit of this value is `°C`.

### Comfort temperature max (numeric)
Maximum temperature that is considered comfortable. The device will display 🔥 when the temperature is higher than this value. Note: wake up the device by pressing the button on the back before changing this value..
Value can be found in the published state on the `comfort_temperature_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_temperature_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature_max": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `60`.
The unit of this value is `°C`.

### Comfort humidity min (numeric)
Minimum relative humidity that is considered comfortable. The device will display ☀️ when the humidity is lower than this value. Note: wake up the device by pressing the button on the back before changing this value..
Value can be found in the published state on the `comfort_humidity_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_humidity_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_humidity_min": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `95`.
The unit of this value is `%`.

### Comfort humidity max (numeric)
Maximum relative humidity that is considered comfortable. The device will display 💧 when the humidity is higher than this value. Note: wake up the device by pressing the button on the back before changing this value..
Value can be found in the published state on the `comfort_humidity_max` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"comfort_humidity_max": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_humidity_max": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `95`.
The unit of this value is `%`.

### Temperature units (enum)
The unit of the temperature displayed on the device screen. Note: wake up the device by pressing the button on the back before changing this value..
Value can be found in the published state on the `temperature_units` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_units": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_units": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Temperature calibration (numeric)
Offset to add/subtract to the reported temperature.
Value can be found in the published state on the `temperature_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_calibration": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `°C`.

### Humidity calibration (numeric)
Offset to add/subtract to the reported relative humidity.
Value can be found in the published state on the `humidity_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_calibration": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `%`.

