---
title: "Heimgard Technologies HT-SLM-2 control via MQTT"
description: "Integrate your Heimgard Technologies HT-SLM-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-04-27T17:39:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heimgard Technologies HT-SLM-2

|     |     |
|-----|-----|
| Model | HT-SLM-2  |
| Vendor  | [Heimgard Technologies](/supported-devices/#v=Heimgard%20Technologies)  |
| Description | Doorlock with fingerprint |
| Exposes | lock (state, lock_state), pin_code, battery, sound_volume, linkquality |
| Picture | ![Heimgard Technologies HT-SLM-2](https://www.zigbee2mqtt.io/images/devices/HT-SLM-2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets duration of identification procedure in seconds (i.e., how long device would flash). Value ranges from 1 to 30 seconds (default 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

* `expose_pin`: Expose pin of this lock in the published payload (default false). The value must be `true` or `false`


## Exposes

### Lock 
The current state of this lock is in the published state under the `state` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "LOCK"}` or `{"state": "UNLOCK"}`.
To read the current state of this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
This lock exposes a lock state which can be found in the published state under the `lock_state` property. It's not possible to read (`/get`) or write (`/set`) this value. The possible values are: `not_fully_locked`, `locked`, `unlocked`.

### Pin code (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pin_code": {"user": VALUE, "user_type": VALUE, "user_enabled": VALUE, "pin_code": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pin_code": ""}`.
- `user` (numeric): User ID to set or clear the pincode for 
- `user_type` (enum): Type of user, unrestricted: owner (default), (year|week)_day_schedule: user has ability to open lock based on specific time period, master: user has ability to both program and operate the door lock, non_access: user is recognized by the lock but does not have the ability to open the lock allowed values: `unrestricted`, `year_day_schedule`, `week_day_schedule`, `master`, `non_access`
- `user_enabled` (binary): Whether the user is enabled/disabled allowed values: `true` or `false`
- `pin_code` (numeric): Pincode to set, set pincode to null to clear 

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

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

