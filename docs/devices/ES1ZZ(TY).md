---
title: "Linptech ES1ZZ(TY) control via MQTT"
description: "Integrate your Linptech ES1ZZ(TY) via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-01T18:54:40
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Linptech ES1ZZ(TY)

|     |     |
|-----|-----|
| Model | ES1ZZ(TY)  |
| Vendor  | [Linptech](/supported-devices/#v=Linptech)  |
| Description | mmWave Presence sensor |
| Exposes | occupancy, illuminance, target_distance, motion_detection_distance, presence_keep_time, motion_detection_sensitivity, static_detection_sensitivity, fading_time, led_indicator, linkquality |
| Picture | ![Linptech ES1ZZ(TY)](https://www.zigbee2mqtt.io/images/devices/ES1ZZ(TY).png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Occupancy (binary)
Presence state.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Illuminance (numeric)
Raw measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Target distance (numeric)
Distance to target.
Value can be found in the published state on the `target_distance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `cm`.

### Motion detection distance (numeric)
Motion detection distance.
Value can be found in the published state on the `motion_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `cm`.

### Presence keep time (numeric)
Presence keep time.
Value can be found in the published state on the `presence_keep_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### Motion detection sensitivity (numeric)
Motion detection sensitivity.
Value can be found in the published state on the `motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5`.

### Static detection sensitivity (numeric)
Static detection sensitivity.
Value can be found in the published state on the `static_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5`.

### Fading time (numeric)
Time after which the device will check again for presence.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.
The unit of this value is `s`.

### Led indicator (binary)
LED Presence Indicator.
Value can be found in the published state on the `led_indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_indicator": NEW_VALUE}`.
If value equals `true` led indicator is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

