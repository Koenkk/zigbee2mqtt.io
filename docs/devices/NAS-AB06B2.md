---
title: "Neo NAS-AB06B2 control via MQTT"
description: "Integrate your Neo NAS-AB06B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-06-27T19:46:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Neo NAS-AB06B2

|     |     |
|-----|-----|
| Model | NAS-AB06B2  |
| Vendor  | [Neo](/supported-devices/#v=Neo)  |
| Description | Outdoor solar alarm |
| Exposes | alarm_state, alarm_switch, tamper_alarm_switch, tamper_alarm, alarm_melody, alarm_mode, alarm_time, charging, battery, linkquality |
| Picture | ![Neo NAS-AB06B2](https://www.zigbee2mqtt.io/images/devices/NAS-AB06B2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Alarm state (enum)
Alarm status.
Value can be found in the published state on the `alarm_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `alarm_sound`, `alarm_light`, `alarm_sound_light`, `normal`.

### Alarm switch (binary)
Enable alarm.
Value can be found in the published state on the `alarm_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_switch": NEW_VALUE}`.
If value equals `ON` alarm switch is ON, if `OFF` OFF.

### Tamper alarm switch (binary)
Enable tamper alarm.
Value can be found in the published state on the `tamper_alarm_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tamper_alarm_switch": NEW_VALUE}`.
If value equals `ON` tamper alarm switch is ON, if `OFF` OFF.

### Tamper alarm (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper_alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` tamper alarm is ON, if `OFF` OFF.

### Alarm melody (enum)
Alarm sound effect.
Value can be found in the published state on the `alarm_melody` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_melody": NEW_VALUE}`.
The possible values are: `melody_1`, `melody_2`, `melody_3`.

### Alarm mode (enum)
Alarm mode.
Value can be found in the published state on the `alarm_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_mode": NEW_VALUE}`.
The possible values are: `alarm_sound`, `alarm_light`, `alarm_sound_light`.

### Alarm time (numeric)
Alarm duration in minutes.
Value can be found in the published state on the `alarm_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_time": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `60`.
The unit of this value is `min`.

### Charging (binary)
Charging status.
Value can be found in the published state on the `charging` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` charging is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

