---
title: "Neo NAS-AB02B0 control via MQTT"
description: "Integrate your Neo NAS-AB02B0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-08-11T22:17:44Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Neo NAS-AB02B0

|     |     |
|-----|-----|
| Model | NAS-AB02B0  |
| Vendor  | [Neo](/supported-devices/#v=Neo)  |
| Description | Temperature & humidity sensor and alarm |
| Exposes | temperature, humidity, humidity_alarm, battery_low, temperature_alarm, alarm, melody, duration, temperature_min, temperature_max, humidity_min, humidity_max, volume, power_type, linkquality |
| Picture | ![Neo NAS-AB02B0](https://www.zigbee2mqtt.io/images/devices/NAS-AB02B0.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

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

### Humidity alarm (binary)
Value can be found in the published state on the `humidity_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_alarm": NEW_VALUE}`.
If value equals `true` humidity alarm is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Temperature alarm (binary)
Value can be found in the published state on the `temperature_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_alarm": NEW_VALUE}`.
If value equals `true` temperature alarm is ON, if `false` OFF.

### Alarm (binary)
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `true` alarm is ON, if `false` OFF.

### Melody (enum)
Value can be found in the published state on the `melody` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"melody": NEW_VALUE}`.
The possible values are: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`.

### Duration (numeric)
Value can be found in the published state on the `duration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1800`.
The unit of this value is `s`.

### Temperature min (numeric)
Value can be found in the published state on the `temperature_min` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_min": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `80`.
The unit of this value is `°C`.

### Temperature max (numeric)
Value can be found in the published state on the `temperature_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_max": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `80`.
The unit of this value is `°C`.

### Humidity min (numeric)
Value can be found in the published state on the `humidity_min` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_min": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.
The unit of this value is `%`.

### Humidity max (numeric)
Value can be found in the published state on the `humidity_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_max": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.
The unit of this value is `%`.

### Volume (enum)
Value can be found in the published state on the `volume` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"volume": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Power type (enum)
Value can be found in the published state on the `power_type` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `battery_full`, `battery_high`, `battery_medium`, `battery_low`, `usb`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

