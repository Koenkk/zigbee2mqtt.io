---
title: "Lidl PSBZS A1 control via MQTT"
description: "Integrate your Lidl PSBZS A1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-07-01T18:17:29Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lidl PSBZS A1

|     |     |
|-----|-----|
| Model | PSBZS A1  |
| Vendor  | [Lidl](/supported-devices/#v=Lidl)  |
| Description | Parkside smart watering timer |
| Exposes | battery, switch (state), timer, time_left, frost_lock, reset_frost_lock, schedule_mode, schedule_periodic, schedule_weekday, schedule_slot_1, schedule_slot_2, schedule_slot_3, schedule_slot_4, schedule_slot_5, schedule_slot_6, linkquality |
| Picture | ![Lidl PSBZS A1](https://www.zigbee2mqtt.io/images/devices/PSBZS-A1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Timer (numeric)
Auto off after specific time for manual watering..
Value can be found in the published state on the `timer` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"timer": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `599`.
The unit of this value is `min`.

### Time left (numeric)
Remaining time until the watering turns off..
Value can be found in the published state on the `time_left` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### Frost lock (binary)
Indicates if the frost guard is currently active. If the temperature drops below 5° C, device activates frost guard and disables irrigation. You need to reset the frost guard to activate irrigation again. Note: There is no way to enable frost guard manually..
Value can be found in the published state on the `frost_lock` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` frost lock is ON, if `OFF` OFF.

### Reset frost lock (enum)
Resets frost lock to make the device workable again..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_frost_lock": NEW_VALUE}`.
The possible values are: `RESET`.

### Schedule mode (enum)
Scheduling mode that is currently in use..
Value can be found in the published state on the `schedule_mode` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `OFF`, `WEEKDAY`, `PERIODIC`.

### Schedule periodic (numeric)
Watering by periodic interval: Irrigate every n days.
Value can be found in the published state on the `schedule_periodic` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_periodic": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `7`.
The unit of this value is `day`.

### Schedule weekday (composite)
Watering by weekday: Irrigate individually for each day..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_weekday": {"monday": VALUE, "tuesday": VALUE, "wednesday": VALUE, "thursday": VALUE, "friday": VALUE, "saturday": VALUE, "sunday": VALUE}}`
- `monday` (binary) allowed values: `ON` or `OFF`
- `tuesday` (binary) allowed values: `ON` or `OFF`
- `wednesday` (binary) allowed values: `ON` or `OFF`
- `thursday` (binary) allowed values: `ON` or `OFF`
- `friday` (binary) allowed values: `ON` or `OFF`
- `saturday` (binary) allowed values: `ON` or `OFF`
- `sunday` (binary) allowed values: `ON` or `OFF`

### Schedule slot 1 (composite)
Watering time slot 1.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_slot_1": {"state": VALUE, "start_hour": VALUE, "start_minute": VALUE, "timer": VALUE, "pause": VALUE, "iterations": VALUE}}`
- `state` (binary): On/off state of the time slot allowed values: `ON` or `OFF`
- `start_hour` (numeric): Starting time (hour) max value is 23, unit is h
- `start_minute` (numeric): Starting time (minute) max value is 59, unit is min
- `timer` (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min
- `pause` (numeric): Pause after each iteration. max value is 599, unit is min
- `iterations` (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9

### Schedule slot 2 (composite)
Watering time slot 2.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_slot_2": {"state": VALUE, "start_hour": VALUE, "start_minute": VALUE, "timer": VALUE, "pause": VALUE, "iterations": VALUE}}`
- `state` (binary): On/off state of the time slot allowed values: `ON` or `OFF`
- `start_hour` (numeric): Starting time (hour) max value is 23, unit is h
- `start_minute` (numeric): Starting time (minute) max value is 59, unit is min
- `timer` (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min
- `pause` (numeric): Pause after each iteration. max value is 599, unit is min
- `iterations` (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9

### Schedule slot 3 (composite)
Watering time slot 3.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_slot_3": {"state": VALUE, "start_hour": VALUE, "start_minute": VALUE, "timer": VALUE, "pause": VALUE, "iterations": VALUE}}`
- `state` (binary): On/off state of the time slot allowed values: `ON` or `OFF`
- `start_hour` (numeric): Starting time (hour) max value is 23, unit is h
- `start_minute` (numeric): Starting time (minute) max value is 59, unit is min
- `timer` (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min
- `pause` (numeric): Pause after each iteration. max value is 599, unit is min
- `iterations` (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9

### Schedule slot 4 (composite)
Watering time slot 4.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_slot_4": {"state": VALUE, "start_hour": VALUE, "start_minute": VALUE, "timer": VALUE, "pause": VALUE, "iterations": VALUE}}`
- `state` (binary): On/off state of the time slot allowed values: `ON` or `OFF`
- `start_hour` (numeric): Starting time (hour) max value is 23, unit is h
- `start_minute` (numeric): Starting time (minute) max value is 59, unit is min
- `timer` (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min
- `pause` (numeric): Pause after each iteration. max value is 599, unit is min
- `iterations` (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9

### Schedule slot 5 (composite)
Watering time slot 5.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_slot_5": {"state": VALUE, "start_hour": VALUE, "start_minute": VALUE, "timer": VALUE, "pause": VALUE, "iterations": VALUE}}`
- `state` (binary): On/off state of the time slot allowed values: `ON` or `OFF`
- `start_hour` (numeric): Starting time (hour) max value is 23, unit is h
- `start_minute` (numeric): Starting time (minute) max value is 59, unit is min
- `timer` (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min
- `pause` (numeric): Pause after each iteration. max value is 599, unit is min
- `iterations` (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9

### Schedule slot 6 (composite)
Watering time slot 6.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_slot_6": {"state": VALUE, "start_hour": VALUE, "start_minute": VALUE, "timer": VALUE, "pause": VALUE, "iterations": VALUE}}`
- `state` (binary): On/off state of the time slot allowed values: `ON` or `OFF`
- `start_hour` (numeric): Starting time (hour) max value is 23, unit is h
- `start_minute` (numeric): Starting time (minute) max value is 59, unit is min
- `timer` (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min
- `pause` (numeric): Pause after each iteration. max value is 599, unit is min
- `iterations` (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

