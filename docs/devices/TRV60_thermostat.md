---
title: "AVATTO TRV60_thermostat control via MQTT"
description: "Integrate your AVATTO TRV60_thermostat via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-02-28T20:18:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# AVATTO TRV60_thermostat

|     |     |
|-----|-----|
| Model | TRV60_thermostat  |
| Vendor  | [AVATTO](/supported-devices/#v=AVATTO)  |
| Description | Screen thermostatic radiator valve |
| Exposes | mode, work_state, child_lock, battery, window_detection, climate (current_heating_setpoint, local_temperature, local_temperature_calibration), fault, frost_protection, scale_protection, valve_volume, humidity, out_door_sensor1, out_door_sensor2, out_door_sensor3, out_temperature, screen_orientation |
| Picture | ![AVATTO TRV60_thermostat](https://www.zigbee2mqtt.io/images/devices/TRV60_thermostat.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Mode (enum)
Mode.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `auto`, `manual`.

### Work state (enum)
Work state.
Value can be found in the published state on the `work_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"work_state": NEW_VALUE}`.
The possible values are: `opened`, `closed`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Window detection (binary)
Enables/disables window detection on the device.
Value can be found in the published state on the `window_detection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"window_detection": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": NEW_VALUE}`.
If value equals `true` window detection is ON, if `false` OFF.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `local_temperature_calibration`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-3` and the maximum value is `3` with a step size of `1`.

### Fault (numeric)
Raw fault code.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Frost protection (binary)
When the room temperature is lower than 5 ℃, the valve opens; when the temperature rises to 8 ℃, the valve closes..
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

### Scale protection (binary)
Value can be found in the published state on the `scale_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scale_protection": NEW_VALUE}`.
If value equals `ON` scale protection is ON, if `OFF` OFF.

### Valve volume (numeric)
The current percentage of valve flow rate..
Value can be found in the published state on the `valve_volume` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Humidity (numeric)
The percentage of humidity collected after adding an external temperature and humidity sensor..
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Out door sensor1 (binary)
The on-off status of the door magnet after adding the first external door magnet sensor..
Value can be found in the published state on the `out_door_sensor1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` out door sensor1 is ON, if `OFF` OFF.

### Out door sensor2 (binary)
The on-off status of the door magnet after adding the second external door magnet sensor..
Value can be found in the published state on the `out_door_sensor2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` out door sensor2 is ON, if `OFF` OFF.

### Out door sensor3 (binary)
The on-off status of the door magnet after adding the third external door magnet sensor..
Value can be found in the published state on the `out_door_sensor3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` out door sensor3 is ON, if `OFF` OFF.

### Out temperature (numeric)
The percentage of temperature collected after adding an external temperature and humidity sensor..
Value can be found in the published state on the `out_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Screen orientation (enum)
Screen orientation.
Value can be found in the published state on the `screen_orientation` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"screen_orientation": NEW_VALUE}`.
The possible values are: `normal`, `inverted`.

