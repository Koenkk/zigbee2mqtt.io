---
title: "Custom devices (DiY) SONOFF SNZB-02_EFEKTA control via MQTT"
description: "Integrate your Custom devices (DiY) SONOFF SNZB-02_EFEKTA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-06T00:31:40Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) SNZB-02_EFEKTA

|     |     |
|-----|-----|
| Model | SNZB-02_EFEKTA  |
| Vendor  | Custom devices (DiY)  |
| Description | [An alternative look at the SONOFF SNZB-TH02 temperature and humidity sensor, DIY](http://efektalab.com/SNZB-TH02) |
| Exposes | battery, temperature, humidity, pressure, linkquality |
| Picture | ![Custom devices (DiY) SNZB-02_EFEKTA](https://www.zigbee2mqtt.io/images/devices/SNZB-02_EFEKTA.jpg) |


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

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Report delay (numeric)
Adjust Report Delay. Setting the time in minutes, by default 5 minutes.
The default value presented by the device can be found in the `report_delay` property.
It's possible  write (`/set`) this value.
The minimal value is `1` and the maximum value is `60`.
The unit of this value is `minutes`.

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

### Enable Temperature (binary)
Enable Temperature (Activating the thermostat function).
Value can be found in the published state on the `enable_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_temperature": NEW_VALUE}`. 
If value equals ON enable_temperature is ON, if OFF OFF.

### High temperature (numeric)
Upper temperature threshold for the thermostat. 
Value can be found in the published state on the `high_temperature` property.
TTo read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_temperature": NEW_VALUE}`.
The minimal value is `-5` and the maximum value is `50`.
The unit of this value is `°C`.

### Low temperature (numeric)
Lower temperature threshold for the thermostat
Value can be found in the published state on the `low_temperature` property.
TTo read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_temperature": NEW_VALUE}`.
The minimal value is `-5` and the maximum value is `50`.
The unit of this value is `°C`.

### Enable Humidity (binary)
Enable Humidity (Activating the hygrostat function).
Value can be found in the published state on the `enable_humidity` property.
To read (/get) the value publish a message to topic zigbee2mqtt/FRIENDLY_NAME/get with payload {"enable_humidity": ""}.
To write (/set) a value publish a message to topic zigbee2mqtt/FRIENDLY_NAME/set with payload {"enable_humidity": NEW_VALUE}. 
If value equals ON enable_temperature is ON, if OFF OFF.

### High humidity (numeric)
Upper humidity threshold for the hygrostat. 
Value can be found in the published state on the `high_humidity` property.
TTo read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.
The unit of this value is `%`.

### Low humidity (numeric)
Lower humidity threshold for the hygrostat
Value can be found in the published state on the `low_humidity` property.
TTo read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.
