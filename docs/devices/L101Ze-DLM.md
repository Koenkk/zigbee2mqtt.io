---
title: "LYTKO L101Ze-DLM control via MQTT"
description: "Integrate your LYTKO L101Ze-DLM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:32:43
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# LYTKO L101Ze-DLM

|     |     |
|-----|-----|
| Model | L101Ze-DLM  |
| Vendor  | [LYTKO](/supported-devices/#v=LYTKO)  |
| Description | Dual channel thermostat without display |
| Exposes | climate (local_temperature, local_temperature_calibration, occupied_heating_setpoint, system_mode, running_mode), identify, occupied_setback, remote_sensing, sensor_type, power_apparent, current, energy |
| Picture | ![LYTKO L101Ze-DLM](https://www.zigbee2mqtt.io/images/devices/L101Ze-DLM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`


## Exposes

### Climate (3 endpoint)
This climate device supports the following features: `local_temperature`, `local_temperature_calibration`, `occupied_heating_setpoint`, `system_mode`, `running_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_3": VALUE}` where `VALUE` is the °C between `5` and `40`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_3": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_3": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_3": VALUE}` where `VALUE` is one of: `off`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_3": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration_3": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_3": ""}`.The minimal value is `-2.5` and the maximum value is `2.5` with a step size of `0.1`.

### Climate (4 endpoint)
This climate device supports the following features: `local_temperature`, `local_temperature_calibration`, `occupied_heating_setpoint`, `system_mode`, `running_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_4": VALUE}` where `VALUE` is the °C between `5` and `40`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_4": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_4": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_4": VALUE}` where `VALUE` is one of: `off`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_4": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration_4": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_4": ""}`.The minimal value is `-2.5` and the maximum value is `2.5` with a step size of `0.1`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Occupied setback (numeric, 3 endpoint)
Hysteresis.
Value can be found in the published state on the `occupied_setback_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_setback_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_setback_3": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `2.5`.
The unit of this value is `°C`.

### Occupied setback (numeric, 4 endpoint)
Hysteresis.
Value can be found in the published state on the `occupied_setback_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_setback_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_setback_4": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `2.5`.
The unit of this value is `°C`.

### Remote sensing (enum, 3 endpoint)
Value can be found in the published state on the `remote_sensing_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"remote_sensing_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"remote_sensing_3": NEW_VALUE}`.
The possible values are: `internally`, `remotely`.

### Remote sensing (enum, 4 endpoint)
Value can be found in the published state on the `remote_sensing_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"remote_sensing_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"remote_sensing_4": NEW_VALUE}`.
The possible values are: `internally`, `remotely`.

### Sensor (enum, 3 endpoint)
Sensor type.
Value can be found in the published state on the `sensor_type_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor_type_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_type_3": NEW_VALUE}`.
The possible values are: `3.3K`, `5.0K`, `6.8K`, `10.0K`, `12.0K`, `14.8K`, `15.0K`, `20.0K`, `33.0K`, `47.0K`.

### Sensor (enum, 4 endpoint)
Sensor type.
Value can be found in the published state on the `sensor_type_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor_type_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_type_4": NEW_VALUE}`.
The possible values are: `3.3K`, `5.0K`, `6.8K`, `10.0K`, `12.0K`, `14.8K`, `15.0K`, `20.0K`, `33.0K`, `47.0K`.

### Power Apparent (numeric, 3 endpoint)
Power apparent.
Value can be found in the published state on the `power_apparent_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_apparent_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `VA`.

### Power Apparent (numeric, 4 endpoint)
Power apparent.
Value can be found in the published state on the `power_apparent_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_apparent_4": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `VA`.

### Current (numeric, 3 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Current (numeric, 4 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_4": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Energy (numeric, 3 endpoint)
Sum of consumed energy.
Value can be found in the published state on the `energy_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy (numeric, 4 endpoint)
Sum of consumed energy.
Value can be found in the published state on the `energy_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_4": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

