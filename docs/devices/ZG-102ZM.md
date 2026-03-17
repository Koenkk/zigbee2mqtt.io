---
title: "HOBEIAN ZG-102ZM control via MQTT"
description: "Integrate your HOBEIAN ZG-102ZM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T08:16:21
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HOBEIAN ZG-102ZM

|     |     |
|-----|-----|
| Model | ZG-102ZM  |
| Vendor  | [HOBEIAN](/supported-devices/#v=HOBEIAN)  |
| Description | Vibration sensor |
| Exposes | vibration, contact, battery, sensitivity |
| Picture | ![HOBEIAN ZG-102ZM](https://www.zigbee2mqtt.io/images/devices/ZG-102ZM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Vibration (binary)
Indicates whether the device detected vibration.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Sensitivity (numeric)
The larger the value, the more sensitive it is (refresh and update only while active).
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `50`.
The unit of this value is `x`.

