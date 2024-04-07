---
title: "Custom devices (DiY) ti.router control via MQTT"
description: "Integrate your Custom devices (DiY) ti.router via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-01-31T22:24:43Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) ti.router

|     |     |
|-----|-----|
| Model | ti.router  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | Texas Instruments router |
| Exposes | transmit_power, linkquality |
| Picture | ![Custom devices (DiY) ti.router](https://www.zigbee2mqtt.io/images/devices/ti.router.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Firmware
This is a Texas Instruments CC1352P-2, CC2652RB or CC2652R flashed with the following firmware: https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_3.x.0/bin
<!-- Notes END: Do not edit below this line -->




## Exposes

### Transmit power (numeric)
Transmit power, supported from firmware 20221102. The max for CC1352 is 20 dBm and 5 dBm for CC2652 (any higher value is converted to 5dBm).
Value can be found in the published state on the `transmit_power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"transmit_power": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"transmit_power": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `20`.
The unit of this value is `dBm`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

