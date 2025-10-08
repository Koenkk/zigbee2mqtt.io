---
title: "Tuya TS0601_water_switch control via MQTT"
description: "Integrate your Tuya TS0601_water_switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-06-01T17:54:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_water_switch

|     |     |
|-----|-----|
| Model | TS0601_water_switch  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Dual water valve |
| Exposes | valve_status, switch (state), countdown, valve_duration, battery |
| Picture | ![Tuya TS0601_water_switch](https://www.zigbee2mqtt.io/images/devices/TS0601_water_switch.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Valve status (enum, l1 endpoint)
Valve 1 status (manual, auto, idle).
Value can be found in the published state on the `valve_status_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `auto`, `idle`.

### Valve status (enum, l2 endpoint)
Valve 2 status (manual, auto, idle).
Value can be found in the published state on the `valve_status_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `manual`, `auto`, `idle`.

### Valve 1 (switch, l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

### Valve 2 (switch, l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

### Countdown (numeric, l1 endpoint)
Valve 1 countdown in minutes.
Value can be found in the published state on the `countdown_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1440`.
The unit of this value is `min`.

### Countdown (numeric, l2 endpoint)
Valve 2 countdown in minutes.
Value can be found in the published state on the `countdown_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1440`.
The unit of this value is `min`.

### Valve duration (numeric, l1 endpoint)
Valve 1 irrigation last duration in seconds.
Value can be found in the published state on the `valve_duration_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Valve duration (numeric, l2 endpoint)
Valve 2 irrigation last duration in seconds.
Value can be found in the published state on the `valve_duration_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

