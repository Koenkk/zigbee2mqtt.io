---
title: "Scimagic 1-ZB-WSD control via MQTT"
description: "Integrate your Scimagic 1-ZB-WSD via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-31T19:17:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Scimagic 1-ZB-WSD

|     |     |
|-----|-----|
| Model | 1-ZB-WSD  |
| Vendor  | [Scimagic](/supported-devices/#v=Scimagic)  |
| Description | Smart temperature and humidity switch (thermostat/hygrostat) |
| Exposes | switch (state), temperature, humidity, temperature_calibration, humidity_calibration,auto_work,, mode, temperature_target, temperature_range,  humidity_target, humidity_range, delay, delay_time |
| Picture | ![Scimagic 1-ZB-WSD](https://www.zigbee2mqtt.io/images/devices/1-ZB-WSD.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration` (`humidity_calibration`): Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured humidity value. Value can be found in the published state on the `humidity` property. It's not possible to read (`/get`) or write (`/set`) this value. The unit of this value is `%`.

### Temperature calibration (numeric)
Temperature calibration.
Value can be found in the published state on the `temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_calibration": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `10`.
The unit of this value is `°C`.

### Humidity calibration (numeric)
Humidity calibration. Value can be found in the published state on the `humidity_calibration` property. It's not possible to read (`/get`) this value. To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_calibration": NEW_VALUE}`. The minimal value is `-9` and the maximum value is `9`. The unit of this value is `%`.

### Auto work (binary)
Auto work mode.
Value can be found in the published state on the `auto_work` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_work": NEW_VALUE}`.
If value equals `ON` auto work is ON, if `OFF` OFF.

### Mode (enum)
Work mode.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `heating`,  `Dehumidify`, `cooling`, `wet`.

### Temperature target (numeric)
Temperature target.
Value can be found in the published state on the `temperature_target` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_target": NEW_VALUE}`.
The minimal value is `-100` and the maximum value is `100`.
The unit of this value is `°C`.

### Temperature range (numeric)
Keep the temperature in a range.
Value can be found in the published state on the `temperature_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_range": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.
The unit of this value is `°C`.

### Humidity target (numeric)
Target humidity. Value can be found in the published state on the `humidity_target` property. It's not possible to read (`/get`) this value. To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_target": NEW_VALUE}`. The minimal value is `1` and the maximum value is `99`. The unit of this value is `%`.

### Humidity range (numeric)
Humidity range / hysteresis. Value can be found in the published state on the `humidity_range` property. It's not possible to read (`/get`) this value. To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_range": NEW_VALUE}`. The minimal value is `1` and the maximum value is `10`. The unit of this value is `%`.

### Delay (binary)
Switch delay time mode.
Value can be found in the published state on the `delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delay": NEW_VALUE}`.
If value equals `ON` delay is ON, if `OFF` OFF.

### Delay time (numeric)
Switch delay time.
Value can be found in the published state on the `delay_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delay_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `minute`.
