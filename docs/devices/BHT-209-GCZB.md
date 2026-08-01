---
title: "Beca BHT-209-GCZB control via MQTT"
description: "Integrate your Beca BHT-209-GCZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-08-01T05:31:19
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Beca BHT-209-GCZB

|     |     |
|-----|-----|
| Model | BHT-209-GCZB  |
| Vendor  | [Beca](/supported-devices/#v=Beca)  |
| Description | Battery Zigbee thermostat with dry contact for boiler control |
| Exposes | state, child_lock, climate (local_temperature, current_heating_setpoint, local_temperature_calibration, system_mode, running_state), max_temperature_limit, deadzone_temperature, heating_mode |
| Picture | ![Beca BHT-209-GCZB](https://www.zigbee2mqtt.io/images/devices/BHT-209-GCZB.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### State (binary)
Turn the thermostat on/off.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": NEW_VALUE}`.
If value equals `ON` state is ON, if `OFF` OFF.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Climate 
This climate device supports the following features: `local_temperature`, `current_heating_setpoint`, `local_temperature_calibration`, `system_mode`, `running_state`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `45`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. Writing (`/set`) this attribute is not possible. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9` and the maximum value is `9` with a step size of `1`.

### Max temperature limit (numeric)
Maximum temperature limit. Cuts the thermostat out regardless of air temperature if the external floor sensor exceeds this temperature. Only used by the thermostat when in AL sensor mode..
Value can be found in the published state on the `max_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature_limit": NEW_VALUE}`.
The minimal value is `35` and the maximum value is `45`.
The unit of this value is `°C`.

### Deadzone temperature (numeric)
The delta between local_temperature and current_heating_setpoint to trigger heating.
Value can be found in the published state on the `deadzone_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"deadzone_temperature": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `5`.
The unit of this value is `°C`.

### Heating mode (binary)
ON = heating, OFF = cooling. Must stay ON for boiler control.
Value can be found in the published state on the `heating_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"heating_mode": NEW_VALUE}`.
If value equals `ON` heating mode is ON, if `OFF` OFF.

