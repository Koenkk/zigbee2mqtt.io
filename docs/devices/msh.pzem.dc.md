---
title: "MySmartHouse msh.pzem.dc control via MQTT"
description: "Integrate your MySmartHouse msh.pzem.dc via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-06-30T19:08:02
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# MySmartHouse msh.pzem.dc

|     |     |
|-----|-----|
| Model | msh.pzem.dc  |
| Vendor  | [MySmartHouse](/supported-devices/#v=MySmartHouse)  |
| Description | MSH 9-30V, 50-300A DC Power Meter |
| Exposes | val1, val2, val3, val5, l5 |
| Picture | ![MySmartHouse msh.pzem.dc](https://www.zigbee2mqtt.io/images/devices/msh.pzem.dc.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

[MSH 9‐30V, 50-300A DC Power Meter](https://www.facebook.com/my.smart.house.in.ua)
<!-- Notes END: Do not edit below this line -->




## Exposes

### Val1 (numeric, l2 endpoint)
Voltage.
Value can be found in the published state on the `val1_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Val2 (numeric, l2 endpoint)
Current.
Value can be found in the published state on the `val2_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Val3 (numeric, l2 endpoint)
Power.
Value can be found in the published state on the `val3_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Val5 (numeric, l2 endpoint)
Energy.
Value can be found in the published state on the `val5_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Uptime (numeric)
Uptime (seconds).
Value can be found in the published state on the `l5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

