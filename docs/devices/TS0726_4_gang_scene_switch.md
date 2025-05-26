---
title: "Tuya TS0726_4_gang_scene_switch control via MQTT"
description: "Integrate your Tuya TS0726_4_gang_scene_switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:59:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0726_4_gang_scene_switch

|     |     |
|-----|-----|
| Model | TS0726_4_gang_scene_switch  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 4 gang switch with scene and backlight |
| Exposes | switch (state), countdown, power_on_behavior, backlight_mode, indicator_mode, switch_mode |
| Picture | ![Tuya TS0726_4_gang_scene_switch](https://www.zigbee2mqtt.io/images/devices/TS0726_4_gang_scene_switch.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l3": ""}`.

### Switch (l4 endpoint)
The current state of this switch is in the published state under the `state_l4` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l4": "ON"}`, `{"state_l4": "OFF"}` or `{"state_l4": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l4": ""}`.

### Countdown (numeric, l1 endpoint)
Countdown to turn device off after a certain time.
Value can be found in the published state on the `countdown_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"countdown_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown (numeric, l2 endpoint)
Countdown to turn device off after a certain time.
Value can be found in the published state on the `countdown_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"countdown_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown (numeric, l3 endpoint)
Countdown to turn device off after a certain time.
Value can be found in the published state on the `countdown_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"countdown_l3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown (numeric, l4 endpoint)
Countdown to turn device off after a certain time.
Value can be found in the published state on the `countdown_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"countdown_l4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l4": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

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

### Power-on behavior (enum, l3 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_l3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l3": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Power-on behavior (enum, l4 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_l4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l4": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Backlight mode (binary)
Mode of the backlight.
Value can be found in the published state on the `backlight_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"backlight_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_mode": NEW_VALUE}`.
If value equals `ON` backlight mode is ON, if `OFF` OFF.

### Indicator mode (enum)
Mode of the indicator light.
Value can be found in the published state on the `indicator_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode": NEW_VALUE}`.
The possible values are: `none`, `relay`, `pos`.

### Switch mode (enum, l1 endpoint)
Switch mode l1.
Value can be found in the published state on the `switch_mode_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_mode_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l1": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Switch mode (enum, l2 endpoint)
Switch mode l2.
Value can be found in the published state on the `switch_mode_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_mode_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l2": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Switch mode (enum, l3 endpoint)
Switch mode l3.
Value can be found in the published state on the `switch_mode_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_mode_l3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l3": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Switch mode (enum, l4 endpoint)
Switch mode l4.
Value can be found in the published state on the `switch_mode_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_mode_l4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode_l4": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

