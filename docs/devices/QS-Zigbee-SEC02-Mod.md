---
title: "Svetomaniya QS-Zigbee-SEC02-Mod control via MQTT"
description: "Integrate your Svetomaniya QS-Zigbee-SEC02-Mod via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:10:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Svetomaniya QS-Zigbee-SEC02-Mod

|     |     |
|-----|-----|
| Model | QS-Zigbee-SEC02-Mod  |
| Vendor  | [Svetomaniya](/supported-devices/#v=Svetomaniya)  |
| Description | Smart light switch module 2 gang |
| Exposes | switch (state), power_on_behavior, switch_actions, switch_type, operation_mode, scene_id, group_id, min_level, max_level, action |
| Picture | ![Svetomaniya QS-Zigbee-SEC02-Mod](https://www.zigbee2mqtt.io/images/devices/QS-Zigbee-SEC02-Mod.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Switch (1 endpoint)
The current state of this switch is in the published state under the `state_1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_1": "ON"}`, `{"state_1": "OFF"}` or `{"state_1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (2 endpoint)
The current state of this switch is in the published state under the `state_2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_2": "ON"}`, `{"state_2": "OFF"}` or `{"state_2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_2": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power-on behavior (enum, 1 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_1": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Power-on behavior (enum, 2 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_2": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Switch actions (enum, 1 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_1": NEW_VALUE}`.
The possible values are: `off`, `on`.

### Switch actions (enum, 2 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_2": NEW_VALUE}`.
The possible values are: `off`, `on`.

### Switch type (enum, 1 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_1": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `scene`.

### Switch type (enum, 2 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_2": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `scene`.

### Operation mode (enum, 1 endpoint)
Relay decoupled.
Value can be found in the published state on the `operation_mode_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode_1": NEW_VALUE}`.
The possible values are: `control_relay`, `decoupled`.

### Operation mode (enum, 2 endpoint)
Relay decoupled.
Value can be found in the published state on the `operation_mode_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode_2": NEW_VALUE}`.
The possible values are: `control_relay`, `decoupled`.

### Scene id (numeric, 1 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 2 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Group id (numeric, 1 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 2 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Min level (numeric, 1 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_1": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 2 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_2": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 1 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_1": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 2 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_2": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on_1`, `on_2`, `off_1`, `off_2`, `toggle_1`, `toggle_2`, `hold_1`, `hold_2`, `single_1`, `single_2`, `double_1`, `double_2`, `triple_1`, `triple_2`, `quadruple_1`, `quadruple_2`, `quintuple_1`, `quintuple_2`, `release_1`, `release_2`, `brightness_move_to_level_1`, `brightness_move_to_level_2`, `brightness_move_up_1`, `brightness_move_up_2`, `brightness_move_down_1`, `brightness_move_down_2`, `brightness_step_up_1`, `brightness_step_up_2`, `brightness_step_down_1`, `brightness_step_down_2`, `brightness_stop_1`, `brightness_stop_2`, `recall_1`, `recall_2`, `store_1`, `store_2`, `add_1`, `add_2`, `remove_1`, `remove_2`, `remove_all_1`, `remove_all_2`.

