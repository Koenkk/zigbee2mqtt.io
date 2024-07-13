---
title: "Digi XBee control via MQTT"
description: "Integrate your Digi XBee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-04-29T17:11:59Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Digi XBee

|     |     |
|-----|-----|
| Model | XBee  |
| Vendor  | [Digi](/supported-devices/#v=Digi)  |
| Description | Router |
| Exposes | linkquality |
| Picture | ![Digi XBee](https://www.zigbee2mqtt.io/images/devices/XBee.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

