---
title: "Shawader SMKG-1KNL-US/TZB-W control via MQTT"
description: "Integrate your Shawader SMKG-1KNL-US/TZB-W via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-06-01T08:16:21
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Shawader SMKG-1KNL-US/TZB-W

|     |     |
|-----|-----|
| Model | SMKG-1KNL-US/TZB-W  |
| Vendor  | [Shawader](/supported-devices/#v=Shawader)  |
| Description | 1 gang switch |
| Exposes | switch (state) |
| Picture | ![Shawader SMKG-1KNL-US/TZB-W](https://www.zigbee2mqtt.io/images/devices/SMKG-1KNL-US-TZB-W.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

