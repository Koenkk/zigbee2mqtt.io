---
title: "Ensystec Ensystec-Leak-Protect-Zigbee control via MQTT"
description: "Integrate your Ensystec Ensystec-Leak-Protect-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-07T17:38:21
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Ensystec Ensystec-Leak-Protect-Zigbee

|     |     |
|-----|-----|
| Model | Ensystec-Leak-Protect-Zigbee  |
| Vendor  | [Ensystec](/supported-devices/#v=Ensystec)  |
| Description | Leak protect controller with Zigbee module |
| Exposes | switch (state), water_leak, battery_low, power, alarm_reset, force_open, input_1_water_meter, input_1_divisor, input_1_multiplier, input_2_water_meter, input_2_divisor, input_2_multiplier, input_3_water_meter, input_3_divisor, input_3_multiplier, input_4_water_meter, input_4_divisor, input_4_multiplier, input_5_water_meter, input_5_divisor, input_5_multiplier, input_6_water_meter, input_6_divisor, input_6_multiplier, input_7_water_meter, input_7_divisor, input_7_multiplier, input_8_water_meter, input_8_divisor, input_8_multiplier, input_9_water_meter, input_9_divisor, input_9_multiplier, input_10_water_meter, input_10_divisor, input_10_multiplier, position_percent, electric_valve_connection_out1, electric_valve_connection_out2, input_1_config, input_2_config, input_3_config, input_4_config, input_5_config, input_6_config, input_7_config, input_8_config, input_9_config, input_10_config, input_1_leak_detect, input_2_leak_detect, input_3_leak_detect, input_4_leak_detect, input_5_leak_detect, input_6_leak_detect, input_7_leak_detect, input_8_leak_detect, input_9_leak_detect, input_10_leak_detect, input_1_wire_break_control, input_2_wire_break_control, input_3_wire_break_control, input_4_wire_break_control, input_5_wire_break_control, input_6_wire_break_control, input_7_wire_break_control, input_8_wire_break_control, input_9_wire_break_control, input_10_wire_break_control, channel_1_connection_control, channel_2_connection_control, channel_3_connection_control, channel_4_connection_control, channel_5_connection_control, channel_6_connection_control, channel_7_connection_control, channel_8_connection_control, channel_9_connection_control, channel_10_connection_control, channel_1_leak_detect, channel_2_leak_detect, channel_3_leak_detect, channel_4_leak_detect, channel_5_leak_detect, channel_6_leak_detect, channel_7_leak_detect, channel_8_leak_detect, channel_9_leak_detect, channel_10_leak_detect, channel_1_battery_low, channel_2_battery_low, channel_3_battery_low, channel_4_battery_low, channel_5_battery_low, channel_6_battery_low, channel_7_battery_low, channel_8_battery_low, channel_9_battery_low, channel_10_battery_low |
| Picture | ![Ensystec Ensystec-Leak-Protect-Zigbee](https://www.zigbee2mqtt.io/images/devices/Ensystec-Leak-Protect-Zigbee.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


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

### Water leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water leak is ON, if `false` OFF.

### Battery low (binary, 1 endpoint)
Low battery.
Value can be found in the published state on the `battery_low_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery_low_1": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Low` battery low is ON, if `Normal` OFF.

### Power (enum)
Power indicator.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `unknown`, `mains (single phase)`, `mains (3 phase)`, `battery`.

### Alarm reset (enum)
Reset alarm.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_reset": NEW_VALUE}`.
The possible values are: `reset`.

### Force open (enum, 6 endpoint)
Force open electric valves.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"force_open_6": NEW_VALUE}`.
The possible values are: `Force open`.

### Input 1 water meter (numeric, 7 endpoint)
Water meter on input 1.
Value can be found in the published state on the `input_1_water_meter_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_1_water_meter_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_1_water_meter_7": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `281474976710655`.
The unit of this value is `m3`.

### Input 1 divisor (numeric, 7 endpoint)
Divisor of water meter 1.
Value can be found in the published state on the `input_1_divisor_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_1_divisor_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_1_divisor_7": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 1 multiplier (numeric, 7 endpoint)
Multiplier of water meter 1.
Value can be found in the published state on the `input_1_multiplier_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_1_multiplier_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_1_multiplier_7": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 2 water meter (numeric, 8 endpoint)
Water meter on input 2.
Value can be found in the published state on the `input_2_water_meter_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_2_water_meter_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_2_water_meter_8": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `281474976710655`.
The unit of this value is `m3`.

### Input 2 divisor (numeric, 8 endpoint)
Divisor of water meter 2.
Value can be found in the published state on the `input_2_divisor_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_2_divisor_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_2_divisor_8": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 2 multiplier (numeric, 8 endpoint)
Multiplier of water meter 2.
Value can be found in the published state on the `input_2_multiplier_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_2_multiplier_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_2_multiplier_8": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 3 water meter (numeric, 9 endpoint)
Water meter on input 3.
Value can be found in the published state on the `input_3_water_meter_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_3_water_meter_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_3_water_meter_9": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `281474976710655`.
The unit of this value is `m3`.

### Input 3 divisor (numeric, 9 endpoint)
Divisor of water meter 3.
Value can be found in the published state on the `input_3_divisor_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_3_divisor_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_3_divisor_9": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 3 multiplier (numeric, 9 endpoint)
Multiplier of water meter 3.
Value can be found in the published state on the `input_3_multiplier_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_3_multiplier_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_3_multiplier_9": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 4 water meter (numeric, 10 endpoint)
Water meter on input 4.
Value can be found in the published state on the `input_4_water_meter_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_4_water_meter_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_4_water_meter_10": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `281474976710655`.
The unit of this value is `m3`.

### Input 4 divisor (numeric, 10 endpoint)
Divisor of water meter 4.
Value can be found in the published state on the `input_4_divisor_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_4_divisor_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_4_divisor_10": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 4 multiplier (numeric, 10 endpoint)
Multiplier of water meter 4.
Value can be found in the published state on the `input_4_multiplier_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_4_multiplier_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_4_multiplier_10": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 5 water meter (numeric, 11 endpoint)
Water meter on input 5.
Value can be found in the published state on the `input_5_water_meter_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_5_water_meter_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_5_water_meter_11": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `281474976710655`.
The unit of this value is `m3`.

### Input 5 divisor (numeric, 11 endpoint)
Divisor of water meter 5.
Value can be found in the published state on the `input_5_divisor_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_5_divisor_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_5_divisor_11": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 5 multiplier (numeric, 11 endpoint)
Multiplier of water meter 5.
Value can be found in the published state on the `input_5_multiplier_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_5_multiplier_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_5_multiplier_11": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 6 water meter (numeric, 12 endpoint)
Water meter on input 6.
Value can be found in the published state on the `input_6_water_meter_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_6_water_meter_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_6_water_meter_12": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `281474976710655`.
The unit of this value is `m3`.

### Input 6 divisor (numeric, 12 endpoint)
Divisor of water meter 6.
Value can be found in the published state on the `input_6_divisor_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_6_divisor_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_6_divisor_12": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 6 multiplier (numeric, 12 endpoint)
Multiplier of water meter 6.
Value can be found in the published state on the `input_6_multiplier_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_6_multiplier_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_6_multiplier_12": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 7 water meter (numeric, 13 endpoint)
Water meter on input 7.
Value can be found in the published state on the `input_7_water_meter_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_7_water_meter_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_7_water_meter_13": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `281474976710655`.
The unit of this value is `m3`.

### Input 7 divisor (numeric, 13 endpoint)
Divisor of water meter 7.
Value can be found in the published state on the `input_7_divisor_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_7_divisor_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_7_divisor_13": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 7 multiplier (numeric, 13 endpoint)
Multiplier of water meter 7.
Value can be found in the published state on the `input_7_multiplier_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_7_multiplier_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_7_multiplier_13": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 8 water meter (numeric, 14 endpoint)
Water meter on input 8.
Value can be found in the published state on the `input_8_water_meter_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_8_water_meter_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_8_water_meter_14": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `281474976710655`.
The unit of this value is `m3`.

### Input 8 divisor (numeric, 14 endpoint)
Divisor of water meter 8.
Value can be found in the published state on the `input_8_divisor_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_8_divisor_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_8_divisor_14": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 8 multiplier (numeric, 14 endpoint)
Multiplier of water meter 8.
Value can be found in the published state on the `input_8_multiplier_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_8_multiplier_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_8_multiplier_14": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 9 water meter (numeric, 15 endpoint)
Water meter on input 9.
Value can be found in the published state on the `input_9_water_meter_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_9_water_meter_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_9_water_meter_15": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `281474976710655`.
The unit of this value is `m3`.

### Input 9 divisor (numeric, 15 endpoint)
Divisor of water meter 9.
Value can be found in the published state on the `input_9_divisor_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_9_divisor_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_9_divisor_15": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 9 multiplier (numeric, 15 endpoint)
Multiplier of water meter 9.
Value can be found in the published state on the `input_9_multiplier_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_9_multiplier_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_9_multiplier_15": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 10 water meter (numeric, 16 endpoint)
Water meter on input 10.
Value can be found in the published state on the `input_10_water_meter_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_10_water_meter_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_10_water_meter_16": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `281474976710655`.
The unit of this value is `m3`.

### Input 10 divisor (numeric, 16 endpoint)
Divisor of water meter 10.
Value can be found in the published state on the `input_10_divisor_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_10_divisor_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_10_divisor_16": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Input 10 multiplier (numeric, 16 endpoint)
Multiplier of water meter 10.
Value can be found in the published state on the `input_10_multiplier_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_10_multiplier_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_10_multiplier_16": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `16777215`.

### Switch (2 endpoint)
The current state of this switch is in the published state under the `state_2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_2": "ON"}`, `{"state_2": "OFF"}` or `{"state_2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_2": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Position percent (numeric, 2 endpoint)
Electric valve(-s) position on OUT1.
Value can be found in the published state on the `position_percent_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"position_percent_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Electric valve connection out1 (binary, 2 endpoint)
Electric valve(-s) connected to OUT1.
Value can be found in the published state on the `electric_valve_connection_out1_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"electric_valve_connection_out1_2": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Connected` electric valve connection out1 is ON, if `Not connected` OFF.

### Switch (3 endpoint)
The current state of this switch is in the published state under the `state_3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_3": "ON"}`, `{"state_3": "OFF"}` or `{"state_3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_3": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Position percent (numeric, 3 endpoint)
Electric valve(-s) position on OUT2.
Value can be found in the published state on the `position_percent_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"position_percent_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Electric valve connection out2 (binary, 3 endpoint)
Electric valve(-s) connected to OUT2.
Value can be found in the published state on the `electric_valve_connection_out2_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"electric_valve_connection_out2_3": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Connected` electric valve connection out2 is ON, if `Not connected` OFF.

### Input 1 config (enum, 7 endpoint)
Input 1 configuration.
Value can be found in the published state on the `input_1_config_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_1_config_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_1_config_7": NEW_VALUE}`.
The possible values are: `deactivated`, `sensor`, `meter`.

### Input 2 config (enum, 8 endpoint)
Input 2 configuration.
Value can be found in the published state on the `input_2_config_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_2_config_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_2_config_8": NEW_VALUE}`.
The possible values are: `deactivated`, `sensor`, `meter`.

### Input 3 config (enum, 9 endpoint)
Input 3 configuration.
Value can be found in the published state on the `input_3_config_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_3_config_9": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_3_config_9": NEW_VALUE}`.
The possible values are: `deactivated`, `sensor`, `meter`.

### Input 4 config (enum, 10 endpoint)
Input 4 configuration.
Value can be found in the published state on the `input_4_config_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_4_config_10": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_4_config_10": NEW_VALUE}`.
The possible values are: `deactivated`, `sensor`, `meter`.

### Input 5 config (enum, 11 endpoint)
Input 5 configuration.
Value can be found in the published state on the `input_5_config_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_5_config_11": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_5_config_11": NEW_VALUE}`.
The possible values are: `deactivated`, `sensor`, `meter`.

### Input 6 config (enum, 12 endpoint)
Input 6 configuration.
Value can be found in the published state on the `input_6_config_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_6_config_12": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_6_config_12": NEW_VALUE}`.
The possible values are: `deactivated`, `sensor`, `meter`.

### Input 7 config (enum, 13 endpoint)
Input 7 configuration.
Value can be found in the published state on the `input_7_config_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_7_config_13": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_7_config_13": NEW_VALUE}`.
The possible values are: `deactivated`, `sensor`, `meter`.

### Input 8 config (enum, 14 endpoint)
Input 8 configuration.
Value can be found in the published state on the `input_8_config_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_8_config_14": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_8_config_14": NEW_VALUE}`.
The possible values are: `deactivated`, `sensor`, `meter`.

### Input 9 config (enum, 15 endpoint)
Input 9 configuration.
Value can be found in the published state on the `input_9_config_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_9_config_15": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_9_config_15": NEW_VALUE}`.
The possible values are: `deactivated`, `sensor`, `meter`.

### Input 10 config (enum, 16 endpoint)
Input 10 configuration.
Value can be found in the published state on the `input_10_config_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_10_config_16": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"input_10_config_16": NEW_VALUE}`.
The possible values are: `deactivated`, `sensor`, `meter`.

### Input 1 leak detect (binary, 7 endpoint)
Leak detection on input 1.
Value can be found in the published state on the `input_1_leak_detect_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_1_leak_detect_7": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` input 1 leak detect is ON, if `Dry` OFF.

### Input 2 leak detect (binary, 8 endpoint)
Leak detection on input 2.
Value can be found in the published state on the `input_2_leak_detect_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_2_leak_detect_8": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` input 2 leak detect is ON, if `Dry` OFF.

### Input 3 leak detect (binary, 9 endpoint)
Leak detection on input 3.
Value can be found in the published state on the `input_3_leak_detect_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_3_leak_detect_9": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` input 3 leak detect is ON, if `Dry` OFF.

### Input 4 leak detect (binary, 10 endpoint)
Leak detection on input 4.
Value can be found in the published state on the `input_4_leak_detect_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_4_leak_detect_10": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` input 4 leak detect is ON, if `Dry` OFF.

### Input 5 leak detect (binary, 11 endpoint)
Leak detection on input 5.
Value can be found in the published state on the `input_5_leak_detect_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_5_leak_detect_11": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` input 5 leak detect is ON, if `Dry` OFF.

### Input 6 leak detect (binary, 12 endpoint)
Leak detection on input 6.
Value can be found in the published state on the `input_6_leak_detect_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_6_leak_detect_12": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` input 6 leak detect is ON, if `Dry` OFF.

### Input 7 leak detect (binary, 13 endpoint)
Leak detection on input 7.
Value can be found in the published state on the `input_7_leak_detect_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_7_leak_detect_13": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` input 7 leak detect is ON, if `Dry` OFF.

### Input 8 leak detect (binary, 14 endpoint)
Leak detection on input 8.
Value can be found in the published state on the `input_8_leak_detect_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_8_leak_detect_14": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` input 8 leak detect is ON, if `Dry` OFF.

### Input 9 leak detect (binary, 15 endpoint)
Leak detection on input 9.
Value can be found in the published state on the `input_9_leak_detect_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_9_leak_detect_15": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` input 9 leak detect is ON, if `Dry` OFF.

### Input 10 leak detect (binary, 16 endpoint)
Leak detection on input 10.
Value can be found in the published state on the `input_10_leak_detect_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_10_leak_detect_16": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` input 10 leak detect is ON, if `Dry` OFF.

### Input 1 wire break control (binary, 7 endpoint)
Wire break control on input 1.
Value can be found in the published state on the `input_1_wire_break_control_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_1_wire_break_control_7": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` input 1 wire break control is ON, if `offline` OFF.

### Input 2 wire break control (binary, 8 endpoint)
Wire break control on input 2.
Value can be found in the published state on the `input_2_wire_break_control_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_2_wire_break_control_8": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` input 2 wire break control is ON, if `offline` OFF.

### Input 3 wire break control (binary, 9 endpoint)
Wire break control on input 3.
Value can be found in the published state on the `input_3_wire_break_control_9` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_3_wire_break_control_9": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` input 3 wire break control is ON, if `offline` OFF.

### Input 4 wire break control (binary, 10 endpoint)
Wire break control on input 4.
Value can be found in the published state on the `input_4_wire_break_control_10` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_4_wire_break_control_10": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` input 4 wire break control is ON, if `offline` OFF.

### Input 5 wire break control (binary, 11 endpoint)
Wire break control on input 5.
Value can be found in the published state on the `input_5_wire_break_control_11` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_5_wire_break_control_11": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` input 5 wire break control is ON, if `offline` OFF.

### Input 6 wire break control (binary, 12 endpoint)
Wire break control on input 6.
Value can be found in the published state on the `input_6_wire_break_control_12` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_6_wire_break_control_12": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` input 6 wire break control is ON, if `offline` OFF.

### Input 7 wire break control (binary, 13 endpoint)
Wire break control on input 7.
Value can be found in the published state on the `input_7_wire_break_control_13` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_7_wire_break_control_13": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` input 7 wire break control is ON, if `offline` OFF.

### Input 8 wire break control (binary, 14 endpoint)
Wire break control on input 8.
Value can be found in the published state on the `input_8_wire_break_control_14` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_8_wire_break_control_14": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` input 8 wire break control is ON, if `offline` OFF.

### Input 9 wire break control (binary, 15 endpoint)
Wire break control on input 9.
Value can be found in the published state on the `input_9_wire_break_control_15` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_9_wire_break_control_15": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` input 9 wire break control is ON, if `offline` OFF.

### Input 10 wire break control (binary, 16 endpoint)
Wire break control on input 10.
Value can be found in the published state on the `input_10_wire_break_control_16` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_10_wire_break_control_16": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` input 10 wire break control is ON, if `offline` OFF.

### Channel 1 connection control (binary, 17 endpoint)
Connection control on wireless channel 1.
Value can be found in the published state on the `channel_1_connection_control_17` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_1_connection_control_17": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` channel 1 connection control is ON, if `offline` OFF.

### Channel 2 connection control (binary, 18 endpoint)
Connection control on wireless channel 2.
Value can be found in the published state on the `channel_2_connection_control_18` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_2_connection_control_18": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` channel 2 connection control is ON, if `offline` OFF.

### Channel 3 connection control (binary, 19 endpoint)
Connection control on wireless channel 3.
Value can be found in the published state on the `channel_3_connection_control_19` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_3_connection_control_19": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` channel 3 connection control is ON, if `offline` OFF.

### Channel 4 connection control (binary, 20 endpoint)
Connection control on wireless channel 4.
Value can be found in the published state on the `channel_4_connection_control_20` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_4_connection_control_20": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` channel 4 connection control is ON, if `offline` OFF.

### Channel 5 connection control (binary, 21 endpoint)
Connection control on wireless channel 5.
Value can be found in the published state on the `channel_5_connection_control_21` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_5_connection_control_21": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` channel 5 connection control is ON, if `offline` OFF.

### Channel 6 connection control (binary, 22 endpoint)
Connection control on wireless channel 6.
Value can be found in the published state on the `channel_6_connection_control_22` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_6_connection_control_22": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` channel 6 connection control is ON, if `offline` OFF.

### Channel 7 connection control (binary, 23 endpoint)
Connection control on wireless channel 7.
Value can be found in the published state on the `channel_7_connection_control_23` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_7_connection_control_23": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` channel 7 connection control is ON, if `offline` OFF.

### Channel 8 connection control (binary, 24 endpoint)
Connection control on wireless channel 8.
Value can be found in the published state on the `channel_8_connection_control_24` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_8_connection_control_24": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` channel 8 connection control is ON, if `offline` OFF.

### Channel 9 connection control (binary, 25 endpoint)
Connection control on wireless channel 9.
Value can be found in the published state on the `channel_9_connection_control_25` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_9_connection_control_25": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` channel 9 connection control is ON, if `offline` OFF.

### Channel 10 connection control (binary, 26 endpoint)
Connection control on wireless channel 10.
Value can be found in the published state on the `channel_10_connection_control_26` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_10_connection_control_26": ""}`.
It's not possible to write (`/set`) this value.
If value equals `online` channel 10 connection control is ON, if `offline` OFF.

### Channel 1 leak detect (binary, 17 endpoint)
Leak detection on wireless channel 1.
Value can be found in the published state on the `channel_1_leak_detect_17` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_1_leak_detect_17": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` channel 1 leak detect is ON, if `Dry` OFF.

### Channel 2 leak detect (binary, 18 endpoint)
Leak detection on wireless channel 2.
Value can be found in the published state on the `channel_2_leak_detect_18` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_2_leak_detect_18": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` channel 2 leak detect is ON, if `Dry` OFF.

### Channel 3 leak detect (binary, 19 endpoint)
Leak detection on wireless channel 3.
Value can be found in the published state on the `channel_3_leak_detect_19` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_3_leak_detect_19": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` channel 3 leak detect is ON, if `Dry` OFF.

### Channel 4 leak detect (binary, 20 endpoint)
Leak detection on wireless channel 4.
Value can be found in the published state on the `channel_4_leak_detect_20` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_4_leak_detect_20": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` channel 4 leak detect is ON, if `Dry` OFF.

### Channel 5 leak detect (binary, 21 endpoint)
Leak detection on wireless channel 5.
Value can be found in the published state on the `channel_5_leak_detect_21` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_5_leak_detect_21": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` channel 5 leak detect is ON, if `Dry` OFF.

### Channel 6 leak detect (binary, 22 endpoint)
Leak detection on wireless channel 6.
Value can be found in the published state on the `channel_6_leak_detect_22` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_6_leak_detect_22": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` channel 6 leak detect is ON, if `Dry` OFF.

### Channel 7 leak detect (binary, 23 endpoint)
Leak detection on wireless channel 7.
Value can be found in the published state on the `channel_7_leak_detect_23` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_7_leak_detect_23": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` channel 7 leak detect is ON, if `Dry` OFF.

### Channel 8 leak detect (binary, 24 endpoint)
Leak detection on wireless channel 8.
Value can be found in the published state on the `channel_8_leak_detect_24` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_8_leak_detect_24": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` channel 8 leak detect is ON, if `Dry` OFF.

### Channel 9 leak detect (binary, 25 endpoint)
Leak detection on wireless channel 9.
Value can be found in the published state on the `channel_9_leak_detect_25` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_9_leak_detect_25": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` channel 9 leak detect is ON, if `Dry` OFF.

### Channel 10 leak detect (binary, 26 endpoint)
Leak detection on wireless channel 10.
Value can be found in the published state on the `channel_10_leak_detect_26` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_10_leak_detect_26": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Leak` channel 10 leak detect is ON, if `Dry` OFF.

### Channel 1 battery low (binary, 17 endpoint)
Battery level of wireless sensor on channel 1.
Value can be found in the published state on the `channel_1_battery_low_17` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_1_battery_low_17": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Low` channel 1 battery low is ON, if `Normal` OFF.

### Channel 2 battery low (binary, 18 endpoint)
Battery level of wireless sensor on channel 2.
Value can be found in the published state on the `channel_2_battery_low_18` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_2_battery_low_18": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Low` channel 2 battery low is ON, if `Normal` OFF.

### Channel 3 battery low (binary, 19 endpoint)
Battery level of wireless sensor on channel 3.
Value can be found in the published state on the `channel_3_battery_low_19` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_3_battery_low_19": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Low` channel 3 battery low is ON, if `Normal` OFF.

### Channel 4 battery low (binary, 20 endpoint)
Battery level of wireless sensor on channel 4.
Value can be found in the published state on the `channel_4_battery_low_20` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_4_battery_low_20": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Low` channel 4 battery low is ON, if `Normal` OFF.

### Channel 5 battery low (binary, 21 endpoint)
Battery level of wireless sensor on channel 5.
Value can be found in the published state on the `channel_5_battery_low_21` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_5_battery_low_21": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Low` channel 5 battery low is ON, if `Normal` OFF.

### Channel 6 battery low (binary, 22 endpoint)
Battery level of wireless sensor on channel 6.
Value can be found in the published state on the `channel_6_battery_low_22` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_6_battery_low_22": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Low` channel 6 battery low is ON, if `Normal` OFF.

### Channel 7 battery low (binary, 23 endpoint)
Battery level of wireless sensor on channel 7.
Value can be found in the published state on the `channel_7_battery_low_23` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_7_battery_low_23": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Low` channel 7 battery low is ON, if `Normal` OFF.

### Channel 8 battery low (binary, 24 endpoint)
Battery level of wireless sensor on channel 8.
Value can be found in the published state on the `channel_8_battery_low_24` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_8_battery_low_24": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Low` channel 8 battery low is ON, if `Normal` OFF.

### Channel 9 battery low (binary, 25 endpoint)
Battery level of wireless sensor on channel 9.
Value can be found in the published state on the `channel_9_battery_low_25` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_9_battery_low_25": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Low` channel 9 battery low is ON, if `Normal` OFF.

### Channel 10 battery low (binary, 26 endpoint)
Battery level of wireless sensor on channel 10.
Value can be found in the published state on the `channel_10_battery_low_26` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"channel_10_battery_low_26": ""}`.
It's not possible to write (`/set`) this value.
If value equals `Low` channel 10 battery low is ON, if `Normal` OFF.

