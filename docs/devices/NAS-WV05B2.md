---
title: "NEO NAS-WV05B2 control via MQTT"
description: "Integrate your NEO NAS-WV05B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-08-01T18:23:33
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# NEO NAS-WV05B2

|     |     |
|-----|-----|
| Model | NAS-WV05B2  |
| Vendor  | [NEO](/supported-devices/#v=NEO)  |
| Description | Smart sprinkler timer |
| Exposes | switch (state), status, countdown, countdown_left, water_total, water_current, current_switch, reset_switch, child_lock, battery, linkquality |
| Picture | ![NEO NAS-WV05B2](https://www.zigbee2mqtt.io/images/devices/NAS-WV05B2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Status (enum)
Status.
Value can be found in the published state on the `status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `off`, `auto`, `disabled`, `app_manual`, `key_control`.

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

### Water total (numeric)
Water total (gal).
Value can be found in the published state on the `water_total` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `gal`.

### Water current (numeric)
Current water flow (gal/min).
Value can be found in the published state on the `water_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `gal/min`.

### Current switch (binary)
Flow switch.
Value can be found in the published state on the `current_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_switch": NEW_VALUE}`.
If value equals `ON` current switch is ON, if `OFF` OFF.

### Reset switch (binary)
Total flow reset switch.
Value can be found in the published state on the `reset_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_switch": NEW_VALUE}`.
If value equals `ON` reset switch is ON, if `OFF` OFF.

### Child lock (binary)
Child lock.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `ON` child lock is ON, if `OFF` OFF.

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

