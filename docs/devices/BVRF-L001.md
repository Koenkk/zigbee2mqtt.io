---
title: "Beca BVRF-L001 control via MQTT"
description: "Integrate your Beca BVRF-L001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T00:00:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Beca BVRF-L001

|     |     |
|-----|-----|
| Model | BVRF-L001  |
| Vendor  | [Beca](/supported-devices/#v=Beca)  |
| Description | VRF/VRV central air-conditioning thermostat |
| Exposes | state, climate (system_mode, fan_mode, current_heating_setpoint, local_temperature), child_lock |
| Picture | ![Beca BVRF-L001](https://www.zigbee2mqtt.io/images/devices/BVRF-L001.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

- Official product page: [Beca BVRF-L001](https://www.becasmart.com/product/94.html). This definition matches Zigbee model `TS0601` with manufacturer `_TZE204_6ewjlefg`.
- Power (`state`) is separate from `system_mode`: `OFF` leaves the last cooling/heating/fan/dry mode selected. Set `state` to `ON` or `OFF` to control power.
- The setpoint range is 16–32 °C, in whole-degree steps, as specified by Beca. The device reports setpoint and room temperature in tenths of a degree.
- The device reads `genTime.localTime` from Zigbee2MQTT. This uses the Zigbee2MQTT process's local time zone; it is not a Tuya datapoint, and the generic Tuya `time_start` option does not set this clock.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### State (binary)
Turn the thermostat on or off independently of the operating mode.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": NEW_VALUE}`.
If value equals `ON` state is ON, if `OFF` OFF.

### Climate 
This climate device supports the following features: `system_mode`, `fan_mode`, `current_heating_setpoint`, `local_temperature`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `16` and `32`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `cool`, `heat`, `fan_only`, `dry`. Reading (`/get`) this attribute is not possible.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

