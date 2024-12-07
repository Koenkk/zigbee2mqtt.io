---
title: "Tuya TS0207_repeater control via MQTT"
description: "Integrate your Tuya TS0207_repeater via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-09-30T20:52:56Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0207_repeater

|     |     |
|-----|-----|
| Model | TS0207_repeater  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Repeater |
| Exposes | linkquality |
| Picture | ![Tuya TS0207_repeater](https://www.zigbee2mqtt.io/images/devices/TS0207_repeater.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Warning
It is [reported](https://github.com/zigpy/zigpy/discussions/736#discussioncomment-730883) that this device does not relay messages of non TuYa devices, **this can break your network!**

### Pairing

The range extender is in pairing mode straight out of the box - allow new devices and the device will join the network. To re-pair the device, unplug and re-plug the device three times, the LED light will blink constantly when ready for pairing.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

