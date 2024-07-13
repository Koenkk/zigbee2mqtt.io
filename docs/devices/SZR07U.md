---
title: "Tuya SZR07U control via MQTT"
description: "Integrate your Tuya SZR07U via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-12-26T18:38:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya SZR07U

|     |     |
|-----|-----|
| Model | SZR07U  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 24GHz millimeter wave radar |
| Exposes | presence, detection_range, radar_sensitivity, target_distance, indicator, fading_time, linkquality |
| Picture | ![Tuya SZR07U](https://www.zigbee2mqtt.io/images/devices/SZR07U.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Detection range (numeric)
Maximum range.
Value can be found in the published state on the `detection_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_range": NEW_VALUE}`.
The minimal value is `1.5` and the maximum value is `6`.
The unit of this value is `m`.

### Radar sensitivity (numeric)
Sensitivity of the radar.
Value can be found in the published state on the `radar_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_sensitivity": NEW_VALUE}`.
The minimal value is `68` and the maximum value is `90`.

### Target distance (numeric)
Distance of detected target.
Value can be found in the published state on the `target_distance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `cm`.

### Indicator (binary)
LED indicator.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
If value equals `ON` indicator is ON, if `OFF` OFF.

### Fading time (numeric)
Fading time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `1799`.
The unit of this value is `s`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

