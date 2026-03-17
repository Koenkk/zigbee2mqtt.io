---
title: "Moes ZM4LT3 control via MQTT"
description: "Integrate your Moes ZM4LT3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:36:21
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZM4LT3

|     |     |
|-----|-----|
| Model | ZM4LT3  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | 3-gang switch module |
| Exposes | switch (state), countdown, power_on_behavior, switch_type, indicator_mode |
| Picture | ![Moes ZM4LT3](https://www.zigbee2mqtt.io/images/devices/ZM4LT3.png) |


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

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Switch type (enum)
Type of the switch.
Value can be found in the published state on the `switch_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type": NEW_VALUE}`.
The possible values are: `toggle`, `state`, `momentary`.

### Indicator mode (enum)
LED indicator mode.
Value can be found in the published state on the `indicator_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode": NEW_VALUE}`.
The possible values are: `off`, `off/on`, `on/off`, `on`.

### Inching control set (composite)
Device Inching function Settings. The device will automatically turn off after each turn on for a specified period of time..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"inching_control_set": {"inching_control_1": VALUE, "inching_time_1": VALUE, "inching_control_2": VALUE, "inching_time_2": VALUE, "inching_control_3": VALUE, "inching_time_3": VALUE}}`
- `inching_control` (binary): Enable/disable inching function for endpoint 1. allowed values: `ENABLE` or `DISABLE`
- `inching_time` (numeric): Delay time for executing a inching action for endpoint 1. min value is 1, max value is 65535, unit is seconds
- `inching_control` (binary): Enable/disable inching function for endpoint 2. allowed values: `ENABLE` or `DISABLE`
- `inching_time` (numeric): Delay time for executing a inching action for endpoint 2. min value is 1, max value is 65535, unit is seconds
- `inching_control` (binary): Enable/disable inching function for endpoint 3. allowed values: `ENABLE` or `DISABLE`
- `inching_time` (numeric): Delay time for executing a inching action for endpoint 3. min value is 1, max value is 65535, unit is seconds

