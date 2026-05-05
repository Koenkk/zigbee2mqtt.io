---
title: "HOBEIAN ZG-IR01 control via MQTT"
description: "Integrate your HOBEIAN ZG-IR01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-01T17:24:59
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
| Description | Smart IR remote switch |
| Exposes | switch1, switch2, switch3, switch4, switch5, switch6, temperature, humidity, switch1_on, switch1_off, switch2_on, switch2_off, switch3_on, switch3_off, switch4_on, switch4_off, switch5_on, switch5_off, switch6_on, switch6_off, temperature_unit, temperature_calibration, humidity_calibration, battery |
| Picture | ![HOBEIAN ZG-IR01](https://www.zigbee2mqtt.io/images/devices/ZG-IR01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
# Notes
* If you have additional technical problems, please email Technical support at [szalarm@qq.com]
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Switch1 (binary)
IR Switch1.
Value can be found in the published state on the `switch1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch1": NEW_VALUE}`.
If value equals `ON` switch1 is ON, if `OFF` OFF.

### Switch2 (binary)
IR Switch2.
Value can be found in the published state on the `switch2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch2": NEW_VALUE}`.
If value equals `ON` switch2 is ON, if `OFF` OFF.

### Switch3 (binary)
IR Switch3.
Value can be found in the published state on the `switch3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch3": NEW_VALUE}`.
If value equals `ON` switch3 is ON, if `OFF` OFF.

### Switch4 (binary)
IR Switch4.
Value can be found in the published state on the `switch4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch4": NEW_VALUE}`.
If value equals `ON` switch4 is ON, if `OFF` OFF.

### Switch5 (binary)
IR Switch5.
Value can be found in the published state on the `switch5` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch5": NEW_VALUE}`.
If value equals `ON` switch5 is ON, if `OFF` OFF.

### Switch6 (binary)
IR Switch6.
Value can be found in the published state on the `switch6` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch6": NEW_VALUE}`.
If value equals `ON` switch6 is ON, if `OFF` OFF.

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

### Switch1 on (enum)
Switch 1 on IR code Study and Study status.
Value can be found in the published state on the `switch1_on` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch1_on": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

### Switch1 off (enum)
Switch 1 off IR code Study and Study status.
Value can be found in the published state on the `switch1_off` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch1_off": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

### Switch2 on (enum)
Switch 2 on IR code Study and Study status.
Value can be found in the published state on the `switch2_on` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch2_on": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

### Switch2 off (enum)
Switch 2 off IR code Study and Study status.
Value can be found in the published state on the `switch2_off` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch2_off": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

### Switch3 on (enum)
Switch 3 on IR code Study and Study status.
Value can be found in the published state on the `switch3_on` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch3_on": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

### Switch3 off (enum)
Switch 3 off IR code Study and Study status.
Value can be found in the published state on the `switch3_off` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch3_off": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

### Switch4 on (enum)
Switch 4 on IR code Study and Study status.
Value can be found in the published state on the `switch4_on` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch4_on": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

### Switch4 off (enum)
Switch 4 off IR code Study and Study status.
Value can be found in the published state on the `switch4_off` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch4_off": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

### Switch5 on (enum)
Switch 5 on IR code Study and Study status.
Value can be found in the published state on the `switch5_on` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch5_on": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

### Switch5 off (enum)
Switch 5 off IR code Study and Study status.
Value can be found in the published state on the `switch5_off` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch5_off": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

### Switch6 on (enum)
Switch 6 on IR code Study and Study status.
Value can be found in the published state on the `switch6_on` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch6_on": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

### Switch6 off (enum)
Switch 6 off IR code Study and Study status.
Value can be found in the published state on the `switch6_off` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch6_off": NEW_VALUE}`.
The possible values are: `study`, `registered`, `unregistered`.

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

