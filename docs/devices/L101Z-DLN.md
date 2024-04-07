---
title: "Lytko L101Z-DLN control via MQTT"
description: "Integrate your Lytko L101Z-DLN via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-09-01T13:40:11
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lytko L101Z-DLN

|     |     |
|-----|-----|
| Model | L101Z-DLN  |
| Vendor  | [Lytko](/supported-devices/#v=Lytko)  |
| Description | Dual channel Zigbee thermostat without screen |
| Exposes | climate (local_temperature, occupied_heating_setpoint, system_mode, running_mode, local_temperature_calibration), min_setpoint_deadband, sensor_type, target_temp_first, linkquality |
| Picture | ![Lytko L101Z-DLN](https://www.zigbee2mqtt.io/images/devices/L101Z-DLN.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate (l3 endpoint)
This climate device supports the following features: `local_temperature`, `occupied_heating_setpoint`, `system_mode`, `running_mode`, `local_temperature_calibration`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l3": VALUE}` where `VALUE` is the °C between `15` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l3": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l3": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l3": VALUE}` where `VALUE` is one of: `off`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l3": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration_l3": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l3": ""}`.The minimal value is `-3` and the maximum value is `3` with a step size of `0.1`.

### Min setpoint deadband (numeric, l3 endpoint)
Hysteresis setting.
Value can be found in the published state on the `min_setpoint_deadband_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_setpoint_deadband_l3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_setpoint_deadband_l3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3`.
The unit of this value is `C`.

### Sensor type (enum, l3 endpoint)
Type of sensor. Sensor resistance value (kOhm).
Value can be found in the published state on the `sensor_type_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor_type_l3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_type_l3": NEW_VALUE}`.
The possible values are: `3.3`, `5`, `6.8`, `10`, `12`, `14.8`, `15`, `20`, `33`, `47`.

### Target temp first (binary, l3 endpoint)
Display current temperature or target temperature.
Value can be found in the published state on the `target_temp_first_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"target_temp_first_l3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"target_temp_first_l3": NEW_VALUE}`.
If value equals `true` target temp first is ON, if `false` OFF.

### Climate (l4 endpoint)
This climate device supports the following features: `local_temperature`, `occupied_heating_setpoint`, `system_mode`, `running_mode`, `local_temperature_calibration`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_l4": VALUE}` where `VALUE` is the °C between `15` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_l4": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l4": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_l4": VALUE}` where `VALUE` is one of: `off`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_l4": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration_l4": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_l4": ""}`.The minimal value is `-3` and the maximum value is `3` with a step size of `0.1`.

### Min setpoint deadband (numeric, l4 endpoint)
Hysteresis setting.
Value can be found in the published state on the `min_setpoint_deadband_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_setpoint_deadband_l4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_setpoint_deadband_l4": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3`.
The unit of this value is `C`.

### Sensor type (enum, l4 endpoint)
Type of sensor. Sensor resistance value (kOhm).
Value can be found in the published state on the `sensor_type_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor_type_l4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_type_l4": NEW_VALUE}`.
The possible values are: `3.3`, `5`, `6.8`, `10`, `12`, `14.8`, `15`, `20`, `33`, `47`.

### Target temp first (binary, l4 endpoint)
Display current temperature or target temperature.
Value can be found in the published state on the `target_temp_first_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"target_temp_first_l4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"target_temp_first_l4": NEW_VALUE}`.
If value equals `true` target temp first is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

