---
title: "LeapMMW MTD085-ZB control via MQTT"
description: "Integrate your LeapMMW MTD085-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-03T20:11:47
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# LeapMMW MTD085-ZB

|     |     |
|-----|-----|
| Model | MTD085-ZB  |
| Vendor  | [LeapMMW](/supported-devices/#v=LeapMMW)  |
| Description | Human presence sensor |
| Exposes | occupancy, illuminance, target_distance, radar_sensitivity, detection_range, shield_range, entry_sensitivity, entry_distance, entry_filter_time, departure_delay, block_time, status_indication, sensor, scene_preset, distance_report_mode, debug_mode, debug_distance, debug_countdown |
| Picture | ![LeapMMW MTD085-ZB](https://www.zigbee2mqtt.io/images/devices/MTD085-ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Target distance (numeric)
Distance to target.
Value can be found in the published state on the `target_distance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m`.

### Radar sensitivity (numeric)
Detection threshold for the strength of object energy.
Value can be found in the published state on the `radar_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_sensitivity": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `100`.
The unit of this value is `%`.

### Detection range (numeric)
Maximum distance detected by the sensor.
Value can be found in the published state on the `detection_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_range": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `8`.
The unit of this value is `m`.

### Shield range (numeric)
Nearest distance detected by the sensor.
Value can be found in the published state on the `shield_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"shield_range": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `8`.
The unit of this value is `m`.

### Entry sensitivity (numeric)
Sensitivity threshold triggered for the first time when the target enters the detection range.
Value can be found in the published state on the `entry_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"entry_sensitivity": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `100`.
The unit of this value is `%`.

### Entry distance (numeric)
Detection distance when unoccupied.
Value can be found in the published state on the `entry_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"entry_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `8`.
The unit of this value is `m`.

### Entry filter time (numeric)
Sensitivity threshold triggered for the first time when the target enters the detection range .
Value can be found in the published state on the `entry_filter_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"entry_filter_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `0.5`.
The unit of this value is `s`.

### Departure delay (numeric)
Confirmation time after the target disappears.
Value can be found in the published state on the `departure_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"departure_delay": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `7200`.
The unit of this value is `s`.

### Block time (numeric)
Time for the target to be detected again after switching from manned(occupy) to unmanned(unoccupy) mode.
Value can be found in the published state on the `block_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"block_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `s`.

### Status indication (enum)
Indicator light will turn on when human presence is detected.
Value can be found in the published state on the `status_indication` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"status_indication": NEW_VALUE}`.
The possible values are: `OFF`, `ON`.

### Sensor (enum)
The radar sensor can be set in three states: on, occupied and unoccupied. For example, if set to occupied, it will continue to maintain presence regardless of whether someone is present or not. If set to unoccupied, the unoccupied state will be maintained permanently..
Value can be found in the published state on the `sensor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `on`, `occupied`, `unoccupied`.

### Scene preset (enum)
Presets.
Value can be found in the published state on the `scene_preset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_preset": NEW_VALUE}`.
The possible values are: `Custom`, `Toilet`, `Kitchen`, `Hallway`, `Bedroom`, `Livingroom`, `Meetingroom`, `Factory default`.

### Distance report mode (enum)
Indicator light will turn on when human presence is detected.
Value can be found in the published state on the `distance_report_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"distance_report_mode": NEW_VALUE}`.
The possible values are: `Normal`, `Occupancy detection`.

### Debug mode (enum)
In debug mode, radar will report more information, can be used to identify interference.
Value can be found in the published state on the `debug_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"debug_mode": NEW_VALUE}`.
The possible values are: `OFF`, `ON`.

### Debug distance (numeric)
Real time distance to target.
Value can be found in the published state on the `debug_distance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m`.

### Debug countdown (numeric)
Time before the target disappears.
Value can be found in the published state on the `debug_countdown` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

