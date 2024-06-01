---
title: "Danfoss Icon2 control via MQTT"
description: "Integrate your Danfoss Icon2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-03-31T18:43:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Danfoss Icon2

|     |     |
|-----|-----|
| Model | Icon2  |
| Vendor  | [Danfoss](/supported-devices/#v=Danfoss)  |
| Description | Icon2 Main Controller, Room Thermostat or Sensor |
| Exposes | battery, climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), min_heat_setpoint_limit, max_heat_setpoint_limit, setpoint_change_source, output_status, room_status_code, room_floor_sensor_mode, floor_min_setpoint, floor_max_setpoint, temperature, humidity, system_status_code, system_status_water, multimaster_role, linkquality |
| Picture | ![Danfoss Icon2](https://www.zigbee2mqtt.io/images/devices/Icon2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Battery (numeric, 1 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (1 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_1": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_1": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_1": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_1": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_1": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 1 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_1": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 1 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_1": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 1 endpoint)
Value can be found in the published state on the `setpoint_change_source_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 1 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_1": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 1 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_1": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 1 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_1": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 1 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_1": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 1 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_1": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 1 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 1 endpoint)
Humidity.
Value can be found in the published state on the `humidity_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 2 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (2 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_2": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_2": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_2": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_2": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_2": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 2 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_2": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 2 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_2": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 2 endpoint)
Value can be found in the published state on the `setpoint_change_source_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 2 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_2": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 2 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_2": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 2 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_2": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 2 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_2": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 2 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_2": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 2 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 2 endpoint)
Humidity.
Value can be found in the published state on the `humidity_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 3 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (3 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_3": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_3": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_3": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_3": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_3": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 3 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_3": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 3 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_3": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 3 endpoint)
Value can be found in the published state on the `setpoint_change_source_3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 3 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_3": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 3 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_3": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 3 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_3": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 3 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_3": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 3 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_3": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 3 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 3 endpoint)
Humidity.
Value can be found in the published state on the `humidity_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 4 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (4 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_4": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_4": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_4": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_4": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_4": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 4 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_4": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 4 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_4": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 4 endpoint)
Value can be found in the published state on the `setpoint_change_source_4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 4 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_4": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 4 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_4": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 4 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_4": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 4 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_4": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 4 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_4": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 4 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_4": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 4 endpoint)
Humidity.
Value can be found in the published state on the `humidity_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_4": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 5 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (5 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_5": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_5": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_5": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_5": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_5": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 5 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_5": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 5 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_5": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 5 endpoint)
Value can be found in the published state on the `setpoint_change_source_5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 5 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_5": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 5 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_5": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 5 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_5": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 5 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_5": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 5 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_5": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 5 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_5": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 5 endpoint)
Humidity.
Value can be found in the published state on the `humidity_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_5": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 6 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (6 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_6": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_6": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_6": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_6": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_6": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 6 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_6": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 6 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_6": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 6 endpoint)
Value can be found in the published state on the `setpoint_change_source_6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 6 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_6": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 6 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_6": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 6 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_6": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 6 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_6": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 6 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_6": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 6 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_6": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 6 endpoint)
Humidity.
Value can be found in the published state on the `humidity_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_6": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 7 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_7` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (7 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_7": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_7": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_7": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_7": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_7": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 7 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_7": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 7 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_7": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 7 endpoint)
Value can be found in the published state on the `setpoint_change_source_7` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 7 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_7": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 7 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_7": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 7 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_7": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 7 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_7": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 7 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_7": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 7 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_7": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 7 endpoint)
Humidity.
Value can be found in the published state on the `humidity_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_7": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 8 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_8` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (8 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_8": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_8": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_8": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_8": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_8": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 8 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_8": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 8 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_8": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 8 endpoint)
Value can be found in the published state on the `setpoint_change_source_8` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 8 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_8": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 8 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_8": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 8 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_8": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 8 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_8": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 8 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_8": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 8 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_8": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 8 endpoint)
Humidity.
Value can be found in the published state on the `humidity_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_8": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 9 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_9` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (9 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_9": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_9": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_9": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_9": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_9": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 9 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_9": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 9 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_9": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 9 endpoint)
Value can be found in the published state on the `setpoint_change_source_9` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 9 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_9": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 9 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_9": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 9 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_9": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 9 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_9": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 9 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_9": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 9 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_9": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 9 endpoint)
Humidity.
Value can be found in the published state on the `humidity_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_9": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 10 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_10` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (10 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_10": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_10": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_10": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_10": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_10": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 10 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_10": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 10 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_10": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 10 endpoint)
Value can be found in the published state on the `setpoint_change_source_10` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 10 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_10": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 10 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_10": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 10 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_10": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 10 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_10": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 10 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_10": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 10 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_10": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 10 endpoint)
Humidity.
Value can be found in the published state on the `humidity_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_10": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 11 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_11` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (11 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_11": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_11": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_11": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_11": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_11": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 11 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_11": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 11 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_11": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 11 endpoint)
Value can be found in the published state on the `setpoint_change_source_11` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 11 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_11": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 11 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_11": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 11 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_11": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 11 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_11": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 11 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_11": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 11 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_11": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 11 endpoint)
Humidity.
Value can be found in the published state on the `humidity_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_11": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 12 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_12` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (12 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_12": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_12": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_12": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_12": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_12": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 12 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_12": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 12 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_12": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 12 endpoint)
Value can be found in the published state on the `setpoint_change_source_12` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 12 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_12": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 12 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_12": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 12 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_12": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 12 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_12": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 12 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_12": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 12 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_12": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 12 endpoint)
Humidity.
Value can be found in the published state on the `humidity_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_12": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 13 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_13` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (13 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_13": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_13": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_13": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_13": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_13": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 13 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_13": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 13 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_13": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 13 endpoint)
Value can be found in the published state on the `setpoint_change_source_13` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 13 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_13": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 13 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_13": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 13 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_13": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 13 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_13": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 13 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_13": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 13 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_13": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 13 endpoint)
Humidity.
Value can be found in the published state on the `humidity_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_13": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 14 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_14` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (14 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_14": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_14": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_14": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_14": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_14": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 14 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_14": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 14 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_14": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 14 endpoint)
Value can be found in the published state on the `setpoint_change_source_14` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 14 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_14": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 14 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_14": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 14 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_14": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 14 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_14": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 14 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_14": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 14 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_14": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 14 endpoint)
Humidity.
Value can be found in the published state on the `humidity_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_14": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric, 15 endpoint)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery_15` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Climate (15 endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_15": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_15": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_15": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_15": VALUE}` where `VALUE` is one of: `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_15": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

### Min heat setpoint limit (numeric, 15 endpoint)
Min temperature limit set on the device.
Value can be found in the published state on the `min_heat_setpoint_limit_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit_15": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric, 15 endpoint)
Max temperature limit set on the device.
Value can be found in the published state on the `max_heat_setpoint_limit_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit_15": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Setpoint change source (enum, 15 endpoint)
Value can be found in the published state on the `setpoint_change_source_15` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `schedule`, `externally`.

### Output status (enum, 15 endpoint)
Actuator status.
Value can be found in the published state on the `output_status_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"output_status_15": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `inactive`, `active`.

### Room status code (enum, 15 endpoint)
Thermostat status.
Value can be found in the published state on the `room_status_code_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_status_code_15": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_rt`, `rt_touch_error`, `floor_sensor_short_circuit`, `floor_sensor_disconnected`.

### Room floor sensor mode (enum, 15 endpoint)
Floor sensor mode.
Value can be found in the published state on the `room_floor_sensor_mode_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room_floor_sensor_mode_15": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `comfort`, `floor_only`, `dual_mode`.

### Floor min setpoint (numeric, 15 endpoint)
Min floor temperature.
Value can be found in the published state on the `floor_min_setpoint_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_min_setpoint_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_min_setpoint_15": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Floor max setpoint (numeric, 15 endpoint)
Max floor temperature.
Value can be found in the published state on the `floor_max_setpoint_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_max_setpoint_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_max_setpoint_15": NEW_VALUE}`.
The minimal value is `18` and the maximum value is `35`.
The unit of this value is `°C`.

### Temperature (numeric, 15 endpoint)
Floor temperature.
Value can be found in the published state on the `temperature_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_15": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric, 15 endpoint)
Humidity.
Value can be found in the published state on the `humidity_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_15": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### System status code (enum, 232 endpoint)
Main Controller Status.
Value can be found in the published state on the `system_status_code_232` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_status_code_232": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `no_error`, `missing_expansion_board`, `missing_radio_module`, `missing_command_module`, `missing_master_rail`, `missing_slave_rail_no_1`, `missing_slave_rail_no_2`, `pt1000_input_short_circuit`, `pt1000_input_open_circuit`, `error_on_one_or_more_output`.

### System status water (enum, 232 endpoint)
Main Controller Water Status.
Value can be found in the published state on the `system_status_water_232` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_status_water_232": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `hot_water_flow_in_pipes`, `cool_water_flow_in_pipes`.

### Multimaster role (enum, 232 endpoint)
Main Controller Role.
Value can be found in the published state on the `multimaster_role_232` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"multimaster_role_232": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `invalid_unused`, `master`, `slave_1`, `slave_2`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

