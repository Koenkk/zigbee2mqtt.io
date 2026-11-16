---
title: "Custom devices (DiY) AirWick_nRF52840 control via MQTT"
description: "Integrate your Custom devices (DiY) AirWick_nRF52840 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-10-31T19:31:40.326Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) AirWick_nRF52840

|     |     |
|-----|-----|
| Model | AirWick_nRF52840  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | AirWick smart aerosol dispenser |
| Exposes | spray, mode, schedule_info, battery_v, battery, spray_duration_ms, auto_interval_min, program_mon_enabled, program_mon_start, program_mon_end, program_mon_interval_min, program_tue_enabled, program_tue_start, program_tue_end, program_tue_interval_min, program_wed_enabled, program_wed_start, program_wed_end, program_wed_interval_min, program_thu_enabled, program_thu_start, program_thu_end, program_thu_interval_min, program_fri_enabled, program_fri_start, program_fri_end, program_fri_interval_min, program_sat_enabled, program_sat_start, program_sat_end, program_sat_interval_min, program_sun_enabled, program_sun_start, program_sun_end, program_sun_interval_min, timezone_hours, spray_count, reset_counter, last_spray_reason, last_spray_time, next_spray_time, time_valid |
| Picture | ![Custom devices (DiY) AirWick_nRF52840](https://www.zigbee2mqtt.io/images/devices/AirWick_nRF52840.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Spray (enum)
One action triggers one spray. This control has no persistent state..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"spray": "VALUE"}`.
The possible values are: `SPRAY`.

### Mode (enum)
Current mode set by the physical selector.
Value can be found in the published state on the `mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"mode": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `OFF`, `AUTO`, `SCHEDULE`, `PROGRAMMABLE`.

### SCHEDULE (text)
Built-in schedule; no editing required..
Value can be found in the published state on the `schedule_info` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Battery voltage (numeric)
Battery voltage.
Value can be found in the published state on the `battery_v` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery_v": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Battery level (numeric)
Battery level.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Spray duration (numeric)
Shared by OFF, AUTO, SCHEDULE and PROGRAMMABLE; persists when switching modes..
Value can be found in the published state on the `spray_duration_ms` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"spray_duration_ms": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"spray_duration_ms": VALUE}`.
The minimal value is `300` and the maximum value is `1000`.
The unit of this value is `ms`.

### AUTO: interval (numeric)
Spray interval in AUTO mode.
Value can be found in the published state on the `auto_interval_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"auto_interval_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_interval_min": VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### PROGRAM — Monday: enabled (binary)
Enable this weekday program.
Value can be found in the published state on the `program_mon_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_mon_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_mon_enabled": "VALUE"}`.
If value equals `ON` pROGRAM — Monday: enabled is ON, if `OFF` OFF.

### PROGRAM — Monday: start (text)
HH:MM.
Value can be found in the published state on the `program_mon_start` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_mon_start": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_mon_start": "VALUE"}`.

### PROGRAM — Monday: end (text)
HH:MM.
Value can be found in the published state on the `program_mon_end` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_mon_end": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_mon_end": "VALUE"}`.

### PROGRAM — Monday: interval (numeric)
Spray interval for this weekday program.
Value can be found in the published state on the `program_mon_interval_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_mon_interval_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_mon_interval_min": VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### PROGRAM — Tuesday: enabled (binary)
Enable this weekday program.
Value can be found in the published state on the `program_tue_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_tue_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_tue_enabled": "VALUE"}`.
If value equals `ON` pROGRAM — Tuesday: enabled is ON, if `OFF` OFF.

### PROGRAM — Tuesday: start (text)
HH:MM.
Value can be found in the published state on the `program_tue_start` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_tue_start": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_tue_start": "VALUE"}`.

### PROGRAM — Tuesday: end (text)
HH:MM.
Value can be found in the published state on the `program_tue_end` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_tue_end": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_tue_end": "VALUE"}`.

### PROGRAM — Tuesday: interval (numeric)
Spray interval for this weekday program.
Value can be found in the published state on the `program_tue_interval_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_tue_interval_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_tue_interval_min": VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### PROGRAM — Wednesday: enabled (binary)
Enable this weekday program.
Value can be found in the published state on the `program_wed_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_wed_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_wed_enabled": "VALUE"}`.
If value equals `ON` pROGRAM — Wednesday: enabled is ON, if `OFF` OFF.

### PROGRAM — Wednesday: start (text)
HH:MM.
Value can be found in the published state on the `program_wed_start` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_wed_start": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_wed_start": "VALUE"}`.

### PROGRAM — Wednesday: end (text)
HH:MM.
Value can be found in the published state on the `program_wed_end` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_wed_end": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_wed_end": "VALUE"}`.

### PROGRAM — Wednesday: interval (numeric)
Spray interval for this weekday program.
Value can be found in the published state on the `program_wed_interval_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_wed_interval_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_wed_interval_min": VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### PROGRAM — Thursday: enabled (binary)
Enable this weekday program.
Value can be found in the published state on the `program_thu_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_thu_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_thu_enabled": "VALUE"}`.
If value equals `ON` pROGRAM — Thursday: enabled is ON, if `OFF` OFF.

### PROGRAM — Thursday: start (text)
HH:MM.
Value can be found in the published state on the `program_thu_start` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_thu_start": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_thu_start": "VALUE"}`.

### PROGRAM — Thursday: end (text)
HH:MM.
Value can be found in the published state on the `program_thu_end` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_thu_end": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_thu_end": "VALUE"}`.

### PROGRAM — Thursday: interval (numeric)
Spray interval for this weekday program.
Value can be found in the published state on the `program_thu_interval_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_thu_interval_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_thu_interval_min": VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### PROGRAM — Friday: enabled (binary)
Enable this weekday program.
Value can be found in the published state on the `program_fri_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_fri_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_fri_enabled": "VALUE"}`.
If value equals `ON` pROGRAM — Friday: enabled is ON, if `OFF` OFF.

### PROGRAM — Friday: start (text)
HH:MM.
Value can be found in the published state on the `program_fri_start` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_fri_start": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_fri_start": "VALUE"}`.

### PROGRAM — Friday: end (text)
HH:MM.
Value can be found in the published state on the `program_fri_end` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_fri_end": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_fri_end": "VALUE"}`.

### PROGRAM — Friday: interval (numeric)
Spray interval for this weekday program.
Value can be found in the published state on the `program_fri_interval_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_fri_interval_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_fri_interval_min": VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### PROGRAM — Saturday: enabled (binary)
Enable this weekday program.
Value can be found in the published state on the `program_sat_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_sat_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_sat_enabled": "VALUE"}`.
If value equals `ON` pROGRAM — Saturday: enabled is ON, if `OFF` OFF.

### PROGRAM — Saturday: start (text)
HH:MM.
Value can be found in the published state on the `program_sat_start` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_sat_start": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_sat_start": "VALUE"}`.

### PROGRAM — Saturday: end (text)
HH:MM.
Value can be found in the published state on the `program_sat_end` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_sat_end": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_sat_end": "VALUE"}`.

### PROGRAM — Saturday: interval (numeric)
Spray interval for this weekday program.
Value can be found in the published state on the `program_sat_interval_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_sat_interval_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_sat_interval_min": VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### PROGRAM — Sunday: enabled (binary)
Enable this weekday program.
Value can be found in the published state on the `program_sun_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_sun_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_sun_enabled": "VALUE"}`.
If value equals `ON` pROGRAM — Sunday: enabled is ON, if `OFF` OFF.

### PROGRAM — Sunday: start (text)
HH:MM.
Value can be found in the published state on the `program_sun_start` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_sun_start": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_sun_start": "VALUE"}`.

### PROGRAM — Sunday: end (text)
HH:MM.
Value can be found in the published state on the `program_sun_end` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_sun_end": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_sun_end": "VALUE"}`.

### PROGRAM — Sunday: interval (numeric)
Spray interval for this weekday program.
Value can be found in the published state on the `program_sun_interval_min` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"program_sun_interval_min": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"program_sun_interval_min": VALUE}`.
The minimal value is `1` and the maximum value is `1440`.
The unit of this value is `min`.

### UTC timezone (numeric)
UTC timezone.
Value can be found in the published state on the `timezone_hours` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"timezone_hours": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"timezone_hours": VALUE}`.
The minimal value is `-12` and the maximum value is `14`.
The unit of this value is `h`.

### Spray counter (numeric)
Number of sprays.
Value can be found in the published state on the `spray_count` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"spray_count": ""}`.
It's not possible to write (`/set`) this value.

### Reset counter (enum)
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_counter": "VALUE"}`.
The possible values are: `RESET`.

### Last spray reason (enum)
Reason for the last spray.
Value can be found in the published state on the `last_spray_reason` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"last_spray_reason": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `None`, `Zigbee`, `Button`, `AUTO`, `SCHEDULE`, `PROGRAM`.

### Last spray (text)
Value can be found in the published state on the `last_spray_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"last_spray_time": ""}`.
It's not possible to write (`/set`) this value.

### Next spray (text)
Value can be found in the published state on the `next_spray_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"next_spray_time": ""}`.
It's not possible to write (`/set`) this value.

### Time synchronized (binary)
Value can be found in the published state on the `time_valid` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"time_valid": ""}`.
It's not possible to write (`/set`) this value.
If value equals `ON` time synchronized is ON, if `OFF` OFF.

