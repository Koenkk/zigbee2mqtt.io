---
title: "Ubisys S1-R control via MQTT"
description: "Integrate your Ubisys S1-R via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-02-28T13:58:01Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Ubisys S1-R

|     |     |
|-----|-----|
| Model | S1-R  |
| Vendor  | [Ubisys](/supported-devices/#v=Ubisys)  |
| Description | Power switch S1-R |
| Exposes | identify, switch (state), power_on_behavior, power, energy, action |
| Picture | ![Ubisys S1-R](https://www.zigbee2mqtt.io/images/devices/S1-R.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `measurement_poll_interval`: This device does not support reporting electric measurements so it is polled instead. The default poll interval is 60 seconds, set to -1 to disable. The value must be a number with a minimum value of `-1`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

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

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on_2`, `on_3`, `off_2`, `off_3`, `toggle_2`, `toggle_3`, `brightness_move_to_level_2`, `brightness_move_to_level_3`, `brightness_move_up_2`, `brightness_move_up_3`, `brightness_move_down_2`, `brightness_move_down_3`, `brightness_step_up_2`, `brightness_step_up_3`, `brightness_step_down_2`, `brightness_step_down_3`, `brightness_stop_2`, `brightness_stop_3`, `color_temperature_move_stop_2`, `color_temperature_move_stop_3`, `color_temperature_move_up_2`, `color_temperature_move_up_3`, `color_temperature_move_down_2`, `color_temperature_move_down_3`, `color_temperature_step_up_2`, `color_temperature_step_up_3`, `color_temperature_step_down_2`, `color_temperature_step_down_3`, `enhanced_move_to_hue_and_saturation_2`, `enhanced_move_to_hue_and_saturation_3`, `move_to_hue_and_saturation_2`, `move_to_hue_and_saturation_3`, `color_hue_step_up_2`, `color_hue_step_up_3`, `color_hue_step_down_2`, `color_hue_step_down_3`, `color_saturation_step_up_2`, `color_saturation_step_up_3`, `color_saturation_step_down_2`, `color_saturation_step_down_3`, `color_loop_set_2`, `color_loop_set_3`, `color_temperature_move_2`, `color_temperature_move_3`, `color_move_2`, `color_move_3`, `hue_move_2`, `hue_move_3`, `hue_stop_2`, `hue_stop_3`, `move_to_saturation_2`, `move_to_saturation_3`, `move_to_hue_2`, `move_to_hue_3`.

