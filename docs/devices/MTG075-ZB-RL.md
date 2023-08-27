---
title: "TuYa MTG075-ZB-RL control via MQTT"
description: "Integrate your TuYa MTG075-ZB-RL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-08-26T06:45:18
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa MTG075-ZB-RL

|     |     |
|-----|-----|
| Model | MTG075-ZB-RL  |
| Vendor  | [TuYa](/supported-devices/#v=TuYa)  |
| Description | 5.8G human presence sensor with relay |
| Exposes | presence, illuminance_lux, target_distance, radar_sensitivity, entry_sensitivity, illuminance_threshold, detection_range, shield_range, entry_distance_indentation, entry_filter_time, departure_delay, block_time, breaker_status, breaker_mode, status_indication, linkquality |
| Picture | ![TuYa MTG075-ZB-RL](https://www.zigbee2mqtt.io/images/devices/MTG075-ZB-RL.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Illuminance_lux (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance_lux` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Target_distance (numeric)
Distance to target.
Value can be found in the published state on the `target_distance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m`.

### Radar_sensitivity (numeric)
Sensitivity of the radar.
Value can be found in the published state on the `radar_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `9`.

### Entry_sensitivity (numeric)
Entry sensitivity.
Value can be found in the published state on the `entry_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"entry_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `9`.

### Illuminance_threshold (numeric)
Illumination threshold for switching on.
Value can be found in the published state on the `illuminance_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `420`.
The unit of this value is `lx`.

### Detection_range (numeric)
Detection range.
Value can be found in the published state on the `detection_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_range": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `8`.
The unit of this value is `m`.

### Shield_range (numeric)
Shield range of the radar.
Value can be found in the published state on the `shield_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"shield_range": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `8`.
The unit of this value is `m`.

### Entry_distance_indentation (numeric)
Entry distance indentation.
Value can be found in the published state on the `entry_distance_indentation` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"entry_distance_indentation": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `8`.
The unit of this value is `m`.

### Entry_filter_time (numeric)
Entry filter time.
Value can be found in the published state on the `entry_filter_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"entry_filter_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `s`.

### Departure_delay (numeric)
Turn off delay.
Value can be found in the published state on the `departure_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"departure_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `s`.

### Block_time (numeric)
Block time.
Value can be found in the published state on the `block_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"block_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `s`.

### Breaker_status (binary)
Breaker status changes with breaker_mode->standard.
Value can be found in the published state on the `breaker_status` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breaker_status": NEW_VALUE}`.
If value equals `ON` breaker_status is ON, if `OFF` OFF.

### Breaker_mode (enum)
Status breaker mode: standard is external, local is auto.
Value can be found in the published state on the `breaker_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breaker_mode": NEW_VALUE}`.
The possible values are: `standard`, `local`.

### Status_indication (enum)
Led backlight when triggered.
Value can be found in the published state on the `status_indication` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"status_indication": NEW_VALUE}`.
The possible values are: `OFF`, `ON`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

