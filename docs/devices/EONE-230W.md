---
title: "ENGO EONE-230W control via MQTT"
description: "Integrate your ENGO EONE-230W via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ENGO EONE-230W

|     |     |
|-----|-----|
| Model | EONE-230W  |
| Vendor  | [ENGO](/supported-devices/#v=ENGO)  |
| Description | Zigbee smart thermostat |
| Exposes | state, climate (system_mode, current_heating_setpoint, local_temperature, local_temperature_calibration, running_state, preset), local_temperature, floor_temperature, humidity, backlight, sensor_error, child_lock, relay_mode, sensor_choose, holiday_temperature, holiday_days, frost_set, max_floor_temp_heating, min_floor_temp_heating, max_floor_temp_cooling, min_floor_temp_coolnig, control_algorithm, valve_protection, comfort_warm_floor, temp_resolution, max_temperature, min_temperature, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday |
| Picture | ![ENGO EONE-230W](https://www.zigbee2mqtt.io/images/devices/EONE-230W.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### State (binary)
Turn the thermostat ON/OFF.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": NEW_VALUE}`.
If value equals `ON` state is ON, if `OFF` OFF.

### Climate 
This climate device supports the following features: `system_mode`, `current_heating_setpoint`, `local_temperature`, `local_temperature_calibration`, `running_state`, `preset`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `45`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `heat`, `cool`. Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `manual`, `schedule`, `holiday`, `frost`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`, `cool`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-3.5` and the maximum value is `3.5` with a step size of `0.5`.

### Local temperature (numeric)
Measured room temperature.
Value can be found in the published state on the `local_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Floor temperature (numeric)
Measured floor temperature.
Value can be found in the published state on the `floor_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Backlight (numeric)
Backlight brightness.
Value can be found in the published state on the `backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Sensor error (enum)
Sensor error status.
Value can be found in the published state on the `sensor_error` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `E1`, `E2`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Relay mode (enum)
Relay mode.
Value can be found in the published state on the `relay_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"relay_mode": NEW_VALUE}`.
The possible values are: `NO`, `NC`, `OFF`.

### Sensor choose (enum)
Sensor selection S1/S2.
Value can be found in the published state on the `sensor_choose` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_choose": NEW_VALUE}`.
The possible values are: `internal`, `floor_temp`, `external`, `external_on_off`.

### Holiday temperature (numeric)
Holiday temperature.
Value can be found in the published state on the `holiday_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `45`.
The unit of this value is `°C`.

### Holiday days (numeric)
Number of holiday days.
Value can be found in the published state on the `holiday_days` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_days": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `30`.
The unit of this value is `days`.

### Frost set (numeric)
Frost protection temperature.
Value can be found in the published state on the `frost_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_set": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `17`.
The unit of this value is `°C`.

### Max floor temp heating (numeric)
Maximum floor temperature while heating (requires sensor mode floor_temp).
Value can be found in the published state on the `max_floor_temp_heating` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_floor_temp_heating": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `45`.
The unit of this value is `°C`.

### Min floor temp heating (numeric)
Minimum floor temperature while heating (requires sensor mode floor_temp).
Value can be found in the published state on the `min_floor_temp_heating` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_floor_temp_heating": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `45`.
The unit of this value is `°C`.

### Max floor temp cooling (numeric)
Maximum floor temperature while cooling (requires sensor mode floor_temp).
Value can be found in the published state on the `max_floor_temp_cooling` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_floor_temp_cooling": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `45`.
The unit of this value is `°C`.

### Min floor temp coolnig (numeric)
Minimum floor temperature while cooling (requires sensor mode floor_temp).
Value can be found in the published state on the `min_floor_temp_coolnig` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_floor_temp_coolnig": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `45`.
The unit of this value is `°C`.

### Control algorithm (enum)
Control algorithm.
Value can be found in the published state on the `control_algorithm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"control_algorithm": NEW_VALUE}`.
The possible values are: `TPI_UFH`, `TPI_RAD`, `TPI_ELE`, `HIS_02`, `HIS_04`, `HIS_06`, `HIS_08`, `HIS_10`, `HIS_20`, `HIS_30`, `HIS_40`.

### Valve Protection (enum)
Prevents valve blockage during long periods of inactivity.
Value can be found in the published state on the `valve_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_protection": NEW_VALUE}`.
The possible values are: `off`, `on`, `anti_stop`.

### Comfort warm floor (enum)
Comfort warm floor setting.
Value can be found in the published state on the `comfort_warm_floor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_warm_floor": NEW_VALUE}`.
The possible values are: `OFF`, `LEVEL1`, `LEVEL2`, `LEVEL3`, `LEVEL4`, `LEVEL5`.

### Temp resolution (enum)
Temperature resolution.
Value can be found in the published state on the `temp_resolution` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_resolution": NEW_VALUE}`.
The possible values are: `one`, `five`.

### Max temperature (numeric)
Max temperature.
Value can be found in the published state on the `max_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `45`.
The unit of this value is `°C`.

### Min temperature (numeric)
Min temperature.
Value can be found in the published state on the `min_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `45`.
The unit of this value is `°C`.

### Schedule monday (text)
Schedule Monday.
Value can be found in the published state on the `schedule_monday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_monday": NEW_VALUE}`.

### Schedule tuesday (text)
Schedule Tuesday.
Value can be found in the published state on the `schedule_tuesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_tuesday": NEW_VALUE}`.

### Schedule wednesday (text)
Schedule Wednesday.
Value can be found in the published state on the `schedule_wednesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_wednesday": NEW_VALUE}`.

### Schedule thursday (text)
Schedule Thursday.
Value can be found in the published state on the `schedule_thursday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_thursday": NEW_VALUE}`.

### Schedule friday (text)
Schedule Friday.
Value can be found in the published state on the `schedule_friday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_friday": NEW_VALUE}`.

### Schedule saturday (text)
Schedule Saturday.
Value can be found in the published state on the `schedule_saturday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_saturday": NEW_VALUE}`.

### Schedule sunday (text)
Schedule Sunday.
Value can be found in the published state on the `schedule_sunday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_sunday": NEW_VALUE}`.

