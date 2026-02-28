---
title: "AVATTO TRV26 control via MQTT"
description: "Integrate your AVATTO TRV26 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-02-28T20:18:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# AVATTO TRV26

|     |     |
|-----|-----|
| Model | TRV26  |
| Vendor  | [AVATTO](/supported-devices/#v=AVATTO)  |
| Description | Thermostatic radiator valve |
| Exposes | battery, child_lock, max_temperature_limit, min_temperature_limit, window_detection, open_window_temperature, comfort_temperature, eco_temperature, holiday_temperature, climate (preset, local_temperature_calibration, local_temperature, current_heating_setpoint, system_mode, running_state), frost_protection, scale_protection, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, factory_reset, uptime, descale_countdown, error_status |
| Picture | ![AVATTO TRV26](https://www.zigbee2mqtt.io/images/devices/TRV26.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Max temperature limit (numeric)
Max temperature limit.
Value can be found in the published state on the `max_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature_limit": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `35`.
The unit of this value is `°C`.

### Min temperature limit (numeric)
Min temperature limit.
Value can be found in the published state on the `min_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature_limit": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `15`.
The unit of this value is `°C`.

### Window detection (binary)
Enables/disables window detection on the device.
Value can be found in the published state on the `window_detection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"window_detection": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": NEW_VALUE}`.
If value equals `true` window detection is ON, if `false` OFF.

### Open window temperature (numeric)
Open window temperature.
Value can be found in the published state on the `open_window_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `20`.
The unit of this value is `°C`.

### Comfort temperature (numeric)
Comfort temperature.
Value can be found in the published state on the `comfort_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `25`.
The unit of this value is `°C`.

### Eco temperature (numeric)
Eco temperature.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `20`.
The unit of this value is `°C`.

### Holiday temperature (numeric)
Holiday temperature.
Value can be found in the published state on the `holiday_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `25`.
The unit of this value is `°C`.

### Climate 
This climate device supports the following features: `preset`, `local_temperature_calibration`, `local_temperature`, `current_heating_setpoint`, `system_mode`, `running_state`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `auto`, `manual`, `holiday`, `comfort`, `o`, `antifrost`. Reading (`/get`) this attribute is not possible.
- `system_mode`: Only for Homeassistant. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9` and the maximum value is `9` with a step size of `0.5`.

### Frost protection (binary)
When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C.When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C, the device display "AF".press the pair button to cancel..
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

### Scale protection (binary)
To ensure normal use of the thermostat, the controller will automatically open the valve fully every 1000 hours. It will run for 30 seconds per time with the screen displaying "Ad", then return to its normal working state again..
Value can be found in the published state on the `scale_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scale_protection": NEW_VALUE}`.
If value equals `ON` scale protection is ON, if `OFF` OFF.

### Schedule monday (text)
Schedule for monday, example: "06:00/21.5 17:20/26 20:00/21 24:00/18".
Value can be found in the published state on the `schedule_monday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_monday": NEW_VALUE}`.

### Schedule tuesday (text)
Schedule for tuesday, example: "06:00/21.5 17:20/26 20:00/21 24:00/18".
Value can be found in the published state on the `schedule_tuesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_tuesday": NEW_VALUE}`.

### Schedule wednesday (text)
Schedule for wednesday, example: "06:00/21.5 17:20/26 20:00/21 24:00/18".
Value can be found in the published state on the `schedule_wednesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_wednesday": NEW_VALUE}`.

### Schedule thursday (text)
Schedule for thursday, example: "06:00/21.5 17:20/26 20:00/21 24:00/18".
Value can be found in the published state on the `schedule_thursday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_thursday": NEW_VALUE}`.

### Schedule friday (text)
Schedule for friday, example: "06:00/21.5 17:20/26 20:00/21 24:00/18".
Value can be found in the published state on the `schedule_friday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_friday": NEW_VALUE}`.

### Schedule saturday (text)
Schedule for saturday, example: "06:00/21.5 17:20/26 20:00/21 24:00/18".
Value can be found in the published state on the `schedule_saturday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_saturday": NEW_VALUE}`.

### Schedule sunday (text)
Schedule for sunday, example: "06:00/21.5 17:20/26 20:00/21 24:00/18".
Value can be found in the published state on the `schedule_sunday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_sunday": NEW_VALUE}`.

### Factory reset (binary)
Back to factory settings, USE WITH CAUTION.
Value can be found in the published state on the `factory_reset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset": NEW_VALUE}`.
If value equals `ON` factory reset is ON, if `OFF` OFF.

### Uptime (numeric)
Value can be found in the published state on the `uptime` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `h`.

### Descale Countdown (numeric)
Value can be found in the published state on the `descale_countdown` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `h`.

### Error status (numeric)
Error status.
Value can be found in the published state on the `error_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.

