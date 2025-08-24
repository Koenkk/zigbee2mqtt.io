---
title: "Tuya TYBAC-006 control via MQTT"
description: "Integrate your Tuya TYBAC-006 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-09-28T10:54:36
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TYBAC-006

|     |     |
|-----|-----|
| Model | TYBAC-006  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Wall-mount thermostat for 2-pipe fan-coil unit |
| Exposes | climate (local_temperature, current_heating_setpoint, system_mode, fan_mode, local_temperature_calibration), child_lock, min_temperature, max_temperature, eco_mode, max_temperature_limit, min_temperature_limit, deadzone_temperature, valve, manual_mode, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday |
| Picture | ![Tuya TYBAC-006](https://www.zigbee2mqtt.io/images/devices/TYBAC-006.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing

While the thermostat is off, press and hold the "temperature down" button until the display shows the "network" icon.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `control_sequence_of_operation`: Operating environment of the thermostat. The value must be one of `cooling_only`, `cooling_and_heating_4-pipes`

* `expose_device_state`: Expose device power state as a separate property when enabled. The value must be `true` or `false`


## Exposes

### Climate 
This climate device supports the following features: `local_temperature`, `current_heating_setpoint`, `system_mode`, `fan_mode`, `local_temperature_calibration`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `cool`, `heat`, `fan_only`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-5` and the maximum value is `5` with a step size of `0.5`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Min temperature (numeric)
Minimum temperature.
Value can be found in the published state on the `min_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `15`.
The unit of this value is `°C`.

### Max temperature (numeric)
Maximum temperature.
Value can be found in the published state on the `max_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `45`.
The unit of this value is `°C`.

### Eco mode (binary)
ECO mode ON/OFF.
Value can be found in the published state on the `eco_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_mode": NEW_VALUE}`.
If value equals `ON` eco mode is ON, if `OFF` OFF.

### Max temperature limit (numeric)
ECO Heating energy-saving temperature (default: 20 ºC).
Value can be found in the published state on the `max_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature_limit": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `30`.
The unit of this value is `°C`.

### Min temperature limit (numeric)
ECO Cooling energy-saving temperature (default: 26 ºC).
Value can be found in the published state on the `min_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature_limit": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `30`.
The unit of this value is `°C`.

### Deadzone temperature (numeric)
The delta between local_temperature and current_heating_setpoint to trigger Heat.
Value can be found in the published state on the `deadzone_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deadzone_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5`.
The unit of this value is `°C`.

### Valve (binary)
3-Way Valve State.
Value can be found in the published state on the `valve` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `OPEN` valve is ON, if `CLOSE` OFF.

### Manual mode (binary)
Manual = ON or Schedule = OFF.
Value can be found in the published state on the `manual_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_mode": NEW_VALUE}`.
If value equals `ON` manual mode is ON, if `OFF` OFF.

### Schedule monday (text)
Schedule for monday, example: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_monday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_monday": NEW_VALUE}`.

### Schedule tuesday (text)
Schedule for tuesday, example: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_tuesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_tuesday": NEW_VALUE}`.

### Schedule wednesday (text)
Schedule for wednesday, example: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_wednesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_wednesday": NEW_VALUE}`.

### Schedule thursday (text)
Schedule for thursday, example: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_thursday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_thursday": NEW_VALUE}`.

### Schedule friday (text)
Schedule for friday, example: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_friday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_friday": NEW_VALUE}`.

### Schedule saturday (text)
Schedule for saturday, example: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_saturday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_saturday": NEW_VALUE}`.

### Schedule sunday (text)
Schedule for sunday, example: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_sunday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_sunday": NEW_VALUE}`.

