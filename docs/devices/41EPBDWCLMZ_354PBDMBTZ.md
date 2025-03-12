---
title: "Schneider Electric 41EPBDWCLMZ/354PBDMBTZ control via MQTT"
description: "Integrate your Schneider Electric 41EPBDWCLMZ/354PBDMBTZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-07-01T18:17:29Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Schneider Electric 41EPBDWCLMZ/354PBDMBTZ

|     |     |
|-----|-----|
| Model | 41EPBDWCLMZ/354PBDMBTZ  |
| Vendor  | [Schneider Electric](/supported-devices/#v=Schneider%20Electric)  |
| Description | Wiser 40/300-Series Module Dimmer |
| Exposes | light (state, brightness), ballast_minimum_level, ballast_maximum_level, indicator_mode |
| Picture | ![Schneider Electric 41EPBDWCLMZ/354PBDMBTZ](https://www.zigbee2mqtt.io/images/devices/41EPBDWCLMZ-354PBDMBTZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.

### Ballast minimum level (numeric)
Specifies the minimum light output of the ballast.
Value can be found in the published state on the `ballast_minimum_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ballast_minimum_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ballast_minimum_level": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `254`.

### Ballast maximum level (numeric)
Specifies the maximum light output of the ballast.
Value can be found in the published state on the `ballast_maximum_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ballast_maximum_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ballast_maximum_level": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `254`.

### Indicator mode (enum, smart endpoint)
Set Indicator Mode for smart switch..
Value can be found in the published state on the `indicator_mode_smart` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_mode_smart": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode_smart": NEW_VALUE}`.
The possible values are: `reverse_with_load`, `consistent_with_load`, `always_off`, `always_on`.

