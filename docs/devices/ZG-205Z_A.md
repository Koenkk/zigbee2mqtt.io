---
title: "Tuya ZG-205Z/A control via MQTT"
description: "Integrate your Tuya ZG-205Z/A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-26T06:45:18
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZG-205Z/A

|     |     |
|-----|-----|
| Model | ZG-205Z/A  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 5.8Ghz/24Ghz Human presence sensor |
| Exposes | presence, illuminance, large_motion_detection_sensitivity, large_motion_detection_distance, motion_state, fading_time, medium_motion_detection_distance, medium_motion_detection_sensitivity, indicator, small_detection_distance, small_detection_sensitivity, linkquality |
| Picture | ![Tuya ZG-205Z/A](https://www.zigbee2mqtt.io/images/devices/ZG-205Z-A.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To start pairing, press the button (pinhole on the side of the device) using a
pin/paperclip for approx. 5 seconds. The led will turn on, then start blinking while the
pairing process is in progress.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Illuminance (numeric)
Raw measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Large motion detection sensitivity (numeric)
Motion detection sensitivity.
Value can be found in the published state on the `large_motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"large_motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `x`.

### Large motion detection distance (numeric)
Motion detection distance.
Value can be found in the published state on the `large_motion_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"large_motion_detection_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `m`.

### Motion state (enum)
State of the motion.
Value can be found in the published state on the `motion_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `small`, `medium`, `large`.

### Fading time (numeric)
For how much time presence should stay true after detecting it.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `28800`.
The unit of this value is `s`.

### Medium motion detection distance (numeric)
Medium motion detection distance.
Value can be found in the published state on the `medium_motion_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"medium_motion_detection_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `6`.
The unit of this value is `m`.

### Medium motion detection sensitivity (numeric)
Medium motion detection sensitivity.
Value can be found in the published state on the `medium_motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"medium_motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `x`.

### Indicator (binary)
LED Indicator.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
If value equals `ON` indicator is ON, if `OFF` OFF.

### Small detection distance (numeric)
Small detection distance.
Value can be found in the published state on the `small_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"small_detection_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `6`.
The unit of this value is `m`.

### Small detection sensitivity (numeric)
Small detection sensitivity.
Value can be found in the published state on the `small_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"small_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `x`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

