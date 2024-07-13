---
title: "QOTO QT-05M control via MQTT"
description: "Integrate your QOTO QT-05M via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-31T11:26:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# QOTO QT-05M

|     |     |
|-----|-----|
| Model | QT-05M  |
| Vendor  | [QOTO](/supported-devices/#v=QOTO)  |
| Description | Solar powered garden watering timer |
| Exposes | water_flow, last_watering_duration, remaining_watering_time, valve_state, valve_state_auto_shutdown, shutdown_timer, battery, linkquality |
| Picture | ![QOTO QT-05M](https://www.zigbee2mqtt.io/images/devices/QT-05M.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Water flow (numeric)
Current water flow in %..
Value can be found in the published state on the `water_flow` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Last watering duration (numeric)
Last watering duration in seconds..
Value can be found in the published state on the `last_watering_duration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `sec`.

### Remaining watering time (numeric)
Remaning watering time (for auto shutdown). Updates every minute, and every 10s in the last minute..
Value can be found in the published state on the `remaining_watering_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `sec`.

### Valve state (numeric)
Set valve to %..
Value can be found in the published state on the `valve_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_state": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Valve state auto shutdown (numeric)
Set valve to % with auto shutdown. Must be set before setting the shutdown timer..
Value can be found in the published state on the `valve_state_auto_shutdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_state_auto_shutdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Shutdown timer (numeric)
Auto shutdown in seconds. Must be set after setting valve state auto shutdown..
Value can be found in the published state on the `shutdown_timer` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"shutdown_timer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `14400`.
The unit of this value is `sec`.

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

