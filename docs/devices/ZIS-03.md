---
title: "Novato ZIS-03 control via MQTT"
description: "Integrate your Novato ZIS-03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-07T17:39:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Novato ZIS-03

|     |     |
|-----|-----|
| Model | ZIS-03  |
| Vendor  | [Novato](/supported-devices/#v=Novato)  |
| Description | 24 GHz radar human presence sensor with relay output |
| Exposes | presence, illuminance, radar, detection_range, sensitivity, detection_area, fading_time, indicator, presence_switch, compensation_coefficient, state_reversal |
| Picture | ![Novato ZIS-03](https://www.zigbee2mqtt.io/images/devices/ZIS-03.png) |


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

### Radar (binary)
Enable/disable radar detection.
Value can be found in the published state on the `radar` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar": NEW_VALUE}`.
If value equals `ON` radar is ON, if `OFF` OFF.

### Detection range (numeric)
Detection range level (1=closest, 7=furthest).
Value can be found in the published state on the `detection_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_range": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `7`.

### Sensitivity (enum)
Radar sensitivity.
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`, `max`.

### Detection area (enum)
Active detection zone.
Value can be found in the published state on the `detection_area` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_area": NEW_VALUE}`.
The possible values are: `all`, `left`, `right`.

### Fading time (numeric)
Delay before reporting absence (s).
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `3600`.
The unit of this value is `s`.

### Indicator (binary)
LED status indicator.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
If value equals `ON` indicator is ON, if `OFF` OFF.

### Presence switch (binary)
Presence relay output (relay variants only).
Value can be found in the published state on the `presence_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_switch": NEW_VALUE}`.
If value equals `ON` presence switch is ON, if `OFF` OFF.

### Compensation coefficient (numeric)
Illuminance compensation multiplier (1x-10x).
Value can be found in the published state on the `compensation_coefficient` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"compensation_coefficient": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.

### State reversal (binary)
Invert the presence output signal.
Value can be found in the published state on the `state_reversal` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_reversal": NEW_VALUE}`.
If value equals `ON` state reversal is ON, if `OFF` OFF.

