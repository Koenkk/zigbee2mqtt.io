---
title: "Dawon DNS PM-S140R-ZB control via MQTT"
description: "Integrate your Dawon DNS PM-S140R-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-05-19T19:51:21Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Dawon DNS PM-S140R-ZB

|     |     |
|-----|-----|
| Model | PM-S140R-ZB  |
| Vendor  | [Dawon DNS](/supported-devices/#v=Dawon%20DNS)  |
| Description | IOT smart switch 1 gang router without neutral wire |
| Exposes | switch (state), linkquality |
| Picture | ![Dawon DNS PM-S140R-ZB](https://www.zigbee2mqtt.io/images/devices/PM-S140R-ZB.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

