---
title: "Ekaza EKAT-T304Z control via MQTT"
description: "Integrate your Ekaza EKAT-T304Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-01T13:30:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Ekaza EKAT-T304Z

|     |     |
|-----|-----|
| Model | EKAT-T304Z  |
| Vendor  | [Ekaza](/supported-devices/#v=Ekaza)  |
| Description | Universal smart IR remote control |
| Exposes | learn_ir_code, learned_ir_code, ir_code_to_send |
| Picture | ![Ekaza EKAT-T304Z](https://www.zigbee2mqtt.io/images/devices/EKAT-T304Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Learn ir code (binary)
Turn on to learn new IR code.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"learn_ir_code": NEW_VALUE}`.
If value equals `ON` learn ir code is ON, if `OFF` OFF.

### Learned ir code (text)
The IR code learned by device.
Value can be found in the published state on the `learned_ir_code` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Ir code to send (text)
The IR code to send by device.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ir_code_to_send": NEW_VALUE}`.

