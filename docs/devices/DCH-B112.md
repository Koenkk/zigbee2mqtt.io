---
title: "D-Link DCH-B112 control via MQTT"
description: "Integrate your D-Link DCH-B112 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-01T14:45:55
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# D-Link DCH-B112

|     |     |
|-----|-----|
| Model | DCH-B112  |
| Vendor  | [D-Link](/supported-devices/#v=D-Link)  |
| Description | Wireless smart door window sensor with vibration |
| Exposes | battery_low, contact, vibration, tamper, battery, linkquality |
| Picture | ![D-Link DCH-B112](https://www.zigbee2mqtt.io/images/devices/DCH-B112.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Hold front button for five seconds until red light flashes.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Vibration (binary)
Indicates whether the device detected vibration.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

