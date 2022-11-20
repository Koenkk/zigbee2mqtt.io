---
title: "Xiaomi ZNMS12LM control via MQTT"
description: "Integrate your Xiaomi ZNMS12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi ZNMS12LM

|     |     |
|-----|-----|
| Model | ZNMS12LM  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Aqara S2 lock |
| Exposes | battery, voltage, battery_low, state, reverse, action, linkquality |
| Picture | ![Xiaomi ZNMS12LM](https://www.zigbee2mqtt.io/images/devices/ZNMS12LM.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->

## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### State (binary)
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `UNLOCK` state is ON, if `LOCK` OFF.

### Reverse (binary)
Value can be found in the published state on the `reverse` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `UNLOCK` reverse is ON, if `LOCK` OFF.

### Action (enum)
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `finger_not_match`, `password_not_match`, `reverse_lock`, `reverse_lock_cancel`, `locked`, `lock_opened`, `finger_add`, `finger_delete`, `password_add`, `password_delete`, `lock_opened_inside`, `lock_opened_outside`, `ring_bell`, `change_language_to`, `finger_open`, `password_open`, `door_closed`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

