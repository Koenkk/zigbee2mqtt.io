---
title: "Tuya TS0601_water_sensor control via MQTT"
description: "Integrate your Tuya TS0601_water_sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-01T18:11:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_water_sensor

|     |     |
|-----|-----|
| Model | TS0601_water_sensor  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Water leak sensor |
| Exposes | water_leak, linkquality |
| Picture | ![Tuya TS0601_water_sensor](https://www.zigbee2mqtt.io/images/devices/TS0601_water_sensor.png) |
| White-label | Neo NAS-WS02B0 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Water leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water leak is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

