---
title: "Schneider Electric E8332RWMZB control via MQTT"
description: "Integrate your Schneider Electric E8332RWMZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:37:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Schneider Electric E8332RWMZB

|     |     |
|-----|-----|
| Model | E8332RWMZB  |
| Vendor  | [Schneider Electric](/supported-devices/#v=Schneider%20Electric)  |
| Description | Wiser AvatarOn 2K Freelocate |
| Exposes | indicator_luminance_level, indicator_color, action |
| Picture | ![Schneider Electric E8332RWMZB](https://www.zigbee2mqtt.io/images/devices/E8332RWMZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Indicator luminance level (enum)
Set indicator luminance Level.
Value can be found in the published state on the `indicator_luminance_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_luminance_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_luminance_level": NEW_VALUE}`.
The possible values are: `0`, `20`, `40`, `60`, `80`, `100`.

### Indicator color (enum)
Set indicator color.
Value can be found in the published state on the `indicator_color` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_color": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_color": NEW_VALUE}`.
The possible values are: `white`, `blue`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `key1`, `key2`.

