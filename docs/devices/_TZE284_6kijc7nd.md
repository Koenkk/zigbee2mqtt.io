---
title: "Tervix _TZE284_6kijc7nd control via MQTT"
description: "Integrate your Tervix _TZE284_6kijc7nd via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:37:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tervix _TZE284_6kijc7nd

|     |     |
|-----|-----|
| Model | _TZE284_6kijc7nd  |
| Vendor  | [Tervix](/supported-devices/#v=Tervix)  |
| Description | Tervix Zigbee thermostat |
| Exposes | climate (current_heating_setpoint, local_temperature, system_mode, running_state), local_temperature, mode, run_mode, week_program_periods, factory_reset, child_lock, window_state, working_status, window_check, frost_protection, sensor_choose, humidity_control, humidity, week_schedule, window_open_detection_time, window_open_detection_temp, window_open_delay_time, upper_temp, temperature_correction, switch_sensitivity, floor_temp_protection, floor_low_protection |
| Picture | ![Tervix _TZE284_6kijc7nd](https://www.zigbee2mqtt.io/images/devices/_TZE284_6kijc7nd.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Local temperature (numeric)
Current temperature measured by the thermostat..
Value can be found in the published state on the `local_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Mode (enum)
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `manual`, `program`.

### Run mode (enum)
Operation mode of the thermostat (heat or cool)..
Value can be found in the published state on the `run_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"run_mode": NEW_VALUE}`.
The possible values are: `heat_mode`, `cool_mode`.

### Week program periods (enum)
Number of program periods per week (read-only)..
Value can be found in the published state on the `week_program_periods` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `periods_4`.

### Factory reset (binary)
WARNING: Restores the device to factory settings. All configurations will be lost..
Value can be found in the published state on the `factory_reset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset": NEW_VALUE}`.
If value equals `ON` factory reset is ON, if `OFF` OFF.

### Child lock (binary)
Enables or disables the child lock feature..
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `ON` child lock is ON, if `OFF` OFF.

### Window state (enum)
Indicates whether the window is open or closed..
Value can be found in the published state on the `window_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `open`, `close`.

### Working status (enum)
Current working status of the thermostat..
Value can be found in the published state on the `working_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `Keeping Warm`, `Working`.

### Window check (binary)
Checks whether the window is open or closed..
Value can be found in the published state on the `window_check` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_check": NEW_VALUE}`.
If value equals `ON` window check is ON, if `OFF` OFF.

### Frost protection (binary)
Enables frost protection mode..
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

### Sensor choose (enum)
Selects between internal or external temperature sensors..
Value can be found in the published state on the `sensor_choose` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_choose": NEW_VALUE}`.
The possible values are: `in`, `out`.

### Humidity control (binary)
Controls the humidity protection feature..
Value can be found in the published state on the `humidity_control` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_control": NEW_VALUE}`.
If value equals `ON` humidity control is ON, if `OFF` OFF.

### Humidity (numeric)
Displays the current relative humidity level in percentage..
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Week schedule (text)
Weekly schedule: structured format like - Monday: [{"time":"06:30","temp":20.0},...]..
Value can be found in the published state on the `week_schedule` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"week_schedule": NEW_VALUE}`.

### Window open detection time (numeric)
Window open detection threshold in minutes..
Value can be found in the published state on the `window_open_detection_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_open_detection_time": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `30`.
The unit of this value is `min`.

### Window open detection temp (numeric)
Temperature threshold for window open detection..
Value can be found in the published state on the `window_open_detection_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_open_detection_temp": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `4`.
The unit of this value is `°C`.

### Window open delay time (numeric)
Delay time for triggering window open detection (minutes)..
Value can be found in the published state on the `window_open_delay_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_open_delay_time": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `60`.
The unit of this value is `min`.

### Upper temp (numeric)
Set the upper temperature limit.
Value can be found in the published state on the `upper_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"upper_temp": NEW_VALUE}`.
The minimal value is `35` and the maximum value is `95`.
The unit of this value is `°C`.

### Temperature correction (numeric)
Temperature calibration adjustment..
Value can be found in the published state on the `temperature_correction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_correction": NEW_VALUE}`.
The minimal value is `-9` and the maximum value is `9`.
The unit of this value is `°C`.

### Switch sensitivity (numeric)
Temperature difference threshold to trigger switching..
Value can be found in the published state on the `switch_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_sensitivity": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `5`.
The unit of this value is `°C`.

### Floor temp protection (numeric)
Maximum allowed floor temperature for protection..
Value can be found in the published state on the `floor_temp_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_temp_protection": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `60`.
The unit of this value is `°C`.

### Floor low protection (numeric)
Minimum allowed floor temperature for protection..
Value can be found in the published state on the `floor_low_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_low_protection": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `30`.
The unit of this value is `°C`.

