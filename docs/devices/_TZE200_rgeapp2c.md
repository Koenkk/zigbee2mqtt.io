---
title: "Tuya _TZE200_rgeapp2c control via MQTT"
description: "Integrate your Tuya _TZE200_rgeapp2c via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-07-30T18:55:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya _TZE200_rgeapp2c

|     |     |
|-----|-----|
| Model | _TZE200_rgeapp2c  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Semicom touch panel: 2 switches + 2 shutters |
| Exposes | switch (state), cover (state, position), state |
| Picture | ![Tuya _TZE200_rgeapp2c](https://www.zigbee2mqtt.io/images/devices/_TZE200_rgeapp2c.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Switch (s1 endpoint)
The current state of this switch is in the published state under the `state_s1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_s1": "ON"}`, `{"state_s1": "OFF"}` or `{"state_s1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_s1": ""}`.

### Switch (s2 endpoint)
The current state of this switch is in the published state under the `state_s2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_s2": "ON"}`, `{"state_s2": "OFF"}` or `{"state_s2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_s2": ""}`.

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

### State (enum, c1 endpoint)
Value can be found in the published state on the `state_c1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `OPEN`, `STOP`, `CLOSE`.

### State (enum, c2 endpoint)
Value can be found in the published state on the `state_c2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `OPEN`, `STOP`, `CLOSE`.

