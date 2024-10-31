---
title: "Tuya ZWT198/ZWT100-BH control via MQTT"
description: "Integrate your Tuya ZWT198/ZWT100-BH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-01-31T20:08:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZWT198/ZWT100-BH

|     |     |
|-----|-----|
| Model | ZWT198/ZWT100-BH  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Avatto wall thermostat |
| Exposes | factory_reset, lock (state), sensor, climate (system_mode, preset, current_heating_setpoint, running_state, local_temperature, local_temperature_calibration), frost_protection, max_temperature_limit, deadzone_temperature, backlight_mode, working_day, schedule_weekday, schedule_holiday, linkquality |
| Picture | ![Tuya ZWT198/ZWT100-BH](https://www.zigbee2mqtt.io/images/devices/ZWT198-ZWT100-BH.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Factory reset (binary)
Full factory reset, use with caution!.
Value can be found in the published state on the `factory_reset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset": NEW_VALUE}`.
If value equals `ON` factory reset is ON, if `OFF` OFF.

### Child lock (lock)
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Sensor (enum)
Select temperature sensor to use.
Value can be found in the published state on the `sensor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `internal`, `external`, `both`.

### Climate 
This climate device supports the following features: `system_mode`, `preset`, `current_heating_setpoint`, `running_state`, `local_temperature`, `local_temperature_calibration`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `manual`, `auto`, `temporary_manual`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9.9` and the maximum value is `9.9` with a step size of `0.1`.

### Frost protection (binary)
Antifreeze function.
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

### Max temperature limit (numeric)
Maximum upper temperature.
Value can be found in the published state on the `max_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature_limit": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `90`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Deadzone temperature (numeric)
The delta between local_temperature (5<t<35)and current_heating_setpoint to trigger Heat.
Value can be found in the published state on the `deadzone_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deadzone_temperature": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `10`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Backlight mode (enum)
Intensity of the backlight.
Value can be found in the published state on the `backlight_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_mode": NEW_VALUE}`.
The possible values are: `off`, `low`, `medium`, `high`.

### Working day (enum)
Workday setting.
Value can be found in the published state on the `working_day` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"working_day": NEW_VALUE}`.
The possible values are: `disabled`, `6-1`, `5-2`, `7`.

### Schedule weekday (text)
Workdays (6 times `hh:mm/cc.c°C`).
Value can be found in the published state on the `schedule_weekday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_weekday": NEW_VALUE}`.

### Schedule holiday (text)
Holidays (2 times `hh:mm/cc.c°C)`.
Value can be found in the published state on the `schedule_holiday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_holiday": NEW_VALUE}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

