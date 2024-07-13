---
title: "Tuya ZG-204ZM control via MQTT"
description: "Integrate your Tuya ZG-204ZM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-03-31T18:43:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZG-204ZM

|     |     |
|-----|-----|
| Model | ZG-204ZM  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | PIR 24Ghz human presence sensor |
| Exposes | presence, motion_state, illuminance_lux, battery, fading_time, static_detection_distance, static_detection_sensitivity, indicator, motion_detection_mode, motion_detection_sensitivity, linkquality |
| Picture | ![Tuya ZG-204ZM](https://www.zigbee2mqtt.io/images/devices/ZG-204ZM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_lux_calibration`: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Motion state (enum)
Motion state.
Value can be found in the published state on the `motion_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `large`, `small`, `static`.

### Illuminance (lux) (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance_lux` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Fading time (numeric)
Presence keep time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `28800`.
The unit of this value is `s`.

### Static detection distance (numeric)
Static detection distance.
Value can be found in the published state on the `static_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `m`.

### Static detection sensitivity (numeric)
Static detection sensitivity.
Value can be found in the published state on the `static_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `x`.

### Indicator (binary)
LED indicator mode.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
If value equals `ON` indicator is ON, if `OFF` OFF.

### Motion detection mode (enum)
Motion detection mode (Firmware version>=0122052017).
Value can be found in the published state on the `motion_detection_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_mode": NEW_VALUE}`.
The possible values are: `only_pir`, `pir_and_radar`, `only_radar`.

### Motion detection sensitivity (numeric)
Motion detection sensitivity (Firmware version>=0122052017).
Value can be found in the published state on the `motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `x`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

