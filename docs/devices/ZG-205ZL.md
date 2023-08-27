---
title: "TuYa ZG-205ZL control via MQTT"
description: "Integrate your TuYa ZG-205ZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-19T9:25:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa ZG-205ZL

|     |     |
|-----|-----|
| Model | ZG-205ZL  |
| Vendor  | [TuYa](/supported-devices/#v=TuYa)  |
| Description | 24Ghz human presence sensor |
| Exposes | presence, motion_state, illuminance_lux, fading_time, large_motion_detection_distance, large_motion_detection_sensitivity, small_motion_detection_distance, small_motion_detection_sensitivity, static_detection_distance, static_detection_sensitivity, mode, alarm_volume, alarm_time, light_mode, linkquality |
| Picture | ![TuYa ZG-205ZL](https://www.zigbee2mqtt.io/images/devices/ZG-205ZL.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To start pairing, press the button (pinhole on the side of the device) using a
pin/paperclip for approx. 5 seconds. The led will turn on, then start blinking while the
pairing process is in progress.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Motion_state (enum)
Motion state.
Value can be found in the published state on the `motion_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `large`, `small`, `static`.

### Illuminance_lux (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance_lux` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Fading_time (numeric)
Presence keep time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `s`.

### Large_motion_detection_distance (numeric)
Large motion detection distance.
Value can be found in the published state on the `large_motion_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"large_motion_detection_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `m`.

### Large_motion_detection_sensitivity (numeric)
Large motion detection sensitivity.
Value can be found in the published state on the `large_motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"large_motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `x`.

### Small_motion_detection_distance (numeric)
Small motion detection distance.
Value can be found in the published state on the `small_motion_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"small_motion_detection_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `6`.
The unit of this value is `m`.

### Small_motion_detection_sensitivity (numeric)
Small motion detection sensitivity.
Value can be found in the published state on the `small_motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"small_motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `x`.

### Static_detection_distance (numeric)
Static detection distance.
Value can be found in the published state on the `static_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `6`.
The unit of this value is `m`.

### Static_detection_sensitivity (numeric)
Static detection sensitivity.
Value can be found in the published state on the `static_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `x`.

### Mode (enum)
Working mode.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `off`, `arm`, `alarm`, `doorbell`.

### Alarm_volume (enum)
Alarm volume.
Value can be found in the published state on the `alarm_volume` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_volume": NEW_VALUE}`.
The possible values are: `mute`, `low`, `medium`, `high`.

### Alarm_time (numeric)
Alarm time.
Value can be found in the published state on the `alarm_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_time": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `60`.
The unit of this value is `m`.

### Light_mode (binary)
LED indicator mode.
Value can be found in the published state on the `light_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode": NEW_VALUE}`.
If value equals `ON` light_mode is ON, if `OFF` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

