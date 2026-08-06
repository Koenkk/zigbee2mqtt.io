---
title: "Ronco RM28-LE control via MQTT"
description: "Integrate your Ronco RM28-LE via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Ronco RM28-LE

|     |     |
|-----|-----|
| Model | RM28-LE  |
| Vendor  | [Ronco](/supported-devices/#v=Ronco)  |
| Description | Zigbee roller shade motor |
| Exposes | cover (state, position), mode, motor_direction, auto_power, work_state, countdown, countdown_left, time_total, situation_set, motor_fault, battery, border, position_best, click_control |
| Picture | ![Ronco RM28-LE](https://www.zigbee2mqtt.io/images/devices/RM28-LE.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
- Click the button on the motor 3 times to add or remove from zigbee network.
- The device will enter pairing mode (LED blinks orange).
- When device is paired, led will turn solid green, then turn off.

### Factory Rest
- Long press motor button for 12 seconds, motor jogbs 3 times restoring to factory settings.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Mode (enum)
Operating mode. morning=normal, night=slower and quieter.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `morning`, `night`.

### Motor direction (enum)
Motor rotation direction. Change if blind moves wrong way.
Value can be found in the published state on the `motor_direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_direction": NEW_VALUE}`.
The possible values are: `forward`, `back`.

### Auto power (binary)
Auto-complete open/close when curtain is manually pulled.
Value can be found in the published state on the `auto_power` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_power": NEW_VALUE}`.
If value equals `true` auto power is ON, if `false` OFF.

### Work state (enum)
Current motor movement status.
Value can be found in the published state on the `work_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `opening`, `closing`.

### Countdown (enum)
Countdown timer to trigger open/close.
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The possible values are: `cancel`, `1h`, `2h`, `3h`, `4h`.

### Countdown left (numeric)
Remaining countdown time in seconds.
Value can be found in the published state on the `countdown_left` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Time total (numeric)
Full travel time in ms, populated after calibration.
Value can be found in the published state on the `time_total` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ms`.

### Situation set (enum)
Whether motor treats 100% as fully open or fully closed.
Value can be found in the published state on the `situation_set` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `fully_open`, `fully_close`.

### Motor fault (binary)
Motor hardware fault.
Value can be found in the published state on the `motor_fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` motor fault is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Border (enum)
Set or clear motor travel limits.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"border": NEW_VALUE}`.
The possible values are: `up`, `down`, `up_delete`, `down_delete`, `remove_top_bottom`.

### Position best (numeric)
Saved favourite position.
Value can be found in the published state on the `position_best` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_best": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Click control (enum)
Single jog step up or down.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"click_control": NEW_VALUE}`.
The possible values are: `up`, `down`.

