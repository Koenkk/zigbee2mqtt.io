---
title: "easyiot ZB-RS485 control via MQTT"
description: "Integrate your easyiot ZB-RS485 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-11-30T20:27:20
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# easyiot ZB-RS485

|     |     |
|-----|-----|
| Model | ZB-RS485  |
| Vendor  | [easyiot](/supported-devices/#v=easyiot)  |
| Description | Zigbee to RS485 controller |
| Exposes | last_received_command, send_command |
| Picture | ![easyiot ZB-RS485](https://www.zigbee2mqtt.io/images/devices/ZB-RS485.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Last received command (text)
Received data.
Value can be found in the published state on the `last_received_command` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Send command (text)
Send data.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"send_command": NEW_VALUE}`.

