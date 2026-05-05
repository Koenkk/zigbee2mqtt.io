---
title: "HOBEIAN ZG-301Z-MOTO control via MQTT"
description: "Integrate your HOBEIAN ZG-301Z-MOTO via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-11-30T20:27:20
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HOBEIAN ZG-301Z-MOTO

|     |     |
|-----|-----|
| Model | ZG-301Z-MOTO  |
| Vendor  | [HOBEIAN](/supported-devices/#v=HOBEIAN)  |
| Description | Curtain Motor Controller |
| Exposes | cover (state, position), cur_calibration, control_back, tr_timecon, switch_type, indicator_mode |
| Picture | ![HOBEIAN ZG-301Z-MOTO](https://www.zigbee2mqtt.io/images/devices/ZG-301Z-MOTO.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

## Calibration
Press the open button on the switch, wait until the curtains are completely open.
Press the pause/stop button on the switch.
Put the device into calibration mode via software.
Press the close button on the switch, wait until curtains are fully closed.
Press the pause/stop button on the switch.
Disable the calibration mode.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Cur calibration (enum)
Curtain calibration.
Value can be found in the published state on the `cur_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cur_calibration": NEW_VALUE}`.
The possible values are: `start`, `end`.

### Control back (enum)
Set curtain control back.
Value can be found in the published state on the `control_back` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"control_back": NEW_VALUE}`.
The possible values are: `forward`, `back`.

### Tr timecon (numeric)
Quick Calibrate.
Value can be found in the published state on the `tr_timecon` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tr_timecon": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `120`.
The unit of this value is `s`.

### Switch type (enum)
Set curtain controller switch type.
Value can be found in the published state on the `switch_type` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type": NEW_VALUE}`.
The possible values are: `flip_switch`, `sync_switch`, `button_switch`.

### Indicator mode (enum)
Set Controller indicator mode.
Value can be found in the published state on the `indicator_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode": NEW_VALUE}`.
The possible values are: `relay`, `pos`, `none`.

