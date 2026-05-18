---
title: "Tuya ZD24_Presence_Sensor control via MQTT"
description: "Integrate your Tuya ZD24_Presence_Sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:39
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZD24_Presence_Sensor

|     |     |
|-----|-----|
| Model | ZD24_Presence_Sensor  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | PIR 24GHz human presence sensor |
| Exposes | presence, illuminance, battery, motion_state, distance, init, fading_time, motion_detection_sensitivity, static_detection_sensitivity, motion_detection_mode |
| Picture | ![Tuya ZD24_Presence_Sensor](https://www.zigbee2mqtt.io/images/devices/ZD24_Presence_Sensor.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


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
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Motion state (enum)
Human body motion state.
Value can be found in the published state on the `motion_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `static`, `small`, `large`.

### Distance (numeric)
Target distance.
Value can be found in the published state on the `distance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m`.

### Init (binary)
Initialize.
Value can be found in the published state on the `init` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"init": NEW_VALUE}`.
If value equals `ON` init is ON, if `OFF` OFF.

### Fading time (numeric)
Presence keep time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `3600`.
The unit of this value is `s`.

### Motion detection sensitivity (numeric)
Motion detection sensitivity.
Value can be found in the published state on the `motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.

### Static detection sensitivity (numeric)
Static detection sensitivity.
Value can be found in the published state on the `static_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.

### Motion detection mode (enum)
Motion detection mode.
Value can be found in the published state on the `motion_detection_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_mode": NEW_VALUE}`.
The possible values are: `pir_and_radar`, `only_radar`, `pir_or_radar`.

