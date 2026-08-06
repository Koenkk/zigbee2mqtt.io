---
title: "Tuya TS130F_xbexmf8h control via MQTT"
description: "Integrate your Tuya TS130F_xbexmf8h via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-26T00:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS130F_xbexmf8h

|     |     |
|-----|-----|
| Model | TS130F_xbexmf8h  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Blind/curtain motor controller |
| Exposes | cover (state, position), calibration_time, motor_reversal, calibration, switch_type, backlight_mode |
| Picture | ![Tuya TS130F_xbexmf8h](https://www.zigbee2mqtt.io/images/devices/TS130F_xbexmf8h.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Press the stop button for 10 seconds to enter pairing mode.

### Calibration

* Press the open button on the switch, wait until the blind is completely open.
* Press the stop button on the switch.
* Put the device into calibration mode, see [below](#calibration-binary).
* Press the close button on the switch, wait until the blind is fully closed.
* Press the stop button on the switch.
* Disable the calibration mode, see [below](#calibration-binary).

### Indicator mode
This device does not support indicator mode. The backlight LED is a simple on/off control only.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Calibration time (numeric)
Calibration time measured by motor.
Value can be found in the published state on the `calibration_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Motor reversal (binary)
Reverse motor direction.
Value can be found in the published state on the `motor_reversal` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_reversal": NEW_VALUE}`.
If value equals `ON` motor reversal is ON, if `OFF` OFF.

### Calibration (binary)
Calibration mode.
Value can be found in the published state on the `calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration": NEW_VALUE}`.
If value equals `ON` calibration is ON, if `OFF` OFF.

### Switch type (enum)
Type of the installed switch.
Value can be found in the published state on the `switch_type` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type": NEW_VALUE}`.
The possible values are: `momentary`, `toggle`.

### Backlight mode (binary)
Switch backlight.
Value can be found in the published state on the `backlight_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_mode": NEW_VALUE}`.
If value equals `ON` backlight mode is ON, if `OFF` OFF.

