---
title: "Danalock V3-BTZB/V3-BTZBE control via MQTT"
description: "Integrate your Danalock V3-BTZB/V3-BTZBE via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-05-30T19:17:03Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Danalock V3-BTZB/V3-BTZBE

|     |     |
|-----|-----|
| Model | V3-BTZB/V3-BTZBE  |
| Vendor  | [Danalock](/supported-devices/#v=Danalock)  |
| Description | BT/ZB smartlock |
| Exposes | lock (state, lock_state), battery, pin_code, action, action_source_name, action_user, linkquality |
| Picture | ![Danalock V3-BTZB/V3-BTZBE](https://www.zigbee2mqtt.io/images/devices/V3-BTZB-V3-BTZBE.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
If pairing failed, try the followings:
- Pairing it closer to the coordinator
- Connecting the CC2531 via an USB extension cable (to avoid interference)
- Replacing the batteries of the danalock.

### App
This device also come with an iOS/Android app. It is recommended to do the setups first via the app for better control of the lock.

If you have a Danapad, you can create/update/remove 20 pin code.
To create or update code, you have to send MQTT /set request : {"pin_code":{"user":0,"pin_code":123456,"user_type":"unrestricted","user_enabled":true},"user_status":{"user":0,"status":"enabled"}}
Apparently "user_type":"unrestricted","user_enabled":true is not used by the Danalock.
The user value can take 0 to 19 (pin 0 to pin 19)
For the pin code to work, you must also send user_status and set it to enabled.
To remove a pin code, just send MQTT /set request : {"pin_code":{"user":0}} (user take value 0 to 19)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


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

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

