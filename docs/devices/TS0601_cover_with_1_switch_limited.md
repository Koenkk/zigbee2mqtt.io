---
title: "Tuya TS0601_cover_with_1_switch_limited control via MQTT"
description: "Integrate your Tuya TS0601_cover_with_1_switch_limited via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:29:03.088Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_cover_with_1_switch_limited

|     |     |
|-----|-----|
| Model | TS0601_cover_with_1_switch_limited  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Cover switch (without position control) with 1-gang switch |
| Exposes | switch (state), cover (state), motor_direction |
| Picture | ![Tuya TS0601_cover_with_1_switch_limited](https://www.zigbee2mqtt.io/images/devices/TS0601_cover_with_1_switch_limited.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the reported cover position and the state derived from it, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.

### Motor direction (enum)
Motor rotation direction.
Value can be found in the published state on the `motor_direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_direction": NEW_VALUE}`.
The possible values are: `normal`, `reversed`.

