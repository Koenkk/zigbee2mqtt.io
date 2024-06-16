---
title: "Hive SLR2c control via MQTT"
description: "Integrate your Hive SLR2c via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-11-30T20:10:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive SLR2c

|     |     |
|-----|-----|
| Model | SLR2c  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Dual channel heating and hot water thermostat |
| Exposes | climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration, linkquality |
| Picture | ![Hive SLR2c](https://www.zigbee2mqtt.io/images/devices/SLR2c.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate (heat endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_heat": VALUE}` where `VALUE` is the °C between `5` and `32`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_heat": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_heat": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_heat": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_heat": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_heat": ""}`.

### Temperature setpoint hold (binary, heat endpoint)
Prevent changes. `false` = run normally. `true` = prevent from making changes. Must be set to `false` when system_mode = off or `true` for heat.
Value can be found in the published state on the `temperature_setpoint_hold_heat` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_heat": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_heat": NEW_VALUE}`.
If value equals `true` temperature setpoint hold is ON, if `false` OFF.

### Temperature setpoint hold duration (numeric, heat endpoint)
Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display.
Value can be found in the published state on the `temperature_setpoint_hold_duration_heat` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_duration_heat": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_duration_heat": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### Climate (water endpoint)
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint_water": VALUE}` where `VALUE` is the °C between `22` and `22`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint_water": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature_water": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode_water": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`, `emergency_heating`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode_water": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state_water": ""}`.

### Temperature setpoint hold (binary, water endpoint)
Prevent changes. `false` = run normally. `true` = prevent from making changes. Must be set to `false` when system_mode = off or `true` for heat.
Value can be found in the published state on the `temperature_setpoint_hold_water` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_water": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_water": NEW_VALUE}`.
If value equals `true` temperature setpoint hold is ON, if `false` OFF.

### Temperature setpoint hold duration (numeric, water endpoint)
Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display.
Value can be found in the published state on the `temperature_setpoint_hold_duration_water` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_setpoint_hold_duration_water": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setpoint_hold_duration_water": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

