---
title: "NEO NAS-WV03B2 control via MQTT"
description: "Integrate your NEO NAS-WV03B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# NEO NAS-WV03B2

|     |     |
|-----|-----|
| Model | NAS-WV03B2  |
| Vendor  | [NEO](/supported-devices/#v=NEO)  |
| Description | Smart Sprinkler Timer |
| Exposes | status, countdown, countdown_left, child_lock, battery_percentage, linkquality |
| Picture | ![NEO NAS-WV03B2](https://www.zigbee2mqtt.io/images/devices/NAS-WV03B2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Status (enum)
Status.
Value can be found in the published state on the `status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `Off`, `Auto`, `Disabled`, `APP manual`, `Key control`.

### Countdown (numeric)
Count down.
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `60`.
The unit of this value is `min`.

### Countdown left (numeric)
Countdown left time.
Value can be found in the published state on the `countdown_left` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `1` and the maximum value is `60`.
The unit of this value is `min`.

### Child lock (binary)
Child lock.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `ON` child lock is ON, if `OFF` OFF.

### Battery percentage (numeric)
Battery percentage.
Value can be found in the published state on the `battery_percentage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

