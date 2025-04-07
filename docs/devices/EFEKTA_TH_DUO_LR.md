---
title: "EFEKTA EFEKTA_TH_DUO_LR control via MQTT"
description: "Integrate your EFEKTA EFEKTA_TH_DUO_LR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:30:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_TH_DUO_LR

|     |     |
|-----|-----|
| Model | EFEKTA_TH_DUO_LR  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | Smart device with internal and external temperature and humidity sensor. |
| Exposes | temperature, humidity, battery, voltage, battery_low, reading_interval, tx_radio_power, smart_sleep, uptime, config_report_enable, comparison_previous_data, enable_temperature, switching_temperature_sensor, invert_logic_temperature, high_temperature, low_temperature, enable_humidity, switching_humidity_sensor, invert_logic_humidity, high_humidity, low_humidity |
| Picture | ![EFEKTA EFEKTA_TH_DUO_LR](https://www.zigbee2mqtt.io/images/devices/EFEKTA_TH_DUO_LR.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Temperature (numeric, 1 endpoint)
Measured value of the built-in temperature sensor.
Value can be found in the published state on the `temperature_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Temperature (numeric, 2 endpoint)
Measured value of the external temperature sensor.
Value can be found in the published state on the `temperature_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 1 endpoint)
Measured value of the built-in humidity sensor.
Value can be found in the published state on the `humidity_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Humidity (numeric, 2 endpoint)
Measured value of the external humidity sensor.
Value can be found in the published state on the `humidity_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

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

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Reading interval (numeric)
Setting the sensor reading interval in seconds, by default 30 seconds.
Value can be found in the published state on the `reading_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reading_interval": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `360`.
The unit of this value is `sec`.

### Tx radio power (enum)
Set TX Radio Power, dbm.
Value can be found in the published state on the `tx_radio_power` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tx_radio_power": NEW_VALUE}`.
The possible values are: `4dbm`, `19dbm`.

### Smart sleep (binary)
Enable Smart Sleep, short wakeup every 7 seconds.
Value can be found in the published state on the `smart_sleep` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"smart_sleep": NEW_VALUE}`.
If value equals `ON` smart sleep is ON, if `OFF` OFF.

### Uptime (numeric)
Uptime.
Value can be found in the published state on the `uptime` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Hours`.

### Config report enable (binary)
Enable reporting based on reporting configuration.
Value can be found in the published state on the `config_report_enable` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"config_report_enable": NEW_VALUE}`.
If value equals `ON` config report enable is ON, if `OFF` OFF.

### Comparison previous data (binary)
Enable сontrol of comparison with previous data.
Value can be found in the published state on the `comparison_previous_data` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comparison_previous_data": NEW_VALUE}`.
If value equals `ON` comparison previous data is ON, if `OFF` OFF.

### Enable temperature (binary)
Enable Temperature Control.
Value can be found in the published state on the `enable_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_temperature": NEW_VALUE}`.
If value equals `ON` enable temperature is ON, if `OFF` OFF.

### Switching temperature sensor (binary)
Enable internal or external sensor control.
Value can be found in the published state on the `switching_temperature_sensor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switching_temperature_sensor": NEW_VALUE}`.
If value equals `ON` switching temperature sensor is ON, if `OFF` OFF.

### Invert logic temperature (binary)
Invert Logic Temperature Control.
Value can be found in the published state on the `invert_logic_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"invert_logic_temperature": NEW_VALUE}`.
If value equals `ON` invert logic temperature is ON, if `OFF` OFF.

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

### Enable humidity (binary)
Enable Humidity Control.
Value can be found in the published state on the `enable_humidity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_humidity": NEW_VALUE}`.
If value equals `ON` enable humidity is ON, if `OFF` OFF.

### Switching humidity sensor (binary)
Enable internal or external sensor control.
Value can be found in the published state on the `switching_humidity_sensor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switching_humidity_sensor": NEW_VALUE}`.
If value equals `ON` switching humidity sensor is ON, if `OFF` OFF.

### Invert logic humidity (binary)
Invert Logic Humidity Control.
Value can be found in the published state on the `invert_logic_humidity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"invert_logic_humidity": NEW_VALUE}`.
If value equals `ON` invert logic humidity is ON, if `OFF` OFF.

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

