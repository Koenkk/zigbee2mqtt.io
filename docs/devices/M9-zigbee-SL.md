---
title: "Tuya M9-zigbee-SL control via MQTT"
description: "Integrate your Tuya M9-zigbee-SL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-01T15:13:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya M9-zigbee-SL

|     |     |
|-----|-----|
| Model | M9-zigbee-SL  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart Switch (4 gang + 4 scene) with neutral wire and motion sensing |
| Exposes | switch (state), power_on_behavior, switch_mode, light_mode, backlight_mode, action, presence, delay, linkquality |
| Picture | ![Tuya M9-zigbee-SL](https://www.zigbee2mqtt.io/images/devices/M9-zigbee-SL.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

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

### Switch (l5 endpoint)
The current state of this switch is in the published state under the `state_l5` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l5": "ON"}`, `{"state_l5": "OFF"}` or `{"state_l5": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l6 endpoint)
The current state of this switch is in the published state under the `state_l6` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l6": "ON"}`, `{"state_l6": "OFF"}` or `{"state_l6": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l7 endpoint)
The current state of this switch is in the published state under the `state_l7` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l7": "ON"}`, `{"state_l7": "OFF"}` or `{"state_l7": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l8 endpoint)
The current state of this switch is in the published state under the `state_l8` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l8": "ON"}`, `{"state_l8": "OFF"}` or `{"state_l8": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Power-on behavior (enum, l1 endpoint)
Controls the behavior when the device is powered on after power loss. If you get an `UNSUPPORTED_ATTRIBUTE` error, the device does not support it..
Value can be found in the published state on the `power_on_behavior_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l1": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Power-on behavior (enum, l2 endpoint)
Controls the behavior when the device is powered on after power loss. If you get an `UNSUPPORTED_ATTRIBUTE` error, the device does not support it..
Value can be found in the published state on the `power_on_behavior_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l2": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Power-on behavior (enum, l3 endpoint)
Controls the behavior when the device is powered on after power loss. If you get an `UNSUPPORTED_ATTRIBUTE` error, the device does not support it..
Value can be found in the published state on the `power_on_behavior_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l3": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Power-on behavior (enum, l4 endpoint)
Controls the behavior when the device is powered on after power loss. If you get an `UNSUPPORTED_ATTRIBUTE` error, the device does not support it..
Value can be found in the published state on the `power_on_behavior_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l4": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Power-on behavior (enum, l5 endpoint)
Controls the behavior when the device is powered on after power loss. If you get an `UNSUPPORTED_ATTRIBUTE` error, the device does not support it..
Value can be found in the published state on the `power_on_behavior_l5` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l5": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Power-on behavior (enum, l6 endpoint)
Controls the behavior when the device is powered on after power loss. If you get an `UNSUPPORTED_ATTRIBUTE` error, the device does not support it..
Value can be found in the published state on the `power_on_behavior_l6` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l6": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Power-on behavior (enum, l7 endpoint)
Controls the behavior when the device is powered on after power loss. If you get an `UNSUPPORTED_ATTRIBUTE` error, the device does not support it..
Value can be found in the published state on the `power_on_behavior_l7` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l7": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Power-on behavior (enum, l8 endpoint)
Controls the behavior when the device is powered on after power loss. If you get an `UNSUPPORTED_ATTRIBUTE` error, the device does not support it..
Value can be found in the published state on the `power_on_behavior_l8` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l8": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Switch mode (enum, l1 endpoint)
Sets the mode of the switch to act as a switch or as a scene.
Value can be found in the published state on the `switch_mode_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l1": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Switch mode (enum, l2 endpoint)
Sets the mode of the switch to act as a switch or as a scene.
Value can be found in the published state on the `switch_mode_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l2": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Switch mode (enum, l3 endpoint)
Sets the mode of the switch to act as a switch or as a scene.
Value can be found in the published state on the `switch_mode_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l3": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Switch mode (enum, l4 endpoint)
Sets the mode of the switch to act as a switch or as a scene.
Value can be found in the published state on the `switch_mode_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l4": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Switch mode (enum, l5 endpoint)
Sets the mode of the switch to act as a switch or as a scene.
Value can be found in the published state on the `switch_mode_l5` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l5": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Switch mode (enum, l6 endpoint)
Sets the mode of the switch to act as a switch or as a scene.
Value can be found in the published state on the `switch_mode_l6` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l6": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Switch mode (enum, l7 endpoint)
Sets the mode of the switch to act as a switch or as a scene.
Value can be found in the published state on the `switch_mode_l7` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l7": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Switch mode (enum, l8 endpoint)
Sets the mode of the switch to act as a switch or as a scene.
Value can be found in the published state on the `switch_mode_l8` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l8": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Light mode (enum, l1 endpoint)
'Sets the indicator mode of l1.
        Normal: Orange while off and white while on.
        On: Always white. Off: Always orange.
        Flash: Flashes white when triggered.
        Note: Orange light will turn off after light off delay, white light always stays on. Light mode updates on next state change.'.
Value can be found in the published state on the `light_mode_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode_l1": NEW_VALUE}`.
The possible values are: `normal`, `on`, `off`, `flash`.

### Light mode (enum, l2 endpoint)
'Sets the indicator mode of l1.
        Normal: Orange while off and white while on.
        On: Always white. Off: Always orange.
        Flash: Flashes white when triggered.
        Note: Orange light will turn off after light off delay, white light always stays on. Light mode updates on next state change.'.
Value can be found in the published state on the `light_mode_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode_l2": NEW_VALUE}`.
The possible values are: `normal`, `on`, `off`, `flash`.

### Light mode (enum, l3 endpoint)
'Sets the indicator mode of l1.
        Normal: Orange while off and white while on.
        On: Always white. Off: Always orange.
        Flash: Flashes white when triggered.
        Note: Orange light will turn off after light off delay, white light always stays on. Light mode updates on next state change.'.
Value can be found in the published state on the `light_mode_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode_l3": NEW_VALUE}`.
The possible values are: `normal`, `on`, `off`, `flash`.

### Light mode (enum, l4 endpoint)
'Sets the indicator mode of l1.
        Normal: Orange while off and white while on.
        On: Always white. Off: Always orange.
        Flash: Flashes white when triggered.
        Note: Orange light will turn off after light off delay, white light always stays on. Light mode updates on next state change.'.
Value can be found in the published state on the `light_mode_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode_l4": NEW_VALUE}`.
The possible values are: `normal`, `on`, `off`, `flash`.

### Light mode (enum, l5 endpoint)
'Sets the indicator mode of l1.
        Normal: Orange while off and white while on.
        On: Always white. Off: Always orange.
        Flash: Flashes white when triggered.
        Note: Orange light will turn off after light off delay, white light always stays on. Light mode updates on next state change.'.
Value can be found in the published state on the `light_mode_l5` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode_l5": NEW_VALUE}`.
The possible values are: `normal`, `on`, `off`, `flash`.

### Light mode (enum, l6 endpoint)
'Sets the indicator mode of l1.
        Normal: Orange while off and white while on.
        On: Always white. Off: Always orange.
        Flash: Flashes white when triggered.
        Note: Orange light will turn off after light off delay, white light always stays on. Light mode updates on next state change.'.
Value can be found in the published state on the `light_mode_l6` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode_l6": NEW_VALUE}`.
The possible values are: `normal`, `on`, `off`, `flash`.

### Light mode (enum, l7 endpoint)
'Sets the indicator mode of l1.
        Normal: Orange while off and white while on.
        On: Always white. Off: Always orange.
        Flash: Flashes white when triggered.
        Note: Orange light will turn off after light off delay, white light always stays on. Light mode updates on next state change.'.
Value can be found in the published state on the `light_mode_l7` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode_l7": NEW_VALUE}`.
The possible values are: `normal`, `on`, `off`, `flash`.

### Light mode (enum, l8 endpoint)
'Sets the indicator mode of l1.
        Normal: Orange while off and white while on.
        On: Always white. Off: Always orange.
        Flash: Flashes white when triggered.
        Note: Orange light will turn off after light off delay, white light always stays on. Light mode updates on next state change.'.
Value can be found in the published state on the `light_mode_l8` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode_l8": NEW_VALUE}`.
The possible values are: `normal`, `on`, `off`, `flash`.

### Backlight mode (binary)
Mode of the backlight.
Value can be found in the published state on the `backlight_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_mode": NEW_VALUE}`.
If value equals `ON` backlight mode is ON, if `OFF` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `scene_1`, `scene_2`, `scene_3`, `scene_4`, `scene_5`, `scene_6`, `scene_7`, `scene_8`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Delay (numeric)
light off delay.
Value can be found in the published state on the `delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `sec`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

