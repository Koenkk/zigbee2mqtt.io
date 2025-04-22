---
title: "Quirky POFLW-WH02 control via MQTT"
description: "Integrate your Quirky POFLW-WH02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:30:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Quirky POFLW-WH02

|     |     |
|-----|-----|
| Model | POFLW-WH02  |
| Vendor  | [Quirky](/supported-devices/#v=Quirky)  |
| Description | Smart water leak sensor |
| Exposes | water_leak, battery_low |
| Picture | ![Quirky POFLW-WH02](https://www.zigbee2mqtt.io/images/devices/POFLW-WH02.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

It can be quite finicky to pair this device. The first interview will likely fail. After the first interview fails, take out the batteries and put them back in, then click interview (blue `i` on the device dashboard in z2m). Do this once or twice until the device successfully pairs.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Water leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water leak is ON, if `false` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

