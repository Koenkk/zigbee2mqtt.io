---
title: "Tuya M8Pro control via MQTT"
description: "Integrate your Tuya M8Pro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-31T20:34:53
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya M8Pro

|     |     |
|-----|-----|
| Model | M8Pro  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 4 gang switch with LCD |
| Exposes | switch (state), name, scene_name, mode, action |
| Picture | ![Tuya M8Pro](https://www.zigbee2mqtt.io/images/devices/M8Pro.png) |


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

### Name (text, l1 endpoint)
Name for Switch 1.
Value can be found in the published state on the `name_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"name_l1": NEW_VALUE}`.

### Name (text, l2 endpoint)
Name for Switch 2.
Value can be found in the published state on the `name_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"name_l2": NEW_VALUE}`.

### Name (text, l3 endpoint)
Name for Switch 3.
Value can be found in the published state on the `name_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"name_l3": NEW_VALUE}`.

### Name (text, l4 endpoint)
Name for Switch 4.
Value can be found in the published state on the `name_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"name_l4": NEW_VALUE}`.

### Scene name (text, l1 endpoint)
Name for Scene 1.
Value can be found in the published state on the `scene_name_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l1": NEW_VALUE}`.

### Scene name (text, l2 endpoint)
Name for Scene 2.
Value can be found in the published state on the `scene_name_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l2": NEW_VALUE}`.

### Scene name (text, l3 endpoint)
Name for Scene 3.
Value can be found in the published state on the `scene_name_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l3": NEW_VALUE}`.

### Scene name (text, l4 endpoint)
Name for Scene 4.
Value can be found in the published state on the `scene_name_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l4": NEW_VALUE}`.

### Mode (enum, l1 endpoint)
Switch1 mode.
Value can be found in the published state on the `mode_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode_l1": NEW_VALUE}`.
The possible values are: `switch_1`, `scene_1`, `smart_light_1`.

### Mode (enum, l2 endpoint)
Switch2 mode.
Value can be found in the published state on the `mode_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode_l2": NEW_VALUE}`.
The possible values are: `switch_1`, `scene_1`, `smart_light_1`.

### Mode (enum, l3 endpoint)
Switch3 mode.
Value can be found in the published state on the `mode_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode_l3": NEW_VALUE}`.
The possible values are: `switch_1`, `scene_1`, `smart_light_1`.

### Mode (enum, l4 endpoint)
Switch4 mode.
Value can be found in the published state on the `mode_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode_l4": NEW_VALUE}`.
The possible values are: `switch_1`, `scene_1`, `smart_light_1`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `scene_1`, `scene_2`, `scene_3`, `scene_4`.

