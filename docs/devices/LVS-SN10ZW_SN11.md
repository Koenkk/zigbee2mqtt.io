---
title: "LivingWise LVS-SN10ZW_SN11 control via MQTT"
description: "Integrate your LivingWise LVS-SN10ZW_SN11 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# LivingWise LVS-SN10ZW_SN11

|     |     |
|-----|-----|
| Model | LVS-SN10ZW_SN11  |
| Vendor  | [LivingWise](/supported-devices/#v=LivingWise)  |
| Description | Occupancy sensor |
| Exposes | battery, occupancy, battery_low, tamper, linkquality |
| Picture | ![LivingWise LVS-SN10ZW_SN11](https://www.zigbee2mqtt.io/images/devices/LVS-SN10ZW_SN11.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `occupancy_timeout`: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of `0`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

