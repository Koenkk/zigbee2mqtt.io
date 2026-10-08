---
title: "AVATTO ZSD20 control via MQTT"
description: "Integrate your AVATTO ZSD20 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:29:02.759Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# AVATTO ZSD20

|     |     |
|-----|-----|
| Model | ZSD20  |
| Vendor  | [AVATTO](/supported-devices/#v=AVATTO)  |
| Description | Smart smoke alarm |
| Exposes | smoke_sensor_state, self_checking, fault, battery, muffling |
| Picture | ![AVATTO ZSD20](https://www.zigbee2mqtt.io/images/devices/ZSD20.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Smoke sensor state (enum)
Smoke sensor state.
Value can be found in the published state on the `smoke_sensor_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `alarm`, `normal`.

### Self checking (binary)
Value can be found in the published state on the `self_checking` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"self_checking": NEW_VALUE}`.
If value equals `ON` self checking is ON, if `OFF` OFF.

### Fault (text)
Fault status.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Muffling (binary)
Value can be found in the published state on the `muffling` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"muffling": NEW_VALUE}`.
If value equals `ON` muffling is ON, if `OFF` OFF.

