---
title: "Tuya M9Pro control via MQTT"
description: "Integrate your Tuya M9Pro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya M9Pro

|     |     |
|-----|-----|
| Model | M9Pro  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart 4 gang switch, curtain, smart light or scene. 1x thermostat control |
| Exposes | switch (state), mode, name, scene_name, dimmer_name, dimmer_switch, curtain_name, curtain_switch, power_on_behavior, show_weather, backlight, show_screen, thermostat, thermostat_name, scene_switch, temperature_1, condition_1, action |
| Picture | ![Tuya M9Pro](https://www.zigbee2mqtt.io/images/devices/M9Pro.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

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

### Mode (enum, l1 endpoint)
Switch 1 mode.
Value can be found in the published state on the `mode_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode_l1": NEW_VALUE}`.
The possible values are: `switch`, `scene`, `smart_light`, `curtain`.

### Mode (enum, l2 endpoint)
Switch 2 mode.
Value can be found in the published state on the `mode_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode_l2": NEW_VALUE}`.
The possible values are: `switch`, `scene`, `smart_light`, `curtain`.

### Mode (enum, l3 endpoint)
Switch 3 mode.
Value can be found in the published state on the `mode_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode_l3": NEW_VALUE}`.
The possible values are: `switch`, `scene`, `smart_light`, `curtain`.

### Mode (enum, l4 endpoint)
Switch 4 mode.
Value can be found in the published state on the `mode_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode_l4": NEW_VALUE}`.
The possible values are: `switch`, `scene`, `smart_light`, `curtain`, `thermostat`.

### Name (text, l1 endpoint)
Name for Switch 1 (max 8 chars displayed).
Value can be found in the published state on the `name_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"name_l1": NEW_VALUE}`.

### Name (text, l2 endpoint)
Name for Switch 2 (max 8 chars displayed).
Value can be found in the published state on the `name_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"name_l2": NEW_VALUE}`.

### Name (text, l3 endpoint)
Name for Switch 3 (max 8 chars displayed).
Value can be found in the published state on the `name_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"name_l3": NEW_VALUE}`.

### Name (text, l4 endpoint)
Name for Switch 4 (max 8 chars displayed).
Value can be found in the published state on the `name_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"name_l4": NEW_VALUE}`.

### Scene name (text, l1 endpoint)
Scene name for switch 1 (max 8 chars displayed).
Value can be found in the published state on the `scene_name_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l1": NEW_VALUE}`.

### Scene name (text, l2 endpoint)
Scene name for switch 2 (max 8 chars displayed).
Value can be found in the published state on the `scene_name_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l2": NEW_VALUE}`.

### Scene name (text, l3 endpoint)
Scene name for switch 3 (max 8 chars displayed).
Value can be found in the published state on the `scene_name_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l3": NEW_VALUE}`.

### Scene name (text, l4 endpoint)
Scene name for switch 4 (max 8 chars displayed).
Value can be found in the published state on the `scene_name_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_name_l4": NEW_VALUE}`.

### Dimmer name (text, l1 endpoint)
Smart Light name for switch 1 (max 8 chars displayed).
Value can be found in the published state on the `dimmer_name_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmer_name_l1": NEW_VALUE}`.

### Dimmer name (text, l2 endpoint)
Smart Light name for switch 2 (max 8 chars displayed).
Value can be found in the published state on the `dimmer_name_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmer_name_l2": NEW_VALUE}`.

### Dimmer name (text, l3 endpoint)
Smart Light name for switch 3 (max 8 chars displayed).
Value can be found in the published state on the `dimmer_name_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmer_name_l3": NEW_VALUE}`.

### Dimmer name (text, l4 endpoint)
Smart Light name for switch 4 (max 8 chars displayed).
Value can be found in the published state on the `dimmer_name_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmer_name_l4": NEW_VALUE}`.

### Dimmer switch (binary, l1 endpoint)
Smart Light - toggle switch 1.
Value can be found in the published state on the `dimmer_switch_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmer_switch_l1": NEW_VALUE}`.
If value equals `ON` dimmer switch is ON, if `OFF` OFF.

### Dimmer switch (binary, l2 endpoint)
Smart Light - toggle switch 2.
Value can be found in the published state on the `dimmer_switch_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmer_switch_l2": NEW_VALUE}`.
If value equals `ON` dimmer switch is ON, if `OFF` OFF.

### Dimmer switch (binary, l3 endpoint)
Smart Light - toggle switch 3.
Value can be found in the published state on the `dimmer_switch_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmer_switch_l3": NEW_VALUE}`.
If value equals `ON` dimmer switch is ON, if `OFF` OFF.

### Dimmer switch (binary, l4 endpoint)
Smart Light - toggle switch 4.
Value can be found in the published state on the `dimmer_switch_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmer_switch_l4": NEW_VALUE}`.
If value equals `ON` dimmer switch is ON, if `OFF` OFF.

### Curtain name (text, l1 endpoint)
Curtain name for switch 1 (max 8 chars displayed).
Value can be found in the published state on the `curtain_name_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"curtain_name_l1": NEW_VALUE}`.

### Curtain name (text, l2 endpoint)
Curtain name for switch 2 (max 8 chars displayed).
Value can be found in the published state on the `curtain_name_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"curtain_name_l2": NEW_VALUE}`.

### Curtain name (text, l3 endpoint)
Curtain name for switch 3 (max 8 chars displayed).
Value can be found in the published state on the `curtain_name_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"curtain_name_l3": NEW_VALUE}`.

### Curtain name (text, l4 endpoint)
Curtain name for switch 4 (max 8 chars displayed).
Value can be found in the published state on the `curtain_name_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"curtain_name_l4": NEW_VALUE}`.

### Curtain switch (binary, l1 endpoint)
Curtain - toggle switch 1.
Value can be found in the published state on the `curtain_switch_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"curtain_switch_l1": NEW_VALUE}`.
If value equals `ON` curtain switch is ON, if `OFF` OFF.

### Curtain switch (binary, l2 endpoint)
Curtain - toggle switch 2.
Value can be found in the published state on the `curtain_switch_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"curtain_switch_l2": NEW_VALUE}`.
If value equals `ON` curtain switch is ON, if `OFF` OFF.

### Curtain switch (binary, l3 endpoint)
Curtain - toggle switch 3.
Value can be found in the published state on the `curtain_switch_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"curtain_switch_l3": NEW_VALUE}`.
If value equals `ON` curtain switch is ON, if `OFF` OFF.

### Curtain switch (binary, l4 endpoint)
Curtain - toggle switch 4.
Value can be found in the published state on the `curtain_switch_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"curtain_switch_l4": NEW_VALUE}`.
If value equals `ON` curtain switch is ON, if `OFF` OFF.

### Power-on behavior (enum)
Whole panel override..
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Power-on behavior (enum, l1 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l1": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Power-on behavior (enum, l2 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l2": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Power-on behavior (enum, l3 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_l3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l3": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Power-on behavior (enum, l4 endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_l4` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_l4": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Show weather (binary)
Show time and weather (on) or just switch names (off).
Value can be found in the published state on the `show_weather` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"show_weather": NEW_VALUE}`.
If value equals `ON` show weather is ON, if `OFF` OFF.

### Backlight (binary)
Button LED backlights.
Value can be found in the published state on the `backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight": NEW_VALUE}`.
If value equals `ON` backlight is ON, if `OFF` OFF.

### Show screen (enum)
Screen display mode.
Value can be found in the published state on the `show_screen` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"show_screen": NEW_VALUE}`.
The possible values are: `motion`, `on_press`, `on`.

### Thermostat (binary)
Thermostat - toggle switch.
Value can be found in the published state on the `thermostat` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"thermostat": NEW_VALUE}`.
If value equals `ON` thermostat is ON, if `OFF` OFF.

### Thermostat name (text)
Name for Thermostat (max 8 chars displayed).
Value can be found in the published state on the `thermostat_name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"thermostat_name": NEW_VALUE}`.

### Scene switch (enum)
Scene Switch.
Value can be found in the published state on the `scene_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_switch": NEW_VALUE}`.
The possible values are: `switch_1`, `switch_2`, `switch_3`, `switch_4`, `switch_5`, `switch_6`, `switch_7`, `switch_8`, `switch_9`.

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
The possible values are: `sunny`, `heavy_rain`, `cloudy`, `sandstorm`, `light_snow`, `snow`, `freezing_fog`, `rainstorm`, `shower`, `dust`, `spit`, `sleet`, `yin`, `freezing_rain`, `rain`, `fog`, `heavy_shower`, `heavy_snow`, `heavy_downpour`, `blizzard`, `hailstone`, `snow_shower`, `haze`, `thunder_shower`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `scene_0`, `scene_1`, `scene_2`, `scene_3`, `scene_4`, `scene_5`, `scene_6`, `scene_7`, `scene_8`.

