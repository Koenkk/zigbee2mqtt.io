---
title: "Sunricher SR-ZG9093TRV control via MQTT"
description: "Integrate your Sunricher SR-ZG9093TRV via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-03-01T20:31:41
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9093TRV

|     |     |
|-----|-----|
| Model | SR-ZG9093TRV  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Zigbee thermostatic radiator valve |
| Exposes | climate (local_temperature, current_heating_setpoint, local_temperature_calibration, preset, system_mode, running_state), battery, identify, screen_timeout, anti_freezing_temp, temperature_display_mode, window_open_check, hysteresis, window_open_flag, forced_heating_time, error_code, temperature_display_unit, schedule_sunday, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, child_lock |
| Picture | ![Sunricher SR-ZG9093TRV](https://www.zigbee2mqtt.io/images/devices/SR-ZG9093TRV.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`


## Exposes

### Climate 
This climate device supports the following features: `local_temperature`, `current_heating_setpoint`, `local_temperature_calibration`, `preset`, `system_mode`, `running_state`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `preset`: Preset of the thermostat. Manual: comfort temp (20°C), Auto: schedule temp (see schedule), Away: eco temp (6°C), Sleep: night temp (17°C), Forced: temporary heating with configurable duration (default 300s). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `off`, `auto`, `away`, `sleep`, `manual`, `forced`. Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`, `sleep`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-30` and the maximum value is `30` with a step size of `0.5`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Screen timeout (numeric)
Screen Timeout for Inactivity (excluding gateway config). Range: 10-30s, Default: 10s.
Value can be found in the published state on the `screen_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"screen_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"screen_timeout": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `30`.
The unit of this value is `s`.

### Anti freezing temp (numeric)
Anti Freezing(Low Temp) Mode Configuration. 0: disabled, 5~10: temperature (5°C by default).
Value can be found in the published state on the `anti_freezing_temp` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"anti_freezing_temp": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"anti_freezing_temp": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `°C`.

### Temperature display mode (enum)
Temperature Display Mode. 1: displays set temp, 2: displays room temp (default).
Value can be found in the published state on the `temperature_display_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_display_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_display_mode": NEW_VALUE}`.
The possible values are: `set_temp`, `room_temp`.

### Window open check (numeric)
The temperature threshold for Window Open Detect, value range 0~10, unit is 1°C, 0 means disabled, default value is 5.
Value can be found in the published state on the `window_open_check` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"window_open_check": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_open_check": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `°C`.

### Hysteresis (numeric)
Control hysteresis setting, range is 5-20, unit is 0.1°C, default value is 10. Because the sensor accuracy is 0.5°C, it is recommended not to set this value below 1°C to avoid affecting the battery life..
Value can be found in the published state on the `hysteresis` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"hysteresis": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"hysteresis": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `20`.
The unit of this value is `°C`.

### Window open flag (binary)
Window open flag.
Value can be found in the published state on the `window_open_flag` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"window_open_flag": ""}`.
It's not possible to write (`/set`) this value.
If value equals `opened` window open flag is ON, if `not_opened` OFF.

### Forced heating time (numeric)
Forced heating time, range 10~90, unit is 10s, default value is 30(300s).
Value can be found in the published state on the `forced_heating_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"forced_heating_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"forced_heating_time": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `90`.
The unit of this value is `10s`.

### Error code (enum)
Error code: 0=No hardware error, 4=Motor error (detected not running), 5=The motor runs exceeding the self-check time without finding the boundary.
Value can be found in the published state on the `error_code` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"error_code": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `motor_error`, `motor_timeout`.

### Temperature display unit (enum)
The temperature unit shown on the display.
Value can be found in the published state on the `temperature_display_unit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_display_unit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_display_unit": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Schedule sunday (text)
Schedule for Sunday, example: "06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0".
Value can be found in the published state on the `schedule_sunday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule_sunday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_sunday": NEW_VALUE}`.

### Schedule monday (text)
Schedule for Monday, example: "06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0".
Value can be found in the published state on the `schedule_monday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule_monday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_monday": NEW_VALUE}`.

### Schedule tuesday (text)
Schedule for Tuesday, example: "06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0".
Value can be found in the published state on the `schedule_tuesday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule_tuesday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_tuesday": NEW_VALUE}`.

### Schedule wednesday (text)
Schedule for Wednesday, example: "06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0".
Value can be found in the published state on the `schedule_wednesday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule_wednesday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_wednesday": NEW_VALUE}`.

### Schedule thursday (text)
Schedule for Thursday, example: "06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0".
Value can be found in the published state on the `schedule_thursday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule_thursday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_thursday": NEW_VALUE}`.

### Schedule friday (text)
Schedule for Friday, example: "06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0".
Value can be found in the published state on the `schedule_friday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule_friday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_friday": NEW_VALUE}`.

### Schedule saturday (text)
Schedule for Saturday, example: "06:00/21.0 12:00/21.0 18:00/21.0 22:00/16.0".
Value can be found in the published state on the `schedule_saturday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule_saturday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_saturday": NEW_VALUE}`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

