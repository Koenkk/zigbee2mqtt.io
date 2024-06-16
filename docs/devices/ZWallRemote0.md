---
title: "Custom devices (DiY) ZWallRemote0 control via MQTT"
description: "Integrate your Custom devices (DiY) ZWallRemote0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-11-09T18:37:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) ZWallRemote0

|     |     |
|-----|-----|
| Model | ZWallRemote0  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | Matts Wall Switch Remote |
| Exposes | action, linkquality |
| Picture | ![Custom devices (DiY) ZWallRemote0](https://www.zigbee2mqtt.io/images/devices/ZWallRemote0.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[Matts Wall Switch Remote](https://github.com/mattlokes/ZWallRemote)
<!-- Notes END: Do not edit below this line -->




## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `toggle`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

