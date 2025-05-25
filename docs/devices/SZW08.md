---
title: "Lincukoo SZW08 control via MQTT"
description: "Integrate your Lincukoo SZW08 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:59:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lincukoo SZW08

|     |     |
|-----|-----|
| Model | SZW08  |
| Vendor  | [Lincukoo](/supported-devices/#v=Lincukoo)  |
| Description | Water leakage sensor with 2 in 1 |
| Exposes | alarm_status, mode, alarm_ringtone, battery |
| Picture | ![Lincukoo SZW08](https://www.zigbee2mqtt.io/images/devices/SZW08.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Alarm status (enum)
device alarm status.
Value can be found in the published state on the `alarm_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `alarm`.

### Mode (enum)
work mode of the alarm.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `leakage`, `shortage`.

### Alarm ringtone (enum)
Ringtone of the alarm.
Value can be found in the published state on the `alarm_ringtone` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_ringtone": NEW_VALUE}`.
The possible values are: `mute`, `ring1`, `ring2`, `ring3`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

