---
title: "Cigol Electronics Cigol Connect control via MQTT"
description: "Integrate your Cigol Electronics Cigol Connect via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Cigol Electronics Cigol Connect

|     |     |
|-----|-----|
| Model | Cigol Connect  |
| Vendor  | [Cigol Electronics](/supported-devices/#v=Cigol%20Electronics)  |
| Description | Zigbee interface module for LK IHC installations |
| Exposes | state |
| Picture | ![Cigol Electronics Cigol Connect](https://www.zigbee2mqtt.io/images/devices/Cigol-Connect.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### State (binary)
Output state.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": NEW_VALUE}`.
If value equals `ON` state is ON, if `OFF` OFF.

