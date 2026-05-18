---
title: "MultIR MIR-SM100-E control via MQTT"
description: "Integrate your MultIR MIR-SM100-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:39
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# MultIR MIR-SM100-E

|     |     |
|-----|-----|
| Model | MIR-SM100-E  |
| Vendor  | [MultIR](/supported-devices/#v=MultIR)  |
| Description | Smoke sensor |
| Exposes | silence, battery, alarm_1, alarm_2, tamper, battery_low |
| Picture | ![MultIR MIR-SM100-E](https://www.zigbee2mqtt.io/images/devices/MIR-SM100-E.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Silence (enum)
After enabling mute, it will return to detection state after 90 seconds..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"silence": NEW_VALUE}`.
The possible values are: `ON`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Alarm 1 (binary)
Indicates whether IAS Zone alarm 1 is active.
Value can be found in the published state on the `alarm_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm 1 is ON, if `false` OFF.

### Alarm 2 (binary)
Indicates whether IAS Zone alarm 2 is active.
Value can be found in the published state on the `alarm_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm 2 is ON, if `false` OFF.

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

