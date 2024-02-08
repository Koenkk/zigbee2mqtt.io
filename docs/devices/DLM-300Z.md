---
title: "ShinaSystem DLM-300Z control via MQTT"
description: "Integrate your ShinaSystem DLM-300Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-01-14T19:34:25Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ShinaSystem DLM-300Z

|     |     |
|-----|-----|
| Model | DLM-300Z  |
| Vendor  | [ShinaSystem](/supported-devices/#v=ShinaSystem)  |
| Description | Sihas door lock |
| Exposes | battery, lock (state, lock_state), door_state, action, action_source_name, action_user, pin_code, linkquality |
| Picture | ![ShinaSystem DLM-300Z](https://www.zigbee2mqtt.io/images/devices/DLM-300Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pin code usage
To retrieve the state, send a `get` message to the device topic (`zigbee2mqtt/DEVICE_FRIENDLY_NAME/get`) with the body `{"pin_code":{"user":1}}`. To set, sent a `set` message to the device topic (`zigbee2mqtt/DEVICE_FRIENDLY_NAME/set`) with the body `{"pin_code":{"user":1,"pin_code":1234}}`. To clear a code, call `set` but omit the value for `pin_code`.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `expose_pin`: Expose pin of this lock in the published payload (default false). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Lock 
The current state of this lock is in the published state under the `state` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "LOCK"}` or `{"state": "UNLOCK"}`.
To read the current state of this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
This lock exposes a lock state which can be found in the published state under the `lock_state` property. It's not possible to read (`/get`) or write (`/set`) this value. The possible values are: `not_fully_locked`, `locked`, `unlocked`.

### Door state (enum)
Door status.
Value can be found in the published state on the `door_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `open`, `closed`.

### Action (enum)
Triggered action on the lock.
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `unknown`, `lock`, `unlock`, `lock_failure_invalid_pin_or_id`, `lock_failure_invalid_schedule`, `unlock_failure_invalid_pin_or_id`, `unlock_failure_invalid_schedule`, `one_touch_lock`, `key_lock`, `key_unlock`, `auto_lock`, `schedule_lock`, `schedule_unlock`, `manual_lock`, `manual_unlock`, `non_access_user_operational_event`.

### Action source name (enum)
Source of the triggered action on the lock.
Value can be found in the published state on the `action_source_name` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `keypad`, `rfid`, `manual`, `rf`.

### Action user (numeric)
ID of user that triggered the action on the lock.
Value can be found in the published state on the `action_user` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Pin code (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pin_code": {"user": VALUE, "pin_code": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pin_code": ""}`.
- `user` (numeric): User ID can only number 1 
- `pin_code` (numeric): Pincode to set, set pincode(4 digit) to null to clear 

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

