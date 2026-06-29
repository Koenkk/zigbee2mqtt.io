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
| Exposes | valve_1, state_1, timer_1, countdown_1, last_duration_1, valve_2, state_2, timer_2, countdown_2, last_duration_2, battery |
| Picture | ![Nova Digital ZVL-DUAL](https://www.zigbee2mqtt.io/images/devices/ZVL-DUAL.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Valve 1 (binary)
State of the valve 1.
Value can be found in the published state on the `valve_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_1": NEW_VALUE}`.
If value equals `ON` valve 1 is ON, if `OFF` OFF.

### State 1 (enum)
State of the valve 1.
Value can be found in the published state on the `state_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `Manual`, `Auto`, `Closed`.

### Timer 1 (numeric)
Timer for the valve 1 operation.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"timer_1": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### Countdown 1 (numeric)
Time remaining for the open valve 1.
Value can be found in the published state on the `countdown_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### Last duration 1 (numeric)
Last open duration for the valve 1.
Value can be found in the published state on the `last_duration_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Valve 2 (binary)
State of the valve 2.
Value can be found in the published state on the `valve_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_2": NEW_VALUE}`.
If value equals `ON` valve 2 is ON, if `OFF` OFF.

### State 2 (enum)
State of the valve 2.
Value can be found in the published state on the `state_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `Manual`, `Auto`, `Closed`.

### Timer 2 (numeric)
Timer for the valve 2 operation.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"timer_2": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### Countdown 2 (numeric)
Time remaining for the open valve 2.
Value can be found in the published state on the `countdown_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### Last duration 2 (numeric)
Last open duration for the valve 2.
Value can be found in the published state on the `last_duration_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

