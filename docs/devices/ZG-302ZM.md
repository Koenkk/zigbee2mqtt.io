---
title: "HOBEIAN ZG-302ZM control via MQTT"
description: "Integrate your Aqara DJT11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-24T19:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HOBEIAN ZG-302ZM

|     |     |
|-----|-----|
| Model | ZG-302ZM  |
| Vendor  | [HOBEIAN](/supported-devices/#v=HOBEIAN)  |
| Description | Motion sensing switch |
| Exposes | motion_state, switch1, switch2,switch3, sensitivity, linkquality |
| Picture | ![ZG-302ZM](https://www.zigbee2mqtt.io/images/devices/ZG-302ZM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
The power must be disconnected during installation
### Pairing
Press the any button for about 10 seconds. The LED lights flash.
### motion_state (enum)
Sensing whether someone is moving or not
### auto_on (enum)
Turn on the light when sensing someone moving
### auto_off (enum)
Turn off the lights when no one is detected
### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

