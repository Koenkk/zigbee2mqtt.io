---
title: "Tuya SA12IZL control via MQTT"
description: "Integrate your Tuya SA12IZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-30T20:52:51
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya SA12IZL

|     |     |
|-----|-----|
| Model | SA12IZL  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart smoke alarm |
| Exposes | battery, smoke, battery_level, alarm, silence_siren, linkquality |
| Picture | ![Tuya SA12IZL](https://www.zigbee2mqtt.io/images/devices/SA12IZL.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Smoke (binary)
Smoke alarm status.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery level (enum)
Battery level state.
Value can be found in the published state on the `battery_level` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `middle`, `high`.

### Alarm (binary)
Enable the alarm.
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `true` alarm is ON, if `false` OFF.

### Silence siren (binary)
Silence the siren.
Value can be found in the published state on the `silence_siren` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"silence_siren": NEW_VALUE}`.
If value equals `true` silence siren is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

