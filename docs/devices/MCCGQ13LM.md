---
title: "Aqara MCCGQ13LM control via MQTT"
description: "Integrate your Aqara MCCGQ13LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-12-31T16:51:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara MCCGQ13LM

|     |     |
|-----|-----|
| Model | MCCGQ13LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Door and window sensor P1 |
| Exposes | contact, battery, voltage, tamper, detection_distance, linkquality |
| Picture | ![Aqara MCCGQ13LM](https://www.zigbee2mqtt.io/images/devices/MCCGQ13LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Pairing

Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join.
If this doesn't work, after starting the pairing process with the long press, keep short pressing the button approximately once a second until the interview process is finished.

## Battery

Uses a CR123A battery
<!-- Notes END: Do not edit below this line -->




## Exposes

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

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Detection distance (enum)
The sensor will be considered "off" within the set distance. Please press the device button before setting.
Value can be found in the published state on the `detection_distance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"detection_distance": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_distance": NEW_VALUE}`.
The possible values are: `10mm`, `20mm`, `30mm`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

