---
title: "Lincukoo SZLMR10 control via MQTT"
description: "Integrate your Lincukoo SZLMR10 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-07-01T17:54:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lincukoo SZLMR10

|     |     |
|-----|-----|
| Model | SZLMR10  |
| Vendor  | [Lincukoo](/supported-devices/#v=Lincukoo)  |
| Description | Human Motion & Presence Sensor |
| Exposes | presence, illuminance, detection_distance, radar_sensitivity, fading_time, radar_switch, indicator, work_mode |
| Picture | ![Lincukoo SZLMR10](https://www.zigbee2mqtt.io/images/devices/SZLMR10.png) |


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
Maximum range.
Value can be found in the published state on the `detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_distance": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `6`.
The unit of this value is `m`.

### Radar sensitivity (numeric)
Sensitivity of the radar.
Value can be found in the published state on the `radar_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `9`.

### Fading time (numeric)
Fading time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `30` and the maximum value is `60`.
The unit of this value is `s`.

### Radar switch (binary)
Radar switch.
Value can be found in the published state on the `radar_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_switch": NEW_VALUE}`.
If value equals `ON` radar switch is ON, if `OFF` OFF.

### Indicator (binary)
LED indicator.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
If value equals `ON` indicator is ON, if `OFF` OFF.

### Work mode (enum)
work mode of device.
Value can be found in the published state on the `work_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"work_mode": NEW_VALUE}`.
The possible values are: `pir_mode`, `radar_mode`, `combine_mode`.

