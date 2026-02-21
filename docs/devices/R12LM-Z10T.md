---
title: "Lincukoo R12LM-Z10T control via MQTT"
description: "Integrate your Lincukoo R12LM-Z10T via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:10:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lincukoo R12LM-Z10T

|     |     |
|-----|-----|
| Model | R12LM-Z10T  |
| Vendor  | [Lincukoo](/supported-devices/#v=Lincukoo)  |
| Description | Human motion & presence sensor |
| Exposes | presence, illuminance, work_mode, radar_switch, fading_time, detection_distance, radar_sensitivity, battery_state |
| Picture | ![Lincukoo R12LM-Z10T](https://www.zigbee2mqtt.io/images/devices/R12LM-Z10T.png) |


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

### Work mode (enum)
work mode of device.
Value can be found in the published state on the `work_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"work_mode": NEW_VALUE}`.
The possible values are: `radar_mode`, `combine_mode`.

### Radar switch (binary)
Radar switch.
Value can be found in the published state on the `radar_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_switch": NEW_VALUE}`.
If value equals `ON` radar switch is ON, if `OFF` OFF.

### Fading time (numeric)
Fading time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `60`.
The unit of this value is `s`.

### Detection distance (numeric)
Maximum range.
Value can be found in the published state on the `detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_distance": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `9`.
The unit of this value is `m`.

### Radar sensitivity (numeric)
Sensitivity of the radar.
Value can be found in the published state on the `radar_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4`.

### Battery state (enum)
battery state of the sensor.
Value can be found in the published state on the `battery_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `middle`, `high`, `usb`.

