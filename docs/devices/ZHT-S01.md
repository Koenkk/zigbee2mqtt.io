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
| Exposes | child_lock, system_mode, climate (preset, running_state, system_mode, current_heating_setpoint, local_temperature, local_temperature_calibration), floor_temperature, valve_state, fault_alarm, sensor, temperature_scale, backlight_brightness, antifreeze, min_temperature_limit, max_temperature_limit, deadzone_temperature, eco_temperature, program_mode, factory_reset, weekday_1_hour, weekday_1_minute, weekday_1_temp, weekday_2_hour, weekday_2_minute, weekday_2_temp, weekday_3_hour, weekday_3_minute, weekday_3_temp, weekday_4_hour, weekday_4_minute, weekday_4_temp, weekday_5_hour, weekday_5_minute, weekday_5_temp, weekday_6_hour, weekday_6_minute, weekday_6_temp, weekend_1_hour, weekend_1_minute, weekend_1_temp, weekend_2_hour, weekend_2_minute, weekend_2_temp |
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

### Fault alarm (enum)
Fault alarm status.
Value can be found in the published state on the `fault_alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `e1`, `e2`, `e3`, `e1_e2`, `e1_e3`, `e2_e3`, `e1_e2_e3`.

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
Backlight brightness.
Value can be found in the published state on the `backlight_brightness` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_brightness": NEW_VALUE}`.
The possible values are: `off`, `low`, `medium`, `high`.

### Antifreeze (binary)
Antifreeze mode.
Value can be found in the published state on the `antifreeze` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"antifreeze": NEW_VALUE}`.
If value equals `ON` antifreeze is ON, if `OFF` OFF.

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

### Factory reset (binary)
Factory reset (use with caution).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset": NEW_VALUE}`.
If value equals `ON` factory reset is ON, if `OFF` OFF.

### Weekday 1 hour (numeric)
Weekday P1 get_up_in_the_morning - Hour.
Value can be found in the published state on the `weekday_1_hour` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_1_hour": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 1 minute (numeric)
Weekday P1 get_up_in_the_morning - Minute.
Value can be found in the published state on the `weekday_1_minute` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_1_minute": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `59`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 1 temp (numeric)
Weekday P1 get_up_in_the_morning - Temperature.
Value can be found in the published state on the `weekday_1_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_1_temp": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 2 hour (numeric)
Weekday P2 go_out_in_the_morning - Hour.
Value can be found in the published state on the `weekday_2_hour` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_2_hour": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 2 minute (numeric)
Weekday P2 go_out_in_the_morning - Minute.
Value can be found in the published state on the `weekday_2_minute` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_2_minute": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `59`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 2 temp (numeric)
Weekday P2 go_out_in_the_morning - Temperature.
Value can be found in the published state on the `weekday_2_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_2_temp": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 3 hour (numeric)
Weekday P3 back_home_in_the_noon - Hour.
Value can be found in the published state on the `weekday_3_hour` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_3_hour": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 3 minute (numeric)
Weekday P3 back_home_in_the_noon - Minute.
Value can be found in the published state on the `weekday_3_minute` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_3_minute": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `59`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 3 temp (numeric)
Weekday P3 back_home_in_the_noon - Temperature.
Value can be found in the published state on the `weekday_3_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_3_temp": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 4 hour (numeric)
Weekday P4 go_out_in_the_noon - Hour.
Value can be found in the published state on the `weekday_4_hour` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_4_hour": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 4 minute (numeric)
Weekday P4 go_out_in_the_noon - Minute.
Value can be found in the published state on the `weekday_4_minute` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_4_minute": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `59`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 4 temp (numeric)
Weekday P4 go_out_in_the_noon - Temperature.
Value can be found in the published state on the `weekday_4_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_4_temp": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 5 hour (numeric)
Weekday P5 back_home_in_the_evening - Hour.
Value can be found in the published state on the `weekday_5_hour` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_5_hour": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 5 minute (numeric)
Weekday P5 back_home_in_the_evening - Minute.
Value can be found in the published state on the `weekday_5_minute` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_5_minute": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `59`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 5 temp (numeric)
Weekday P5 back_home_in_the_evening - Temperature.
Value can be found in the published state on the `weekday_5_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_5_temp": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 6 hour (numeric)
Weekday P6 sleep_at_night - Hour.
Value can be found in the published state on the `weekday_6_hour` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_6_hour": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 6 minute (numeric)
Weekday P6 sleep_at_night - Minute.
Value can be found in the published state on the `weekday_6_minute` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_6_minute": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `59`.
Besides the numeric values the following values are accepted: `default`.

### Weekday 6 temp (numeric)
Weekday P6 sleep_at_night - Temperature.
Value can be found in the published state on the `weekday_6_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekday_6_temp": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Weekend 1 hour (numeric)
Weekend P1 get_up - Hour.
Value can be found in the published state on the `weekend_1_hour` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekend_1_hour": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
Besides the numeric values the following values are accepted: `default`.

### Weekend 1 minute (numeric)
Weekend P1 get_up - Minute.
Value can be found in the published state on the `weekend_1_minute` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekend_1_minute": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `59`.
Besides the numeric values the following values are accepted: `default`.

### Weekend 1 temp (numeric)
Weekend P1 get_up - Temperature.
Value can be found in the published state on the `weekend_1_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekend_1_temp": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Weekend 2 hour (numeric)
Weekend P2 sleep - Hour.
Value can be found in the published state on the `weekend_2_hour` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekend_2_hour": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `23`.
Besides the numeric values the following values are accepted: `default`.

### Weekend 2 minute (numeric)
Weekend P2 sleep - Minute.
Value can be found in the published state on the `weekend_2_minute` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekend_2_minute": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `59`.
Besides the numeric values the following values are accepted: `default`.

### Weekend 2 temp (numeric)
Weekend P2 sleep - Temperature.
Value can be found in the published state on the `weekend_2_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekend_2_temp": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

