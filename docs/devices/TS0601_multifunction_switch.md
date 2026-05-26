---
title: "Tuya TS0601_multifunction_switch control via MQTT"
description: "Integrate your Tuya TS0601_multifunction_switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-07T17:39:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_multifunction_switch

|     |     |
|-----|-----|
| Model | TS0601_multifunction_switch  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 1 gang touch panel switch with backlight color modes, child lock, timer, and brightness |
| Exposes | switch (state), power_on_behavior, countdown, indicator_mode, backlight_mode, inching, on_color, off_color, backlight_brightness, child_lock |
| Picture | ![Tuya TS0601_multifunction_switch](https://www.zigbee2mqtt.io/images/devices/TS0601_multifunction_switch.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Countdown (numeric)
Countdown to turn off.
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Indicator mode (enum)
Mode of the indicator light.
Value can be found in the published state on the `indicator_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode": NEW_VALUE}`.
The possible values are: `none`, `relay`, `pos`.

### Backlight mode (binary)
Backlight.
Value can be found in the published state on the `backlight_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_mode": NEW_VALUE}`.
If value equals `ON` backlight mode is ON, if `OFF` OFF.

### Inching (composite)
Inching (auto delay shut down) configuration.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"inching": {"state": VALUE, "minutes": VALUE, "seconds": VALUE}}`
- `state` (binary): Enable/disable inching allowed values: `ON` or `OFF`
- `minutes` (numeric): Delay minutes max value is 1440, unit is m
- `seconds` (numeric): Delay seconds max value is 59, unit is s

### On color (enum)
ON Color.
Value can be found in the published state on the `on_color` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"on_color": NEW_VALUE}`.
The possible values are: `red`, `blue`, `green`, `white`, `yellow`, `magenta`, `cyan`.

### Off color (enum)
OFF Color.
Value can be found in the published state on the `off_color` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"off_color": NEW_VALUE}`.
The possible values are: `red`, `blue`, `green`, `white`, `yellow`, `magenta`, `cyan`.

### Backlight brightness (numeric)
Backlight Brightness.
Value can be found in the published state on the `backlight_brightness` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### Child lock (binary)
Child Lock.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `ON` child lock is ON, if `OFF` OFF.

