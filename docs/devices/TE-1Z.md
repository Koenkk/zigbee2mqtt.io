---
title: "Tuya TE-1Z control via MQTT"
description: "Integrate your Tuya TE-1Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-03-01T20:31:41
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TE-1Z

|     |     |
|-----|-----|
| Model | TE-1Z  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Floor heating thermostat |
| Exposes | state, climate (current_heating_setpoint, running_state, preset, local_temperature_calibration, local_temperature), child_lock, sensor_mode, high_temperature_protection_state, low_temperature_protection_state, high_temperature_protection_setting, low_temperature_protection_setting, temperature_sensor, deadzone_temperature, max_temperature, error_status |
| Picture | ![Tuya TE-1Z](https://www.zigbee2mqtt.io/images/devices/TE-1Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### State (binary)
Turn system on or standby mode.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": NEW_VALUE}`.
If value equals `ON` state is ON, if `OFF` OFF.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `running_state`, `preset`, `local_temperature_calibration`, `local_temperature`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `auto`, `manual`, `mixed`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9` and the maximum value is `9` with a step size of `1`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Sensor mode (enum)
IN - internal sensor, no heat protection. OU - external sensor, no heat protection. AL - internal sensor for room temperature, external for heat protection.
Value can be found in the published state on the `sensor_mode` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `IN`, `OU`, `AL`.

### High temperature protection state (binary)
If temperature hit the HIGH temperature limit, it will turn off heating until it drops for amount of deadzone/hysteresis degrees.
Value can be found in the published state on the `high_temperature_protection_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_temperature_protection_state": NEW_VALUE}`.
If value equals `ON` high temperature protection state is ON, if `OFF` OFF.

### Low temperature protection state (binary)
Value can be found in the published state on the `low_temperature_protection_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_temperature_protection_state": NEW_VALUE}`.
If value equals `ON` low temperature protection state is ON, if `OFF` OFF.

### High temperature protection setting (numeric)
Alarm temperature max.
Value can be found in the published state on the `high_temperature_protection_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_temperature_protection_setting": NEW_VALUE}`.
The minimal value is `20` and the maximum value is `70`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Low temperature protection setting (numeric)
Alarm temperature min.
Value can be found in the published state on the `low_temperature_protection_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_temperature_protection_setting": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Temperature sensor (numeric)
Floor temperature from external sensor.
Value can be found in the published state on the `temperature_sensor` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Deadzone temperature (numeric)
Hysteresis.
Value can be found in the published state on the `deadzone_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deadzone_temperature": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `9`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Max temperature (numeric)
Maximum temperature.
Value can be found in the published state on the `max_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature": NEW_VALUE}`.
The minimal value is `20` and the maximum value is `70`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Error status (numeric)
Error status.
Value can be found in the published state on the `error_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.

