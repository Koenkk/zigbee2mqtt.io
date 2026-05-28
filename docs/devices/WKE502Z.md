---
title: "DAEWOO WKE502Z control via MQTT"
description: "Integrate your DAEWOO WKE502Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-07T17:39:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# DAEWOO WKE502Z

|     |     |
|-----|-----|
| Model | WKE502Z  |
| Vendor  | [DAEWOO](/supported-devices/#v=DAEWOO)  |
| Description | Smart Zigbee keypad with RFID badge reader |
| Exposes | arm_mode, armed, sos_alarm, battery, tamper, user_id, user_last_seen, last_added_user_code, admin_code, arm_delay_time, beep_sound_enabled, arm_delay_beep_sound, quick_home_enabled, quick_arm_enabled, quick_disarm_enabled, quick_sos_enabled, action |
| Picture | ![DAEWOO WKE502Z](https://www.zigbee2mqtt.io/images/devices/WKE502Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Arm mode (numeric)
Arm mode reported at startup only: 0=disarmed, 2=armed. NOT updated in real-time..
Value can be found in the published state on the `arm_mode` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Armed (binary)
Arm state — write true to manually confirm arm_away/arm_home to the keypad.
Value can be found in the published state on the `armed` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"armed": NEW_VALUE}`.
If value equals `true` armed is ON, if `false` OFF.

### Sos alarm (binary)
SOS alarm active — set true by SOS keypress, cleared false by disarm.
Value can be found in the published state on the `sos_alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` sos alarm is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### User id (text)
User ID (RFID badge slot or PIN index) that triggered the last action.
Value can be found in the published state on the `user_id` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### User last seen (text)
ISO timestamp of last user authentication — updates on every badge/code event.
Value can be found in the published state on the `user_last_seen` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Last added user code (text)
Last code entered by a user.
Value can be found in the published state on the `last_added_user_code` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Admin code (text)
Admin code (change with caution).
Value can be found in the published state on the `admin_code` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"admin_code": NEW_VALUE}`.

### Arm delay time (numeric)
Delay before arming (0-180 s).
Value can be found in the published state on the `arm_delay_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"arm_delay_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `180`.
The unit of this value is `s`.

### Beep sound enabled (binary)
Enable keypad beep on key press.
Value can be found in the published state on the `beep_sound_enabled` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"beep_sound_enabled": NEW_VALUE}`.
If value equals `ON` beep sound enabled is ON, if `OFF` OFF.

### Arm delay beep sound (binary)
Beep during arm delay countdown.
Value can be found in the published state on the `arm_delay_beep_sound` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"arm_delay_beep_sound": NEW_VALUE}`.
If value equals `ON` arm delay beep sound is ON, if `OFF` OFF.

### Quick home enabled (binary)
Allow arm-home without entering a code.
Value can be found in the published state on the `quick_home_enabled` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quick_home_enabled": NEW_VALUE}`.
If value equals `ON` quick home enabled is ON, if `OFF` OFF.

### Quick arm enabled (binary)
Allow arm-away without entering a code.
Value can be found in the published state on the `quick_arm_enabled` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quick_arm_enabled": NEW_VALUE}`.
If value equals `ON` quick arm enabled is ON, if `OFF` OFF.

### Quick disarm enabled (binary)
Allow disarm without entering a code.
Value can be found in the published state on the `quick_disarm_enabled` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quick_disarm_enabled": NEW_VALUE}`.
If value equals `ON` quick disarm enabled is ON, if `OFF` OFF.

### Quick sos enabled (binary)
Allow SOS without entering a code.
Value can be found in the published state on the `quick_sos_enabled` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quick_sos_enabled": NEW_VALUE}`.
If value equals `ON` quick sos enabled is ON, if `OFF` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `disarm`, `arm_away`, `arm_home`, `sos`.

