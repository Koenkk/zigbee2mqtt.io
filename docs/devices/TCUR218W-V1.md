---
title: "Feibit TCUR218W-V1 control via MQTT"
description: "Integrate your Feibit TCUR218W-V1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-09-01T12:39:25
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Feibit TCUR218W-V1

|     |     |
|-----|-----|
| Model | TCUR218W-V1  |
| Vendor  | [Feibit](/supported-devices/#v=Feibit)  |
| Description | Dual Track Curtain Panel |
| Exposes | identify, cover (state, position, tilt), linkquality |
| Picture | ![Feibit TCUR218W-V1](https://www.zigbee2mqtt.io/images/devices/TCUR218W-V1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Cover (top endpoint)
The current state of this cover is in the published state under the `state_top` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_top": "OPEN"}`, `{"state_top": "CLOSE"}`, `{"state_top": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_top": VALUE}` where `VALUE` is a number between `0` and `100`.
To change the tilt publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tilt_top": VALUE}` where `VALUE` is a number between `0` and `100`.

### Cover (bottom endpoint)
The current state of this cover is in the published state under the `state_bottom` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_bottom": "OPEN"}`, `{"state_bottom": "CLOSE"}`, `{"state_bottom": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_bottom": VALUE}` where `VALUE` is a number between `0` and `100`.
To change the tilt publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tilt_bottom": VALUE}` where `VALUE` is a number between `0` and `100`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

