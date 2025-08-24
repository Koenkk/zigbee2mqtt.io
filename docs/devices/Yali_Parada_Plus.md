---
title: "Purmo/Radson Yali Parada Plus control via MQTT"
description: "Integrate your Purmo/Radson Yali Parada Plus via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-06T19:24:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Purmo/Radson Yali Parada Plus

|     |     |
|-----|-----|
| Model | Yali Parada Plus  |
| Vendor  | [Purmo/Radson](/supported-devices/#v=Purmo%2FRadson)  |
| Description | Electric oil-filled radiator |
| Exposes | climate (occupied_heating_setpoint, unoccupied_heating_setpoint, system_mode, local_temperature, local_temperature_calibration, running_state, running_mode), max_heat_setpoint_limit |
| Picture | ![Purmo/Radson Yali Parada Plus](https://www.zigbee2mqtt.io/images/devices/Yali-Parada-Plus.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `unoccupied_heating_setpoint`, `system_mode`, `local_temperature`, `local_temperature_calibration`, `running_state`, `running_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `heat`, `off`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-12.8` and the maximum value is `12.7` with a step size of `0.1`.

### Max heat setpoint limit (numeric)
Maximum Heating set point limit.
Value can be found in the published state on the `max_heat_setpoint_limit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

