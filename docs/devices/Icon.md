---
title: "Danfoss Icon control via MQTT"
description: "Integrate your Danfoss Icon via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Danfoss Icon

|     |     |
|-----|-----|
| Model | Icon  |
| Vendor  | Danfoss  |
| Description | Icon floor heating (regulator, Zigbee module & thermostats) |
| Exposes | battery, climate (occupied_heating_setpoint, local_temperature, running_state, system_mode), abs_min_heat_setpoint_limit, abs_max_heat_setpoint_limit, min_heat_setpoint_limit, max_heat_setpoint_limit, setpoint_change_source, output_status, room_status_code, system_status_code, system_status_water, multimaster_role, linkquality |
| Picture | ![Danfoss Icon](https://www.zigbee2mqtt.io/images/devices/Icon.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Battery (numeric, l1 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l1 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l1": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l1": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l1": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l1": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l1": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l1": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l1 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l1 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l1 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l1": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l1 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l1": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l1 endpoint)
Value can be found in the published state on the `setpoint_change_source_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l1 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l1": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l1 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l1": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l2 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l2 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l2": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l2": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l2": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l2": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l2": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l2": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l2 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l2 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l2 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l2": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l2 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l2": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l2 endpoint)
Value can be found in the published state on the `setpoint_change_source_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l2 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l2": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l2 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l2": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l3 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l3 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l3": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l3": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l3": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l3": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l3": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l3": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l3 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l3 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l3 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l3": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l3 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l3": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l3 endpoint)
Value can be found in the published state on the `setpoint_change_source_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l3 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l3": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l3 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l3": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l4 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l4 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l4": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l4": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l4": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l4": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l4": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l4": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l4 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l4 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l4 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l4": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l4 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l4": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l4 endpoint)
Value can be found in the published state on the `setpoint_change_source_l4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l4 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l4": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l4 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l4": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l5 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l5 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l5": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l5": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l5": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l5": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l5": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l5": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l5 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l5 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l5 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l5": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l5 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l5": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l5 endpoint)
Value can be found in the published state on the `setpoint_change_source_l5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l5 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l5": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l5 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l5": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l6 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l6 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l6": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l6": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l6": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l6": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l6": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l6": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l6 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l6 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l6 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l6": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l6 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l6": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l6 endpoint)
Value can be found in the published state on the `setpoint_change_source_l6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l6 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l6": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l6 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l6": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l7 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l7` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l7 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l7": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l7": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l7": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l7": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l7": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l7": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l7 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l7` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l7 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l7` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l7 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l7": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l7 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l7": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l7 endpoint)
Value can be found in the published state on the `setpoint_change_source_l7` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l7 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l7": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l7 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l7": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l8 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l8` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l8 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l8": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l8": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l8": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l8": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l8": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l8": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l8 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l8` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l8 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l8` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l8 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l8": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l8 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l8": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l8 endpoint)
Value can be found in the published state on the `setpoint_change_source_l8` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l8 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l8": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l8 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l8": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l9 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l9` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l9 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l9": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l9": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l9": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l9": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l9": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l9": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l9 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l9` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l9 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l9` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l9 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l9": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l9 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l9": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l9 endpoint)
Value can be found in the published state on the `setpoint_change_source_l9` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l9 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l9": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l9 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l9": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l10 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l10` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l10 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l10": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l10": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l10": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l10": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l10": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l10": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l10 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l10` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l10 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l10` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l10 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l10": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l10 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l10": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l10 endpoint)
Value can be found in the published state on the `setpoint_change_source_l10` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l10 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l10": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l10 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l10": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l11 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l11` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l11 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l11": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l11": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l11": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l11": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l11": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l11": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l11 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l11` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l11 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l11` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l11 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l11": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l11 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l11": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l11 endpoint)
Value can be found in the published state on the `setpoint_change_source_l11` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l11 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l11": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l11 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l11": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l12 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l12` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l12 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l12": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l12": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l12": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l12": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l12": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l12": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l12 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l12` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l12 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l12` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l12 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l12": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l12 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l12": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l12 endpoint)
Value can be found in the published state on the `setpoint_change_source_l12` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l12 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l12": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l12 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l12": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l13 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l13` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l13 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l13": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l13": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l13": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l13": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l13": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l13": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l13 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l13` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l13 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l13` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l13 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l13": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l13 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l13": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l13 endpoint)
Value can be found in the published state on the `setpoint_change_source_l13` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l13 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l13": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l13 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l13": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l14 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l14` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l14 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l14": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l14": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l14": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l14": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l14": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l14": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l14 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l14` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l14 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l14` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l14 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l14": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l14 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l14": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l14 endpoint)
Value can be found in the published state on the `setpoint_change_source_l14` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l14 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l14": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l14 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l14": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Battery (numeric, l15 endpoint)
Remaining battery in %.
Value can be found in the published state on the `battery_l15` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (l15 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `running_state`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l15": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l15": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l15": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l15": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l15": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_l15": ""}`.

### Abs_min_heat_setpoint_limit (numeric, l15 endpoint)
Absolute min temperature allowed on the device.
Value can be found in the published state on the `abs_min_heat_setpoint_limit_l15` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Abs_max_heat_setpoint_limit (numeric, l15 endpoint)
Absolute max temperature allowed on the device.
Value can be found in the published state on the `abs_max_heat_setpoint_limit_l15` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Min_heat_setpoint_limit (numeric, l15 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_l15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_l15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_l15": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max_heat_setpoint_limit (numeric, l15 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_l15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_l15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_l15": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint_change_source (enum, l15 endpoint)
Value can be found in the published state on the `setpoint_change_source_l15` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output_status (enum, l15 endpoint)
Danfoss Output Status [Active vs Inactive]).
Value can be found in the published state on the `output_status_l15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_l15": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room_status_code (enum, l15 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_l15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_l15": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### System_status_code (enum, l16 endpoint)
Regulator Status.
Value can be found in the published state on the `system_status_code_l16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_status_code_l16": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_expansion_board`, `missing_radio_module`, `missing_command_module`, `missing_master_rail`, `missing_slave_rail_no_1`, `missing_slave_rail_no_2`, `pt1000_input_short_circuit`, `pt1000_input_open_circuit`, `error_on_one_or_more_output`.

### System_status_water (enum, l16 endpoint)
Water Status of Regulator.
Value can be found in the published state on the `system_status_water_l16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_status_water_l16": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `hot_water_flow_in_pipes`, `cool_water_flow_in_pipes`.

### Multimaster_role (enum, l16 endpoint)
Regulator role (Master vs Slave).
Value can be found in the published state on the `multimaster_role_l16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"multimaster_role_l16": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `invalid_unused`, `master`, `slave_1`, `slave_2`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

