---
title: "Eurotronic CoZB_dha control via MQTT"
description: "Integrate your Eurotronic CoZB_dha via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-07-01T17:54:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Eurotronic CoZB_dha

|     |     |
|-----|-----|
| Model | CoZB_dha  |
| Vendor  | [Eurotronic](/supported-devices/#v=Eurotronic)  |
| Description | Comet Zero Zigbee Zigbee wireless heater thermostat |
| Exposes | battery, child_lock, climate (occupied_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration, pi_heating_demand), trv_mode, valve_position, mirror_display |
| Picture | ![Eurotronic CoZB_dha](https://www.zigbee2mqtt.io/images/devices/CoZB_dha.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`, `local_temperature_calibration`, `pi_heating_demand`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `8` and `28`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `pi_heating_demand`: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pi_heating_demand": VALUE}` where `VALUE` is the % between `0` and `100`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-12.8` and the maximum value is `12.7` with a step size of `0.1`.

### Trv mode (enum)
Select between direct control of the valve via the `valve_position` or automatic control of the valve based on the `current_heating_setpoint`. For manual control set the value to 1, for automatic control set the value to 2 (the default). When switched to manual mode the display shows a value from 0 (valve closed) to 100 (valve fully open) and the buttons on the device are disabled..
Value can be found in the published state on the `trv_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"trv_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"trv_mode": NEW_VALUE}`.
The possible values are: `1`, `2`.

### Valve position (numeric)
Directly control the radiator valve when `trv_mode` is set to 1. The values range from 0 (valve closed) to 255 (valve fully open).
Value can be found in the published state on the `valve_position` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_position": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_position": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Mirror display (binary)
Mirror display of the thermostat. Useful when it is mounted in a way where the display is presented upside down..
Value can be found in the published state on the `mirror_display` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"mirror_display": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mirror_display": NEW_VALUE}`.
If value equals `ON` mirror display is ON, if `OFF` OFF.

