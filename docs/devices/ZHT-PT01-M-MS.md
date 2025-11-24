---
title: "Moes ZHT-PT01-M-MS control via MQTT"
description: "Integrate your Moes ZHT-PT01-M-MS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZHT-PT01-M-MS

|     |     |
|-----|-----|
| Model | ZHT-PT01-M-MS  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Smart thermostat for pilot wire heating radiator |
| Exposes | climate (current_heating_setpoint, local_temperature, preset, system_mode, local_temperature_calibration), mode, window_open, fault, switch (state), child_lock, temp_unit_convert, lower_temp, upper_temp, electricity_statistics, boost_duration, elec_statistics_day, elec_statistics_month, elec_statistics_year, window_keep_time, fault_alarm, running_mode |
| Picture | ![Moes ZHT-PT01-M-MS](https://www.zigbee2mqtt.io/images/devices/ZHT-PT01-M-MS.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `preset`, `system_mode`, `local_temperature_calibration`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `off`, `comfort`, `comfort_1`, `comfort_2`, `eco`, `antifrost`, `program`, `thermostat`. Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `auto`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-10` and the maximum value is `10` with a step size of `0.1`.

### Mode (enum)
Working mode.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `standby`, `comfort`, `comfort_1`, `comfort_2`, `eco`, `antifrost`, `program`, `thermostat`.

### Window open (binary)
Indicates if window is open.
Value can be found in the published state on the `window_open` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` window open is ON, if `false` OFF.

### Fault (binary)
Fault status.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `DETECTED` fault is ON, if `NOT_DETECTED` OFF.

### Window detection (switch)
The current state of this switch is in the published state under the `window_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": "ON"}`, `{"window_detection": "OFF"}` or `{"window_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Temp unit convert (enum)
Temperature unit.
Value can be found in the published state on the `temp_unit_convert` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_unit_convert": NEW_VALUE}`.
The possible values are: `c`, `f`.

### Lower temp (numeric)
Set min temperature.
Value can be found in the published state on the `lower_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lower_temp": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Upper temp (numeric)
Set max temperature.
Value can be found in the published state on the `upper_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"upper_temp": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Electricity statistics (numeric)
Electricity usage statistics.
Value can be found in the published state on the `electricity_statistics` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Boost duration (numeric)
Boost mode duration.
Value can be found in the published state on the `boost_duration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `120`.
The unit of this value is `min`.

### Elec statistics day (numeric)
Daily energy usage.
Value can be found in the published state on the `elec_statistics_day` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Elec statistics month (numeric)
Monthly energy usage.
Value can be found in the published state on the `elec_statistics_month` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Elec statistics year (numeric)
Annual energy usage.
Value can be found in the published state on the `elec_statistics_year` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Window keep time (numeric)
Time window should be kept open.
Value can be found in the published state on the `window_keep_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_keep_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `120`.
The unit of this value is `min`.

### Fault alarm (enum)
Fault alarm (e1, e2).
Value can be found in the published state on the `fault_alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `e1`, `e2`.

### Running mode (enum)
Current running mode.
Value can be found in the published state on the `running_mode` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `standby`, `comfort`, `comfort_1`, `comfort_2`, `eco`, `antifrost`.

