---
title: "Lorenz Brun FanBee control via MQTT"
description: "Integrate your Lorenz Brun FanBee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-03-01T20:31:41
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lorenz Brun FanBee

|     |     |
|-----|-----|
| Model | FanBee  |
| Vendor  | [Lorenz Brun](/supported-devices/#v=Lorenz%20Brun)  |
| Description | Fan with valve |
| Exposes | fan (state, speed) |
| Picture | ![Lorenz Brun FanBee](https://www.zigbee2mqtt.io/images/devices/FanBee.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Fan 
The current state of this fan is in the published state under the `state` property (value is `ON` or `OFF`).
To control this fan publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}` or `{"state": "OFF"}`.
To read the current state of this fan publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

