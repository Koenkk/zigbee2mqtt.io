---
title: "Tuya RT_ZCZ03Z control via MQTT"
description: "Integrate your Tuya RT_ZCZ03Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-08-01T18:23:40
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya RT_ZCZ03Z

|     |     |
|-----|-----|
| Model | RT_ZCZ03Z  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Human presence sensor 24G |
| Exposes | illuminance_lux, presence, detection_distance_max, detection_distance_min, target_distance, fading_time, presence_sensitivity, indicator, linkquality |
| Picture | ![Tuya RT_ZCZ03Z](https://www.zigbee2mqtt.io/images/devices/RT_ZCZ03Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_lux_calibration`: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Illuminance (lux) (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance_lux` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Detection distance max (numeric)
Max detection distance.
Value can be found in the published state on the `detection_distance_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_distance_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `840`.
The unit of this value is `cm`.

### Detection distance min (numeric)
Min detection distance.
Value can be found in the published state on the `detection_distance_min` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_distance_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `840`.
The unit of this value is `cm`.

### Target distance (numeric)
Distance to target.
Value can be found in the published state on the `target_distance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `cm`.

### Fading time (numeric)
Delay time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `59`.
The unit of this value is `s`.

### Presence sensitivity (numeric)
Presence sensitivity.
Value can be found in the published state on the `presence_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.

### Indicator (binary)
LED Indicator.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
If value equals `ON` indicator is ON, if `OFF` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

