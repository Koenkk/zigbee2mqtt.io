---
title: "Tuya AE-5503-S-H-ZIGBEE control via MQTT"
description: "Integrate your Tuya AE-5503-S-H-ZIGBEE via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:29:03.064Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya AE-5503-S-H-ZIGBEE

|     |     |
|-----|-----|
| Model | AE-5503-S-H-ZIGBEE  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Sauna thermostat |
| Exposes | child_lock, climate (system_mode, current_heating_setpoint, local_temperature) |
| Picture | ![Tuya AE-5503-S-H-ZIGBEE](https://www.zigbee2mqtt.io/images/devices/AE-5503-S-H-ZIGBEE.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "1970". The value must be one of `1970`, `2000`, `off`


## Exposes

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Climate 
This climate device supports the following features: `system_mode`, `current_heating_setpoint`, `local_temperature`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `0` and `120`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.

