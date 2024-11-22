---
title: "Imhotep Creation E-Ctrl control via MQTT"
description: "Integrate your Imhotep Creation E-Ctrl via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-30T19:41:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Imhotep Creation E-Ctrl

|     |     |
|-----|-----|
| Model | E-Ctrl  |
| Vendor  | [Imhotep Creation](/supported-devices/#v=Imhotep%20Creation)  |
| Description | Heater thermostat PH25 and compliant |
| Exposes | system_mode, local_temperature, climate (occupied_heating_setpoint, local_temperature), min_heat_setpoint_limit, max_heat_setpoint_limit, occupancy, linkquality |
| Picture | ![Imhotep Creation E-Ctrl](https://www.zigbee2mqtt.io/images/devices/E-Ctrl.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].


## Exposes

### System mode (enum)
Heater mode (Off or Heat).
Value can be found in the published state on the `system_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": NEW_VALUE}`.
The possible values are: `off`, `heat`.

### Local temperature (numeric)
Current temperature measured on the device.
Value can be found in the published state on the `local_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.

### Min heat setpoint limit (numeric)
Minimum Heating set point limit.
Value can be found in the published state on the `min_heat_setpoint_limit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_heat_setpoint_limit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_heat_setpoint_limit": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric)
Maximum Heating set point limit.
Value can be found in the published state on the `max_heat_setpoint_limit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

