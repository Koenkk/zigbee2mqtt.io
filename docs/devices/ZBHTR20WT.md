---
title: "Nedis ZBHTR20WT control via MQTT"
description: "Integrate your Nedis ZBHTR20WT via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-03T20:11:48
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nedis ZBHTR20WT

|     |     |
|-----|-----|
| Model | ZBHTR20WT  |
| Vendor  | [Nedis](/supported-devices/#v=Nedis)  |
| Description | Thermostat radiator valve |
| Exposes | battery_low, child_lock, open_window, climate (local_temperature_calibration, running_state, system_mode, local_temperature, current_heating_setpoint), frost_protection, schedule_mode, scale_protection, leave_home, error_status, linkquality |
| Picture | ![Nedis ZBHTR20WT](https://www.zigbee2mqtt.io/images/devices/ZBHTR20WT.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Open window (binary)
Enables/disables the status on the device.
Value can be found in the published state on the `open_window` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window": NEW_VALUE}`.
If value equals `ON` open window is ON, if `OFF` OFF.

### Climate 
This climate device supports the following features: `local_temperature_calibration`, `running_state`, `system_mode`, `local_temperature`, `current_heating_setpoint`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-6` and the maximum value is `6` with a step size of `1`.

### Frost protection (binary)
This function prevents freezing of the radiator. It automatically switches on the thermostat between 5°C and 8°C..
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

### Schedule mode (binary)
Should the device be on the heating schedule.
Value can be found in the published state on the `schedule_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_mode": NEW_VALUE}`.
If value equals `ON` schedule mode is ON, if `OFF` OFF.

### Scale protection (binary)
The radiator can scale and become clogged if the valve is not opened regularly. This function opens the valve for 30 seconds every two weeks. The display shows “Rd” during this procedure..
Value can be found in the published state on the `scale_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scale_protection": NEW_VALUE}`.
If value equals `ON` scale protection is ON, if `OFF` OFF.

### Leave home (binary)
Temperature drops to 16°C when activated and restores when off.
Value can be found in the published state on the `leave_home` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"leave_home": NEW_VALUE}`.
If value equals `ON` leave home is ON, if `OFF` OFF.

### Error status (numeric)
Error status.
Value can be found in the published state on the `error_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

