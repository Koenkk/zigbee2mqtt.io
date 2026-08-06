---
title: "Mercator Ikuü SISWD11-ZB control via MQTT"
description: "Integrate your Mercator Ikuü SISWD11-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-06-30T19:08:31
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Mercator Ikuü SISWD11-ZB

|     |     |
|-----|-----|
| Model | SISWD11-ZB  |
| Vendor  | [Mercator Ikuü](/supported-devices/#v=Mercator%20Iku%C3%BC)  |
| Description | Inline module dimmer switch |
| Exposes | light (state, brightness) |
| Picture | ![Mercator Ikuü SISWD11-ZB](https://www.zigbee2mqtt.io/images/devices/SISWD11-ZB.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Light 
This light supports the following features: `state`, `brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
                
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
                

