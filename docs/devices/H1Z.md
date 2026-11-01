---
title: "Nous H1Z control via MQTT"
description: "Integrate your Nous H1Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-10-31T19:32:47.688Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nous H1Z

|     |     |
|-----|-----|
| Model | H1Z  |
| Vendor  | [Nous](/supported-devices/#v=Nous)  |
| Description | Thermostatic radiator valve |
| Exposes | battery_low, anti_scaling, switch (state), child_lock, heating, climate (current_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration) |
| Picture | ![Nous H1Z](https://www.zigbee2mqtt.io/images/devices/H1Z.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "1970". The value must be one of `1970`, `2000`, `off`


## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Anti scaling (binary)
Enables/disables bi-weekly anti-scaling feature.
Value can be found in the published state on the `anti_scaling` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"anti_scaling": "VALUE"}`.
If value equals `ON` anti scaling is ON, if `OFF` OFF.

### Window detection (switch)
The current state of this switch is in the published state under the `window_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": "ON"}`, `{"window_detection": "OFF"}` or `{"window_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "VALUE"}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Away mode (switch)
The current state of this switch is in the published state under the `away_mode` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"away_mode": "ON"}`, `{"away_mode": "OFF"}` or `{"away_mode": "undefined"}`.
It's not possible to read (`/get`) this value.

### Heating (binary)
Device valve is open or closed (heating or not).
Value can be found in the published state on the `heating` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` heating is ON, if `OFF` OFF.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`, `local_temperature_calibration`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": "VALUE"}` where `VALUE` is one of: `off`, `heat`, `auto`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-6` and the maximum value is `6` with a step size of `1`.

