---
title: "Nous B4Z control via MQTT"
description: "Integrate your Nous B4Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-06-30T19:12:33
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nous B4Z

|     |     |
|-----|-----|
| Model | B4Z  |
| Vendor  | [Nous](/supported-devices/#v=Nous)  |
| Description | Curtain switch |
| Exposes | cover (state, position), moving, motor_reversal, calibration, calibration_time, switch_type_curtain |
| Picture | ![Nous B4Z](https://www.zigbee2mqtt.io/images/devices/B4Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`



## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Moving (enum)
Value can be found in the published state on the `moving` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `UP`, `STOP`, `DOWN`.

### Motor reversal (binary)
Value can be found in the published state on the `motor_reversal` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motor_reversal": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_reversal": NEW_VALUE}`.
If value equals `ON` motor reversal is ON, if `OFF` OFF.

### Calibration (binary)
Value can be found in the published state on the `calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration": NEW_VALUE}`.
If value equals `ON` calibration is ON, if `OFF` OFF.
For more details please refer to manufacture's manual.

### Calibration time (numeric)
Value can be found in the published state on the `calibration_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_time": NEW_VALUE}`.
The unit of this value is `s`. A value with 1 decimal is allowed (e.g. 60.4).

### Switch type curtain (enum)
Value can be found in the published state on the `switch_type_curtain` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_curtain": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_curtain": NEW_VALUE}`.
The possible values are: `flip-switch`, `sync-switch`, `button-switch`.
Device behavior for externally connected switch type:
* flip-switch: For such kind of switch the button remains after the push in its position and does not return into neutral position.
* sync-switch: This mode is a special option for a button-switch. “Sync” means that the relay will be automatically synchronized with the physical switch. This mode allows e.g. a more precise angle control of jalousies. 
* button-switch: Such kind of switch only transmits a signal as long as button is actually pressed. After the button-push the button returns into neutral position. However, there are 2 ways to press the button, either with a short or longer (typically >1s) push. In dependency of the push the modul generates a different behavior.



## Comment
Consider that indicator_mode and backlight_mode properties are effectively not supported on that device, although actually foreseen in Tuya specs.