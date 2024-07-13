---
title: "ShinaSystem GCM-300Z control via MQTT"
description: "Integrate your ShinaSystem GCM-300Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-12-26T18:38:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ShinaSystem GCM-300Z

|     |     |
|-----|-----|
| Model | GCM-300Z  |
| Vendor  | [ShinaSystem](/supported-devices/#v=ShinaSystem)  |
| Description | SiHAS gas valve |
| Exposes | gas_valve_state, battery, close_timeout, close_remain_timeout, volume, overheat_mode, linkquality |
| Picture | ![ShinaSystem GCM-300Z](https://www.zigbee2mqtt.io/images/devices/GCM-300Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Gas valve state (binary)
Valve state if open or closed.
Value can be found in the published state on the `gas_valve_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"gas_valve_state": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gas_valve_state": NEW_VALUE}`.
If value equals `OPEN` gas valve state is ON, if `CLOSE` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Close timeout (numeric)
Set the default closing time when the gas valve is open..
Value can be found in the published state on the `close_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"close_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"close_timeout": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `540`.
The unit of this value is `min`.

### Close remain timeout (numeric)
Set the time or remaining time until the gas valve closes..
Value can be found in the published state on the `close_remain_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"close_remain_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"close_remain_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `540`.
The unit of this value is `min`.

### Volume (enum)
Values observed are `1` (voice), `2` (high) or `3` (low)..
Value can be found in the published state on the `volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"volume": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"volume": NEW_VALUE}`.
The possible values are: `voice`, `high`, `low`.

### Overheat mode (enum)
Temperature overheating condition..
Value can be found in the published state on the `overheat_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"overheat_mode": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `normal`, `overheat`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

