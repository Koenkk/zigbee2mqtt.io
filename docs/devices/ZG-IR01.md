---
title: "easyiot ZG-IR01 control via MQTT"
description: "Integrate your easyiot ZB-IR01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HOBEIAN ZG-IR01

|     |     |
|-----|-----|
| Model | ZG-IR01  |
| Vendor  | [HOBEIAN](/supported-devices/#v=HOBEIAN)  |
| Description |It can learn the power-on/off commands of 6 sets of infrared remote controllers, Built-in temperature and humidity |
| Exposes | ir switch1 on/off/ study,ir switch2 on/off/study....... |
| Picture | ![HOBEIAN ZG-IR01](https://www.zigbee2mqtt.io/images/devices/ZG-IR01.png) |


# Notes

* If you have additional technical problems, please email Technical support at [szalarm@qq.com]

## Exposes

### Switch1-6 ON/OFF (bool)
Send the registered IR encoded signal
It's not possible to read (`/get`) or write (`/set`) this value.

### switch1-6 on/off study (enum)
Study the IR coding for L1-L6 switches.
After sending the "study" command, the device indicator light will remain on until the learning is successful,
 at which point it will flash rapidly several times. If no operation is performed within 3 second, the last IR code will be recorded.
It's not possible to read (`/get`) or write (`/set`) this value.


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

### Temperature unit (enum)
Temperature unit.
Value can be found in the published state on the `temperature_unit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_unit": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Temperature calibration (numeric)
Temperature calibration.
Value can be found in the published state on the `temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_calibration": NEW_VALUE}`.
The minimal value is `-2` and the maximum value is `2`.
The unit of this value is `°C`.

### Humidity calibration (numeric)
Humidity calibration.
Value can be found in the published state on the `humidity_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_calibration": NEW_VALUE}`.
The minimal value is `-30` and the maximum value is `30`.
The unit of this value is `%`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.