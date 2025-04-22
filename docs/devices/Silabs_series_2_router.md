---
title: "Silabs Silabs series 2 router control via MQTT"
description: "Integrate your Silabs Silabs series 2 router via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-03T20:11:48
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Silabs Silabs series 2 router

|     |     |
|-----|-----|
| Model | Silabs series 2 router  |
| Vendor  | [Silabs](/supported-devices/#v=Silabs)  |
| Description | Silabs series 2 adapter with router firmware |
| Exposes | reset |
| Picture | ![Silabs Silabs series 2 router](https://www.zigbee2mqtt.io/images/devices/Silabs-series-2-router.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Reset (enum)
Resets and launches the bootloader for flashing. If USB, ensure the device is already connected to the machine where you intend to flash it before triggering this..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset": NEW_VALUE}`.
The possible values are: `reset`.

