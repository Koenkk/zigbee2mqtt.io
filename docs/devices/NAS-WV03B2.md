---
title: "NEO NAS-WV03B2 control via MQTT"
description: "Integrate your NEO NAS-WV03B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-08-01T18:23:33
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
| Description | Smart sprinkler timer |
| Exposes | switch (state), status, refresh, countdown, on_with_countdown, countdown_left, single_watering_duration, fault, child_lock, battery |
| Picture | ![NEO NAS-WV03B2](https://www.zigbee2mqtt.io/images/devices/NAS-WV03B2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Status (enum)
Status.
Value can be found in the published state on the `status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `off`, `on_auto`, `button_locked`, `on_manual_app`, `on_manual_button`.

### Refresh (enum)
Refresh the device status.
Value can be found in the published state on the `refresh` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"refresh": NEW_VALUE}`.
The possible values are: `refresh`.

### Countdown (numeric)
Turn off the sprinkler after set duration (one time).
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `240`.
The unit of this value is `min`.

### On with countdown (numeric)
Turn on the sprinkler and start countdown.
Value can be found in the published state on the `on_with_countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"on_with_countdown": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `240`.
The unit of this value is `min`.

### Countdown left (numeric)
Time left in the countdown.
Value can be found in the published state on the `countdown_left` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `240`.
The unit of this value is `min`.

### Single watering duration (numeric)
Duration of last watering.
Value can be found in the published state on the `single_watering_duration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Fault (binary)
Indicates whether a fault was detected.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` fault is ON, if `false` OFF.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

