---
title: "Moes ZC-LP01 control via MQTT"
description: "Integrate your Moes ZC-LP01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-06-01T17:54:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZC-LP01

|     |     |
|-----|-----|
| Model | ZC-LP01  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Smart sliding window pusher |
| Exposes | cover (state, position), charging, automatic_mode, slow_stop, button_position, battery |
| Picture | ![Moes ZC-LP01](https://www.zigbee2mqtt.io/images/devices/ZC-LP01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


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

### Charging (binary)
Whether the device is being charged via USB-C.
Value can be found in the published state on the `charging` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` charging is ON, if `false` OFF.

### Automatic mode (binary)
When set to `ON`, the device will start pushing in the same direction the window was pushed.
Value can be found in the published state on the `automatic_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"automatic_mode": NEW_VALUE}`.
If value equals `ON` automatic mode is ON, if `OFF` OFF.

### Slow stop (binary)
When set to `ON`, the device decelerates gradually for quieter operation.
Value can be found in the published state on the `slow_stop` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"slow_stop": NEW_VALUE}`.
If value equals `ON` slow stop is ON, if `OFF` OFF.

### Button position (enum)
Swaps the behavior of the device's physical buttons.
Value can be found in the published state on the `button_position` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"button_position": NEW_VALUE}`.
The possible values are: `UP`, `DOWN`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

