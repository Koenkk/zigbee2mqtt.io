---
title: "Zemismart ZN-USC1U-HT control via MQTT"
description: "Integrate your Zemismart ZN-USC1U-HT via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:10:30
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Zemismart ZN-USC1U-HT

|     |     |
|-----|-----|
| Model | ZN-USC1U-HT  |
| Vendor  | [Zemismart](/supported-devices/#v=Zemismart)  |
| Description | Smart curtain wall switch |
| Exposes | cover (state, position), motor_steering, calibration_time |
| Picture | ![Zemismart ZN-USC1U-HT](https://www.zigbee2mqtt.io/images/devices/ZN-USC1U-HT.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### Pairing
Press on one of the buttons for 10 seconds to enter pairing mode (All lights should blink)

### Calibration

* Press the close button on the switch, wait until the curtains are completely closed.
* Press the pause button on the switch.
* Set the amount of time for the curtain to be opened, see [below](#calibration-time-numeric).
* If the amount of time is not enough, repeat the process until the curtain can be completely opened.
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

### Motor steering (enum)
Motor steering.
Value can be found in the published state on the `motor_steering` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_steering": NEW_VALUE}`.
The possible values are: `FORWARD`, `BACKWARD`.

### Calibration time (numeric)
Calibration time in seconds (Please fully close the curtain before set the calibration time).
Value can be found in the published state on the `calibration_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `500`.
The unit of this value is `s`.

