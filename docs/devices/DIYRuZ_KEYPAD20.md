---
title: "DIYRuZ DIYRuZ_KEYPAD20 control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_KEYPAD20 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# DIYRuZ DIYRuZ_KEYPAD20

|     |     |
|-----|-----|
| Model | DIYRuZ_KEYPAD20  |
| Vendor  | [DIYRuZ](/supported-devices/#v=DIYRuZ)  |
| Description | DiY 20 button keypad |
| Exposes | battery, linkquality |
| Picture | ![DIYRuZ DIYRuZ_KEYPAD20](https://www.zigbee2mqtt.io/images/devices/DIYRuZ_KEYPAD20.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[DiY 20 button keypad](http://modkam.ru/?p=1114)
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

