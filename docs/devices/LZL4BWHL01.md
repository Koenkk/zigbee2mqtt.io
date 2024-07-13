---
title: "Lutron LZL4BWHL01 control via MQTT"
description: "Integrate your Lutron LZL4BWHL01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lutron LZL4BWHL01

|     |     |
|-----|-----|
| Model | LZL4BWHL01  |
| Vendor  | [Lutron](/supported-devices/#v=Lutron)  |
| Description | Connected bulb remote control |
| Exposes | action, linkquality |
| Picture | ![Lutron LZL4BWHL01](https://www.zigbee2mqtt.io/images/devices/LZL4BWHL01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Factory reset the Lutron Connected Bulb Remote by pressing and holding the remote's top and bottom buttons for approximately 15 seconds. The light on the remote will blink rapidly to indicate that the remote has been reset.

After resetting the remote can be paired to a network by pressing and holding the top button for approximately 2 seconds.

#### Using the Connected Bulb Remote to reset a connected light bulb (Hue, Cree, GE Link)
Connected light bulbs can be reset with the Lutron Connected Bulb Remote by bringing the remote close (~3 inches) to the light bulb and pressing and holding the remote's 2nd and bottom buttons. The light bulb will flash and the remote's LED will turn on. Continue to hold both buttons until the remote's LED turns off.

After resetting the bulb will automatically attempt to join a network.

This method should work for Philips Hue bulbs, IKEA TRADFRI bulbs, GE Link bulbs, Connected Cree bulbs, and EcoSmart SMART bulbs.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `brightness_step_down`, `brightness_step_up`, `brightness_stop`, `brightness_move_to_level`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

