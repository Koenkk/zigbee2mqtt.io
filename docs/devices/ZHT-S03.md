---
title: "Moes ZHT-S03 control via MQTT"
description: "Integrate your Moes ZHT-S03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-08-01T15:19:08
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZHT-S03

|     |     |
|-----|-----|
| Model | ZHT-S03  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Zigbee wall thermostat |
| Exposes | child_lock, climate (system_mode, current_heating_setpoint, running_state, preset, local_temperature, local_temperature_calibration), temperature_delta, working_day, schedule_weekday, schedule_holiday, frost_protection |
| Picture | ![Moes ZHT-S03](https://www.zigbee2mqtt.io/images/devices/ZHT-S03.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Climate 
This climate device supports the following features: `system_mode`, `current_heating_setpoint`, `running_state`, `preset`, `local_temperature`, `local_temperature_calibration`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `schedule`, `manual`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9.9` and the maximum value is `9.9` with a step size of `0.1`.

### Temperature delta (numeric)
The delta between local_temperature and current_heating_setpoint to trigger Heat.
Value can be found in the published state on the `temperature_delta` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_delta": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `10`.
The unit of this value is `°C`.
Besides the numeric values the following values are accepted: `default`.

### Working day (enum)
Workday setting.
Value can be found in the published state on the `working_day` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"working_day": NEW_VALUE}`.
The possible values are: `mon_fri`, `mon_sat`, `mon_sun`.

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

### Frost protection (binary)
Antifreeze function.
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

