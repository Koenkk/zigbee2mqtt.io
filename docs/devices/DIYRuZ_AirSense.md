---
title: "DIYRuZ DIYRuZ_AirSense control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_AirSense via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2020-12-01T19:02:25Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section till next h1 (#) or h2 heading (##). -->
<!-- Do NOT use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# DIYRuZ DIYRuZ_AirSense

|     |     |
|-----|-----|
| Model | DIYRuZ_AirSense  |
| Vendor  | DIYRuZ  |
| Description | [Air quality sensor](https://modkam.ru/?p=1715) |
| Exposes | co2, temperature, humidity, pressure, led_feedback, enable_abc, threshold1, threshold2, temperature_offset, humidity_offset, pressure_offset, linkquality |
| Picture | ![DIYRuZ DIYRuZ_AirSense](https://psi-4ward.github.io/zigbee2mqtt.io/images/devices/DIYRuZ_AirSense.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
To control the precision based on the temperature value set it to e.g. `{30: 0, 10: 1}`,
when temperature >= 30 precision will be 0, when temperature >= 10 precision will be 1. Precision will take into affect with next report of device.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`. Calibration will take into affect with next report of device.


* `humidity_precision`: Controls the precision of `humidity` values, e.g. `0`, `1` or `2`; default `2`.
To control the precision based on the humidity value set it to e.g. `{80: 0, 10: 1}`,
when humidity >= 80 precision will be 0, when humidity >= 10 precision will be 1. Precision will take into affect with next report of device.


* `pressure_precision`: Controls the precision of `pressure` values, e.g. `0` or `1`; default `1`.
To control the precision based on the pressure value set it to e.g. `{1000: 0, 100: 1}`,
when pressure >= 1000 precision will be 0, when pressure >= 100 precision will be 1. Precision will take into affect with next report of device.
* `pressure_calibration`: Allows to manually calibrate pressure values,
e.g. `1` would add 1 to the pressure reported by the device; default `0`. Calibration will take into affect with next report of device.

<!-- Notes END: Do not edit below this line -->


## Exposes

### Co2 (numeric)
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

### Pressure (numeric)
The measured atmospheric pressure.
Value can be found in the published state on the `pressure` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `hPa`.

### Led_feedback (binary)
Enable LEDs feedback.
Value can be found in the published state on the `led_feedback` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_feedback": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_feedback": NEW_VALUE}`.
If value equals `ON` led_feedback is ON, if `OFF` OFF.

### Enable_abc (binary)
Enable ABC (Automatic Baseline Correction).
Value can be found in the published state on the `enable_abc` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_abc": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_abc": NEW_VALUE}`.
If value equals `ON` enable_abc is ON, if `OFF` OFF.

### Threshold1 (numeric)
Warning (LED2) CO2 level.
Value can be found in the published state on the `threshold1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"threshold1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"threshold1": NEW_VALUE}`.
The unit of this value is `ppm`.

### Threshold2 (numeric)
Critical (LED3) CO2 level.
Value can be found in the published state on the `threshold2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"threshold2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"threshold2": NEW_VALUE}`.
The unit of this value is `ppm`.

### Temperature_offset (numeric)
Adjust temperature.
Value can be found in the published state on the `temperature_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The unit of this value is `°C`.

### Humidity_offset (numeric)
Adjust humidity.
Value can be found in the published state on the `humidity_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_offset": NEW_VALUE}`.
The unit of this value is `%`.

### Pressure_offset (numeric)
Adjust pressure.
Value can be found in the published state on the `pressure_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pressure_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pressure_offset": NEW_VALUE}`.
The unit of this value is `hPa`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

