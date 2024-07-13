---
title: "Neo NAS-PS09B2 control via MQTT"
description: "Integrate your Neo NAS-PS09B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-03-31T19:12:51
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Neo NAS-PS09B2

|     |     |
|-----|-----|
| Model | NAS-PS09B2  |
| Vendor  | [Neo](/supported-devices/#v=Neo)  |
| Description | Human presence sensor |
| Exposes | occupancy, human_motion_state, departure_delay, radar_range, radar_sensitivity, presence_sensitivity, dis_current, linkquality |
| Picture | ![Neo NAS-PS09B2](https://www.zigbee2mqtt.io/images/devices/NAS-PS09B2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Human motion state (enum)
Human Motion State.
Value can be found in the published state on the `human_motion_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `small`, `large`.

### Departure delay (numeric)
Presence Time.
Value can be found in the published state on the `departure_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"departure_delay": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `600`.
The unit of this value is `s`.

### Radar range (numeric)
Motion Range Detection.
Value can be found in the published state on the `radar_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_range": NEW_VALUE}`.
The minimal value is `150` and the maximum value is `600`.
The unit of this value is `cm`.

### Radar sensitivity (numeric)
Motion Detection Sensitivity.
Value can be found in the published state on the `radar_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `7`.

### Presence sensitivity (numeric)
Motionless Detection Sensitivity.
Value can be found in the published state on the `presence_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `7`.

### Current distance (numeric)
Current Distance of Detected Motion.
Value can be found in the published state on the `dis_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `cm`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

