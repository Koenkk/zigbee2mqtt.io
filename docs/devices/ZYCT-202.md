---
title: "Trust ZYCT-202 control via MQTT"
description: "Integrate your Trust ZYCT-202 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section till next h1 (#) or h2 heading (##). -->
<!-- Do NOT use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Trust ZYCT-202

|     |     |
|-----|-----|
| Model | ZYCT-202  |
| Vendor  | Trust  |
| Description | Remote control |
| Exposes | action, linkquality |
| Picture | ![Trust ZYCT-202](https://psi-4ward.github.io/zigbee2mqtt.io/images/devices/ZYCT-202.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Binding
This device does not support binding.


### Pairing
Factory reset the remote by holding the 0 (off) button for +-20 seconds.
To establish a connection keep the remote within 2 meters from the hub.
Press and hold the smart group button (button with two bulbs) and wait until the lights, below the channels, flash.

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to `false` to disable the legacy integration (highly recommended!) (default: true)

<!-- Notes END: Do not edit below this line -->


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `stop`, `brightness_stop`, `brightness_move_up`, `brightness_move_down`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

