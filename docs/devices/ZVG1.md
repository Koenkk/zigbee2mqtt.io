---
title: "RTX ZVG1 control via MQTT"
description: "Integrate your RTX ZVG1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-08-01T20:41:55Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# RTX ZVG1

|     |     |
|-----|-----|
| Model | ZVG1  |
| Vendor  | RTX  |
| Description | Zigbee smart water valve |
| Exposes | switch (state), battery, timer_state, timer, timer_time_left, last_valve_open_duration, water_consumed, linkquality |
| Picture | ![RTX ZVG1](https://www.zigbee2mqtt.io/images/devices/ZVG1.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Press and hold the button on the device for 3 seconds.
After this the device will automatically join.
<!-- Notes END: Do not edit below this line -->



## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Timer_state (enum)
Value can be found in the published state on the `timer_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"timer_state": NEW_VALUE}`.
The possible values are: `disabled`, `active`, `enabled`.

### Timer (numeric)
Auto off after specific time.
Value can be found in the published state on the `timer` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"timer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `240`.
The unit of this value is `min`.

### Timer_time_left (numeric)
Auto off timer time left.
Value can be found in the published state on the `timer_time_left` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### Last_valve_open_duration (numeric)
Time the valve was open when state on.
Value can be found in the published state on the `last_valve_open_duration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### Water_consumed (numeric)
Liters of water consumed.
Value can be found in the published state on the `water_consumed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `l`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

