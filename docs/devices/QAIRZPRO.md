---
title: "QA QAIRZPRO control via MQTT"
description: "Integrate your QA QAIRZPRO via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-06-30T19:12:33
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# QA QAIRZPRO

|     |     |
|-----|-----|
| Model | QAIRZPRO  |
| Vendor  | [QA](/supported-devices/#v=QA)  |
| Description | Infrared hub pro |
| Exposes | learn_ir_code, learned_ir_code, ir_code_to_send, linkquality |
| Picture | ![QA QAIRZPRO](https://www.zigbee2mqtt.io/images/devices/QAIRZPRO.png) |


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

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

