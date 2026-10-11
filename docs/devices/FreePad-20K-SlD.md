---
title: "Slacky-DIY FreePad-20K-SlD control via MQTT"
description: "Integrate your Slacky-DIY FreePad-20K-SlD via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-31T19:13:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Slacky-DIY FreePad-20K-SlD

|     |     |
|-----|-----|
| Model | FreePad-20K-SlD  |
| Vendor  | [Slacky-DIY](/supported-devices/#v=Slacky-DIY)  |
| Description | DIY 20 buttons keypad |
| Exposes | battery, switch_actions, switch_type, scene_id, group_id, min_level, max_level, action |
| Picture | ![Slacky-DIY FreePad-20K-SlD](https://www.zigbee2mqtt.io/images/devices/FreePad-20K-SlD.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
[Original project description](https://github.com/slacky1965/freepad_tlsr_zed)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Switch actions (enum, 1 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_1": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 2 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_2": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 3 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_3": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 4 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_4": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 5 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_5": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 6 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_6": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 7 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_7": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 8 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_8": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 9 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_9": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 10 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_10": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 11 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_11": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 12 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_12": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 13 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_13": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 14 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_14": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 15 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_15": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 16 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_16": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 17 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_17` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_17": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_17": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 18 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_18` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_18": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_18": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 19 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_19` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_19": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_19": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch actions (enum, 20 endpoint)
Actions switch.
Value can be found in the published state on the `switch_actions_20` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_20": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_20": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`.

### Switch type (enum, 1 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_1": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 2 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_2": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 3 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_3": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 4 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_4": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 5 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_5": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 6 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_6": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 7 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_7": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 8 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_8": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 9 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_9": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 10 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_10": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 11 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_11": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 12 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_12": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 13 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_13": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 14 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_14": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 15 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_15": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 16 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_16": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 17 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_17` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_17": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_17": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 18 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_18` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_18": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_18": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 19 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_19` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_19": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_19": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

### Switch type (enum, 20 endpoint)
Switch type.
Value can be found in the published state on the `switch_type_20` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_20": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_20": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`, `brightness_level`, `brightness_level_up`, `brightness_level_down`, `move_to_color_temperature`, `move_to_color_temperature_up`, `move_to_color_temperature_down`, `scene`.

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

### Scene id (numeric, 3 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 4 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_4": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 5 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_5": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 6 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_6": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 7 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_7": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 8 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_8": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 9 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_9": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 10 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_10": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 11 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_11": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 12 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_12": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 13 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_13": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 14 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_14": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 15 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_15": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 16 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_16": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 17 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_17` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_17": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_17": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 18 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_18` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_18": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_18": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 19 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_19` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_19": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_19": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Scene id (numeric, 20 endpoint)
Scene ID.
Value can be found in the published state on the `scene_id_20` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"scene_id_20": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_id_20": NEW_VALUE}`.
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

### Group id (numeric, 3 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 4 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_4": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 5 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_5": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 6 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_6": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 7 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_7": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 8 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_8": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 9 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_9": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 10 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_10": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 11 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_11": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 12 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_12": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 13 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_13": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 14 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_14": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 15 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_15": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 16 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_16": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 17 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_17` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_17": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_17": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 18 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_18` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_18": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_18": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 19 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_19` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_19": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_19": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65527`.

### Group id (numeric, 20 endpoint)
Group ID for scenes.
Value can be found in the published state on the `group_id_20` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"group_id_20": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"group_id_20": NEW_VALUE}`.
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

### Min level (numeric, 3 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_3": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 4 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_4": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 5 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_5": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 6 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_6": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 7 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_7": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 8 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_8": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 9 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_9": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 10 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_10": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 11 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_11": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 12 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_12": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 13 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_13": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 14 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_14": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 15 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_15": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 16 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_16": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 17 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_17` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_17": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_17": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 18 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_18` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_18": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_18": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 19 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_19` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_19": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_19": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Min level (numeric, 20 endpoint)
Minimum level when decreasing.
Value can be found in the published state on the `min_level_20` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_level_20": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_level_20": NEW_VALUE}`.
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

### Max level (numeric, 3 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_3": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 4 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_4": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 5 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_5": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 6 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_6": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 7 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_7": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 8 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_8": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 9 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_9": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 10 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_10": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 11 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_11": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 12 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_12": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 13 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_13": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 14 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_14": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 15 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_15": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 16 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_16": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 17 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_17` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_17": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_17": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 18 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_18` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_18": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_18": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 19 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_19` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_19": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_19": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Max level (numeric, 20 endpoint)
Maximum level when increasing.
Value can be found in the published state on the `max_level_20` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_level_20": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_level_20": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `255`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on_1`, `on_2`, `on_3`, `on_4`, `on_5`, `on_6`, `on_7`, `on_8`, `on_9`, `on_10`, `on_11`, `on_12`, `on_13`, `on_14`, `on_15`, `on_16`, `on_17`, `on_18`, `on_19`, `on_20`, `off_1`, `off_2`, `off_3`, `off_4`, `off_5`, `off_6`, `off_7`, `off_8`, `off_9`, `off_10`, `off_11`, `off_12`, `off_13`, `off_14`, `off_15`, `off_16`, `off_17`, `off_18`, `off_19`, `off_20`, `toggle_1`, `toggle_2`, `toggle_3`, `toggle_4`, `toggle_5`, `toggle_6`, `toggle_7`, `toggle_8`, `toggle_9`, `toggle_10`, `toggle_11`, `toggle_12`, `toggle_13`, `toggle_14`, `toggle_15`, `toggle_16`, `toggle_17`, `toggle_18`, `toggle_19`, `toggle_20`, `hold_1`, `hold_2`, `hold_3`, `hold_4`, `hold_5`, `hold_6`, `hold_7`, `hold_8`, `hold_9`, `hold_10`, `hold_11`, `hold_12`, `hold_13`, `hold_14`, `hold_15`, `hold_16`, `hold_17`, `hold_18`, `hold_19`, `hold_20`, `single_1`, `single_2`, `single_3`, `single_4`, `single_5`, `single_6`, `single_7`, `single_8`, `single_9`, `single_10`, `single_11`, `single_12`, `single_13`, `single_14`, `single_15`, `single_16`, `single_17`, `single_18`, `single_19`, `single_20`, `double_1`, `double_2`, `double_3`, `double_4`, `double_5`, `double_6`, `double_7`, `double_8`, `double_9`, `double_10`, `double_11`, `double_12`, `double_13`, `double_14`, `double_15`, `double_16`, `double_17`, `double_18`, `double_19`, `double_20`, `triple_1`, `triple_2`, `triple_3`, `triple_4`, `triple_5`, `triple_6`, `triple_7`, `triple_8`, `triple_9`, `triple_10`, `triple_11`, `triple_12`, `triple_13`, `triple_14`, `triple_15`, `triple_16`, `triple_17`, `triple_18`, `triple_19`, `triple_20`, `quadruple_1`, `quadruple_2`, `quadruple_3`, `quadruple_4`, `quadruple_5`, `quadruple_6`, `quadruple_7`, `quadruple_8`, `quadruple_9`, `quadruple_10`, `quadruple_11`, `quadruple_12`, `quadruple_13`, `quadruple_14`, `quadruple_15`, `quadruple_16`, `quadruple_17`, `quadruple_18`, `quadruple_19`, `quadruple_20`, `quintuple_1`, `quintuple_2`, `quintuple_3`, `quintuple_4`, `quintuple_5`, `quintuple_6`, `quintuple_7`, `quintuple_8`, `quintuple_9`, `quintuple_10`, `quintuple_11`, `quintuple_12`, `quintuple_13`, `quintuple_14`, `quintuple_15`, `quintuple_16`, `quintuple_17`, `quintuple_18`, `quintuple_19`, `quintuple_20`, `release_1`, `release_2`, `release_3`, `release_4`, `release_5`, `release_6`, `release_7`, `release_8`, `release_9`, `release_10`, `release_11`, `release_12`, `release_13`, `release_14`, `release_15`, `release_16`, `release_17`, `release_18`, `release_19`, `release_20`, `brightness_move_to_level_1`, `brightness_move_to_level_2`, `brightness_move_to_level_3`, `brightness_move_to_level_4`, `brightness_move_to_level_5`, `brightness_move_to_level_6`, `brightness_move_to_level_7`, `brightness_move_to_level_8`, `brightness_move_to_level_9`, `brightness_move_to_level_10`, `brightness_move_to_level_11`, `brightness_move_to_level_12`, `brightness_move_to_level_13`, `brightness_move_to_level_14`, `brightness_move_to_level_15`, `brightness_move_to_level_16`, `brightness_move_to_level_17`, `brightness_move_to_level_18`, `brightness_move_to_level_19`, `brightness_move_to_level_20`, `brightness_move_up_1`, `brightness_move_up_2`, `brightness_move_up_3`, `brightness_move_up_4`, `brightness_move_up_5`, `brightness_move_up_6`, `brightness_move_up_7`, `brightness_move_up_8`, `brightness_move_up_9`, `brightness_move_up_10`, `brightness_move_up_11`, `brightness_move_up_12`, `brightness_move_up_13`, `brightness_move_up_14`, `brightness_move_up_15`, `brightness_move_up_16`, `brightness_move_up_17`, `brightness_move_up_18`, `brightness_move_up_19`, `brightness_move_up_20`, `brightness_move_down_1`, `brightness_move_down_2`, `brightness_move_down_3`, `brightness_move_down_4`, `brightness_move_down_5`, `brightness_move_down_6`, `brightness_move_down_7`, `brightness_move_down_8`, `brightness_move_down_9`, `brightness_move_down_10`, `brightness_move_down_11`, `brightness_move_down_12`, `brightness_move_down_13`, `brightness_move_down_14`, `brightness_move_down_15`, `brightness_move_down_16`, `brightness_move_down_17`, `brightness_move_down_18`, `brightness_move_down_19`, `brightness_move_down_20`, `brightness_step_up_1`, `brightness_step_up_2`, `brightness_step_up_3`, `brightness_step_up_4`, `brightness_step_up_5`, `brightness_step_up_6`, `brightness_step_up_7`, `brightness_step_up_8`, `brightness_step_up_9`, `brightness_step_up_10`, `brightness_step_up_11`, `brightness_step_up_12`, `brightness_step_up_13`, `brightness_step_up_14`, `brightness_step_up_15`, `brightness_step_up_16`, `brightness_step_up_17`, `brightness_step_up_18`, `brightness_step_up_19`, `brightness_step_up_20`, `brightness_step_down_1`, `brightness_step_down_2`, `brightness_step_down_3`, `brightness_step_down_4`, `brightness_step_down_5`, `brightness_step_down_6`, `brightness_step_down_7`, `brightness_step_down_8`, `brightness_step_down_9`, `brightness_step_down_10`, `brightness_step_down_11`, `brightness_step_down_12`, `brightness_step_down_13`, `brightness_step_down_14`, `brightness_step_down_15`, `brightness_step_down_16`, `brightness_step_down_17`, `brightness_step_down_18`, `brightness_step_down_19`, `brightness_step_down_20`, `brightness_stop_1`, `brightness_stop_2`, `brightness_stop_3`, `brightness_stop_4`, `brightness_stop_5`, `brightness_stop_6`, `brightness_stop_7`, `brightness_stop_8`, `brightness_stop_9`, `brightness_stop_10`, `brightness_stop_11`, `brightness_stop_12`, `brightness_stop_13`, `brightness_stop_14`, `brightness_stop_15`, `brightness_stop_16`, `brightness_stop_17`, `brightness_stop_18`, `brightness_stop_19`, `brightness_stop_20`, `color_temperature_move_stop_1`, `color_temperature_move_stop_2`, `color_temperature_move_stop_3`, `color_temperature_move_stop_4`, `color_temperature_move_stop_5`, `color_temperature_move_stop_6`, `color_temperature_move_stop_7`, `color_temperature_move_stop_8`, `color_temperature_move_stop_9`, `color_temperature_move_stop_10`, `color_temperature_move_stop_11`, `color_temperature_move_stop_12`, `color_temperature_move_stop_13`, `color_temperature_move_stop_14`, `color_temperature_move_stop_15`, `color_temperature_move_stop_16`, `color_temperature_move_stop_17`, `color_temperature_move_stop_18`, `color_temperature_move_stop_19`, `color_temperature_move_stop_20`, `color_temperature_move_up_1`, `color_temperature_move_up_2`, `color_temperature_move_up_3`, `color_temperature_move_up_4`, `color_temperature_move_up_5`, `color_temperature_move_up_6`, `color_temperature_move_up_7`, `color_temperature_move_up_8`, `color_temperature_move_up_9`, `color_temperature_move_up_10`, `color_temperature_move_up_11`, `color_temperature_move_up_12`, `color_temperature_move_up_13`, `color_temperature_move_up_14`, `color_temperature_move_up_15`, `color_temperature_move_up_16`, `color_temperature_move_up_17`, `color_temperature_move_up_18`, `color_temperature_move_up_19`, `color_temperature_move_up_20`, `color_temperature_move_down_1`, `color_temperature_move_down_2`, `color_temperature_move_down_3`, `color_temperature_move_down_4`, `color_temperature_move_down_5`, `color_temperature_move_down_6`, `color_temperature_move_down_7`, `color_temperature_move_down_8`, `color_temperature_move_down_9`, `color_temperature_move_down_10`, `color_temperature_move_down_11`, `color_temperature_move_down_12`, `color_temperature_move_down_13`, `color_temperature_move_down_14`, `color_temperature_move_down_15`, `color_temperature_move_down_16`, `color_temperature_move_down_17`, `color_temperature_move_down_18`, `color_temperature_move_down_19`, `color_temperature_move_down_20`, `color_temperature_step_up_1`, `color_temperature_step_up_2`, `color_temperature_step_up_3`, `color_temperature_step_up_4`, `color_temperature_step_up_5`, `color_temperature_step_up_6`, `color_temperature_step_up_7`, `color_temperature_step_up_8`, `color_temperature_step_up_9`, `color_temperature_step_up_10`, `color_temperature_step_up_11`, `color_temperature_step_up_12`, `color_temperature_step_up_13`, `color_temperature_step_up_14`, `color_temperature_step_up_15`, `color_temperature_step_up_16`, `color_temperature_step_up_17`, `color_temperature_step_up_18`, `color_temperature_step_up_19`, `color_temperature_step_up_20`, `color_temperature_step_down_1`, `color_temperature_step_down_2`, `color_temperature_step_down_3`, `color_temperature_step_down_4`, `color_temperature_step_down_5`, `color_temperature_step_down_6`, `color_temperature_step_down_7`, `color_temperature_step_down_8`, `color_temperature_step_down_9`, `color_temperature_step_down_10`, `color_temperature_step_down_11`, `color_temperature_step_down_12`, `color_temperature_step_down_13`, `color_temperature_step_down_14`, `color_temperature_step_down_15`, `color_temperature_step_down_16`, `color_temperature_step_down_17`, `color_temperature_step_down_18`, `color_temperature_step_down_19`, `color_temperature_step_down_20`, `enhanced_move_to_hue_and_saturation_1`, `enhanced_move_to_hue_and_saturation_2`, `enhanced_move_to_hue_and_saturation_3`, `enhanced_move_to_hue_and_saturation_4`, `enhanced_move_to_hue_and_saturation_5`, `enhanced_move_to_hue_and_saturation_6`, `enhanced_move_to_hue_and_saturation_7`, `enhanced_move_to_hue_and_saturation_8`, `enhanced_move_to_hue_and_saturation_9`, `enhanced_move_to_hue_and_saturation_10`, `enhanced_move_to_hue_and_saturation_11`, `enhanced_move_to_hue_and_saturation_12`, `enhanced_move_to_hue_and_saturation_13`, `enhanced_move_to_hue_and_saturation_14`, `enhanced_move_to_hue_and_saturation_15`, `enhanced_move_to_hue_and_saturation_16`, `enhanced_move_to_hue_and_saturation_17`, `enhanced_move_to_hue_and_saturation_18`, `enhanced_move_to_hue_and_saturation_19`, `enhanced_move_to_hue_and_saturation_20`, `move_to_hue_and_saturation_1`, `move_to_hue_and_saturation_2`, `move_to_hue_and_saturation_3`, `move_to_hue_and_saturation_4`, `move_to_hue_and_saturation_5`, `move_to_hue_and_saturation_6`, `move_to_hue_and_saturation_7`, `move_to_hue_and_saturation_8`, `move_to_hue_and_saturation_9`, `move_to_hue_and_saturation_10`, `move_to_hue_and_saturation_11`, `move_to_hue_and_saturation_12`, `move_to_hue_and_saturation_13`, `move_to_hue_and_saturation_14`, `move_to_hue_and_saturation_15`, `move_to_hue_and_saturation_16`, `move_to_hue_and_saturation_17`, `move_to_hue_and_saturation_18`, `move_to_hue_and_saturation_19`, `move_to_hue_and_saturation_20`, `color_hue_step_up_1`, `color_hue_step_up_2`, `color_hue_step_up_3`, `color_hue_step_up_4`, `color_hue_step_up_5`, `color_hue_step_up_6`, `color_hue_step_up_7`, `color_hue_step_up_8`, `color_hue_step_up_9`, `color_hue_step_up_10`, `color_hue_step_up_11`, `color_hue_step_up_12`, `color_hue_step_up_13`, `color_hue_step_up_14`, `color_hue_step_up_15`, `color_hue_step_up_16`, `color_hue_step_up_17`, `color_hue_step_up_18`, `color_hue_step_up_19`, `color_hue_step_up_20`, `color_hue_step_down_1`, `color_hue_step_down_2`, `color_hue_step_down_3`, `color_hue_step_down_4`, `color_hue_step_down_5`, `color_hue_step_down_6`, `color_hue_step_down_7`, `color_hue_step_down_8`, `color_hue_step_down_9`, `color_hue_step_down_10`, `color_hue_step_down_11`, `color_hue_step_down_12`, `color_hue_step_down_13`, `color_hue_step_down_14`, `color_hue_step_down_15`, `color_hue_step_down_16`, `color_hue_step_down_17`, `color_hue_step_down_18`, `color_hue_step_down_19`, `color_hue_step_down_20`, `color_saturation_step_up_1`, `color_saturation_step_up_2`, `color_saturation_step_up_3`, `color_saturation_step_up_4`, `color_saturation_step_up_5`, `color_saturation_step_up_6`, `color_saturation_step_up_7`, `color_saturation_step_up_8`, `color_saturation_step_up_9`, `color_saturation_step_up_10`, `color_saturation_step_up_11`, `color_saturation_step_up_12`, `color_saturation_step_up_13`, `color_saturation_step_up_14`, `color_saturation_step_up_15`, `color_saturation_step_up_16`, `color_saturation_step_up_17`, `color_saturation_step_up_18`, `color_saturation_step_up_19`, `color_saturation_step_up_20`, `color_saturation_step_down_1`, `color_saturation_step_down_2`, `color_saturation_step_down_3`, `color_saturation_step_down_4`, `color_saturation_step_down_5`, `color_saturation_step_down_6`, `color_saturation_step_down_7`, `color_saturation_step_down_8`, `color_saturation_step_down_9`, `color_saturation_step_down_10`, `color_saturation_step_down_11`, `color_saturation_step_down_12`, `color_saturation_step_down_13`, `color_saturation_step_down_14`, `color_saturation_step_down_15`, `color_saturation_step_down_16`, `color_saturation_step_down_17`, `color_saturation_step_down_18`, `color_saturation_step_down_19`, `color_saturation_step_down_20`, `color_loop_set_1`, `color_loop_set_2`, `color_loop_set_3`, `color_loop_set_4`, `color_loop_set_5`, `color_loop_set_6`, `color_loop_set_7`, `color_loop_set_8`, `color_loop_set_9`, `color_loop_set_10`, `color_loop_set_11`, `color_loop_set_12`, `color_loop_set_13`, `color_loop_set_14`, `color_loop_set_15`, `color_loop_set_16`, `color_loop_set_17`, `color_loop_set_18`, `color_loop_set_19`, `color_loop_set_20`, `color_temperature_move_1`, `color_temperature_move_2`, `color_temperature_move_3`, `color_temperature_move_4`, `color_temperature_move_5`, `color_temperature_move_6`, `color_temperature_move_7`, `color_temperature_move_8`, `color_temperature_move_9`, `color_temperature_move_10`, `color_temperature_move_11`, `color_temperature_move_12`, `color_temperature_move_13`, `color_temperature_move_14`, `color_temperature_move_15`, `color_temperature_move_16`, `color_temperature_move_17`, `color_temperature_move_18`, `color_temperature_move_19`, `color_temperature_move_20`, `color_move_1`, `color_move_2`, `color_move_3`, `color_move_4`, `color_move_5`, `color_move_6`, `color_move_7`, `color_move_8`, `color_move_9`, `color_move_10`, `color_move_11`, `color_move_12`, `color_move_13`, `color_move_14`, `color_move_15`, `color_move_16`, `color_move_17`, `color_move_18`, `color_move_19`, `color_move_20`, `hue_move_1`, `hue_move_2`, `hue_move_3`, `hue_move_4`, `hue_move_5`, `hue_move_6`, `hue_move_7`, `hue_move_8`, `hue_move_9`, `hue_move_10`, `hue_move_11`, `hue_move_12`, `hue_move_13`, `hue_move_14`, `hue_move_15`, `hue_move_16`, `hue_move_17`, `hue_move_18`, `hue_move_19`, `hue_move_20`, `hue_stop_1`, `hue_stop_2`, `hue_stop_3`, `hue_stop_4`, `hue_stop_5`, `hue_stop_6`, `hue_stop_7`, `hue_stop_8`, `hue_stop_9`, `hue_stop_10`, `hue_stop_11`, `hue_stop_12`, `hue_stop_13`, `hue_stop_14`, `hue_stop_15`, `hue_stop_16`, `hue_stop_17`, `hue_stop_18`, `hue_stop_19`, `hue_stop_20`, `move_to_saturation_1`, `move_to_saturation_2`, `move_to_saturation_3`, `move_to_saturation_4`, `move_to_saturation_5`, `move_to_saturation_6`, `move_to_saturation_7`, `move_to_saturation_8`, `move_to_saturation_9`, `move_to_saturation_10`, `move_to_saturation_11`, `move_to_saturation_12`, `move_to_saturation_13`, `move_to_saturation_14`, `move_to_saturation_15`, `move_to_saturation_16`, `move_to_saturation_17`, `move_to_saturation_18`, `move_to_saturation_19`, `move_to_saturation_20`, `move_to_hue_1`, `move_to_hue_2`, `move_to_hue_3`, `move_to_hue_4`, `move_to_hue_5`, `move_to_hue_6`, `move_to_hue_7`, `move_to_hue_8`, `move_to_hue_9`, `move_to_hue_10`, `move_to_hue_11`, `move_to_hue_12`, `move_to_hue_13`, `move_to_hue_14`, `move_to_hue_15`, `move_to_hue_16`, `move_to_hue_17`, `move_to_hue_18`, `move_to_hue_19`, `move_to_hue_20`, `stop_move_step_1`, `stop_move_step_2`, `stop_move_step_3`, `stop_move_step_4`, `stop_move_step_5`, `stop_move_step_6`, `stop_move_step_7`, `stop_move_step_8`, `stop_move_step_9`, `stop_move_step_10`, `stop_move_step_11`, `stop_move_step_12`, `stop_move_step_13`, `stop_move_step_14`, `stop_move_step_15`, `stop_move_step_16`, `stop_move_step_17`, `stop_move_step_18`, `stop_move_step_19`, `stop_move_step_20`, `recall_1`, `recall_2`, `recall_3`, `recall_4`, `recall_5`, `recall_6`, `recall_7`, `recall_8`, `recall_9`, `recall_10`, `recall_11`, `recall_12`, `recall_13`, `recall_14`, `recall_15`, `recall_16`, `recall_17`, `recall_18`, `recall_19`, `recall_20`, `store_1`, `store_2`, `store_3`, `store_4`, `store_5`, `store_6`, `store_7`, `store_8`, `store_9`, `store_10`, `store_11`, `store_12`, `store_13`, `store_14`, `store_15`, `store_16`, `store_17`, `store_18`, `store_19`, `store_20`, `add_1`, `add_2`, `add_3`, `add_4`, `add_5`, `add_6`, `add_7`, `add_8`, `add_9`, `add_10`, `add_11`, `add_12`, `add_13`, `add_14`, `add_15`, `add_16`, `add_17`, `add_18`, `add_19`, `add_20`, `remove_1`, `remove_2`, `remove_3`, `remove_4`, `remove_5`, `remove_6`, `remove_7`, `remove_8`, `remove_9`, `remove_10`, `remove_11`, `remove_12`, `remove_13`, `remove_14`, `remove_15`, `remove_16`, `remove_17`, `remove_18`, `remove_19`, `remove_20`, `remove_all_1`, `remove_all_2`, `remove_all_3`, `remove_all_4`, `remove_all_5`, `remove_all_6`, `remove_all_7`, `remove_all_8`, `remove_all_9`, `remove_all_10`, `remove_all_11`, `remove_all_12`, `remove_all_13`, `remove_all_14`, `remove_all_15`, `remove_all_16`, `remove_all_17`, `remove_all_18`, `remove_all_19`, `remove_all_20`.

