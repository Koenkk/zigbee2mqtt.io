---
title: "NEO NAS-PS10B2 control via MQTT"
description: "Integrate your NEO NAS-PS10B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-11-30T20:27:20
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# NEO NAS-PS10B2

|     |     |
|-----|-----|
| Model | NAS-PS10B2  |
| Vendor  | [NEO](/supported-devices/#v=NEO)  |
| Description | Human presence sensor |
| Exposes | presence, human_motion_state, dis_current, presence_time, motion_far_detection, motion_sensitivity_value, motionless_sensitivity, work_mode, output_switch, output_time, led_switch, lux_value |
| Picture | ![NEO NAS-PS10B2](https://www.zigbee2mqtt.io/images/devices/NAS-PS10B2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Human motion state (enum)
Human Motion State.
Value can be found in the published state on the `human_motion_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `small`, `large`.

### Current distance (numeric)
Current distance of detected motion.
Value can be found in the published state on the `dis_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `cm`.

### Presence time (numeric)
Presence Time.
Value can be found in the published state on the `presence_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_time": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `600`.
The unit of this value is `s`.

### Motion far detection (numeric)
Motion Range Detection.
Value can be found in the published state on the `motion_far_detection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_far_detection": NEW_VALUE}`.
The minimal value is `150` and the maximum value is `600`.
The unit of this value is `cm`.

### Motion sensitivity value (numeric)
Motion Detection Sensitivity.
Value can be found in the published state on the `motion_sensitivity_value` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensitivity_value": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `7`.

### Motionless sensitivity (numeric)
Motionless Detection Sensitivity.
Value can be found in the published state on the `motionless_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motionless_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `7`.

### Work mode (enum)
Work Mode.
Value can be found in the published state on the `work_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"work_mode": NEW_VALUE}`.
The possible values are: `manual`, `auto`.

### Output switch (binary)
Output Switch.
Value can be found in the published state on the `output_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"output_switch": NEW_VALUE}`.
If value equals `ON` output switch is ON, if `OFF` OFF.

### Output time (numeric)
Output Times.
Value can be found in the published state on the `output_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"output_time": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1800`.
The unit of this value is `s`.

### Led switch (binary)
Led Switch.
Value can be found in the published state on the `led_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_switch": NEW_VALUE}`.
If value equals `ON` led switch is ON, if `OFF` OFF.

### Lux value (enum)
Lux Value.
Value can be found in the published state on the `lux_value` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lux_value": NEW_VALUE}`.
The possible values are: `10_lux`, `20_lux`, `50_lux`, `24h`.

