---
title: "Hive SLT3C control via MQTT"
description: "Integrate your Hive SLT3C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-12-10T12:47:02Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Hive SLT3C

|     |     |
|-----|-----|
| Model | SLT3C  |
| Vendor  | [Hive](/supported-devices/#v=Hive)  |
| Description | Heating thermostat remote control |
| Exposes | battery, linkquality |
| Picture | ![Hive SLT3C](https://www.zigbee2mqtt.io/images/devices/SLT3C.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
1. Remove the thermostat (SLT) from the wall and remove a battery to turn it off.
2. Turn boiler off at the mains in order to turn off the hive receiver (SLR).
3. Turn the boiler on and receiver.
4. Hold down the central heating button for 10 seconds on the Hive receiver until light turns pink, then release.
5. Hold down the central heating button again until the light turns amber with double flashing.
6. Pair with Zigbee2mqtt using "Permit Join (all)".
7. The amber double flash may change to a single flash.
8. The receiver will be added to zigbee2mqtt. Rename it to something like "Hive Receiver".
9. Replace the battery in the thermostat and allow to boot.
10. Press and hold the menu and back buttons to factory reset the device. Allow the countdown to finish and release when you see 'welcome' - after selecting - a language, it will enter pairing mode.
11. In Zigbee2Mqtt use the dropdown arrow next to "Permit Join" to select the Hive receiver device you added earlier.
12. Start pairing with the newly labelled "Permit join (Hive Receiver)" button.
13. Wait around 30 seconds
14. The thermostat should now pair to the boiler receiver. The amber light should turn green, and the thermostat will go through the getting started wizard.
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

