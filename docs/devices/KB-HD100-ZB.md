---
title: "Dawon DNS KB-HD100-ZB control via MQTT"
description: "Integrate your Dawon DNS KB-HD100-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-12-27T12:27:11Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Dawon DNS KB-HD100-ZB

|     |     |
|-----|-----|
| Model | KB-HD100-ZB  |
| Vendor  | [Dawon DNS](/supported-devices/#v=Dawon%20DNS)  |
| Description | IOT Card holder |
| Exposes | card, battery_low, linkquality |
| Picture | ![Dawon DNS KB-HD100-ZB](https://www.zigbee2mqtt.io/images/devices/KB-HD100-ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Card (binary)
Indicates if the card is inserted (= true) or not (= false).
Value can be found in the published state on the `card` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"card": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` card is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

