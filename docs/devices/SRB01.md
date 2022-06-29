---
title: "Evvr SRB01/SRB01A control via MQTT"
description: "Integrate your Evvr SRB01/SRB01A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-06-30T15:05:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Evvr SRB01

|     |     |
|-----|-----|
| Model | SRB01/SRB01A |
| Vendor  | Evvr |
| Description | In-Wall Relay Switch |
| Exposes | switch (state), linkquality |
| Picture | ![Evvr SRB01](https://www.zigbee2mqtt.io/images/devices/SRB01.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->

### Pairing
Short press the RESET button.
The load light must be on, at the same time the indicator light will slowly flash blue, wait until pairing is successful or until 30 seconds timeout.
If the In-Wall Relay Switch is successfully paired, the indicator will show BLUE when the load light is on.

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

