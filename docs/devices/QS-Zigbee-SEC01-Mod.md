---
title: "Svetomaniya QS-Zigbee-SEC01-Mod control via MQTT"
description: "Integrate your Svetomaniya QS-Zigbee-SEC01-Mod via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:06:49
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Svetomaniya QS-Zigbee-SEC01-Mod

|     |     |
|-----|-----|
| Model | QS-Zigbee-SEC01-Mod  |
| Vendor  | [Svetomaniya](/supported-devices/#v=Svetomaniya)  |
| Description | Smart light switch module 1 gang |
| Exposes | switch (state), power_on_behavior, switch_actions, switch_type, operation_mode, scene_id, group_id, min_level, max_level, action |
| Picture | ![Svetomaniya QS-Zigbee-SEC01-Mod](https://www.zigbee2mqtt.io/images/devices/QS-Zigbee-SEC01-Mod.png) |


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

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Switch actions (enum)
Actions switch.
Value can be found in the published state on the `switch_actions` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions": NEW_VALUE}`.
The possible values are: `off`, `on`.

### Switch type (enum)
Switch type.
Value can be found in the published state on the `switch_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `scene`.

### Operation mode (enum)
Relay decoupled.
Value can be found in the published state on the `operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `control_relay`, `decoupled`.

### Scene id (numeric)
Scene ID.
Value can be found in the published state on the `scene_id` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Group id (numeric)
Group ID for scenes.
Value can be found in the published state on the `group_id` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Min level (numeric)
Minimum level when decreasing.
Value can be found in the published state on the `min_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric)
Maximum level when increasing.
Value can be found in the published state on the `max_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `toggle`, `hold`, `single`, `double`, `triple`, `quadruple`, `quintuple`, `release`, `brightness_move_to_level`, `brightness_move_up`, `brightness_move_down`, `brightness_step_up`, `brightness_step_down`, `brightness_stop`, `recall`, `store`, `add`, `remove`, `remove_all`.

