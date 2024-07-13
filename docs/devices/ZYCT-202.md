---
title: "Trust ZYCT-202 control via MQTT"
description: "Integrate your Trust ZYCT-202 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Trust ZYCT-202

|     |     |
|-----|-----|
| Model | ZYCT-202  |
| Vendor  | [Trust](/supported-devices/#v=Trust)  |
| Description | Remote control |
| Exposes | action, action_group, linkquality |
| Picture | ![Trust ZYCT-202](https://www.zigbee2mqtt.io/images/devices/ZYCT-202.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Binding
This device does not support binding.


### Pairing
Factory reset the remote by holding the 0 (off) button for +-20 seconds.
To establish a connection keep the remote within 2 meters from the hub.
Press and hold the smart group button (button with two bulbs) and wait until the lights, below the channels, flash.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `stop`, `brightness_stop`, `brightness_move_up`, `brightness_move_down`.

### Action group (numeric)
Group where the action was triggered on.
Value can be found in the published state on the `action_group` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

