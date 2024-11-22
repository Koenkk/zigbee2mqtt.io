---
title: "EasyAccess EasyCode903G2.1 control via MQTT"
description: "Integrate your EasyAccess EasyCode903G2.1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-05-01T14:47:09Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EasyAccess EasyCode903G2.1

|     |     |
|-----|-----|
| Model | EasyCode903G2.1  |
| Vendor  | [EasyAccess](/supported-devices/#v=EasyAccess)  |
| Description | EasyFinger V2 |
| Exposes | lock (state, lock_state), battery, sound_volume, action, auto_relock, linkquality |
| Picture | ![EasyAccess EasyCode903G2.1](https://www.zigbee2mqtt.io/images/devices/EasyCode903G2.1.png) |
| White-label | Datek Wireless EasyCode903G2.1 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Lock 
The current state of this lock is in the published state under the `state` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "LOCK"}` or `{"state": "UNLOCK"}`.
To read the current state of this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
This lock exposes a lock state which can be found in the published state under the `lock_state` property. It's not possible to read (`/get`) or write (`/set`) this value. The possible values are: `not_fully_locked`, `locked`, `unlocked`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Sound volume (enum)
Sound volume of the lock.
Value can be found in the published state on the `sound_volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sound_volume": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sound_volume": NEW_VALUE}`.
The possible values are: `silent_mode`, `low_volume`, `high_volume`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `zigbee_unlock`, `lock`, `rfid_unlock`, `keypad_unlock`.

### Auto relock (binary)
Auto relock after 7 seconds..
Value can be found in the published state on the `auto_relock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_relock": NEW_VALUE}`.
If value equals `true` auto relock is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

