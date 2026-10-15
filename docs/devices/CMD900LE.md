---
title: "HUARUI CMD900LE control via MQTT"
description: "Integrate your HUARUI CMD900LE via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-01T15:13:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HUARUI CMD900LE

|     |     |
|-----|-----|
| Model | CMD900LE  |
| Vendor  | [HUARUI](/supported-devices/#v=HUARUI)  |
| Description | Lithium battery intelligent curtain opening and closing motor |
| Exposes | cover (state, position, tilt), options, flip_angle |
| Picture | ![HUARUI CMD900LE](https://www.zigbee2mqtt.io/images/devices/CMD900LE.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the reported cover position and the state derived from it, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.
To change the tilt publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tilt": VALUE}` where `VALUE` is a number between `0` and `100`.

### Options (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"options": {"motor_speed": VALUE, "reverse_direction": VALUE}}`
- `motor_speed` (numeric): Motor speed max value is 255
- `reverse_direction` (binary): Reverse the motor direction allowed values: `true` or `false`

### Flip angle (numeric)
Slat angle in degrees, same as tilt (0-100 %) on a 0-180° scale (only _TZE204_wzre8hu2).
Value can be found in the published state on the `flip_angle` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"flip_angle": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `180`.
The unit of this value is `°`.

