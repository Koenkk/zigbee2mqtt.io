---
title: "Tuya TS0601_4gang_7ytnacie control via MQTT"
description: "Integrate your Tuya TS0601_4gang_7ytnacie via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_4gang_7ytnacie

|     |     |
|-----|-----|
| Model | TS0601_4gang_7ytnacie  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Four gang smart switch with colored backlight modes |
| Exposes | switch (state), backlight_switch, backlight, indicator_mode, power_on_behavior, child_lock, on_color, off_color, countdown_l1, countdown_l2, countdown_l3, countdown_l4 |
| Picture | ![Tuya TS0601_4gang_7ytnacie](https://www.zigbee2mqtt.io/images/devices/TS0601_4gang_7ytnacie.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l4 endpoint)
The current state of this switch is in the published state under the `state_l4` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l4": "ON"}`, `{"state_l4": "OFF"}` or `{"state_l4": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Backlight switch (binary)
Backlight master switch.
Value can be found in the published state on the `backlight_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_switch": NEW_VALUE}`.
If value equals `ON` backlight switch is ON, if `OFF` OFF.

### Backlight (numeric)
Backlight brightness percentage.
Value can be found in the published state on the `backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Indicator mode (enum)
LED indicator mode.
Value can be found in the published state on the `indicator_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode": NEW_VALUE}`.
The possible values are: `off`, `on_off_status`, `switch_position`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Child lock (binary)
Child lock.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `ON` child lock is ON, if `OFF` OFF.

### On color (enum)
ON color.
Value can be found in the published state on the `on_color` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"on_color": NEW_VALUE}`.
The possible values are: `red`, `blue`, `green`, `white`, `yellow`, `magenta`, `cyan`, `warm_white`, `warm_yellow`.

### Off color (enum)
OFF color.
Value can be found in the published state on the `off_color` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"off_color": NEW_VALUE}`.
The possible values are: `red`, `blue`, `green`, `white`, `yellow`, `magenta`, `cyan`, `warm_white`, `warm_yellow`.

### Countdown l1 (numeric)
Countdown for l1.
Value can be found in the published state on the `countdown_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Countdown l2 (numeric)
Countdown for l2.
Value can be found in the published state on the `countdown_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Countdown l3 (numeric)
Countdown for l3.
Value can be found in the published state on the `countdown_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Countdown l4 (numeric)
Countdown for l4.
Value can be found in the published state on the `countdown_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l4": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

