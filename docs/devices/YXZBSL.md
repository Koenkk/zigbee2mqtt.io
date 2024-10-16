---
title: "Tuya YXZBSL control via MQTT"
description: "Integrate your Tuya YXZBSL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-09-01T12:37:03
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya YXZBSL

|     |     |
|-----|-----|
| Model | YXZBSL  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart siren |
| Exposes | alarm, type, volume, ringtone, power_type, duration, battery_level, battery, linkquality |
| Picture | ![Tuya YXZBSL](https://www.zigbee2mqtt.io/images/devices/YXZBSL.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Alarm (binary)
Turn the light of the alarm ON/OFF.
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `ON` alarm is ON, if `OFF` OFF.

### Type (enum)
Alarm type.
Value can be found in the published state on the `type` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"type": NEW_VALUE}`.
The possible values are: `sound`, `light`, `sound+light`, `normal`.

### Volume (enum)
Volume of the alarm.
Value can be found in the published state on the `volume` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"volume": NEW_VALUE}`.
The possible values are: `mute`, `low`, `middle`, `high`.

### Ringtone (enum)
Ringtone of the alarm.
Value can be found in the published state on the `ringtone` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ringtone": NEW_VALUE}`.
The possible values are: `melody1`, `melody2`, `melody3`, `melody4`, `melody5`, `melody6`, `melody7`, `melody8`, `door`, `water`, `temperature`, `entered`, `left`.

### Power type (enum)
Power type.
Value can be found in the published state on the `power_type` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `battery`, `cable`.

### Duration (numeric)
Duration of the alarm.
Value can be found in the published state on the `duration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `60`.
The unit of this value is `min`.

### Battery level (enum)
Battery level state.
Value can be found in the published state on the `battery_level` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `middle`, `high`.

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

