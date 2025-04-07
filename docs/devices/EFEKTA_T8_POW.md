---
title: "EFEKTA EFEKTA_T8_POW control via MQTT"
description: "Integrate your EFEKTA EFEKTA_T8_POW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-18T14:54:46
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_T8_POW

|     |     |
|-----|-----|
| Model | EFEKTA_T8_POW  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | Temperature sensor with a signal amplifier, support up to 8 DS18B20 |
| Exposes | temperature, battery, battery_low, number_of_sensors, uptime, mains_voltage, reading_interval, tx_radio_power, smart_sleep |
| Picture | ![EFEKTA EFEKTA_T8_POW](https://www.zigbee2mqtt.io/images/devices/EFEKTA_T8_POW.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Temperature (numeric, 1 endpoint)
Measured value of the 1 temperature sensor.
Value can be found in the published state on the `temperature_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Temperature (numeric, 2 endpoint)
Measured value of the 2 temperature sensor.
Value can be found in the published state on the `temperature_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Temperature (numeric, 3 endpoint)
Measured value of the 3 temperature sensor.
Value can be found in the published state on the `temperature_3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Temperature (numeric, 4 endpoint)
Measured value of the 4 temperature sensor.
Value can be found in the published state on the `temperature_4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Temperature (numeric, 5 endpoint)
Measured value of the 5 temperature sensor.
Value can be found in the published state on the `temperature_5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Temperature (numeric, 6 endpoint)
Measured value of the 6 temperature sensor.
Value can be found in the published state on the `temperature_6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Temperature (numeric, 7 endpoint)
Measured value of the 7 temperature sensor.
Value can be found in the published state on the `temperature_7` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Temperature (numeric, 8 endpoint)
Measured value of the 8 temperature sensor.
Value can be found in the published state on the `temperature_8` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Number of sensors (numeric)
Number of ds18b20 sensors per data bus.
Value can be found in the published state on the `number_of_sensors` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Uptime (numeric)
Uptime.
Value can be found in the published state on the `uptime` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Hours`.

### Mains voltage (numeric)
Mains voltage.
Value can be found in the published state on the `mains_voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"mains_voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Reading interval (numeric)
Setting the sensor reading interval in seconds, by default 15 seconds.
Value can be found in the published state on the `reading_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reading_interval": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `360`.
The unit of this value is `sec`.

### Tx radio power (enum)
Set TX Radio Power, dbm.
Value can be found in the published state on the `tx_radio_power` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tx_radio_power": NEW_VALUE}`.
The possible values are: `4dbm`, `19dbm`.

### Smart sleep (binary)
Enable Smart Sleep, short wakeup every 2-7 seconds.
Value can be found in the published state on the `smart_sleep` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"smart_sleep": NEW_VALUE}`.
If value equals `ON` smart sleep is ON, if `OFF` OFF.

