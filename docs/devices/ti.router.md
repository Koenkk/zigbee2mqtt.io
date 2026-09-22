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
| Exposes | transmit_power |
| Picture | ![Custom devices (DiY) ti.router](https://www.zigbee2mqtt.io/images/devices/ti.router.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Firmware

This is a Texas Instruments CC1352P, CC1352P7, CC2652P, CC2652R, CC2652RB or CC2652R7 board flashed with the Z-Stack 3.x.0 router firmware from the [Z-Stack-firmware releases](https://github.com/Koenkk/Z-Stack-firmware/releases) (`Z-Stack_3.x.0_router_*`). Pick the build for your adapter from the hardware table in the [coordinator firmware README](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0#readme); the router zips are named the same way. The SONOFF ZBDongle-P (CC2652P) for example uses `CC1352P2_CC2652P_launchpad_router_*.zip`. Boards flashed with this firmware all report the same Zigbee model `ti.router`, so Zigbee2MQTT cannot tell them apart. The firmware build is shown as *Firmware ID* on the device's *About* page in Zigbee2MQTT (for example `20250403`). After flashing a newer build the page keeps showing the old value until you press *Interview* on that page and reload.

### Transmit power

`transmit_power` requires router firmware 20221102 or newer; on older firmware reading it fails with `UNSUPPORTED_ATTRIBUTE`. The default is 9 dBm on CC1352P/CC2652P boards such as the ZBDongle-P; the maximum is 20 dBm there and 5 dBm on CC2652R/CC2652RB.

### LED

The router firmware provides no LED status indication. If your board's LED is lit, it is a hardware power indicator, and Zigbee2MQTT cannot switch a router's LED off (`disable_led` only applies to the coordinator). On the SONOFF ZBDongle-P the red LED is such a power indicator; the firmware's LED pin (DIO_7) is not populated on this dongle, per the Z-Stack-firmware hardware table.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Transmit power (numeric)
Transmit power, supported from firmware 20221102. The max for CC1352 is 20 dBm and 5 dBm for CC2652 (any higher value is converted to 5dBm).
Value can be found in the published state on the `transmit_power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"transmit_power": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"transmit_power": NEW_VALUE}`.
The minimal value is `-20` and the maximum value is `20`.
The unit of this value is `dBm`.

