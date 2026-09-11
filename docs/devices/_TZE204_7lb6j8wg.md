---
title: "Tuya _TZE204_7lb6j8wg control via MQTT"
description: "Integrate your Tuya _TZE204_7lb6j8wg via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-08-30T18:06:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya _TZE204_7lb6j8wg

|     |     |
|-----|-----|
| Model | _TZE204_7lb6j8wg  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Semicom touch panel: 3 shutters |
| Exposes | cover (state, position), state |
| Picture | ![Tuya _TZE204_7lb6j8wg](https://www.zigbee2mqtt.io/images/devices/_TZE204_7lb6j8wg.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position and state, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Cover (c1 endpoint)
The current state of this cover is in the published state under the `state_c1` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_c1": "OPEN"}`, `{"state_c1": "CLOSE"}`, `{"state_c1": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_c1": VALUE}` where `VALUE` is a number between `0` and `100`.

### Cover (c2 endpoint)
The current state of this cover is in the published state under the `state_c2` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_c2": "OPEN"}`, `{"state_c2": "CLOSE"}`, `{"state_c2": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_c2": VALUE}` where `VALUE` is a number between `0` and `100`.

### Cover (c3 endpoint)
The current state of this cover is in the published state under the `state_c3` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_c3": "OPEN"}`, `{"state_c3": "CLOSE"}`, `{"state_c3": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position_c3": VALUE}` where `VALUE` is a number between `0` and `100`.

### State (enum, c1 endpoint)
Value can be found in the published state on the `state_c1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `OPEN`, `STOP`, `CLOSE`.

### State (enum, c2 endpoint)
Value can be found in the published state on the `state_c2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `OPEN`, `STOP`, `CLOSE`.

### State (enum, c3 endpoint)
Value can be found in the published state on the `state_c3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `OPEN`, `STOP`, `CLOSE`.

