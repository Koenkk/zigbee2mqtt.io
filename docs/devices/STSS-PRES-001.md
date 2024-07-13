---
title: "SmartThings STSS-PRES-001 control via MQTT"
description: "Integrate your SmartThings STSS-PRES-001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-09-01T19:56:51Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SmartThings STSS-PRES-001

|     |     |
|-----|-----|
| Model | STSS-PRES-001  |
| Vendor  | [SmartThings](/supported-devices/#v=SmartThings)  |
| Description | Presence sensor |
| Exposes | battery, presence, linkquality |
| Picture | ![SmartThings STSS-PRES-001](https://www.zigbee2mqtt.io/images/devices/STSS-PRES-001.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `presence_timeout`: Time in seconds after which presence is cleared after detecting it (default 100 seconds). The value must be a number with a minimum value of `0`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

