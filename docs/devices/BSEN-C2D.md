---
title: "Bosch BSEN-C2D control via MQTT"
description: "Integrate your Bosch BSEN-C2D via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:37:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bosch BSEN-C2D

|     |     |
|-----|-----|
| Model | BSEN-C2D  |
| Vendor  | [Bosch](/supported-devices/#v=Bosch)  |
| Description | Door/window contact II [+M] |
| Exposes | contact, break_function_enabled, break_function_timeout, break_function_state, battery, battery_low, action |
| Picture | ![Bosch BSEN-C2D](https://www.zigbee2mqtt.io/images/devices/BSEN-C2D.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Contact (binary)
Indicates whether the device is opened or closed.
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Break function (binary)
Activate the break function by pressing the operating button on the door/window contact twice. This means that the device temporarily stops reading the sensors..
Value can be found in the published state on the `break_function_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"break_function_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"break_function_enabled": NEW_VALUE}`.
If value equals `ON` break function is ON, if `OFF` OFF.

### Automatic time limit for breaks (numeric)
Here you can define how long the break function is activated for the door/window contact. Once the time limit has expired, the break ends automatically. The LED on the device will flash orange as long as the break is activated when this setting is being used..
Value can be found in the published state on the `break_function_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"break_function_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"break_function_timeout": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `15`.
The unit of this value is `minutes`.
Besides the numeric values the following values are accepted: `disable`.

### Break function state (enum)
Indicates whether the device is in break mode or not.
Value can be found in the published state on the `break_function_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"break_function_state": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `break_active`, `idle`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `double_press`, `long_press`, `single_press`, `none`.

