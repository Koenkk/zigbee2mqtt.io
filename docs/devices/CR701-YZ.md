---
title: "Oujiabao CR701-YZ control via MQTT"
description: "Integrate your Oujiabao CR701-YZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Oujiabao CR701-YZ

|     |     |
|-----|-----|
| Model | CR701-YZ  |
| Vendor  | [Oujiabao](/supported-devices/#v=Oujiabao)  |
| Description | Gas and carbon monoxide alarm |
| Exposes | gas, carbon_monoxide, tamper, battery_low, linkquality |
| Picture | ![Oujiabao CR701-YZ](https://www.zigbee2mqtt.io/images/devices/CR701-YZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Gas (binary)
Indicates whether the device detected gas.
Value can be found in the published state on the `gas` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` gas is ON, if `false` OFF.

### Carbon monoxide (binary)
Indicates if CO (carbon monoxide) is detected.
Value can be found in the published state on the `carbon_monoxide` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` carbon monoxide is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

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

