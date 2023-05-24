---
title: "TuYa TS0601_cover_with_1_switch control via MQTT"
description: "Integrate your TuYa TS0601_cover_with_1_switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-04-10T16:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa TS0601_cover_with_1_switch

|     |     |
|-----|-----|
| Model | TS0601_cover_with_1_switch  |
| Vendor  | [TuYa](/supported-devices/#v=TuYa)  |
| Description | Curtain / Blind switch with 2 Gang switch |
| Exposes | cover (state, position), switch, accurate_calibration, backlight_switch, motor_steering, child_lock, linkquality |
| Picture | ![TuYa TS0601_cover_with_1_switch](https://www.zigbee2mqtt.io/images/devices/TS0601_cover_with_1_switch.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

## Pairing
press down and set simultaneously until LED flashes blue.
<!-- Notes END: Do not edit below this line -->


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Backlight mode
The current state of this switch is in the published state under the `backlight_mode` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_mode": "ON"}`, `{"backlight_mode": "OFF"}` or `{"backlight_mode": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Child Lock
The current state of this switch is in the published state under the `child_lock` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "ON"}`, `{"child_lock": "OFF"}` or `{"child_lock": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Calibration
The current state of this switch is in the published state under the `calibration` property (value is `start` or `end`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration": "start"}` or `{"calibration": "end"}`.
It's not possible to read (`/get`) this value.

### Motor steering
The current state of this switch is in the published state under the `motor_steering` property (value is `forward` or `back`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_steering": "forward"}` or `{"motor_steering": "back"}`.
It's not possible to read (`/get`) this value.

