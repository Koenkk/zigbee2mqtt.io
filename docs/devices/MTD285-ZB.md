---
title: "Wenzhi MTD285-ZB control via MQTT"
description: "Integrate your Wenzhi MTD285-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Wenzhi MTD285-ZB

|     |     |
|-----|-----|
| Model | MTD285-ZB  |
| Vendor  | [Wenzhi](/supported-devices/#v=Wenzhi)  |
| Description | 24GHz mmWave human presence sensor |
| Exposes | presence, state, illuminance, min_distance, max_distance, target_distance, gate_enable_01, gate_enable_02, gate_enable_03, gate_enable_04, gate_enable_05, gate_enable_06, gate_enable_07, gate_enable_08, gate_enable_09, gate_enable_10, gate_enable_11, configuration_gate, move_threshold, presence_threshold, nearest_target_gate, target_countdown, target_velocity, debug_switch, led_mode, delay_time, block_time, judge_logic, start_noise_collect, noise_collect_status, device_control, presence_sensitivity, move_sensitivity, scene_mode, illuminance_report, move_detect, distance_report, speed_report |
| Picture | ![Wenzhi MTD285-ZB](https://www.zigbee2mqtt.io/images/devices/MTD285-ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### State (enum)
Presence state.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `presence`, `move`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Min distance (numeric)
Minimum detection distance.
Value can be found in the published state on the `min_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `8.4`.
The unit of this value is `m`.

### Max distance (numeric)
Maximum detection distance.
Value can be found in the published state on the `max_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `8.4`.
The unit of this value is `m`.

### Target distance (numeric)
Target distance.
Value can be found in the published state on the `target_distance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `9.9`.
The unit of this value is `m`.

### Gate enable 01 (enum)
Distance gate 1 enable.
Value can be found in the published state on the `gate_enable_01` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gate_enable_01": NEW_VALUE}`.
The possible values are: `disable`, `enable`.

### Gate enable 02 (enum)
Distance gate 2 enable.
Value can be found in the published state on the `gate_enable_02` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gate_enable_02": NEW_VALUE}`.
The possible values are: `disable`, `enable`.

### Gate enable 03 (enum)
Distance gate 3 enable.
Value can be found in the published state on the `gate_enable_03` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gate_enable_03": NEW_VALUE}`.
The possible values are: `disable`, `enable`.

### Gate enable 04 (enum)
Distance gate 4 enable.
Value can be found in the published state on the `gate_enable_04` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gate_enable_04": NEW_VALUE}`.
The possible values are: `disable`, `enable`.

### Gate enable 05 (enum)
Distance gate 5 enable.
Value can be found in the published state on the `gate_enable_05` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gate_enable_05": NEW_VALUE}`.
The possible values are: `disable`, `enable`.

### Gate enable 06 (enum)
Distance gate 6 enable.
Value can be found in the published state on the `gate_enable_06` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gate_enable_06": NEW_VALUE}`.
The possible values are: `disable`, `enable`.

### Gate enable 07 (enum)
Distance gate 7 enable.
Value can be found in the published state on the `gate_enable_07` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gate_enable_07": NEW_VALUE}`.
The possible values are: `disable`, `enable`.

### Gate enable 08 (enum)
Distance gate 8 enable.
Value can be found in the published state on the `gate_enable_08` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gate_enable_08": NEW_VALUE}`.
The possible values are: `disable`, `enable`.

### Gate enable 09 (enum)
Distance gate 9 enable.
Value can be found in the published state on the `gate_enable_09` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gate_enable_09": NEW_VALUE}`.
The possible values are: `disable`, `enable`.

### Gate enable 10 (enum)
Distance gate 10 enable.
Value can be found in the published state on the `gate_enable_10` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gate_enable_10": NEW_VALUE}`.
The possible values are: `disable`, `enable`.

### Gate enable 11 (enum)
Distance gate 11 enable.
Value can be found in the published state on the `gate_enable_11` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"gate_enable_11": NEW_VALUE}`.
The possible values are: `disable`, `enable`.

### Configuration gate (numeric)
Select gate for threshold config.
Value can be found in the published state on the `configuration_gate` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"configuration_gate": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `11`.

### Move threshold (numeric)
Configure motion detection threshold.
Value can be found in the published state on the `move_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"move_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.

### Presence threshold (numeric)
Configure presence detection threshold.
Value can be found in the published state on the `presence_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.

### Nearest target gate (numeric)
Nearest active gate.
Value can be found in the published state on the `nearest_target_gate` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `11`.

### Target countdown (numeric)
Target timeout countdown (debug only).
Value can be found in the published state on the `target_countdown` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `s`.

### Target velocity (numeric)
Target speed with direction.
Value can be found in the published state on the `target_velocity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-9.99` and the maximum value is `9.99`.
The unit of this value is `m/s`.

### Debug switch (binary)
Debug mode toggle.
Value can be found in the published state on the `debug_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"debug_switch": NEW_VALUE}`.
If value equals `on` debug switch is ON, if `off` OFF.

### Led mode (enum)
LED indicator mode.
Value can be found in the published state on the `led_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_mode": NEW_VALUE}`.
The possible values are: `silence`, `status`.

### Delay time (numeric)
Departure delay time.
Value can be found in the published state on the `delay_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delay_time": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `3600`.
The unit of this value is `s`.

### Block time (numeric)
Block time after unoccupancy.
Value can be found in the published state on the `block_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"block_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `s`.

### Judge logic (enum)
Presence detection algorithm.
Value can be found in the published state on the `judge_logic` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"judge_logic": NEW_VALUE}`.
The possible values are: `large_move`, `small_move`, `custom_move`.

### Start noise collect (enum)
Start environmental background noise collection and auto adjust thresholds.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"start_noise_collect": NEW_VALUE}`.
The possible values are: `start`.

### Noise collect status (enum)
Environmental background noise collection status.
Value can be found in the published state on the `noise_collect_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `start`, `ongoing`, `complete`.

### Device control (enum)
Device control commands.
Value can be found in the published state on the `device_control` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_control": NEW_VALUE}`.
The possible values are: `no_action`, `restart`, `reset_param`.

### Presence sensitivity (enum)
Presence sensitivity.
Value can be found in the published state on the `presence_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_sensitivity": NEW_VALUE}`.
The possible values are: `high`, `medium`, `low`, `custom`.

### Move sensitivity (enum)
Motion sensitivity.
Value can be found in the published state on the `move_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"move_sensitivity": NEW_VALUE}`.
The possible values are: `high`, `medium`, `low`, `custom`.

### Scene mode (enum)
Scene mode preset.
Value can be found in the published state on the `scene_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_mode": NEW_VALUE}`.
The possible values are: `custom`, `toilet`, `kitchen`, `corridor`, `bedroom`, `living_room`, `meeting_room`.

### Illuminance report (binary)
Illuminance reporting toggle.
Value can be found in the published state on the `illuminance_report` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_report": NEW_VALUE}`.
If value equals `on` illuminance report is ON, if `off` OFF.

### Move detect (binary)
Motion detection toggle.
Value can be found in the published state on the `move_detect` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"move_detect": NEW_VALUE}`.
If value equals `on` move detect is ON, if `off` OFF.

### Distance report (binary)
Distance reporting toggle.
Value can be found in the published state on the `distance_report` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"distance_report": NEW_VALUE}`.
If value equals `on` distance report is ON, if `off` OFF.

### Speed report (binary)
Speed reporting toggle.
Value can be found in the published state on the `speed_report` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"speed_report": NEW_VALUE}`.
If value equals `on` speed report is ON, if `off` OFF.

