---
title: "Tuya ZB-Sm control via MQTT"
description: "Integrate your Tuya ZB-Sm via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-07-01T08:15:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZB-Sm

|     |     |
|-----|-----|
| Model | ZB-Sm  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Tubular motor |
| Exposes | cover (state, position), goto_positon, motor_state, active_power, cycle_count, cycle_time, top_limit, bottom_limit, favorite_position, reverse_direction, motor_type, report, linkquality |
| Picture | ![Tuya ZB-Sm](https://www.zigbee2mqtt.io/images/devices/ZB-Sm.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Goto positon (enum)
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"goto_positon": NEW_VALUE}`.
The possible values are: `25`, `50`, `75`, `FAVORITE`.

### Motor state (enum)
Value can be found in the published state on the `motor_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `OPENING`, `CLOSING`, `STOPPED`.

### Active power (numeric)
Active power.
Value can be found in the published state on the `active_power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mWt`.

### Cycle count (numeric)
Cycle count.
Value can be found in the published state on the `cycle_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Cycle time (numeric)
Cycle time.
Value can be found in the published state on the `cycle_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ms`.

### Top limit (enum)
Setup or clear top limit.
Value can be found in the published state on the `top_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"top_limit": NEW_VALUE}`.
The possible values are: `SET`, `CLEAR`.

### Bottom limit (enum)
Setup or clear bottom limit.
Value can be found in the published state on the `bottom_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"bottom_limit": NEW_VALUE}`.
The possible values are: `SET`, `CLEAR`.

### Favorite position (numeric)
Favorite position of this cover.
Value can be found in the published state on the `favorite_position` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"favorite_position": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### Reverse direction (binary)
Inverts the cover direction.
Value can be found in the published state on the `reverse_direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reverse_direction": NEW_VALUE}`.
If value equals `true` reverse direction is ON, if `false` OFF.

### Motor type (text)
Value can be found in the published state on the `motor_type` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Report (enum)
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"report": NEW_VALUE}`.
The possible values are: ``.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

