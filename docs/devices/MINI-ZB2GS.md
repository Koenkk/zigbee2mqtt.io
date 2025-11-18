---
title: "SONOFF MINI-ZB2GS control via MQTT"
description: "Integrate your SONOFF MINI-ZB2GS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF MINI-ZB2GS

|     |     |
|-----|-----|
| Model | MINI-ZB2GS  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee dual-channel smart switch |
| Exposes | switch (state), power_on_behavior, external_trigger_mode, detach_relay_mode, inching_control_set, network_indicator, turbo_mode, delayed_power_on_state_channel_1, delayed_power_on_state_channel_2, delayed_power_on_time, action |
| Picture | ![SONOFF MINI-ZB2GS](https://www.zigbee2mqtt.io/images/devices/MINI-ZB2GS.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power-on behavior (enum, l1 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l1": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Power-on behavior (enum, l2 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l2": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### External trigger mode (enum, l1 endpoint)
External trigger mode, which can be one of edge, pulse, following(off), following(on). The appropriate triggering mode can be selected according to the type of external switch to achieve a better use experience..
Value can be found in the published state on the `external_trigger_mode_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"external_trigger_mode_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"external_trigger_mode_l1": NEW_VALUE}`.
The possible values are: `edge`, `pulse`, `following(off)`, `following(on)`.

### External trigger mode (enum, l2 endpoint)
External trigger mode, which can be one of edge, pulse, following(off), following(on). The appropriate triggering mode can be selected according to the type of external switch to achieve a better use experience..
Value can be found in the published state on the `external_trigger_mode_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"external_trigger_mode_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"external_trigger_mode_l2": NEW_VALUE}`.
The possible values are: `edge`, `pulse`, `following(off)`, `following(on)`.

### Detach relay mode (composite)
Relay separation mode. Can be used when the load is a smart device (such as smart light), when we control the wall switch, do not want to turn off the power of the smart light, but through a scene command to control the smart light on or off, then we can enable the relay separation mode..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detach_relay_mode": {"detach_relay_outlet1": VALUE, "detach_relay_outlet2": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"detach_relay_mode": ""}`.
- `detach_relay_outlet1` (binary): Enable/disable detach relay. allowed values: `ENABLE` or `DISABLE`
- `detach_relay_outlet2` (binary): Enable/disable detach relay. allowed values: `ENABLE` or `DISABLE`

### Inching control set (composite, l1 endpoint)
Device Inching function Settings. The device will automatically turn off (turn on) after each turn on (turn off) for a specified period of time..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"inching_control_set_l1": {"inching_control_l1": VALUE, "inching_time_l1": VALUE, "inching_mode_l1": VALUE}}`
- `inching_control` (binary): Enable/disable inching function. allowed values: `ENABLE` or `DISABLE`
- `inching_time` (numeric): Delay time for executing a inching action. min value is 0.5, max value is 3599.5, unit is seconds
- `inching_mode` (binary): Set inching off or inching on mode. allowed values: `ON` or `OFF`

### Inching control set (composite, l2 endpoint)
Device Inching function Settings. The device will automatically turn off (turn on) after each turn on (turn off) for a specified period of time..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"inching_control_set_l2": {"inching_control_l2": VALUE, "inching_time_l2": VALUE, "inching_mode_l2": VALUE}}`
- `inching_control` (binary): Enable/disable inching function. allowed values: `ENABLE` or `DISABLE`
- `inching_time` (numeric): Delay time for executing a inching action. min value is 0.5, max value is 3599.5, unit is seconds
- `inching_mode` (binary): Set inching off or inching on mode. allowed values: `ON` or `OFF`

### Network indicator (binary)
Network indicator settings, turn off/on the blue online status network indicator..
Value can be found in the published state on the `network_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"network_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"network_indicator": NEW_VALUE}`.
If value equals `true` network indicator is ON, if `false` OFF.

### Turbo mode (binary)
Enable/disable Radio power turbo mode.
Value can be found in the published state on the `turbo_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"turbo_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"turbo_mode": NEW_VALUE}`.
If value equals `true` turbo mode is ON, if `false` OFF.

### Delayed power on state channel 1 (binary, l1 endpoint)
Delayed Power-on State(Channel 1).
Value can be found in the published state on the `delayed_power_on_state_channel_1_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"delayed_power_on_state_channel_1_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delayed_power_on_state_channel_1_l1": NEW_VALUE}`.
If value equals `true` delayed power on state channel 1 is ON, if `false` OFF.

### Delayed power on state channel 2 (binary, l2 endpoint)
Delayed Power-on State(Channel 2).
Value can be found in the published state on the `delayed_power_on_state_channel_2_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"delayed_power_on_state_channel_2_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delayed_power_on_state_channel_2_l2": NEW_VALUE}`.
If value equals `true` delayed power on state channel 2 is ON, if `false` OFF.

### Delayed power on time (numeric, l1 endpoint)
Delayed Power-on time.
Value can be found in the published state on the `delayed_power_on_time_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"delayed_power_on_time_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delayed_power_on_time_l1": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `3599.5`.
The unit of this value is `seconds`.

### Delayed power on time (numeric, l2 endpoint)
Delayed Power-on time.
Value can be found in the published state on the `delayed_power_on_time_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"delayed_power_on_time_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delayed_power_on_time_l2": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `3599.5`.
The unit of this value is `seconds`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `toggle_l1`, `toggle_l2`.

