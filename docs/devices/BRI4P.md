---
title: "Imhotep Creation BRI4P control via MQTT"
description: "Integrate your Imhotep Creation BRI4P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-30T19:41:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Imhotep Creation BRI4P

|     |     |
|-----|-----|
| Model | BRI4P  |
| Vendor  | [Imhotep Creation](/supported-devices/#v=Imhotep%20Creation)  |
| Description | BRI4P Bridge for underfloor heating central and local thermostats |
| Exposes | linkquality |
| Picture | ![Imhotep Creation BRI4P](https://www.zigbee2mqtt.io/images/devices/BRI4P.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

