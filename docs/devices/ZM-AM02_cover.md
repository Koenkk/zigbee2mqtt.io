---
title: "Zemismart ZM-AM02 control via MQTT"
description: "Integrate your Zemismart ZM-AM02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2022-01-31T17:42:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Zemismart ZM-AM02

|     |     |
|-----|-----|
| Model | ZM-AM02  |
| Vendor  | Zemismart  |
| Description | Zigbee/RF curtain converter |
| Exposes | motor_working_mode, control, percent_state, mode, control_back_mode, border, linkquality |
| Picture | ![Zemismart ZM-AM02](https://www.zigbee2mqtt.io/images/devices/ZM-AM02.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Exposes

### Motor_working_mode (enum)
Value can be found in the published state on the `motor_working_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_working_mode": NEW_VALUE}`.
The possible values are: `continuous`, `intermittently`.

### Control (enum)
Value can be found in the published state on the `control` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"control": NEW_VALUE}`.
The possible values are: `open`, `stop`, `close`, `continue`.

### Percent_state (numeric)
Value can be found in the published state on the `percent_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Mode (enum)
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `morning`, `night`.

### Control_back_mode (enum)
Value can be found in the published state on the `control_back_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"control_back_mode": NEW_VALUE}`.
The possible values are: `forward`, `back`.

### Border (enum)
Value can be found in the published state on the `border` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"border": NEW_VALUE}`.
The possible values are: `up`, `down`, `down_delete`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

