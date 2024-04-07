---
title: "TubesZB tubeszb.router control via MQTT"
description: "Integrate your TubesZB tubeszb.router via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-01-31T17:42:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TubesZB tubeszb.router

|     |     |
|-----|-----|
| Model | tubeszb.router  |
| Vendor  | [TubesZB](/supported-devices/#v=TubesZB)  |
| Description | CC2652 Router |
| Exposes | linkquality |
| Picture | ![TubesZB tubeszb.router](https://www.zigbee2mqtt.io/images/devices/tubeszb.router.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[CC2652 Router](https://github.com/tube0013/tube_gateways/tree/main/tube_cc_router)
<!-- Notes END: Do not edit below this line -->




## Exposes

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

