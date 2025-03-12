---
title: "Futurehome TS0601_futurehome_thermostat control via MQTT"
description: "Integrate your Futurehome TS0601_futurehome_thermostat via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-30T19:41:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Futurehome TS0601_futurehome_thermostat

|     |     |
|-----|-----|
| Model | TS0601_futurehome_thermostat  |
| Vendor  | [Futurehome](/supported-devices/#v=Futurehome)  |
| Description | Thermostat |
| Exposes | climate (system_mode, preset, local_temperature, local_temperature_calibration, running_state, current_heating_setpoint), sensor, local_temperature_floor, child_lock, switch (state), hysteresis, max_temperature_protection |
| Picture | ![Futurehome TS0601_futurehome_thermostat](https://www.zigbee2mqtt.io/images/devices/TS0601_futurehome_thermostat.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Climate 
This climate device supports the following features: `system_mode`, `preset`, `local_temperature`, `local_temperature_calibration`, `running_state`, `current_heating_setpoint`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Whether the thermostat is turned on or off. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `user`, `home`, `away`, `auto`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9` and the maximum value is `9` with a step size of `1`.

### Sensor (enum)
Max guard. Floor sensor must be installed. The thermostat will regulate according to the room sensor, but interrupt heating if the floor sensor exceeds the maximum guard temperature. Standard is 27°C

There is also a maximum guard when the thermostat is set to floor sensor. The thermostat regulates according to the floor sensor, but will interrupt heating if the floor sensor exceeds the maximum guard temperature. Standard is 27°C..
Value can be found in the published state on the `sensor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `air_sensor`, `floor_sensor`, `max_guard`.

### Local temperature floor (numeric)
Current temperature measured on the external sensor (floor).
Value can be found in the published state on the `local_temperature_floor` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

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

### Hysteresis (numeric)
The offset from the target temperature in which the temperature has to change for the heating state to change. This is to prevent erratically turning on/off when the temperature is close to the target..
Value can be found in the published state on the `hysteresis` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"hysteresis": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `9`.
The unit of this value is `°C`.

### Max temperature protection (numeric)
Max guarding temperature.
Value can be found in the published state on the `max_temperature_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature_protection": NEW_VALUE}`.
The minimal value is `20` and the maximum value is `95`.
The unit of this value is `°C`.

