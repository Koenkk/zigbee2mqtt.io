---
title: "Profalux MAI-ZTM20C control via MQTT"
description: "Integrate your Profalux MAI-ZTM20C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-01-07T12:36:48
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Profalux MAI-ZTM20C

|     |     |
|-----|-----|
| Model | MAI-ZTM20C  |
| Vendor  | [Profalux](/supported-devices/#v=Profalux)  |
| Description | Cover remote |
| Exposes | battery, voltage |
| Picture | ![Profalux MAI-ZTM20C](https://www.zigbee2mqtt.io/images/devices/MAI-ZTM20C.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing

1. With a paper clip, press one time on the R button on the back of the remote control
2. Press the STOP button
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

