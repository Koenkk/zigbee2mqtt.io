---
title: "Airam CTR.UBX control via MQTT"
description: "Integrate your Airam CTR.UBX via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2020-09-30T20:52:56Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Airam CTR.UBX

|     |     |
|-----|-----|
| Model | CTR.UBX  |
| Vendor  | Airam  |
| Description | CTR.U remote BX |
| Exposes | action, linkquality |
| Picture | ![Airam CTR.UBX](https://www.zigbee2mqtt.io/images/devices/CTR.UBX.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `brightness_step_up`, `brightness_step_down`, `brightness_move_up`, `brightness_move_down`, `brightness_stop`, `recall_*`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

