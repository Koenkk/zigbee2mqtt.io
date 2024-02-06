---
title: "Yale ZYA-C4-MOD-S control via MQTT"
description: "Integrate your Yale ZYA-C4-MOD-S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-17T10:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Yale ZYA-C4-MOD-S

|     |     |
|-----|-----|
| Model | ZYA-C4-MOD-S  |
| Vendor  | [Yale](/supported-devices/#v=Yale)  |
| Description | Control4 module for Yale KeyFree/Keyless/Doorman/Assure/nexTouch locks |
| Exposes | lock (state, lock_state), action, battery, battery_low, auto_lock_time, volume, linkquality |
| Picture | ![Yale ZYA-C4-MOD-S](https://www.zigbee2mqtt.io/images/devices/ZYA-C4-MOD-S.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair the device; permit joining in Zigbee2MQTT, ensure that the ZYA-C4-MOD-S is inserted into the lock, click the button next to the module 3 times (a chime should sound), wait and another chime should sound on success. If the pariring fails, the lock will beep 3 times and flash a red light - if this happens, repeat the process again.

### Removing
To remove the device, please do not use the delete device facility in Zigbee2MQTT - this will likely fail. Instead, click the button next to the module 3 times a chime should sound, followed shortly by another. You should then see in Zigbee2MQTT that the device has successfully left the network and should be available for re-pairing.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Lock 
The current state of this lock is in the published state under the `state` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "LOCK"}` or `{"state": "UNLOCK"}`.
To read the current state of this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
This lock exposes a lock state which can be found in the published state under the `lock_state` property. It's not possible to read (`/get`) or write (`/set`) this value. The possible values are: `not_fully_locked`, `locked`, `unlocked`.

### Action (enum)
Triggered action on the lock.
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `unknown`, `lock`, `unlock`, `lock_failure_invalid_pin_or_id`, `lock_failure_invalid_schedule`, `unlock_failure_invalid_pin_or_id`, `unlock_failure_invalid_schedule`, `one_touch_lock`, `key_lock`, `key_unlock`, `auto_lock`, `schedule_lock`, `schedule_unlock`, `manual_lock`, `manual_unlock`, `non_access_user_operational_event`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Auto lock time (enum)
Value can be found in the published state on the `auto_lock_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"auto_lock_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_lock_time": NEW_VALUE}`.
The possible values are: `off`, `30seconds`, `60seconds`, `2minutes`, `3minutes`.

### Volume (enum)
Value can be found in the published state on the `volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"volume": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"volume": NEW_VALUE}`.
The possible values are: `silent`, `low`, `high`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

