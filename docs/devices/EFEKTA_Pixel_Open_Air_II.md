---
title: "EFEKTA EFEKTA_Pixel_Open_Air_II control via MQTT"
description: "Integrate your EFEKTA EFEKTA_Pixel_Open_Air_II via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:30:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_Pixel_Open_Air_II

|     |     |
|-----|-----|
| Model | EFEKTA_Pixel_Open_Air_II  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | CO2 Monitor with retro LCD Display, V2 |
| Exposes | identify, co2, temperature, humidity, backlight, night_onoff_backlight, night_on_backlight, night_off_backlight, contrast, temperature_offset, humidity_offset, automatic_calibrations, co2_error_read, enable_gas, invert_logic_gas, high_gas, low_gas |
| Picture | ![EFEKTA EFEKTA_Pixel_Open_Air_II](https://www.zigbee2mqtt.io/images/devices/EFEKTA_Pixel_Open_Air_II.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### CO2 (numeric)
Measured value.
Value can be found in the published state on the `co2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

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

### Backlight (binary)
Backlight of the Display.
Value can be found in the published state on the `backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight": NEW_VALUE}`.
If value equals `ON` backlight is ON, if `OFF` OFF.

### Night onoff backlight (binary)
Enable Night Mode.
Value can be found in the published state on the `night_onoff_backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_onoff_backlight": NEW_VALUE}`.
If value equals `ON` night onoff backlight is ON, if `OFF` OFF.

### Night on backlight (numeric)
Night Mode activation time.
Value can be found in the published state on the `night_on_backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_on_backlight": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
The unit of this value is `Hr`.

### Night off backlight (numeric)
Night mode deactivation time.
Value can be found in the published state on the `night_off_backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_off_backlight": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
The unit of this value is `Hr`.

### Contrast (numeric)
Display Contrast.
Value can be found in the published state on the `contrast` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"contrast": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `40`.

### Temperature offset (numeric)
Adjust temperature.
Value can be found in the published state on the `temperature_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `°C`.

### Humidity offset (numeric)
Adjust humidity.
Value can be found in the published state on the `humidity_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_offset": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `%`.

### Automatic calibrations (binary)
Automatic calibration of the CO2 sensor.
Value can be found in the published state on the `automatic_calibrations` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"automatic_calibrations": NEW_VALUE}`.
If value equals `ON` automatic calibrations is ON, if `OFF` OFF.

### Co2 error read (numeric)
CO2 Error Read.
Value can be found in the published state on the `co2_error_read` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Enable gas (binary)
Enable CO2 Gas Control.
Value can be found in the published state on the `enable_gas` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_gas": NEW_VALUE}`.
If value equals `ON` enable gas is ON, if `OFF` OFF.

### Invert logic gas (binary)
Enable invert logic CO2 Gas Control.
Value can be found in the published state on the `invert_logic_gas` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"invert_logic_gas": NEW_VALUE}`.
If value equals `ON` invert logic gas is ON, if `OFF` OFF.

### High gas (numeric)
Setting High CO2 Gas Border.
Value can be found in the published state on the `high_gas` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_gas": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Low gas (numeric)
Setting Low CO2 Gas Border.
Value can be found in the published state on the `low_gas` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_gas": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `5000`.
The unit of this value is `ppm`.

