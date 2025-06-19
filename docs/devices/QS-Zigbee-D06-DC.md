---
title: "Ledron QS-Zigbee-D06-DC control via MQTT"
description: "Integrate your Ledron QS-Zigbee-D06-DC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-08-01T18:23:41
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Ledron QS-Zigbee-D06-DC

|     |     |
|-----|-----|
| Model | QS-Zigbee-D06-DC  |
| Vendor  | [Ledron](/supported-devices/#v=Ledron)  |
| Description | Dimmer 12-36v |
| Exposes | light (state, brightness, min_brightness, max_brightness) |
| Picture | ![Ledron QS-Zigbee-D06-DC](https://www.zigbee2mqtt.io/images/devices/QS-Zigbee-D06-DC.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `brightness`, `min_brightness`, `max_brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.

