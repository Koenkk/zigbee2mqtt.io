---
title: "easyiot ZB-RS232 control via MQTT"
description: "Integrate your easyiot ZB-RS232 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-06-09T18:58:47
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# easyiot ZB-RS232

|     |     |
|-----|-----|
| Model | ZB-RS232  |
| Vendor  | [easyiot](/supported-devices/#v=easyiot)  |
| Description | Zigbee to RS232 controller |
| Exposes | last_received_command, send_command, rs232_config |
| Picture | ![easyiot ZB-RS232](https://www.zigbee2mqtt.io/images/devices/ZB-RS232.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



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

### Rs232 config (composite)
RS232 serial port configuration.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rs232_config": {"baud_rate": VALUE, "parity": VALUE, "stop_bits": VALUE}}`
- `baud_rate` (enum): Baud rate (bps) allowed values: `1200`, `2400`, `4800`, `9600`, `19200`, `38400`, `57600`, `115200`, `230400`, `460800`, `921600`
- `parity` (enum): Parity (none / even / odd) allowed values: `none`, `even`, `odd`
- `stop_bits` (enum): Stop bits (1 / 1.5 / 2) allowed values: `1`, `1.5`, `2`

