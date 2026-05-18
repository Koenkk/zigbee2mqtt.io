---
title: "Tuya TS0601-PIR-Sensor control via MQTT"
description: "Integrate your Tuya TS0601-PIR-Sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-01T13:30:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601-PIR-Sensor

|     |     |
|-----|-----|
| Model | TS0601-PIR-Sensor  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | PIR 24GHz human presence sensor |
| Exposes | presence, illuminance, detection_distance, fading_time, last_time, static_detection_sensitivity, motion_detection_sensitivity, battery |
| Picture | ![Tuya TS0601-PIR-Sensor](https://www.zigbee2mqtt.io/images/devices/TS0601-PIR-Sensor.png) |


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

### Detection distance (numeric)
Maximum detection distance.
Value can be found in the published state on the `detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_distance": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `6`.
The unit of this value is `m`.

### Fading time (numeric)
Presence keep time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `180`.
The unit of this value is `s`.

### Last time (enum)
Last trigger type.
Value can be found in the published state on the `last_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `pir`, `none`.

### Static detection sensitivity (numeric)
Static detection sensitivity.
Value can be found in the published state on the `static_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.

### Motion detection sensitivity (numeric)
Motion detection sensitivity.
Value can be found in the published state on the `motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

