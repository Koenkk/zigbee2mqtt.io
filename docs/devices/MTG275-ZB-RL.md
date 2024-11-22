---
title: "Tuya MTG275-ZB-RL control via MQTT"
description: "Integrate your Tuya MTG275-ZB-RL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-01T18:54:40
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya MTG275-ZB-RL

|     |     |
|-----|-----|
| Model | MTG275-ZB-RL  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 2.4G/5.8G MmWave radar human presence motion sensor |
| Exposes | presence, illuminance_lux, target_distance, radar_sensitivity, detection_range, shield_range, entry_sensitivity, entry_distance_indentation, entry_filter_time, departure_delay, block_time, breaker_status, breaker_mode, illuminance_threshold, status_indication, sensor, linkquality |
| Picture | ![Tuya MTG275-ZB-RL](https://www.zigbee2mqtt.io/images/devices/MTG275-ZB-RL.png) |


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

### Illuminance (lux) (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance_lux` property.
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
The minimal value is `0` and the maximum value is `9`.

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
The minimal value is `0` and the maximum value is `9`.

### Entry distance indentation (numeric)
Indent the distance inward based on the dectection distance.
Value can be found in the published state on the `entry_distance_indentation` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"entry_distance_indentation": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `8`.
The unit of this value is `m`.

### Entry filter time (numeric)
Sensitivity threshold triggered for the first time when the target enters the detection range .
Value can be found in the published state on the `entry_filter_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"entry_filter_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `s`.

### Departure delay (numeric)
Confirmation time after the target disappears.
Value can be found in the published state on the `departure_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"departure_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `s`.

### Block time (numeric)
Time for the target to be detected again after switching from manned(occupy) to unmanned(unoccupy) mode.
Value can be found in the published state on the `block_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"block_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `s`.

### Breaker status (binary)
Remotely control the breaker in standard mode.
Value can be found in the published state on the `breaker_status` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breaker_status": NEW_VALUE}`.
If value equals `ON` breaker status is ON, if `OFF` OFF.

### Breaker mode (enum)
Breaker mode: standard is remotely controlled, local is automatic.
Value can be found in the published state on the `breaker_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breaker_mode": NEW_VALUE}`.
The possible values are: `standard`, `local`.

### Illuminance threshold (numeric)
Illumination threshold for local (automatic) switching mode operation.
Value can be found in the published state on the `illuminance_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `420`.
The unit of this value is `lx`.

### Status indication (enum)
Indicator light will flash when human presence is detected.
Value can be found in the published state on the `status_indication` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"status_indication": NEW_VALUE}`.
The possible values are: `OFF`, `ON`.

### Sensor (enum)
The radar sensor can be set in four states: on, off, occupied and unoccupied. For example, if set to occupied, it will continue to maintain presence regardless of whether someone is present or not. If set to unoccupied, the unoccupied state will be maintained permanently..
Value can be found in the published state on the `sensor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `on`, `off`, `occupied`, `unoccupied`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

