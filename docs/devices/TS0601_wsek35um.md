---
title: "Tuya TS0601_wsek35um control via MQTT"
description: "Integrate your Tuya TS0601_wsek35um via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:29:03.109Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_wsek35um

|     |     |
|-----|-----|
| Model | TS0601_wsek35um  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Radiator thermostat |
| Exposes | climate (local_temperature, current_heating_setpoint), children_lock, mode |
| Picture | ![Tuya TS0601_wsek35um](https://www.zigbee2mqtt.io/images/devices/TS0601_wsek35um.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "1970". The value must be one of `1970`, `2000`, `off`


## Exposes

### Climate 
This climate device supports the following features: `local_temperature`, `current_heating_setpoint`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.

### Children lock (binary)
Children lock status.
Value can be found in the published state on the `children_lock` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` children lock is ON, if `false` OFF.

### Mode (enum)
Current mode.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `Off`, `Cold`, `Night`, `Day`, `Scheduled`.

