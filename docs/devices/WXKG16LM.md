---
title: "Aqara WXKG16LM control via MQTT"
description: "Integrate your Aqara WXKG16LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-11-30T20:10:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara WXKG16LM

|     |     |
|-----|-----|
| Model | WXKG16LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Wireless remote switch E1 (single rocker) |
| Exposes | battery, voltage, click_mode, action |
| Picture | ![Aqara WXKG16LM](https://www.zigbee2mqtt.io/images/devices/WXKG16LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Adapter firmware
This device likely does not work with coordinator firmware older than 2021.
<!-- Notes END: Do not edit below this line -->




## Exposes

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

### Click mode (enum)
Click mode, fast: only supports single click which will be send immediately after clicking.multi: supports more events like double and hold.
Value can be found in the published state on the `click_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"click_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"click_mode": "VALUE"}`.
The possible values are: `fast`, `multi`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `hold`.

