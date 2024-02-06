---
title: "Custom devices (DiY) EFR32MG21.Router control via MQTT"
description: "Integrate your Custom devices (DiY) EFR32MG21.Router via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-10-26T20:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) EFR32MG21.Router

|     |     |
|-----|-----|
| Model | EFR32MG21.Router  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | EFR32MG21 router |
| Exposes | linkquality |
| Picture | ![Custom devices (DiY) EFR32MG21.Router](https://www.zigbee2mqtt.io/images/devices/EFR32MG21.Router.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### LED status

RED LED off = No network
RED LED blink = Connecting to the network
RED LED on = Joined to the network

### Pairing

1) Power on
2) Press BOOT for 5 seconds until the RED LED flashes.
3) Coordinator allows access to the network.
4) If the RED LED is always on, then the router has joined the network successfully.

### Firmware

Firmware can be used with Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E and easyiot Zigbee 3.0 USB dongle.

Link: https://github.com/xsp1989/zigbeeFirmware/tree/master/firmware/Zigbee3.0_Dongle-NoSigned/RouterForDongle
<!-- Notes END: Do not edit below this line -->




## Exposes

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

