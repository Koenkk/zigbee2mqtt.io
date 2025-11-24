---
title: "VSmart HS-SEDR00ZB-VNM control via MQTT"
description: "Integrate your VSmart HS-SEDR00ZB-VNM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-03T02:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# VSmart HS-SEDR00ZB-VNM

|     |     |
|-----|-----|
| Model | HS-SEDR00ZB-VNM  |
| Vendor  | [VSmart](/supported-devices/#v=VSmart)  |
| Description | Door/window sensor |
| Exposes | contact, battery_low, tamper |
| Picture | ![VSmart HS-SEDR00ZB-VNM](https://www.zigbee2mqtt.io/images/devices/HS-SEDR00ZB-VNM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Put the device in pairing mode by pressing and holding the button on the device for 3 seconds until the LED indicator flashes rapidly.

### Reset
To reset the device, press and hold the button for 10 seconds until the LED indicator flashes 3 times.

### Installation
- Remove the magnetic part from the main unit
- Install the main unit on the door/window frame
- Install the magnetic part on the door/window
- Ensure the distance between the two parts is less than 2cm when closed
<!-- Notes END: Do not edit below this line -->




## Exposes

### Contact (binary)
Indicates whether the device is opened or closed.
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

