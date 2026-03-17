---
title: "HOBEIAN ZG-101ZS control via MQTT"
description: "Integrate your HOBEIAN ZG-101ZS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-09-30T20:52:56Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HOBEIAN ZG-101ZS

|     |     |
|-----|-----|
| Model | ZG-101ZS  |
| Vendor  | [HOBEIAN](/supported-devices/#v=HOBEIAN)  |
| Description | Star Ring 4 Gang Scene Switch |
| Exposes | battery, action |
| Picture | ![HOBEIAN ZG-101ZS](https://www.zigbee2mqtt.io/images/devices/ZG-101ZS.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
To enter pairing mode hold bottom left button for 10 seconds until all 4 LEDs start flashing. Good batteries are required, see [known issue](https://github.com/Koenkk/zigbee2mqtt/issues/15749).
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `1_single`, `1_double`, `1_hold`, `2_single`, `2_double`, `2_hold`, `3_single`, `3_double`, `3_hold`, `4_single`, `4_double`, `4_hold`.

