---
title: "Haozee HZ-WT02 control via MQTT"
description: "Integrate your Haozee HZ-WT02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-04T18:43:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Haozee

|     |     |
|-----|-----|
| Model | HZ-WT02  |
| Vendor  | [tuya](/supported-devices/#v=tuya)  |
| Description | Water valve |
| Exposes | battery, state, mode, cycle_irrigation_num_times, irrigation_start_time, irrigation_end_time, last_irrigation_duration, water_consumed, irrigation_target, cycle_irrigation_interval |
| Picture | ![Tuya HZ-WT02](https://www.zigbee2mqtt.io/images/devices/HZ-WT02.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### State (binary)
State.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": NEW_VALUE}`.
If value equals `ON` state is ON, if `OFF` OFF.


### Water countdown (numeric)
Watering time.
Value can be found in the published state on the `water_countdown` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `L`.

