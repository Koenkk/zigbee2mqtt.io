---
title: "ONOKOM TCL-1-ZB-S control via MQTT"
description: "Integrate your ONOKOM TCL-1-ZB-S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ONOKOM TCL-1-ZB-S

|     |     |
|-----|-----|
| Model | TCL-1-ZB-S  |
| Vendor  | [ONOKOM](/supported-devices/#v=ONOKOM)  |
| Description | ONOKOM-AIR-TCL-1-MB-B (Adapter for household TCL systems ) |
| Exposes | ac_connected, switch (state), current_temperature, target_temperature, system_mode, mode, outdoor_air_temperature, zb_fan_speed, vertical_vanes, horizontal_vanes, fan_speed, smart_fan_speed, vanes_swing, status_led, quiet_mode, eco_mode, turbo_mode, sleep_mode, ionization, self_cleaning, mold_protection, heating_8_deg, gentle_wind, screen_light, beeper, current_fan_rpm, indoor_heat_exchanger_temperature, outdoor_heat_exchanger_temperature, compressor_power_limit |
| Picture | ![ONOKOM TCL-1-ZB-S](https://www.zigbee2mqtt.io/images/devices/TCL-1-ZB-S.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Ac connected (enum)
AC connected.
Value can be found in the published state on the `ac_connected` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `disconnected`, `invalid_data_recieved`, `connected_with_issues`, `connected`.

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Current temperature (numeric)
Current temperature.
Value can be found in the published state on the `current_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Target temperature (numeric)
Target temperature.
Value can be found in the published state on the `target_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"target_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"target_temperature": NEW_VALUE}`.
The minimal value is `16` and the maximum value is `31`.
The unit of this value is `°C`.

### System mode (enum)
Active mode.
Value can be found in the published state on the `system_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": NEW_VALUE}`.
The possible values are: `off`, `auto`, `cool`, `heat`, `fan_only`, `dry`.

### Mode (enum)
Modes.
Value can be found in the published state on the `mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `heat`, `cool`, `auto`, `dry`, `fan_only`.

### Outdoor air temperature (numeric)
Outdoor air temperature.
Value can be found in the published state on the `outdoor_air_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Zb fan speed (numeric)
Fan speed modes: Auto(5), Low(1), Medium(2), Maximum(3).
Value can be found in the published state on the `zb_fan_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zb_fan_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zb_fan_speed": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `5`.

### Vertical vanes (numeric)
Vertical vanes: Stopped(0), Swing(1), Leftmost position(2), Rightmost position(6).
Value can be found in the published state on the `vertical_vanes` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"vertical_vanes": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"vertical_vanes": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `7`.

### Horizontal vanes (numeric)
Horizontal vanes: Stopped(0), Swing(1), Lowest postion(2), Highest position(6).
Value can be found in the published state on the `horizontal_vanes` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"horizontal_vanes": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"horizontal_vanes": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `6`.

### Fan speed (numeric)
Fan speed: Auto(0), First(1) - Maximum(5).
Value can be found in the published state on the `fan_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fan_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_speed": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5`.

### Smart fan speed (numeric)
Smart fan speed: Auto (0), Quiet mode (1), First (2) ... Maximum (6), Turbo(7).
Value can be found in the published state on the `smart_fan_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"smart_fan_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"smart_fan_speed": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `7`.

### Vanes swing (numeric)
Vanes swing: Stopped(0), Horizontal and vertical swing(1), Horizontal swing(2), Vertical swing(3).
Value can be found in the published state on the `vanes_swing` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"vanes_swing": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"vanes_swing": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3`.

### Status led (enum)
Status LED.
Value can be found in the published state on the `status_led` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"status_led": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"status_led": NEW_VALUE}`.
The possible values are: `normal_mode`, `disabled_if_no_errors`, `disabled_untill_reboot`, `always_disabled`, `green_untill_reboot`, `red_untill_reboot`.

### Quiet mode (binary)
Quiet mode.
Value can be found in the published state on the `quiet_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"quiet_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quiet_mode": NEW_VALUE}`.
If value equals `ON` quiet mode is ON, if `OFF` OFF.

### Eco mode (binary)
Eco mode.
Value can be found in the published state on the `eco_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"eco_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_mode": NEW_VALUE}`.
If value equals `ON` eco mode is ON, if `OFF` OFF.

### Turbo mode (binary)
Turbo mode.
Value can be found in the published state on the `turbo_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"turbo_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"turbo_mode": NEW_VALUE}`.
If value equals `ON` turbo mode is ON, if `OFF` OFF.

### Sleep mode (binary)
Sleep mode.
Value can be found in the published state on the `sleep_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sleep_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sleep_mode": NEW_VALUE}`.
If value equals `ON` sleep mode is ON, if `OFF` OFF.

### Ionization (binary)
Ionization.
Value can be found in the published state on the `ionization` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ionization": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ionization": NEW_VALUE}`.
If value equals `ON` ionization is ON, if `OFF` OFF.

### Self cleaning (binary)
Self cleaning.
Value can be found in the published state on the `self_cleaning` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"self_cleaning": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"self_cleaning": NEW_VALUE}`.
If value equals `ON` self cleaning is ON, if `OFF` OFF.

### Mold protection (binary)
Mold protection.
Value can be found in the published state on the `mold_protection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"mold_protection": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mold_protection": NEW_VALUE}`.
If value equals `ON` mold protection is ON, if `OFF` OFF.

### Heating 8 deg (binary)
Heating 8 deg.
Value can be found in the published state on the `heating_8_deg` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"heating_8_deg": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"heating_8_deg": NEW_VALUE}`.
If value equals `ON` heating 8 deg is ON, if `OFF` OFF.

### Gentle wind (binary)
Gentle wind.
Value can be found in the published state on the `gentle_wind` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"gentle_wind": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gentle_wind": NEW_VALUE}`.
If value equals `ON` gentle wind is ON, if `OFF` OFF.

### Screen light (binary)
Screen light.
Value can be found in the published state on the `screen_light` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"screen_light": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"screen_light": NEW_VALUE}`.
If value equals `ON` screen light is ON, if `OFF` OFF.

### Beeper (binary)
Beeper.
Value can be found in the published state on the `beeper` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"beeper": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"beeper": NEW_VALUE}`.
If value equals `ON` beeper is ON, if `OFF` OFF.

### Current fan rpm (numeric)
Current fan RPM.
Value can be found in the published state on the `current_fan_rpm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.

### Indoor heat exchanger temperature (numeric)
Indoor heat exchanger temperature.
Value can be found in the published state on the `indoor_heat_exchanger_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `°C`.

### Outdoor heat exchanger temperature (numeric)
Outdoor heat exchanger temperature.
Value can be found in the published state on the `outdoor_heat_exchanger_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `°C`.

### Compressor power limit (numeric)
Compressor power limit.
Value can be found in the published state on the `compressor_power_limit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"compressor_power_limit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"compressor_power_limit": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

