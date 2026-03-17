---
title: "Orztech _TZE200_b0ihkhxh control via MQTT"
description: "Integrate your Orztech _TZE200_b0ihkhxh via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:59:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Orztech _TZE200_b0ihkhxh

|     |     |
|-----|-----|
| Model | _TZE200_b0ihkhxh  |
| Vendor  | [Orztech](/supported-devices/#v=Orztech)  |
| Description | 1 gang touch wall switch |
| Exposes | switch (state) |
| Picture | ![Orztech _TZE200_b0ihkhxh](https://www.zigbee2mqtt.io/images/devices/_TZE200_b0ihkhxh.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch (t1 endpoint)
The current state of this switch is in the published state under the `state_t1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_t1": "ON"}`, `{"state_t1": "OFF"}` or `{"state_t1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_t1": ""}`.

### Switch (c1 endpoint)
The current state of this switch is in the published state under the `state_c1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_c1": "ON"}`, `{"state_c1": "OFF"}` or `{"state_c1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_c1": ""}`.

### Switch (c2 endpoint)
The current state of this switch is in the published state under the `state_c2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_c2": "ON"}`, `{"state_c2": "OFF"}` or `{"state_c2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_c2": ""}`.

### Switch (c3 endpoint)
The current state of this switch is in the published state under the `state_c3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_c3": "ON"}`, `{"state_c3": "OFF"}` or `{"state_c3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_c3": ""}`.

