---
title: "SONOFF ZBDongle-E control via MQTT"
description: "Integrate your SONOFF ZBDongle-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-30T20:52:51
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF ZBDongle-E

|     |     |
|-----|-----|
| Model | ZBDongle-E  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Sonoff Zigbee 3.0 USB Dongle Plus (EFR32MG21) with router firmware |
| Exposes | light_indicator_level, linkquality |
| Picture | ![SONOFF ZBDongle-E](https://www.zigbee2mqtt.io/images/devices/ZBDongle-E.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### How to Create a SONOFF ZBDongle-E Router
You can create a powerful ZigBee router from an ordinary Sonoff Zigbee 3.0 USB Dongle Plus (Model "ZBDongle-E" with EFR32MG21 chip) by flashing a router firmware onto the device. You can find the official guide for flashing the device here: [SONOFF Zigbee 3.0 USB dongle plus firmware flashing](https://sonoff.tech/wp-content/uploads/2022/11/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf). The guide also contains the link to the official [SONOFF Router Firmware for the ZBDongle-E](https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/Router).
### Hints
The guide from SONOFF is not very detailed. Here are some additional hints:
* First, you have to disassemble the device and pull the logic board out of its housing. You need a **J00 Phillips screwdriver** for this.
  <img src="https://github.com/TomTonic/zigbee2mqtt.io/blob/master/docs/devices/dongle-e-screws.jpg" width="130" height="129"/>
  <img src="https://github.com/TomTonic/zigbee2mqtt.io/blob/master/docs/devices/dongle-e-board-in-housing.jpg" width="130" height="117"/>
* Second, you need a **software supporting the [XMODEM file transfer protocol](https://en.wikipedia.org/wiki/XMODEM)** for sending the firmware image to the device.
* Third, you must operate on the naked logic board while it is plugged in. This is a lot easier if you use a **USB extension cable**.
* Forth, to enter the Bootloader Mode, you have to
  * Plug the device in
  * Connect to the device with the serial software (for serial connection parameters, see guide)
  * Press and hold the "BOOT" button (upper button in the lower right corner next to the USB plug in the photo below)
  * and then press the "RST." button (lower button in the lower right corner next to the USB plug in the photo below) to restart the device 
  <img src="https://github.com/TomTonic/zigbee2mqtt.io/blob/master/docs/devices/dongle-e-naked.jpg" width="648" height="242"/>
* Then follow the steps in the guide to load and install the firmware.

<!-- Notes END: Do not edit below this line -->

## Exposes

### Light_indicator_level (numeric)
Brightness of the indicator light.
Value can be found in the published state on the `light_indicator_level` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

