---
title: "Hive SLT2 control via MQTT"
description: "Integrate your Hive SLT2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-05-19T20:48:40Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive SLT2

|     |     |
|-----|-----|
| Model | SLT2  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Heating thermostat remote control |
| Exposes | battery, linkquality |
| Picture | ![Hive SLT2](https://www.zigbee2mqtt.io/images/devices/SLT2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing

To pair the thermostat controller to both Zigbee2MQTT and the thermostat receiver, a factory reset will need to be performed. To begin a factory reset:

1. remove a battery
2. press and hold both the "+" and "-" buttons together
3. reinsert the battery (with the buttons remained pressed)
4. wait until the word "FIND" appears on screen (around 10 seconds)
5. once paired, the word "FIND" disappears and the temperature will be displayed

Zigbee2MQTT should have found the thermostat. If the word "REJOIN" appears on screen, the buttons were released too early and the process must be repeated. The controller should be able to control the boiler whilst still reporting to Zigbee2MQTT.
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

