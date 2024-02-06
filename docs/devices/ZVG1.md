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
| Vendor  | [RTX](/supported-devices/#v=RTX)  |
| Description | Zigbee smart water valve |
| Exposes | switch (state), battery, weather_delay, timer_state, timer, timer_time_left, last_valve_open_duration, water_consumed, cycle_timer_1, cycle_timer_2, cycle_timer_3, cycle_timer_4, normal_schedule_timer_1, normal_schedule_timer_2, normal_schedule_timer_3, normal_schedule_timer_4, linkquality |
| Picture | ![RTX ZVG1](https://www.zigbee2mqtt.io/images/devices/ZVG1.png) |


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
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Weather delay (enum)
Value can be found in the published state on the `weather_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weather_delay": NEW_VALUE}`.
The possible values are: `disabled`, `24h`, `48h`, `72h`.

### Timer state (enum)
Value can be found in the published state on the `timer_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `disabled`, `active`, `enabled`.

### Timer (numeric)
Auto off after specific time.
Value can be found in the published state on the `timer` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"timer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `60`.
The unit of this value is `min`.

### Timer time left (numeric)
Auto off timer time left.
Value can be found in the published state on the `timer_time_left` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### Last valve open duration (numeric)
Time the valve was open when state on.
Value can be found in the published state on the `last_valve_open_duration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### Water consumed (numeric)
Liters of water consumed.
Value can be found in the published state on the `water_consumed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `L`.

### Cycle timer 1 (text)
Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0).
Value can be found in the published state on the `cycle_timer_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cycle_timer_1": NEW_VALUE}`.

### Cycle timer 2 (text)
Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0).
Value can be found in the published state on the `cycle_timer_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cycle_timer_2": NEW_VALUE}`.

### Cycle timer 3 (text)
Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0).
Value can be found in the published state on the `cycle_timer_3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cycle_timer_3": NEW_VALUE}`.

### Cycle timer 4 (text)
Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0).
Value can be found in the published state on the `cycle_timer_4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cycle_timer_4": NEW_VALUE}`.

### Normal schedule timer 1 (text)
Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0).
Value can be found in the published state on the `normal_schedule_timer_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"normal_schedule_timer_1": NEW_VALUE}`.

### Normal schedule timer 2 (text)
Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0).
Value can be found in the published state on the `normal_schedule_timer_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"normal_schedule_timer_2": NEW_VALUE}`.

### Normal schedule timer 3 (text)
Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0).
Value can be found in the published state on the `normal_schedule_timer_3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"normal_schedule_timer_3": NEW_VALUE}`.

### Normal schedule timer 4 (text)
Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0).
Value can be found in the published state on the `normal_schedule_timer_4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"normal_schedule_timer_4": NEW_VALUE}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

