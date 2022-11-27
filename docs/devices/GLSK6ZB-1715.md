---
title: "Hej GLSK6ZB-1715 control via MQTT"
description: "Integrate your Hej GLSK6ZB-1715 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hej GLSK6ZB-1715

|     |     |
|-----|-----|
| Model | GLSK6ZB-1715  |
| Vendor  | [Hej](/supported-devices/#v=Hej)  |
| Description | Goqual 5 gang Switch |
| Exposes | switch (state), linkquality |
| Picture | ![Hej GLSK6ZB-1715](https://www.zigbee2mqtt.io/images/devices/GLSK6ZB-1715.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Exposes

### Switch (top_left endpoint)
The current state of this switch is in the published state under the `state_top_left` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_top_left": "ON"}`, `{"state_top_left": "OFF"}` or `{"state_top_left": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_top_left": ""}`.

### Switch (top_right endpoint)
The current state of this switch is in the published state under the `state_top_right` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_top_right": "ON"}`, `{"state_top_right": "OFF"}` or `{"state_top_right": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_top_right": ""}`.

### Switch (center_left endpoint)
The current state of this switch is in the published state under the `state_center_left` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_center_left": "ON"}`, `{"state_center_left": "OFF"}` or `{"state_center_left": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_center_left": ""}`.

### Switch (bottom_left endpoint)
The current state of this switch is in the published state under the `state_bottom_left` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_bottom_left": "ON"}`, `{"state_bottom_left": "OFF"}` or `{"state_bottom_left": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_bottom_left": ""}`.

### Switch (bottom_right endpoint)
The current state of this switch is in the published state under the `state_bottom_right` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_bottom_right": "ON"}`, `{"state_bottom_right": "OFF"}` or `{"state_bottom_right": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_bottom_right": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

