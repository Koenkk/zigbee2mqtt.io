---
title: "Aqara ZNMS11LM control via MQTT"
description: "Integrate your Aqara ZNMS11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-02-26T17:45:15Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara ZNMS11LM

|     |     |
|-----|-----|
| Model | ZNMS11LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Smart door lock |
| Exposes | state, reverse, action, linkquality |
| Picture | ![Aqara ZNMS11LM](https://www.zigbee2mqtt.io/images/devices/ZNMS11LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### State (binary)
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `UNLOCK` state is ON, if `LOCK` OFF.

### Reverse (binary)
Value can be found in the published state on the `reverse` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `UNLOCK` reverse is ON, if `LOCK` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `finger_not_match`, `password_not_match`, `reverse_lock`, `reverse_lock_cancel`, `locked`, `lock_opened`, `finger_add`, `finger_delete`, `password_add`, `password_delete`, `lock_opened_inside`, `lock_opened_outside`, `ring_bell`, `change_language_to`, `finger_open`, `password_open`, `door_closed`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

