---
title: "DIYRuZ DIYRuZ_AirSense control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_AirSense via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-01T19:02:25Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# DIYRuZ DIYRuZ_AirSense

|     |     |
|-----|-----|
| Model | DIYRuZ_AirSense  |
| Vendor  | [DIYRuZ](/supported-devices/#v=DIYRuZ)  |
| Description | Air quality sensor |
| Exposes | co2, temperature, humidity, pressure, led_feedback, enable_abc, threshold1, threshold2, temperature_offset, humidity_offset, pressure_offset, linkquality |
| Picture | ![DIYRuZ DIYRuZ_AirSense](https://www.zigbee2mqtt.io/images/devices/DIYRuZ_AirSense.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[Air quality sensor](https://modkam.ru/?p=1715)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `pressure_calibration`: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.

* `pressure_precision`: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


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

### Pressure (numeric)
The measured atmospheric pressure.
Value can be found in the published state on the `pressure` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `hPa`.

### Led feedback (binary)
Enable LEDs feedback.
Value can be found in the published state on the `led_feedback` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_feedback": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_feedback": NEW_VALUE}`.
If value equals `ON` led feedback is ON, if `OFF` OFF.

### Enable abc (binary)
Enable ABC (Automatic Baseline Correction).
Value can be found in the published state on the `enable_abc` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_abc": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_abc": NEW_VALUE}`.
If value equals `ON` enable abc is ON, if `OFF` OFF.

### Threshold1 (numeric)
Warning (LED2) CO2 level.
Value can be found in the published state on the `threshold1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"threshold1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"threshold1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `50000`.
The unit of this value is `ppm`.

### Threshold2 (numeric)
Critical (LED3) CO2 level.
Value can be found in the published state on the `threshold2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"threshold2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"threshold2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `50000`.
The unit of this value is `ppm`.

### Temperature offset (numeric)
Adjust temperature.
Value can be found in the published state on the `temperature_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `20`.
The unit of this value is `°C`.

### Humidity offset (numeric)
Adjust humidity.
Value can be found in the published state on the `humidity_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_offset": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `%`.

### Pressure offset (numeric)
Adjust pressure.
Value can be found in the published state on the `pressure_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pressure_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pressure_offset": NEW_VALUE}`.
The minimal value is `-1000` and the maximum value is `1000`.
The unit of this value is `hPa`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

