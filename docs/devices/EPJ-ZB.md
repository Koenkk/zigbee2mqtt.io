---
title: "Nova Digital EPJ-ZB control via MQTT"
description: "Integrate your Nova Digital EPJ-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-06-01T17:54:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nova Digital EPJ-ZB

|     |     |
|-----|-----|
| Model | EPJ-ZB  |
| Vendor  | [Nova Digital](/supported-devices/#v=Nova%20Digital)  |
| Description | Smart sliding window pusher |
| Exposes | battery, cover (state, position), charge_state, manual_mode, fault, countdown, motor_direction, mode, fixed_window_sash, window_detection |
| Picture | ![Nova Digital EPJ-ZB](https://www.zigbee2mqtt.io/images/devices/EPJ-ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Charge state (binary)
Value can be found in the published state on the `charge_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` charge state is ON, if `false` OFF.

### Manual mode (enum)
Value can be found in the published state on the `manual_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_mode": NEW_VALUE}`.
The possible values are: `Enable`, `Disable`.

### Fault (enum)
Motor Fault.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `Normal`, `None`, `Fault`.

### Countdown (numeric)
Motor timeout.
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `90`.
The unit of this value is `s`.

### Motor direction (enum)
Pusher install side.
Value can be found in the published state on the `motor_direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_direction": NEW_VALUE}`.
The possible values are: `Left Side`, `Right Side`.

### Mode (enum)
Slow stop mode.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `Enable`, `Disable`.

### Fixed window sash (enum)
Button position.
Value can be found in the published state on the `fixed_window_sash` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fixed_window_sash": NEW_VALUE}`.
The possible values are: `Up`, `Down`.

### Window detection (enum)
Window detection status.
Value can be found in the published state on the `window_detection` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `Opened`, `Closed`, `Pending`.

