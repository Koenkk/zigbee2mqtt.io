---
title: "Tuya L2-T-F-MF control via MQTT"
description: "Integrate your Tuya L2-T-F-MF via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:39
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya L2-T-F-MF

|     |     |
|-----|-----|
| Model | L2-T-F-MF  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart Zigbee fan coil thermostat |
| Exposes | climate (local_temperature, system_mode, fan_mode, current_heating_setpoint), local_temperature_calibration, screen_brightness, deadzone_temperature, min_temperature_limit, max_temperature_limit, child_lock, eco_temperature_heating, eco_temperature_cooling |
| Picture | ![Tuya L2-T-F-MF](https://www.zigbee2mqtt.io/images/devices/L2-T-F-MF.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Climate 
This climate device supports the following features: `local_temperature`, `system_mode`, `fan_mode`, `current_heating_setpoint`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `45`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `cool`, `heat`, `fan_only`. Reading (`/get`) this attribute is not possible.

### Local temperature calibration (numeric)
Temperature compensation setting.
Value can be found in the published state on the `local_temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": NEW_VALUE}`.
The minimal value is `-9` and the maximum value is `9`.
The unit of this value is `°C`.

### Screen brightness (numeric)
Display brightness level.
Value can be found in the published state on the `screen_brightness` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"screen_brightness": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `9`.

### Deadzone temperature (numeric)
Temperature deadzone.
Value can be found in the published state on the `deadzone_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deadzone_temperature": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `5`.
The unit of this value is `°C`.

### Min temperature limit (numeric)
Minimum temperature limit.
Value can be found in the published state on the `min_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature_limit": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `15`.
The unit of this value is `°C`.

### Max temperature limit (numeric)
Maximun temperature limit.
Value can be found in the published state on the `max_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature_limit": NEW_VALUE}`.
The minimal value is `16` and the maximum value is `45`.
The unit of this value is `°C`.

### Child lock (enum)
Child lock.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
The possible values are: `locked`, `unlocked`.

### Eco temperature heating (numeric)
Eco heating temperature.
Value can be found in the published state on the `eco_temperature_heating` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature_heating": NEW_VALUE}`.
The minimal value is `20` and the maximum value is `30`.
The unit of this value is `°C`.

### Eco temperature cooling (numeric)
Eco cooling temperature.
Value can be found in the published state on the `eco_temperature_cooling` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature_cooling": NEW_VALUE}`.
The minimal value is `20` and the maximum value is `30`.
The unit of this value is `°C`.

