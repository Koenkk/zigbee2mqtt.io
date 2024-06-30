---
title: "Tuya X5H-GB-B control via MQTT"
description: "Integrate your Tuya X5H-GB-B via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-01T15:06:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya X5H-GB-B

|     |     |
|-----|-----|
| Model | X5H-GB-B  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Wall-mount thermostat |
| Exposes | climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state, preset), sensor, schedule, lock (state), week, brightness_state, sound, frost_protection, factory_reset, heating_temp_limit, deadzone_temperature, upper_temp, linkquality |
| Picture | ![Tuya X5H-GB-B](https://www.zigbee2mqtt.io/images/devices/X5H-GB-B.png) |
| White-label | Beok TGR85-ZB, AVATTO ZWT-100-16A |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `local_temperature_calibration`, `system_mode`, `running_state`, `preset`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `60`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `manual`, `program`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9.9` and the maximum value is `9.9` with a step size of `0.1`.

### Sensor (enum)
Select temperature sensor to use.
Value can be found in the published state on the `sensor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `internal`, `external`, `both`.

### Schedule (text)
There are 8 periods in the schedule in total. 6 for workdays and 2 for holidays. It should be set in the following format for each of the periods: `hours:minutes/temperature`. All periods should be set at once and delimited by the space symbol. For example: `06:00/20.5 08:00/15 11:30/15 13:30/15 17:00/22 22:00/15 06:00/20 22:00/15`. The thermostat doesn't report the schedule by itself even if you change it manually from device.
Value can be found in the published state on the `schedule` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule": NEW_VALUE}`.

### Child lock (lock)
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Week (enum)
Week format user for schedule.
Value can be found in the published state on the `week` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"week": NEW_VALUE}`.
The possible values are: `5+2`, `6+1`, `7`.

### Brightness state (enum)
Screen brightness.
Value can be found in the published state on the `brightness_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_state": NEW_VALUE}`.
The possible values are: `off`, `low`, `medium`, `high`.

### Sound (binary)
Switches beep sound when interacting with thermostat.
Value can be found in the published state on the `sound` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sound": NEW_VALUE}`.
If value equals `ON` sound is ON, if `OFF` OFF.

### Frost protection (binary)
Antifreeze function.
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

### Factory reset (binary)
Resets all settings to default. Doesn't unpair device..
Value can be found in the published state on the `factory_reset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset": NEW_VALUE}`.
If value equals `ON` factory reset is ON, if `OFF` OFF.

### Heating temp limit (numeric)
Heating temperature limit.
Value can be found in the published state on the `heating_temp_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"heating_temp_limit": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `60`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Deadzone temperature (numeric)
The delta between local_temperature and current_heating_setpoint to trigger Heat.
Value can be found in the published state on the `deadzone_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deadzone_temperature": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `9.5`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Upper temp (numeric)
Value can be found in the published state on the `upper_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"upper_temp": NEW_VALUE}`.
The minimal value is `35` and the maximum value is `95`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

