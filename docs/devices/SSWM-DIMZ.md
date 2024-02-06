---
title: "Mercator Ikuü SSWM-DIMZ control via MQTT"
description: "Integrate your Mercator Ikuü SSWM-DIMZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-06-27T19:46:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Mercator Ikuü SSWM-DIMZ

|     |     |
|-----|-----|
| Model | SSWM-DIMZ  |
| Vendor  | [Mercator Ikuü](/supported-devices/#v=Mercator%20Iku%C3%BC)  |
| Description | Switch Mechanism |
| Exposes | light (state, brightness, min_brightness, max_brightness), linkquality |
| Picture | ![Mercator Ikuü SSWM-DIMZ](https://www.zigbee2mqtt.io/images/devices/SSWM-DIMZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Light 
This light supports the following features: `state`, `brightness`, `min_brightness`, `max_brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

