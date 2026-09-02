---
title: "Saswell SAS936RHB-7-Z03 control via MQTT"
description: "Integrate your Saswell SAS936RHB-7-Z03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:37:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Saswell SAS936RHB-7-Z03

|     |     |
|-----|-----|
| Model | SAS936RHB-7-Z03  |
| Vendor  | [Saswell](/supported-devices/#v=Saswell)  |
| Description | Wireless temperature sensor |
| Exposes | climate (local_temperature, current_heating_setpoint, system_mode), heating_demand, temporary_leaving, child_lock |
| Picture | ![Saswell SAS936RHB-7-Z03](https://www.zigbee2mqtt.io/images/devices/SAS936RHB-7-Z03.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Climate 
This climate device supports the following features: `local_temperature`, `current_heating_setpoint`, `system_mode`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.

### Heating demand (binary)
Valve demand (0=off, 1=heating).
Value can be found in the published state on the `heating_demand` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` heating demand is ON, if `OFF` OFF.

### Temporary leaving (binary)
Temporary leaving mode (checkmark on display, disables heating).
Value can be found in the published state on the `temporary_leaving` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temporary_leaving": NEW_VALUE}`.
If value equals `ON` temporary leaving is ON, if `OFF` OFF.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

