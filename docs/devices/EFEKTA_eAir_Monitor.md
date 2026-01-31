---
title: "EFEKTA EFEKTA_eAir_Monitor control via MQTT"
description: "Integrate your EFEKTA EFEKTA_eAir_Monitor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:10:41
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_eAir_Monitor

|     |     |
|-----|-----|
| Model | EFEKTA_eAir_Monitor  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | Smart digital carbon dioxide detector with e-ink display. |
| Exposes | co2, battery, battery_low, lifetime, оperating_mode, invert_color, forced_recalibration, manual_forced_recalibration, automatic_self_calibration, factory_reset_co2 |
| Picture | ![EFEKTA EFEKTA_eAir_Monitor](https://www.zigbee2mqtt.io/images/devices/EFEKTA_eAir_Monitor.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### CO2 (numeric)
Measured value.
Value can be found in the published state on the `co2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Lifetime (numeric)
lifetime.
Value can be found in the published state on the `lifetime` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Hours`.

### Оperating mode (enum)
Set data output on the display.
Value can be found in the published state on the `оperating_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"оperating_mode": NEW_VALUE}`.
The possible values are: `Normal`, `Energy-saving`.

### Invert color (enum)
Set color mode.
Value can be found in the published state on the `invert_color` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"invert_color": NEW_VALUE}`.
The possible values are: `BW`, `WB`.

### Forced recalibration (binary)
Start FRC (Perform Forced Recalibration of the CO2 Sensor).
Value can be found in the published state on the `forced_recalibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"forced_recalibration": NEW_VALUE}`.
If value equals `ON` forced recalibration is ON, if `OFF` OFF.

### Manual forced recalibration (numeric)
Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor).
Value can be found in the published state on the `manual_forced_recalibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_forced_recalibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5000`.
The unit of this value is `ppm`.

### Automatic self calibration (binary)
Automatic self calibration.
Value can be found in the published state on the `automatic_self_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"automatic_self_calibration": NEW_VALUE}`.
If value equals `ON` automatic self calibration is ON, if `OFF` OFF.

### Factory reset co2 (binary)
Factory Reset CO2 sensor.
Value can be found in the published state on the `factory_reset_co2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset_co2": NEW_VALUE}`.
If value equals `ON` factory reset co2 is ON, if `OFF` OFF.

