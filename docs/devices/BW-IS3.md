---
title: "BlitzWolf BW-IS3 control via MQTT"
description: "Integrate your BlitzWolf BW-IS3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-02-04T20:38:05Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# BlitzWolf BW-IS3

|     |     |
|-----|-----|
| Model | BW-IS3  |
| Vendor  | [BlitzWolf](/supported-devices/#v=BlitzWolf)  |
| Description | Rechargeable Zigbee PIR motion sensor |
| Exposes | occupancy, linkquality |
| Picture | ![BlitzWolf BW-IS3](https://www.zigbee2mqtt.io/images/devices/BW-IS3.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

