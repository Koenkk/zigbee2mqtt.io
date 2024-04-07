---
title: "Hive SLT3B control via MQTT"
description: "Integrate your Hive SLT3B via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-11-01T12:47:02Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive SLT3B

|     |     |
|-----|-----|
| Model | SLT3B  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Heating thermostat remote control |
| Exposes | battery, linkquality |
| Picture | ![Hive SLT3B](https://www.zigbee2mqtt.io/images/devices/SLT3B.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
To pair the thermostat controller to both Zigbee2MQTT and the thermostat, a factory reset will need to be performed. To begin a factory reset, press and hold both the menu and back buttons together. Allow the countdown to finish before releasing to factory reset the device. After the device has reset and a language has been selected, Zigbee2MQTT should find the device. The device should be able to control the boiler whilst still reporting to Zigbee2MQTT.
<!-- Notes END: Do not edit below this line -->




## Exposes

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

