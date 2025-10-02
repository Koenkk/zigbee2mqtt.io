---
title: "Tuya TS0601_cover_11 control via MQTT"
description: "Integrate your Tuya TS0601_cover_11 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:37:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_cover_11

|     |     |
|-----|-----|
| Model | TS0601_cover_11  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Cover motor |
| Exposes | control, time_total, work_state, dry_contact_switch_mode, ac_switch_mode, speed, percent_state, dot_mode, percent_control, direction, border |
| Picture | ![Tuya TS0601_cover_11](https://www.zigbee2mqtt.io/images/devices/TS0601_cover_11.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Control (enum)
Control the motor.
Value can be found in the published state on the `control` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"control": NEW_VALUE}`.
The possible values are: `stop`, `open`, `close`.

### Time total (numeric)
Total movement time.
Value can be found in the published state on the `time_total` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Work state (enum)
Work state.
Value can be found in the published state on the `work_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `opening`, `closing`, `stopped`.

### Dry contact switch mode (enum)
Dry contact switch mode.
Value can be found in the published state on the `dry_contact_switch_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dry_contact_switch_mode": NEW_VALUE}`.
The possible values are: `mode1`, `mode2`.

### Ac switch mode (enum)
AC switch mode.
Value can be found in the published state on the `ac_switch_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ac_switch_mode": NEW_VALUE}`.
The possible values are: `mode1`, `mode2`.

### Speed (numeric)
Motor speed.
Value can be found in the published state on the `speed` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"speed": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### Percent state (numeric)
Current percent position.
Value can be found in the published state on the `percent_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Dot mode (enum)
Dot mode.
Value can be found in the published state on the `dot_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dot_mode": NEW_VALUE}`.
The possible values are: `single`, `multi`.

### Percent control (numeric)
Set percent position.
Value can be found in the published state on the `percent_control` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"percent_control": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Direction (enum)
Motor direction.
Value can be found in the published state on the `direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"direction": NEW_VALUE}`.
The possible values are: `normal`, `reversed`.

### Border (enum)
Border mode.
Value can be found in the published state on the `border` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"border": NEW_VALUE}`.
The possible values are: `UP`, `Down`, `Delete`.

