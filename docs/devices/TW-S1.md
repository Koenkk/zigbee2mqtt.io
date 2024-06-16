---
title: "Konke TW-S1 control via MQTT"
description: "Integrate your Konke TW-S1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-01-31T22:24:43Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Konke TW-S1

|     |     |
|-----|-----|
| Model | TW-S1  |
| Vendor  | [Konke](/supported-devices/#v=Konke)  |
| Description | Photoelectric smoke detector |
| Exposes | smoke, battery_low, linkquality |
| Picture | ![Konke TW-S1](https://www.zigbee2mqtt.io/images/devices/TW-S1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Important
Konke devices only work on Zigbee channel 15, 20 and 25.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

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

