---
title: "Svetomaniya Ledron-YK-16-Mod control via MQTT"
description: "Integrate your Svetomaniya Ledron-YK-16-Mod via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:28:03
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Svetomaniya Ledron-YK-16-Mod

|     |     |
|-----|-----|
| Model | Ledron-YK-16-Mod  |
| Vendor  | [Svetomaniya](/supported-devices/#v=Svetomaniya)  |
| Description | Ledron remote control with new firmware |
| Exposes | battery, min_level, max_level, night_level, action |
| Picture | ![Svetomaniya Ledron-YK-16-Mod](https://www.zigbee2mqtt.io/images/devices/Ledron-YK-16-Mod.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


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

### Night level (numeric, 1 endpoint)
Night level in %.
Value can be found in the published state on the `night_level_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_level_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_level_1": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `20`.

### Night level (numeric, 2 endpoint)
Night level in %.
Value can be found in the published state on the `night_level_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_level_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_level_2": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `20`.

### Night level (numeric, 3 endpoint)
Night level in %.
Value can be found in the published state on the `night_level_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_level_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_level_3": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `20`.

### Night level (numeric, 4 endpoint)
Night level in %.
Value can be found in the published state on the `night_level_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_level_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_level_4": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `20`.

### Night level (numeric, 5 endpoint)
Night level in %.
Value can be found in the published state on the `night_level_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_level_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_level_5": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `20`.

### Night level (numeric, 6 endpoint)
Night level in %.
Value can be found in the published state on the `night_level_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_level_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_level_6": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `20`.

### Night level (numeric, 7 endpoint)
Night level in %.
Value can be found in the published state on the `night_level_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_level_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_level_7": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `20`.

### Night level (numeric, 8 endpoint)
Night level in %.
Value can be found in the published state on the `night_level_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"night_level_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_level_8": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `20`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on_1`, `on_2`, `on_3`, `on_4`, `on_5`, `on_6`, `on_7`, `on_8`, `off_1`, `off_2`, `off_3`, `off_4`, `off_5`, `off_6`, `off_7`, `off_8`, `toggle_1`, `toggle_2`, `toggle_3`, `toggle_4`, `toggle_5`, `toggle_6`, `toggle_7`, `toggle_8`, `brightness_move_to_level_1`, `brightness_move_to_level_2`, `brightness_move_to_level_3`, `brightness_move_to_level_4`, `brightness_move_to_level_5`, `brightness_move_to_level_6`, `brightness_move_to_level_7`, `brightness_move_to_level_8`, `brightness_move_up_1`, `brightness_move_up_2`, `brightness_move_up_3`, `brightness_move_up_4`, `brightness_move_up_5`, `brightness_move_up_6`, `brightness_move_up_7`, `brightness_move_up_8`, `brightness_move_down_1`, `brightness_move_down_2`, `brightness_move_down_3`, `brightness_move_down_4`, `brightness_move_down_5`, `brightness_move_down_6`, `brightness_move_down_7`, `brightness_move_down_8`, `brightness_step_up_1`, `brightness_step_up_2`, `brightness_step_up_3`, `brightness_step_up_4`, `brightness_step_up_5`, `brightness_step_up_6`, `brightness_step_up_7`, `brightness_step_up_8`, `brightness_step_down_1`, `brightness_step_down_2`, `brightness_step_down_3`, `brightness_step_down_4`, `brightness_step_down_5`, `brightness_step_down_6`, `brightness_step_down_7`, `brightness_step_down_8`, `brightness_stop_1`, `brightness_stop_2`, `brightness_stop_3`, `brightness_stop_4`, `brightness_stop_5`, `brightness_stop_6`, `brightness_stop_7`, `brightness_stop_8`, `color_temperature_move_stop_1`, `color_temperature_move_stop_2`, `color_temperature_move_stop_3`, `color_temperature_move_stop_4`, `color_temperature_move_stop_5`, `color_temperature_move_stop_6`, `color_temperature_move_stop_7`, `color_temperature_move_stop_8`, `color_temperature_move_up_1`, `color_temperature_move_up_2`, `color_temperature_move_up_3`, `color_temperature_move_up_4`, `color_temperature_move_up_5`, `color_temperature_move_up_6`, `color_temperature_move_up_7`, `color_temperature_move_up_8`, `color_temperature_move_down_1`, `color_temperature_move_down_2`, `color_temperature_move_down_3`, `color_temperature_move_down_4`, `color_temperature_move_down_5`, `color_temperature_move_down_6`, `color_temperature_move_down_7`, `color_temperature_move_down_8`, `color_temperature_step_up_1`, `color_temperature_step_up_2`, `color_temperature_step_up_3`, `color_temperature_step_up_4`, `color_temperature_step_up_5`, `color_temperature_step_up_6`, `color_temperature_step_up_7`, `color_temperature_step_up_8`, `color_temperature_step_down_1`, `color_temperature_step_down_2`, `color_temperature_step_down_3`, `color_temperature_step_down_4`, `color_temperature_step_down_5`, `color_temperature_step_down_6`, `color_temperature_step_down_7`, `color_temperature_step_down_8`, `enhanced_move_to_hue_and_saturation_1`, `enhanced_move_to_hue_and_saturation_2`, `enhanced_move_to_hue_and_saturation_3`, `enhanced_move_to_hue_and_saturation_4`, `enhanced_move_to_hue_and_saturation_5`, `enhanced_move_to_hue_and_saturation_6`, `enhanced_move_to_hue_and_saturation_7`, `enhanced_move_to_hue_and_saturation_8`, `move_to_hue_and_saturation_1`, `move_to_hue_and_saturation_2`, `move_to_hue_and_saturation_3`, `move_to_hue_and_saturation_4`, `move_to_hue_and_saturation_5`, `move_to_hue_and_saturation_6`, `move_to_hue_and_saturation_7`, `move_to_hue_and_saturation_8`, `color_hue_step_up_1`, `color_hue_step_up_2`, `color_hue_step_up_3`, `color_hue_step_up_4`, `color_hue_step_up_5`, `color_hue_step_up_6`, `color_hue_step_up_7`, `color_hue_step_up_8`, `color_hue_step_down_1`, `color_hue_step_down_2`, `color_hue_step_down_3`, `color_hue_step_down_4`, `color_hue_step_down_5`, `color_hue_step_down_6`, `color_hue_step_down_7`, `color_hue_step_down_8`, `color_saturation_step_up_1`, `color_saturation_step_up_2`, `color_saturation_step_up_3`, `color_saturation_step_up_4`, `color_saturation_step_up_5`, `color_saturation_step_up_6`, `color_saturation_step_up_7`, `color_saturation_step_up_8`, `color_saturation_step_down_1`, `color_saturation_step_down_2`, `color_saturation_step_down_3`, `color_saturation_step_down_4`, `color_saturation_step_down_5`, `color_saturation_step_down_6`, `color_saturation_step_down_7`, `color_saturation_step_down_8`, `color_loop_set_1`, `color_loop_set_2`, `color_loop_set_3`, `color_loop_set_4`, `color_loop_set_5`, `color_loop_set_6`, `color_loop_set_7`, `color_loop_set_8`, `color_temperature_move_1`, `color_temperature_move_2`, `color_temperature_move_3`, `color_temperature_move_4`, `color_temperature_move_5`, `color_temperature_move_6`, `color_temperature_move_7`, `color_temperature_move_8`, `color_move_1`, `color_move_2`, `color_move_3`, `color_move_4`, `color_move_5`, `color_move_6`, `color_move_7`, `color_move_8`, `hue_move_1`, `hue_move_2`, `hue_move_3`, `hue_move_4`, `hue_move_5`, `hue_move_6`, `hue_move_7`, `hue_move_8`, `hue_stop_1`, `hue_stop_2`, `hue_stop_3`, `hue_stop_4`, `hue_stop_5`, `hue_stop_6`, `hue_stop_7`, `hue_stop_8`, `move_to_saturation_1`, `move_to_saturation_2`, `move_to_saturation_3`, `move_to_saturation_4`, `move_to_saturation_5`, `move_to_saturation_6`, `move_to_saturation_7`, `move_to_saturation_8`, `move_to_hue_1`, `move_to_hue_2`, `move_to_hue_3`, `move_to_hue_4`, `move_to_hue_5`, `move_to_hue_6`, `move_to_hue_7`, `move_to_hue_8`, `stop_move_step_1`, `stop_move_step_2`, `stop_move_step_3`, `stop_move_step_4`, `stop_move_step_5`, `stop_move_step_6`, `stop_move_step_7`, `stop_move_step_8`.

