---
title: "Chacon ZB-ERSM-01 control via MQTT"
description: "Integrate your Chacon ZB-ERSM-01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-31T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Chacon ZB-ERSM-01

|     |     |
|-----|-----|
| Model | ZB-ERSM-01  |
| Vendor  | [Chacon](/supported-devices/#v=Chacon)  |
| Description | Roller shutter module |
| Exposes | cover (state, position), cover_mode, action, linkquality |
| Picture | ![Chacon ZB-ERSM-01](https://www.zigbee2mqtt.io/images/devices/ZB-ERSM-01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
You have 3 possibilities of pairing:
- With Chacon/DiO radio controller (remote, switch…)
- With DiO mobile app via Bluetooth
- With Zigbee

* You can pair a DiO controller and Zigbee on the same device.
* You can pair a DiO controller and mobile app on the same device.
* But you cannot pair mobile app and Zigbee on the same device

### Calibration
1. Open the roller shutter entirely
2. Activate calibration mode
3. Close the shutter by pushing the "close" button every 0.5 seconds until the shutter is totally closed
4. Exit calibration mode (now the closing time is set)
5. Activate calibration mode again
6. Open the shutter by pushing the "open" button every 0.5 seconds until the shutter is totally open
7. Exit calibration mode (now the opening time is set, calibration is done)

**Caution**: _In calibration mode, any shutter movement command lasts 1 second maximum. For continuous movement, the Zigbee Down/Close command must be sent approximately every 0.5 seconds._
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

### Cover mode (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_mode": {"reversed": VALUE, "calibration": VALUE, "maintenance": VALUE, "led": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"cover_mode": ""}`.
- `reversed` (binary): Reversal of the motor rotating direction allowed values: `true` or `false`
- `calibration` (binary): Set the cover calibration mode allowed values: `true` or `false`
- `maintenance` (binary): Set the cover maintenance mode, enabling will disable the cover motor allowed values: `true` or `false`
- `led` (binary): Set the LED allowed values: `true` or `false`

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `open`, `close`, `stop`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

