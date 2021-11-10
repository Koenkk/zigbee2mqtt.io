---
title: "Xiaomi RTCGQ13LM control via MQTT"
description: "Integrate your Xiaomi RTCGQ13LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2021-02-28T13:58:01Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi RTCGQ13LM

|     |     |
|-----|-----|
| Model | RTCGQ13LM  |
| Vendor  | Xiaomi  |
| Description | Aqara high precision motion sensor |
| Exposes | occupancy, motion_sensitivity, occupancy_timeout, battery, linkquality |
| Picture | ![Xiaomi RTCGQ13LM](https://www.zigbee2mqtt.io/images/devices/RTCGQ13LM.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Motion_sensitivity (enum)
Value can be found in the published state on the `motion_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Occupancy_timeout (numeric)
Time in seconds till occupancy goes to false.
Value can be found in the published state on the `occupancy_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `s`.

### Battery (numeric)
Remaining battery in %.
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

