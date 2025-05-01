---
title: "Nova Digital ZVL-DUAL control via MQTT"
description: "Integrate your Nova Digital ZVL-DUAL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:59:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nova Digital ZVL-DUAL

|     |     |
|-----|-----|
| Model | ZVL-DUAL  |
| Vendor  | [Nova Digital](/supported-devices/#v=Nova%20Digital)  |
| Description | Water Valve with 2 zones |
| Exposes | valve_1, countdown_1, valve_2, countdown_2, battery |
| Picture | ![Nova Digital ZVL-DUAL](https://www.zigbee2mqtt.io/images/devices/ZVL-DUAL.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Valve 1 (binary)
Switch state.
Value can be found in the published state on the `valve_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_1": NEW_VALUE}`.
If value equals `ON` valve 1 is ON, if `OFF` OFF.

### Countdown 1 (numeric)
Countdown timer for valve operation.
Value can be found in the published state on the `countdown_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_1": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### Valve 2 (binary)
Switch state.
Value can be found in the published state on the `valve_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_2": NEW_VALUE}`.
If value equals `ON` valve 2 is ON, if `OFF` OFF.

### Countdown 2 (numeric)
Countdown timer for valve operation.
Value can be found in the published state on the `countdown_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_2": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

