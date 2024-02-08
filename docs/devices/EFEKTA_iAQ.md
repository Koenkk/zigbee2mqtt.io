---
title: "Custom devices (DiY) EFEKTA_iAQ control via MQTT"
description: "Integrate your Custom devices (DiY) EFEKTA_iAQ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-01T15:06:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) EFEKTA_iAQ

|     |     |
|-----|-----|
| Model | EFEKTA_iAQ  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | [CO2 Monitor with IPS TFT Display, outdoor temperature and humidity, date and time](http://efektalab.com/iAQ) |
| Exposes | co2, temperature, humidity, illuminance, auto_brightness, long_chart_period, set_altitude, local_time, temperature_offset, humidity_offset, forced_recalibration, factory_reset_co2, manual_forced_recalibration, linkquality |
| Picture | ![Custom devices (DiY) EFEKTA_iAQ](https://www.zigbee2mqtt.io/images/devices/EFEKTA_iAQ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### CO2 (numeric)
The measured CO2 (carbon dioxide) value.
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

### Illuminance (numeric)
Raw measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Auto brightness (binary)
Enable or Disable Auto Brightness of the Display.
Value can be found in the published state on the `auto_brightness` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_brightness": NEW_VALUE}`.
If value equals `ON` auto brightness is ON, if `OFF` OFF.

### Long chart period (binary)
The period of plotting the CO2 level(OFF - 1H | ON - 24H).
Value can be found in the published state on the `long_chart_period` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"long_chart_period": NEW_VALUE}`.
If value equals `ON` long chart period is ON, if `OFF` OFF.

### Set altitude (numeric)
Setting the altitude above sea level (for high accuracy of the CO2 sensor).
Value can be found in the published state on the `set_altitude` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_altitude": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3000`.
The unit of this value is `meters`.

### Local time (enum)
Set date and time.
Value can be found in the published state on the `local_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_time": NEW_VALUE}`.
The possible values are: `set`.

### Temperature offset (numeric)
Adjust temperature.
Value can be found in the published state on the `temperature_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-30` and the maximum value is `60`.
The unit of this value is `°C`.

### Humidity offset (numeric)
Adjust humidity.
Value can be found in the published state on the `humidity_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_offset": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.
The unit of this value is `%`.

### Forced recalibration (binary)
Start FRC (Perform Forced Recalibration of the CO2 Sensor).
Value can be found in the published state on the `forced_recalibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"forced_recalibration": NEW_VALUE}`.
If value equals `ON` forced recalibration is ON, if `OFF` OFF.

### Factory reset co2 (binary)
Factory Reset CO2 sensor.
Value can be found in the published state on the `factory_reset_co2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset_co2": NEW_VALUE}`.
If value equals `ON` factory reset co2 is ON, if `OFF` OFF.

### Manual forced recalibration (numeric)
Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor).
Value can be found in the published state on the `manual_forced_recalibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_forced_recalibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

