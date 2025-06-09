---
title: "IOTPerfect PF-PM02D-TYZ control via MQTT"
description: "Integrate your IOTPerfect PF-PM02D-TYZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-08-17T16:57:14Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# IOTPerfect PF-PM02D-TYZ

|     |     |
|-----|-----|
| Model | PF-PM02D-TYZ  |
| Vendor  | [IOTPerfect](/supported-devices/#v=IOTPerfect)  |
| Description | Smart water/gas valve |
| Exposes | switch (state) |
| Picture | ![IOTPerfect PF-PM02D-TYZ](https://www.zigbee2mqtt.io/images/devices/PF-PM02D-TYZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

