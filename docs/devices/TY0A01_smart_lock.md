---
title: "AVATTO TY0A01_smart_lock control via MQTT"
description: "Integrate your Tuya AVATTO TY0A01_smart_lock via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-XXT00:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TY0A01_smart_lock

|     |     |
|-----|-----|
| Model | TY0A01_smart_lock  |
| Vendor  | [AVATTO](/supported-devices/#v=AVATTO)  |
| Description | Smart Digital Lock |
| Exposes | alarm_lock, battery, reverse_lock, doorbell, remote_unlock_switch, hijack, closed_opened, lock_motor_state, unlock_voice_remote, arming_switch, normal_open_switch, linkquality |
| Picture | ![Tuya TY0A01_smart_lock](https://www.zigbee2mqtt.io/images/devices/TY0A01_smart_lock.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### Pairing
To pair this device, follow the manufacturer's pairing instructions for the smart lock.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Alarm lock (enum)
Warning reporting when an anomaly occurs.
Value can be found in the published state on the `alarm_lock` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `fingerprint_error`, `password_error`, `card_error`, `face_error`, `lock_stuck`, `high_temperature`, `close_timeout`, `pop_out_error`, `anti_pry_alarm`, `key_inserted`, `low_battery`, `battery_depleted`, `vibration_alarm`, `arming_alarm`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Reverse lock (binary)
Reverse lock.
Value can be found in the published state on the `reverse_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"reverse_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reverse_lock": NEW_VALUE}`.
If value equals `ON` reverse lock is ON, if `OFF` OFF.

### Doorbell (binary)
Doorbell.
Value can be found in the published state on the `doorbell` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` doorbell is ON, if `OFF` OFF.

### Remote unlock switch (binary)
Disable remote door opening.
Value can be found in the published state on the `remote_unlock_switch` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"remote_unlock_switch": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"remote_unlock_switch": NEW_VALUE}`.
If value equals `ON` remote unlock switch is ON, if `OFF` OFF.

### Hijack (binary)
Hijack alarm.
Value can be found in the published state on the `hijack` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` hijack is ON, if `OFF` OFF.

### Closed opened (enum)
Door lock open/closed status.
Value can be found in the published state on the `closed_opened` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `open`, `closed`.

### Lock motor state (binary)
Locked state.
Value can be found in the published state on the `lock_motor_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"lock_motor_state": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lock_motor_state": NEW_VALUE}`.
If value equals `ON` lock motor state is ON, if `OFF` OFF.

### Unlock voice remote (numeric)
Remote voice unlock..
Value can be found in the published state on the `unlock_voice_remote` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"unlock_voice_remote": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"unlock_voice_remote": NEW_VALUE}`.

### Arming switch (binary)
Arming switch.
Value can be found in the published state on the `arming_switch` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"arming_switch": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"arming_switch": NEW_VALUE}`.
If value equals `ON` arming switch is ON, if `OFF` OFF.

### Normal open switch (binary)
Normal open switch.
Value can be found in the published state on the `normal_open_switch` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"normal_open_switch": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"normal_open_switch": NEW_VALUE}`.
If value equals `ON` normal open switch is ON, if `OFF` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.


