---
title: "Nova Digital ZCMR-1 control via MQTT"
description: "Integrate your Nova Digital ZCMR-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-03T18:55:24
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nova Digital ZCMR-1

|     |     |
|-----|-----|
| Model | ZCMR-1  |
| Vendor  | [Nova Digital](/supported-devices/#v=Nova%20Digital)  |
| Description | Roller blind motor |
| Exposes | cover (state, position), reverse_direction, border, situation_set, travel_time, position_best |
| Picture | ![Nova Digital ZCMR-1](https://www.zigbee2mqtt.io/images/devices/ZCMR-1.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Reverse direction (enum)
Reverse the motor direction. This resets the upper and lower limits; recalibrate them using border afterwards..
Value can be found in the published state on the `reverse_direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reverse_direction": NEW_VALUE}`.
The possible values are: `forward`, `back`.

### Border (enum)
Store the current position as the upper or lower limit.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"border": NEW_VALUE}`.
The possible values are: `up`, `down`.

### Situation set (enum)
Indicates whether 100% represents fully open or fully closed.
Value can be found in the published state on the `situation_set` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `fully_open`, `fully_close`.

### Travel time (numeric)
Total calibrated travel time.
Value can be found in the published state on the `travel_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ms`.

### Position best (numeric)
Preset position stored by the motor.
Value can be found in the published state on the `position_best` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

