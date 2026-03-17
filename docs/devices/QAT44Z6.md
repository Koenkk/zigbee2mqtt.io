---
title: "QA QAT44Z6 control via MQTT"
description: "Integrate your QA QAT44Z6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-01T20:42:54
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# QA QAT44Z6

|     |     |
|-----|-----|
| Model | QAT44Z6  |
| Vendor  | [QA](/supported-devices/#v=QA)  |
| Description | 6 channel scene switch |
| Exposes | switch (state), action_1, action_2, action_3, action_4, action_5, action_6, backlight_brightness |
| Picture | ![QA QAT44Z6](https://www.zigbee2mqtt.io/images/devices/QAT44Z6.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l3": ""}`.

### Switch (l4 endpoint)
The current state of this switch is in the published state under the `state_l4` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l4": "ON"}`, `{"state_l4": "OFF"}` or `{"state_l4": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l4": ""}`.

### Switch (l5 endpoint)
The current state of this switch is in the published state under the `state_l5` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l5": "ON"}`, `{"state_l5": "OFF"}` or `{"state_l5": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l5": ""}`.

### Switch (l6 endpoint)
The current state of this switch is in the published state under the `state_l6` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l6": "ON"}`, `{"state_l6": "OFF"}` or `{"state_l6": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l6": ""}`.

### Action 1 (numeric)
Scene 1.
Value can be found in the published state on the `action_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action 2 (numeric)
Scene 2.
Value can be found in the published state on the `action_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action 3 (numeric)
Scene 3.
Value can be found in the published state on the `action_3` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action 4 (numeric)
Scene 4.
Value can be found in the published state on the `action_4` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action 5 (numeric)
Scene 5.
Value can be found in the published state on the `action_5` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action 6 (numeric)
Scene 6.
Value can be found in the published state on the `action_6` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Backlight brightness (numeric)
Backlight brightness (0-99).
Value can be found in the published state on the `backlight_brightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"backlight_brightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.
The unit of this value is `%`.

