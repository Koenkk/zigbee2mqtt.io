---
title: "Brennenstuhl HT CZ 01 control via MQTT"
description: "Integrate your Brennenstuhl HT CZ 01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-11-30T20:27:20
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Brennenstuhl HT CZ 01

|     |     |
|-----|-----|
| Model | HT CZ 01  |
| Vendor  | [Brennenstuhl](/supported-devices/#v=Brennenstuhl)  |
| Description | Radiator thermostat |
| Exposes | child_lock, switch (state), battery, climate (current_heating_setpoint, local_temperature, system_mode, running_state) |
| Picture | ![Brennenstuhl HT CZ 01](https://www.zigbee2mqtt.io/images/devices/HT-CZ-01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Window detection (switch)
The current state of this switch is in the published state under the `window_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": "ON"}`, `{"window_detection": "OFF"}` or `{"window_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Valve detection (switch)
The current state of this switch is in the published state under the `valve_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_detection": "ON"}`, `{"valve_detection": "OFF"}` or `{"valve_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.

