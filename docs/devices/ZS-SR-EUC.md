---
title: "Moes ZS-SR-EUC control via MQTT"
description: "Integrate your Moes ZS-SR-EUC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-02-06T19:45:40
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZS-SR-EUC

|     |     |
|-----|-----|
| Model | ZS-SR-EUC  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Star ring - smart curtain switch |
| Exposes | cover (state, position), calibration, motor_steering |
| Picture | ![Moes ZS-SR-EUC](https://www.zigbee2mqtt.io/images/devices/ZS-SR-EUC.png) |


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

### Calibration (enum)
Calibration.
Value can be found in the published state on the `calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration": NEW_VALUE}`.
The possible values are: `START`, `END`.

### Motor steering (enum)
Motor Steering.
Value can be found in the published state on the `motor_steering` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_steering": NEW_VALUE}`.
The possible values are: `FORWARD`, `BACKWARD`.

