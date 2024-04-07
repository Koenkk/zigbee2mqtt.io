---
title: "Yale YRD410-BLE control via MQTT"
description: "Integrate your Yale YRD410-BLE via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-03-01T15:36:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Yale YRD410-BLE

|     |     |
|-----|-----|
| Model | YRD410-BLE  |
| Vendor  | [Yale](/supported-devices/#v=Yale)  |
| Description | Assure lock 2 |
| Exposes | lock (state, lock_state), battery, pin_code, action_source_name, action_user, auto_relock_time, sound_volume, battery_low, action, linkquality |
| Picture | ![Yale YRD410-BLE](https://www.zigbee2mqtt.io/images/devices/YRD410-BLE.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `expose_pin`: Expose pin of this lock in the published payload (default false). The value must be `true` or `false`


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

### Pin code (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pin_code": {"user": VALUE, "user_type": VALUE, "user_enabled": VALUE, "pin_code": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pin_code": ""}`.
- `user` (numeric): User ID to set or clear the pincode for 
- `user_type` (enum): Type of user, unrestricted: owner (default), (year|week)_day_schedule: user has ability to open lock based on specific time period, master: user has ability to both program and operate the door lock, non_access: user is recognized by the lock but does not have the ability to open the lock allowed values: `unrestricted`, `year_day_schedule`, `week_day_schedule`, `master`, `non_access`
- `user_enabled` (binary): Whether the user is enabled/disabled allowed values: `true` or `false`
- `pin_code` (numeric): Pincode to set, set pincode to null to clear 

### Action source name (enum)
Source of the triggered action on the lock.
Value can be found in the published state on the `action_source_name` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `keypad`, `rfid`, `manual`, `rf`.

### Action user (numeric)
ID of user that triggered the action on the lock.
Value can be found in the published state on the `action_user` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Auto relock time (numeric)
The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled.
Value can be found in the published state on the `auto_relock_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"auto_relock_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_relock_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `s`.

### Sound volume (enum)
Sound volume of the lock.
Value can be found in the published state on the `sound_volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sound_volume": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sound_volume": NEW_VALUE}`.
The possible values are: `silent_mode`, `low_volume`, `high_volume`.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `unknown`, `lock`, `unlock`, `lock_failure_invalid_pin_or_id`, `lock_failure_invalid_schedule`, `unlock_failure_invalid_pin_or_id`, `unlock_failure_invalid_schedule`, `one_touch_lock`, `key_lock`, `key_unlock`, `auto_lock`, `schedule_lock`, `schedule_unlock`, `manual_lock`, `manual_unlock`, `non_access_user_operational_event`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

