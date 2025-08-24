---
title: "Tuya TS110E_2gang_2 control via MQTT"
description: "Integrate your Tuya TS110E_2gang_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-01T14:45:57
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS110E_2gang_2

|     |     |
|-----|-----|
| Model | TS110E_2gang_2  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 2 channel dimmer |
| Exposes | light (state, brightness, min_brightness, max_brightness), power_on_behavior, light_type, switch_type |
| Picture | ![Tuya TS110E_2gang_2](https://www.zigbee2mqtt.io/images/devices/TS110E_2gang_2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light (l1 endpoint)
This light supports the following features: `state`, `brightness`, `min_brightness`, `max_brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_l1": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness_l1": ""}`.

### Light (l2 endpoint)
This light supports the following features: `state`, `brightness`, `min_brightness`, `max_brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_l2": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness_l2": ""}`.

### Power-on behavior (enum, l1 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l1": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Power-on behavior (enum, l2 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l2": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Light type (enum)
Type of light attached to the device.
Value can be found in the published state on the `light_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_type": NEW_VALUE}`.
The possible values are: `led`, `incandescent`, `halogen`.

### Switch type (enum, l1 endpoint)
Type of the switch.
Value can be found in the published state on the `switch_type_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_l1": NEW_VALUE}`.
The possible values are: `toggle`, `state`, `momentary`.

### Switch type (enum, l2 endpoint)
Type of the switch.
Value can be found in the published state on the `switch_type_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_l2": NEW_VALUE}`.
The possible values are: `toggle`, `state`, `momentary`.

