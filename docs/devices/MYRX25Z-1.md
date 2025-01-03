---
title: "eWeLink MYRX25Z-1 control via MQTT"
description: "Integrate your eWeLink MYRX25Z-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-03T20:04:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# eWeLink MYRX25Z-1

|     |     |
|-----|-----|
| Model | MYRX25Z-1  |
| Vendor  | [eWeLink](/supported-devices/#v=eWeLink)  |
| Description | Reax Curtain |
| Exposes | battery, voltage, cover (state, position), motor_mode, motor_clb_position, motor_clb_position_result, motor_info, motor_speed, supported_max_motor_speed, linkquality |
| Picture | ![eWeLink MYRX25Z-1](https://www.zigbee2mqtt.io/images/devices/MYRX25Z-1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Motor mode (enum)
Motor Mode.
Value can be found in the published state on the `motor_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_mode": NEW_VALUE}`.
The possible values are: `inching`, `continuou`.

### Motor clb position (enum)
Motor Calibration By Position.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_clb_position": NEW_VALUE}`.
The possible values are: `open`, `close`, `other`, `clear`.

### Motor clb position result (text)
Motor Calibration Result.
Value can be found in the published state on the `motor_clb_position_result` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Motor info (text)
Motor Updated Info.
Value can be found in the published state on the `motor_info` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Motor speed (numeric)
Set the motor speed.
Value can be found in the published state on the `motor_speed` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_speed": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `3`.

### Supported max motor speed (numeric)
Supported max motor speed.
Value can be found in the published state on the `supported_max_motor_speed` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

