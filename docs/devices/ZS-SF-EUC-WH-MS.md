---
title: "Moes ZS-SF-EUC-WH-MS control via MQTT"
description: "Integrate your Moes ZS-SF-EUC-WH-MS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-04-30T19:57:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZS-SF-EUC-WH-MS

|     |     |
|-----|-----|
| Model | ZS-SF-EUC-WH-MS  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Star feather Zigbee curtain switch |
| Exposes | cover (state, position), calibration, backlight_switch, motor_direction, motor_working_time |
| Picture | ![Moes ZS-SF-EUC-WH-MS](https://www.zigbee2mqtt.io/images/devices/ZS-SF-EUC-WH-MS.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position and state, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Calibration (enum)
Calibration mode.
Value can be found in the published state on the `calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration": NEW_VALUE}`.
The possible values are: `start`, `end`.

### Backlight switch (binary)
Enable or disable button backlight.
Value can be found in the published state on the `backlight_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_switch": NEW_VALUE}`.
If value equals `ON` backlight switch is ON, if `OFF` OFF.

### Motor direction (enum)
Direction of motor movement.
Value can be found in the published state on the `motor_direction` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_direction": NEW_VALUE}`.
The possible values are: `normal`, `reversed`.

### Motor working time (numeric)
Full travel time of the motor (10-180s).
Value can be found in the published state on the `motor_working_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_working_time": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `180`.
The unit of this value is `s`.

