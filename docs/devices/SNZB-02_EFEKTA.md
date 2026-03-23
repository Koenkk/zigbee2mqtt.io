---
title: "EFEKTA SNZB-02_EFEKTA control via MQTT"
description: "Integrate your EFEKTA SNZB-02_EFEKTA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-06T00:31:40Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA SNZB-02_EFEKTA

|     |     |
|-----|-----|
| Model | SNZB-02_EFEKTA  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | Alternative firmware for the SONOFF SNZB-02 sensor from EfektaLab, DIY |
| Exposes | battery, voltage, temperature, humidity, sensor_reading_interval, enabling_temperature_control, temperature_actions, high_temperature, low_temperature, enabling_humidity_control, humidity_actions, high_humidity, low_humidity |
| Picture | ![EFEKTA SNZB-02_EFEKTA](https://www.zigbee2mqtt.io/images/devices/SNZB-02_EFEKTA.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### Additional functions: 
binding to clusters of temperature, air humidity, OnOff,
direct control of external relays by data on temperature and humidity,
direct sending of data on temperature and humidity to other devices.

### Build guide
Instructions on how to build this device can be found [here](https://github.com/smartboxchannel/SONOFF-SNZB-02-Temperature-and-humidity-sensor)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

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

### Sensor reading interval (numeric)
Adjust Report Delay. Setting the time in seconds, by default 6 seconds.
Value can be found in the published state on the `sensor_reading_interval` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor_reading_interval": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_reading_interval": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `60`.
The unit of this value is `sec.`.

### Enabling temperature control (binary)
Enables/disables Tempearure control.
Value can be found in the published state on the `enabling_temperature_control` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enabling_temperature_control": NEW_VALUE}`.
If value equals `ON` enabling temperature control is ON, if `OFF` OFF.

### Temperature actions (enum)
Heat or cool.
Value can be found in the published state on the `temperature_actions` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_actions": NEW_VALUE}`.
The possible values are: `HEAT`, `COOL`.

### High temperature (numeric)
Setting High Temperature Border.
Value can be found in the published state on the `high_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_temperature": NEW_VALUE}`.
The minimal value is `-40` and the maximum value is `90`.
The unit of this value is `°C`.

### Low temperature (numeric)
Setting Low Temperature Border.
Value can be found in the published state on the `low_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_temperature": NEW_VALUE}`.
The minimal value is `-40` and the maximum value is `90`.
The unit of this value is `°C`.

### Enabling humidity control (binary)
Enables/disables Humidity control.
Value can be found in the published state on the `enabling_humidity_control` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enabling_humidity_control": NEW_VALUE}`.
If value equals `ON` enabling humidity control is ON, if `OFF` OFF.

### Humidity actions (enum)
Wet or dry.
Value can be found in the published state on the `humidity_actions` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_actions": NEW_VALUE}`.
The possible values are: `WET`, `DRY`.

### High humidity (numeric)
Setting High Humidity Border.
Value can be found in the published state on the `high_humidity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.
The unit of this value is `%`.

### Low humidity (numeric)
Setting Low Humidity Border.
Value can be found in the published state on the `low_humidity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.
The unit of this value is `%`.

