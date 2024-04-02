---
title: "EFEKTA EFEKTA_iAQ3 control via MQTT"
description: "Integrate your EFEKTA EFEKTA_iAQ3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-03-31T18:43:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_iAQ3

|     |     |
|-----|-----|
| Model | EFEKTA_iAQ3  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | CO2 Monitor with IPS TFT Display, outdoor temperature and humidity, date and time |
| Exposes | co2, temperature, humidity, voc_index, voc_raw_data, illuminance_lux, illuminance, auto_brightness, night_onoff_backlight, night_on_backlight, night_off_backlight, rotate, long_chart_period, long_chart_period2, set_altitude, temperature_offset, humidity_offset, internal_or_external, automatic_scal, forced_recalibration, factory_reset_co2, manual_forced_recalibration, enable_gas, invert_logic_gas, high_gas, low_gas, linkquality |
| Picture | ![EFEKTA EFEKTA_iAQ3](https://www.zigbee2mqtt.io/images/devices/EFEKTA_iAQ3.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `illuminance_lux_calibration`: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### CO2 (numeric)
Measured value.
Value can be found in the published state on the `co2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `ppm`.

### Temperature (numeric, 1 endpoint)
Measured value of the built-in temperature sensor.
Value can be found in the published state on the `temperature_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Temperature (numeric, 2 endpoint)
Measured value of the external temperature sensor.
Value can be found in the published state on the `temperature_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 1 endpoint)
Measured value of the built-in humidity sensor.
Value can be found in the published state on the `humidity_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Humidity (numeric, 2 endpoint)
Measured value of the external humidity sensor.
Value can be found in the published state on the `humidity_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Voc index (numeric)
VOC index.
Value can be found in the published state on the `voc_index` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VOC Index points`.

### Voc raw data (numeric)
SRAW_VOC, digital raw value.
Value can be found in the published state on the `voc_raw_data` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ticks`.

### Illuminance lux (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance_lux` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Illuminance (numeric)
Raw measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Auto brightness (binary)
Enable or Disable Auto Brightness of the Display.
Value can be found in the published state on the `auto_brightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"auto_brightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_brightness": NEW_VALUE}`.
If value equals `ON` auto brightness is ON, if `OFF` OFF.

### Night onoff backlight (binary)
Complete shutdown of the backlight at night mode.
Value can be found in the published state on the `night_onoff_backlight` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_onoff_backlight": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_onoff_backlight": NEW_VALUE}`.
If value equals `ON` night onoff backlight is ON, if `OFF` OFF.

### Night on backlight (numeric)
Night mode activation time.
Value can be found in the published state on the `night_on_backlight` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_on_backlight": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_on_backlight": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
The unit of this value is `Hr`.

### Night off backlight (numeric)
Night mode deactivation time.
Value can be found in the published state on the `night_off_backlight` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_off_backlight": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_off_backlight": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
The unit of this value is `Hr`.

### Rotate (enum)
Display rotation angle.
Value can be found in the published state on the `rotate` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rotate": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rotate": NEW_VALUE}`.
The possible values are: `0`, `90`, `180`, `270`.

### Long chart period (binary)
The period of plotting the CO2 level(OFF - 1H | ON - 24H).
Value can be found in the published state on the `long_chart_period` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"long_chart_period": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"long_chart_period": NEW_VALUE}`.
If value equals `ON` long chart period is ON, if `OFF` OFF.

### Long chart period2 (binary)
The period of plotting the VOC Index points(OFF - 1H | ON - 24H).
Value can be found in the published state on the `long_chart_period2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"long_chart_period2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"long_chart_period2": NEW_VALUE}`.
If value equals `ON` long chart period2 is ON, if `OFF` OFF.

### Set altitude (numeric)
Setting the altitude above sea level (for high accuracy of the CO2 sensor).
Value can be found in the published state on the `set_altitude` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"set_altitude": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_altitude": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3000`.
The unit of this value is `meters`.

### Temperature offset (numeric)
Adjust temperature.
Value can be found in the published state on the `temperature_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `°C`.

### Humidity offset (numeric)
Adjust humidity.
Value can be found in the published state on the `humidity_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_offset": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `%`.

### Internal or external (binary)
Display data from internal or external TH sensor.
Value can be found in the published state on the `internal_or_external` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"internal_or_external": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"internal_or_external": NEW_VALUE}`.
If value equals `ON` internal or external is ON, if `OFF` OFF.

### Automatic scal (binary)
Automatic self calibration.
Value can be found in the published state on the `automatic_scal` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"automatic_scal": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"automatic_scal": NEW_VALUE}`.
If value equals `ON` automatic scal is ON, if `OFF` OFF.

### Forced recalibration (binary)
Start FRC (Perform Forced Recalibration of the CO2 Sensor).
Value can be found in the published state on the `forced_recalibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"forced_recalibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"forced_recalibration": NEW_VALUE}`.
If value equals `ON` forced recalibration is ON, if `OFF` OFF.

### Factory reset co2 (binary)
Factory Reset CO2 sensor.
Value can be found in the published state on the `factory_reset_co2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"factory_reset_co2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset_co2": NEW_VALUE}`.
If value equals `ON` factory reset co2 is ON, if `OFF` OFF.

### Manual forced recalibration (numeric)
Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor).
Value can be found in the published state on the `manual_forced_recalibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_forced_recalibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_forced_recalibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Enable gas (binary)
Enable CO2 Gas Control.
Value can be found in the published state on the `enable_gas` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_gas": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_gas": NEW_VALUE}`.
If value equals `ON` enable gas is ON, if `OFF` OFF.

### Invert logic gas (binary)
Enable invert logic CO2 Gas Control.
Value can be found in the published state on the `invert_logic_gas` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"invert_logic_gas": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"invert_logic_gas": NEW_VALUE}`.
If value equals `ON` invert logic gas is ON, if `OFF` OFF.

### High gas (numeric)
Setting High CO2 Gas Border.
Value can be found in the published state on the `high_gas` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_gas": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_gas": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Low gas (numeric)
Setting Low CO2 Gas Border.
Value can be found in the published state on the `low_gas` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_gas": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_gas": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

