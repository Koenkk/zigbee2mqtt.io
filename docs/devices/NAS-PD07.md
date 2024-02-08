---
title: "Neo NAS-PD07 control via MQTT"
description: "Integrate your Neo NAS-PD07 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Neo NAS-PD07

|     |     |
|-----|-----|
| Model | NAS-PD07  |
| Vendor  | [Neo](/supported-devices/#v=Neo)  |
| Description | Motion, temperature & humidity sensor |
| Exposes | occupancy, humidity, temperature, tamper, battery_low, power_type, alarm, temperature_min, temperature_max, temperature_scale, humidity_min, humidity_max, linkquality |
| Picture | ![Neo NAS-PD07](https://www.zigbee2mqtt.io/images/devices/NAS-PD07.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Power type (enum)
Value can be found in the published state on the `power_type` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `battery_full`, `battery_high`, `battery_medium`, `battery_low`, `usb`.

### Alarm (enum)
Temperature/humidity alarm status.
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `over_temperature`, `over_humidity`, `below_min_temperature`, `below_min_humdity`, `off`.

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

### Temperature scale (binary)
Temperature scale (°F/°C).
Value can be found in the published state on the `temperature_scale` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_scale": NEW_VALUE}`.
If value equals `°C` temperature scale is ON, if `°F` OFF.

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

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

