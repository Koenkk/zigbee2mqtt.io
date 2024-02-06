---
title: "LUX KN-Z-WH1-B04 control via MQTT"
description: "Integrate your LUX KN-Z-WH1-B04 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-01T18:11:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# LUX KN-Z-WH1-B04

|     |     |
|-----|-----|
| Model | KN-Z-WH1-B04  |
| Vendor  | [LUX](/supported-devices/#v=LUX)  |
| Description | KONOz thermostat |
| Exposes | climate (occupied_heating_setpoint, occupied_cooling_setpoint, local_temperature, system_mode, running_state, fan_mode), linkquality |
| Picture | ![LUX KN-Z-WH1-B04](https://www.zigbee2mqtt.io/images/devices/KN-Z-WH1-B04.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `occupied_cooling_setpoint`, `local_temperature`, `system_mode`, `running_state`, `fan_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `10` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `occupied_cooling_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_cooling_setpoint": VALUE}` where `VALUE` is the °C between `10` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_cooling_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `cool`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`, `cool`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

