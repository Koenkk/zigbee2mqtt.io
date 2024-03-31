---
title: "EFEKTA EFEKTA_CO2_Smart_Monitor control via MQTT"
description: "Integrate your EFEKTA EFEKTA_CO2_Smart_Monitor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-01T15:06:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_CO2_Smart_Monitor

|     |     |
|-----|-----|
| Model | EFEKTA_CO2_Smart_Monitor  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | EFEKTA CO2 Smart Monitor, ws2812b indicator, can control the relay, binding |
| Exposes | co2, temperature, humidity, light_indicator, light_indicator_level, set_altitude, temperature_offset, humidity_offset, forced_recalibration, factory_reset_co2, manual_forced_recalibration, enable_gas, high_gas, low_gas, enable_temperature, high_temperature, low_temperature, enable_humidity, high_humidity, low_humidity, linkquality |
| Picture | ![EFEKTA EFEKTA_CO2_Smart_Monitor](https://www.zigbee2mqtt.io/images/devices/EFEKTA_CO2_Smart_Monitor.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[EFEKTA CO2 Smart Monitor, ws2812b indicator, can control the relay, binding](https://efektalab.com/CO2_Monitor)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### CO2 (numeric)
Measured value.
Value can be found in the published state on the `co2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `ppm`.

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

### Light indicator (binary)
Enable or Disable light indicator.
Value can be found in the published state on the `light_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_indicator": NEW_VALUE}`.
If value equals `ON` light indicator is ON, if `OFF` OFF.

### Light indicator level (numeric)
Light indicator level.
Value can be found in the published state on the `light_indicator_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_indicator_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_indicator_level": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

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

### High gas (numeric)
Setting High CO2 Gas Border.
Value can be found in the published state on the `high_gas` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_gas": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_gas": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `2000`.
The unit of this value is `ppm`.

### Low gas (numeric)
Setting Low CO2 Gas Border.
Value can be found in the published state on the `low_gas` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_gas": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_gas": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `2000`.
The unit of this value is `ppm`.

### Enable temperature (binary)
Enable Temperature Control.
Value can be found in the published state on the `enable_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_temperature": NEW_VALUE}`.
If value equals `ON` enable temperature is ON, if `OFF` OFF.

### High temperature (numeric)
Setting High Temperature Border.
Value can be found in the published state on the `high_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_temperature": NEW_VALUE}`.
The minimal value is `-5` and the maximum value is `50`.
The unit of this value is `°C`.

### Low temperature (numeric)
Setting Low Temperature Border.
Value can be found in the published state on the `low_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_temperature": NEW_VALUE}`.
The minimal value is `-5` and the maximum value is `50`.
The unit of this value is `°C`.

### Enable humidity (binary)
Enable Humidity Control.
Value can be found in the published state on the `enable_humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_humidity": NEW_VALUE}`.
If value equals `ON` enable humidity is ON, if `OFF` OFF.

### High humidity (numeric)
Setting High Humidity Border.
Value can be found in the published state on the `high_humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.
The unit of this value is `%`.

### Low humidity (numeric)
Setting Low Humidity Border.
Value can be found in the published state on the `low_humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_humidity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_humidity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

