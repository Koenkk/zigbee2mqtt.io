---
title: "TuYa TS0601_dimmer control via MQTT"
description: "Integrate your TuYa TS0601_dimmer via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-11-01T12:47:02Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa TS0601_dimmer

|     |     |
|-----|-----|
| Model | TS0601_dimmer  |
| Vendor  | [TuYa](/supported-devices/#v=TuYa)  |
| Description | Zigbee smart dimmer |
| Exposes | light (state, brightness, min_brightness, max_brightness), linkquality |
| Picture | ![TuYa TS0601_dimmer](https://www.zigbee2mqtt.io/images/devices/TS0601_dimmer.png) |
| White-label | Larkkey ZSTY-SM-1DMZG-EU, Earda EDM-1ZAA-EU, Earda EDM-1ZAB-EU, Earda EDM-1ZBA-EU, Mercator Ikuü SSWD01, Moes ZS-USD, Moes EDM-1ZBB-EU |


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

