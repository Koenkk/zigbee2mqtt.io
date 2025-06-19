---
title: "Tuya TS0601_switch_1_gang control via MQTT"
description: "Integrate your Tuya TS0601_switch_1_gang via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-06-01T08:16:21
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_switch_1_gang

|     |     |
|-----|-----|
| Model | TS0601_switch_1_gang  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 1 gang switch |
| Exposes | switch (state) |
| Picture | ![Tuya TS0601_switch_1_gang](https://www.zigbee2mqtt.io/images/devices/TS0601_switch_1_gang.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

