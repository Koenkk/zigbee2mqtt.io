---
title: "Schneider Electric E8334RWMZB control via MQTT"
description: "Integrate your Schneider Electric E8334RWMZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-06-30T19:12:33
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Schneider Electric E8334RWMZB

|     |     |
|-----|-----|
| Model | E8334RWMZB  |
| Vendor  | [Schneider Electric](/supported-devices/#v=Schneider%20Electric)  |
| Description | Wiser AvatarOn 4K Freelocate |
| Exposes | indicator_luminance_level, indicator_color, linkquality |
| Picture | ![Schneider Electric E8334RWMZB](https://www.zigbee2mqtt.io/images/devices/E8334RWMZB.png) |


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

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

