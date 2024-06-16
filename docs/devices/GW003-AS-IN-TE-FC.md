---
title: "Atlantic Group GW003-AS-IN-TE-FC control via MQTT"
description: "Integrate your Atlantic Group GW003-AS-IN-TE-FC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-30T20:52:51
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Atlantic Group GW003-AS-IN-TE-FC

|     |     |
|-----|-----|
| Model | GW003-AS-IN-TE-FC  |
| Vendor  | [Atlantic Group](/supported-devices/#v=Atlantic%20Group)  |
| Description | Interface Naviclim for Takao air conditioners |
| Exposes | programming_operation_mode, climate (local_temperature, occupied_cooling_setpoint, occupied_heating_setpoint, system_mode, preset, fan_mode, swing_mode), quiet_fan, ac_louver_position, linkquality |
| Picture | ![Atlantic Group GW003-AS-IN-TE-FC](https://www.zigbee2mqtt.io/images/devices/GW003-AS-IN-TE-FC.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Programming operation mode (enum)
Controls how programming affects the thermostat. Possible values: setpoint (only use specified setpoint), schedule (follow programmed setpoint schedule), schedule_with_preheat (follow programmed setpoint schedule with pre-heating). Changing this value does not clear programmed schedules..
Value can be found in the published state on the `programming_operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"programming_operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"programming_operation_mode": NEW_VALUE}`.
The possible values are: `setpoint`, `schedule`, `schedule_with_preheat`, `eco`.

### Climate 
This climate device supports the following features: `local_temperature`, `occupied_cooling_setpoint`, `occupied_heating_setpoint`, `system_mode`, `preset`, `fan_mode`, `swing_mode`.
- `occupied_cooling_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_cooling_setpoint": VALUE}` where `VALUE` is the °C between `18` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_cooling_setpoint": ""}`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `16` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `cool`, `auto`, `dry`, `fan_only`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `activity`, `boost`, `eco`. Reading (`/get`) this attribute is not possible.

### Quiet fan (binary)
Fan quiet mode.
Value can be found in the published state on the `quiet_fan` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quiet_fan": NEW_VALUE}`.
If value equals `true` quiet fan is ON, if `false` OFF.

### Ac louver position (enum)
Ac louver position of this device.
Value can be found in the published state on the `ac_louver_position` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ac_louver_position": NEW_VALUE}`.
The possible values are: `quarter_open`, `half_open`, `three_quarters_open`, `fully_open`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

