---
title: "Excellux PIRIV-01 control via MQTT"
description: "Integrate your Excellux PIRIV-01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:20:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Excellux PIRIV-01

|     |     |
|-----|-----|
| Model | PIRIV-01  |
| Vendor  | [Excellux](/supported-devices/#v=Excellux)  |
| Description | PIR motion sensor, vibration sensor, and light sensor |
| Exposes | presence_state, vibration, illumiance_warning, battery, illumiance, sampling_interval, vibration_sensitivity, illumiance_v0, illumiance_v1, illumiance_calibration |
| Picture | ![Excellux PIRIV-01](https://www.zigbee2mqtt.io/images/devices/PIRIV-01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Presence state (enum)
Presence state,true:motion detected,false:no motion.
Value can be found in the published state on the `presence_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `true`, `false`.

### Vibration (binary)
Vibration state,true:vibration detected,false:no vibration.
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` vibration is ON, if `false` OFF.

### Illumiance warning (enum)
Illuminance warning level,low:low,high:high,none.
Value can be found in the published state on the `illumiance_warning` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `low`, `high`.

### Battery (numeric)
Battery percentage.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `1` and the maximum value is `100`.
The unit of this value is `%`.

### Illumiance (numeric)
Illuminance.
Value can be found in the published state on the `illumiance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `10000`.
The unit of this value is `lux`.

### Sampling interval (numeric)
sampling illumiance interval.
Value can be found in the published state on the `sampling_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sampling_interval": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `1200`.
The unit of this value is `S`.

### Vibration sensitivity (numeric)
Vibration sensitivity.
Value can be found in the published state on the `vibration_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"vibration_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `50`.
The unit of this value is `times`.

### Illumiance v0 (numeric)
Illuminance v0 threshold setting.
Value can be found in the published state on the `illumiance_v0` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illumiance_v0": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.
The unit of this value is `lux`.

### Illumiance v1 (numeric)
Illuminance v1 threshold setting.
Value can be found in the published state on the `illumiance_v1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illumiance_v1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.
The unit of this value is `lux`.

### Illumiance calibration (numeric)
Illuminance calibration.
Value can be found in the published state on the `illumiance_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illumiance_calibration": NEW_VALUE}`.
The minimal value is `-1000` and the maximum value is `1000`.
The unit of this value is `lux`.

