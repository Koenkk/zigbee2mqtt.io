---
title: "Tuya F3-Pro control via MQTT"
description: "Integrate your Tuya F3-Pro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya F3-Pro

|     |     |
|-----|-----|
| Model | F3-Pro  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart panel, 4-gang switch with scene, dimmer, and curtain control |
| Exposes | backlight_switch, switch (state), switch_name, scene_name, cover_name, led_switch_name, led_switch, led_warm, led_bright, cover_state, cover_position, temperature_1, condition_1, action |
| Picture | ![Tuya F3-Pro](https://www.zigbee2mqtt.io/images/devices/F3-Pro.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Backlight switch (binary)
Panel screen on/off.
Value can be found in the published state on the `backlight_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_switch": NEW_VALUE}`.
If value equals `ON` backlight switch is ON, if `OFF` OFF.

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l4 endpoint)
The current state of this switch is in the published state under the `state_l4` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l4": "ON"}`, `{"state_l4": "OFF"}` or `{"state_l4": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch name (text, l1 endpoint)
Name for Switch 1.
Value can be found in the published state on the `switch_name_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_name_l1": NEW_VALUE}`.

### Switch name (text, l2 endpoint)
Name for Switch 2.
Value can be found in the published state on the `switch_name_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_name_l2": NEW_VALUE}`.

### Switch name (text, l3 endpoint)
Name for Switch 3.
Value can be found in the published state on the `switch_name_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_name_l3": NEW_VALUE}`.

### Switch name (text, l4 endpoint)
Name for Switch 4.
Value can be found in the published state on the `switch_name_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_name_l4": NEW_VALUE}`.

### Scene name (text, l1 endpoint)
Name for Scene 1.
Value can be found in the published state on the `scene_name_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l1": NEW_VALUE}`.

### Scene name (text, l2 endpoint)
Name for Scene 2.
Value can be found in the published state on the `scene_name_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l2": NEW_VALUE}`.

### Scene name (text, l3 endpoint)
Name for Scene 3.
Value can be found in the published state on the `scene_name_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l3": NEW_VALUE}`.

### Scene name (text, l4 endpoint)
Name for Scene 4.
Value can be found in the published state on the `scene_name_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l4": NEW_VALUE}`.

### Scene name (text, l5 endpoint)
Name for Scene 5.
Value can be found in the published state on the `scene_name_l5` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l5": NEW_VALUE}`.

### Scene name (text, l6 endpoint)
Name for Scene 6.
Value can be found in the published state on the `scene_name_l6` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l6": NEW_VALUE}`.

### Scene name (text, l7 endpoint)
Name for Scene 7.
Value can be found in the published state on the `scene_name_l7` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l7": NEW_VALUE}`.

### Scene name (text, l8 endpoint)
Name for Scene 8.
Value can be found in the published state on the `scene_name_l8` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l8": NEW_VALUE}`.

### Cover name (text, l1 endpoint)
Name for Cover 1.
Value can be found in the published state on the `cover_name_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_name_l1": NEW_VALUE}`.

### Cover name (text, l2 endpoint)
Name for Cover 2.
Value can be found in the published state on the `cover_name_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_name_l2": NEW_VALUE}`.

### Cover name (text, l3 endpoint)
Name for Cover 3.
Value can be found in the published state on the `cover_name_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_name_l3": NEW_VALUE}`.

### Cover name (text, l4 endpoint)
Name for Cover 4.
Value can be found in the published state on the `cover_name_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_name_l4": NEW_VALUE}`.

### Led switch name (text, l1 endpoint)
Name for LED Switch 1.
Value can be found in the published state on the `led_switch_name_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_switch_name_l1": NEW_VALUE}`.

### Led switch name (text, l2 endpoint)
Name for LED Switch 2.
Value can be found in the published state on the `led_switch_name_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_switch_name_l2": NEW_VALUE}`.

### Led switch name (text, l3 endpoint)
Name for LED Switch 3.
Value can be found in the published state on the `led_switch_name_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_switch_name_l3": NEW_VALUE}`.

### Led switch name (text, l4 endpoint)
Name for LED Switch 4.
Value can be found in the published state on the `led_switch_name_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_switch_name_l4": NEW_VALUE}`.

### Led switch (binary, l1 endpoint)
Switch of LED 1.
Value can be found in the published state on the `led_switch_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_switch_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_switch_l1": NEW_VALUE}`.
If value equals `ON` led switch is ON, if `OFF` OFF.

### Led warm (numeric, l1 endpoint)
Color temperature of LED 1.
Value can be found in the published state on the `led_warm_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_warm_l1": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.

### Led bright (numeric, l1 endpoint)
Brightness of LED 1.
Value can be found in the published state on the `led_bright_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_bright_l1": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.

### Led switch (binary, l2 endpoint)
Switch of LED 2.
Value can be found in the published state on the `led_switch_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_switch_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_switch_l2": NEW_VALUE}`.
If value equals `ON` led switch is ON, if `OFF` OFF.

### Led warm (numeric, l2 endpoint)
Color temperature of LED 2.
Value can be found in the published state on the `led_warm_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_warm_l2": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.

### Led bright (numeric, l2 endpoint)
Brightness of LED 2.
Value can be found in the published state on the `led_bright_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_bright_l2": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.

### Led switch (binary, l3 endpoint)
Switch of LED 3.
Value can be found in the published state on the `led_switch_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_switch_l3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_switch_l3": NEW_VALUE}`.
If value equals `ON` led switch is ON, if `OFF` OFF.

### Led warm (numeric, l3 endpoint)
Color temperature of LED 3.
Value can be found in the published state on the `led_warm_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_warm_l3": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.

### Led bright (numeric, l3 endpoint)
Brightness of LED 3.
Value can be found in the published state on the `led_bright_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_bright_l3": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.

### Led switch (binary, l4 endpoint)
Switch of LED 4.
Value can be found in the published state on the `led_switch_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_switch_l4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_switch_l4": NEW_VALUE}`.
If value equals `ON` led switch is ON, if `OFF` OFF.

### Led warm (numeric, l4 endpoint)
Color temperature of LED 4.
Value can be found in the published state on the `led_warm_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_warm_l4": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.

### Led bright (numeric, l4 endpoint)
Brightness of LED 4.
Value can be found in the published state on the `led_bright_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_bright_l4": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.

### Cover state (enum, l1 endpoint)
State of Cover 1.
Value can be found in the published state on the `cover_state_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_state_l1": NEW_VALUE}`.
The possible values are: `open`, `stop`, `close`.

### Cover position (numeric, l1 endpoint)
Position of Cover 1.
Value can be found in the published state on the `cover_position_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_position_l1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Cover state (enum, l2 endpoint)
State of Cover 2.
Value can be found in the published state on the `cover_state_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_state_l2": NEW_VALUE}`.
The possible values are: `open`, `stop`, `close`.

### Cover position (numeric, l2 endpoint)
Position of Cover 2.
Value can be found in the published state on the `cover_position_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_position_l2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Cover state (enum, l3 endpoint)
State of Cover 3.
Value can be found in the published state on the `cover_state_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_state_l3": NEW_VALUE}`.
The possible values are: `open`, `stop`, `close`.

### Cover position (numeric, l3 endpoint)
Position of Cover 3.
Value can be found in the published state on the `cover_position_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_position_l3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Cover state (enum, l4 endpoint)
State of Cover 4.
Value can be found in the published state on the `cover_state_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_state_l4": NEW_VALUE}`.
The possible values are: `open`, `stop`, `close`.

### Cover position (numeric, l4 endpoint)
Position of Cover 4.
Value can be found in the published state on the `cover_position_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cover_position_l4": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature 1 (numeric)
Temperature.
Value can be found in the published state on the `temperature_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_1": NEW_VALUE}`.
The minimal value is `-65` and the maximum value is `99`.

### Condition 1 (enum)
Weather condition.
Value can be found in the published state on the `condition_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"condition_1": NEW_VALUE}`.
The possible values are: `heavy_rain`, `thunderstorm`, `dust_storm`, `light_snow`, `snow`, `freezing_fog`, `shower`, `floating_dust`, `thunder_and_lighting`, `light_shower`, `rain`, `rain_and_snow`, `dust_bowl`, `ice_pellets`, `strong_dust_storms`, `sandy`, `light_to_moderate_rain`, `mostly_sunny`, `sunny`, `haze`, `heavy_shower`, `heavy_snow`, `very_heavy_rain`, `blizzard`, `ice_pod`, `light_to_moderate_snow`, `few_clouds`, `light_snow_showers`, `moderate_snow`, `cloudy`, `icy_needles`, `thunderstorm_with_ice_pods`, `freezing_rain`, `snow_shower`, `light_rain`, `thunder`, `moderate_rain`, `moderate_to_heavy_rain`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `scene_1`, `scene_2`, `scene_3`, `scene_4`, `scene_5`, `scene_6`, `scene_7`, `scene_8`.

