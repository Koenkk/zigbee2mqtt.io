---
title: "EZVIZ CS-T2C control via MQTT"
description: "Integrate your EZVIZ CS-T2C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-01T13:27:46
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EZVIZ CS-T2C

|     |     |
|-----|-----|
| Model | CS-T2C  |
| Vendor  | [EZVIZ](/supported-devices/#v=EZVIZ)  |
| Description | Open/close sensor |
| Exposes | battery, contact_alarm_1, contact_alarm_2, tamper, battery_low |
| Picture | ![EZVIZ CS-T2C](https://www.zigbee2mqtt.io/images/devices/CS-T2C.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Contact alarm 1 (binary)
Indicates whether the device is opened or closed (alarm_1).
Value can be found in the published state on the `contact_alarm_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` contact alarm 1 is ON, if `false` OFF.

### Contact alarm 2 (binary)
Indicates whether the device is opened or closed (alarm_2).
Value can be found in the published state on the `contact_alarm_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` contact alarm 2 is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

