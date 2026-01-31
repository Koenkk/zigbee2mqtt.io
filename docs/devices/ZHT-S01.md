---
title: "Moes ZHT-S01 control via MQTT"
description: "Integrate your Moes ZHT-S01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:10:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZHT-S01

|     |     |
|-----|-----|
| Model | ZHT-S01  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Zigbee wall thermostat (air/internal temperature priority) |
| Exposes | child_lock, system_mode, climate (preset, running_state, system_mode, current_heating_setpoint, local_temperature, local_temperature_calibration), floor_temperature, valve_state, sensor, temperature_scale, backlight_brightness, antifreeze, min_temperature_limit, max_temperature_limit, deadzone_temperature, eco_temperature, program_mode, weekly_programming |
| Picture | ![Moes ZHT-S01](https://www.zigbee2mqtt.io/images/devices/ZHT-S01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### System mode (enum)
Thermostat system mode (device enabled/disabled).
Value can be found in the published state on the `system_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": NEW_VALUE}`.
The possible values are: `off`, `heat`.

### Climate 
This climate device supports the following features: `preset`, `running_state`, `system_mode`, `current_heating_setpoint`, `local_temperature`, `local_temperature_calibration`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `manual`, `auto`, `eco`. Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9` and the maximum value is `9` with a step size of `1`.

### Floor temperature (numeric)
Temperature from floor sensor (secondary).
Value can be found in the published state on the `floor_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Valve state (binary)
Valve state.
Value can be found in the published state on the `valve_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `OPEN` valve state is ON, if `CLOSED` OFF.

### Sensor (enum)
Temperature sensor selection.
Value can be found in the published state on the `sensor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `internal`, `external`, `both`.

### Temperature scale (enum)
Temperature scale (WARNING: converter only supports Celsius datapoints).
Value can be found in the published state on the `temperature_scale` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_scale": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Backlight brightness (enum)
Backlight brightness percentage.
Value can be found in the published state on the `backlight_brightness` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_brightness": NEW_VALUE}`.
The possible values are: `0`, `20`, `50`, `100`.

### Antifreeze (binary)
Antifreeze mode.
Value can be found in the published state on the `antifreeze` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"antifreeze": NEW_VALUE}`.
If value equals `OFF` antifreeze is ON, if `ON` OFF.

### Min temperature limit (numeric)
Minimum temperature limit.
Value can be found in the published state on the `min_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature_limit": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `20`.
The unit of this value is `°C`.

### Max temperature limit (numeric)
Maximum temperature limit.
Value can be found in the published state on the `max_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature_limit": NEW_VALUE}`.
The minimal value is `30` and the maximum value is `70`.
The unit of this value is `°C`.

### Deadzone temperature (numeric)
Temperature hysteresis/deadzone.
Value can be found in the published state on the `deadzone_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deadzone_temperature": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `3`.
The unit of this value is `°C`.

### Eco temperature (numeric)
ECO mode temperature setting.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.

### Program mode (enum)
Weekly programming mode type.
Value can be found in the published state on the `program_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_mode": NEW_VALUE}`.
The possible values are: `off`, `weekend`, `single_break`, `no_day_off`.

### Weekly programming (composite)
Time of day and setpoint in weekly programming mode.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekly_programming": {"weekdays_program_1_hour": VALUE, "weekdays_program_1_minute": VALUE, "weekdays_program_1_temperature": VALUE, "weekdays_program_2_hour": VALUE, "weekdays_program_2_minute": VALUE, "weekdays_program_2_temperature": VALUE, "weekdays_program_3_hour": VALUE, "weekdays_program_3_minute": VALUE, "weekdays_program_3_temperature": VALUE, "weekdays_program_4_hour": VALUE, "weekdays_program_4_minute": VALUE, "weekdays_program_4_temperature": VALUE, "weekdays_program_5_hour": VALUE, "weekdays_program_5_minute": VALUE, "weekdays_program_5_temperature": VALUE, "weekdays_program_6_hour": VALUE, "weekdays_program_6_minute": VALUE, "weekdays_program_6_temperature": VALUE, "weekend_program_1_hour": VALUE, "weekend_program_1_minute": VALUE, "weekend_program_1_temperature": VALUE, "weekend_program_2_hour": VALUE, "weekend_program_2_minute": VALUE, "weekend_program_2_temperature": VALUE}}`
- `weekdays_program_1_hour` (numeric) max value is 23
- `weekdays_program_1_minute` (numeric) max value is 59
- `weekdays_program_1_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `weekdays_program_2_hour` (numeric) max value is 23
- `weekdays_program_2_minute` (numeric) max value is 59
- `weekdays_program_2_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `weekdays_program_3_hour` (numeric) max value is 23
- `weekdays_program_3_minute` (numeric) max value is 59
- `weekdays_program_3_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `weekdays_program_4_hour` (numeric) max value is 23
- `weekdays_program_4_minute` (numeric) max value is 59
- `weekdays_program_4_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `weekdays_program_5_hour` (numeric) max value is 23
- `weekdays_program_5_minute` (numeric) max value is 59
- `weekdays_program_5_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `weekdays_program_6_hour` (numeric) max value is 23
- `weekdays_program_6_minute` (numeric) max value is 59
- `weekdays_program_6_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `weekend_program_1_hour` (numeric) max value is 23
- `weekend_program_1_minute` (numeric) max value is 59
- `weekend_program_1_temperature` (numeric) min value is 5, max value is 35, unit is °C
- `weekend_program_2_hour` (numeric) max value is 23
- `weekend_program_2_minute` (numeric) max value is 59
- `weekend_program_2_temperature` (numeric) min value is 5, max value is 35, unit is °C

