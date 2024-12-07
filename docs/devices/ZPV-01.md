---
title: "Novato ZPV-01 control via MQTT"
description: "Integrate your Novato ZPV-01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-06-01T08:47:20
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Novato ZPV-01

|     |     |
|-----|-----|
| Model | ZPV-01  |
| Vendor  | [Novato](/supported-devices/#v=Novato)  |
| Description | Battery powered smart valve |
| Exposes | switch (state), valve_state, linkquality |
| Picture | ![Novato ZPV-01](https://www.zigbee2mqtt.io/images/devices/ZPV-01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Valve state (enum)
State of the valve.
Value can be found in the published state on the `valve_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `close`, `unknown`, `open`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

