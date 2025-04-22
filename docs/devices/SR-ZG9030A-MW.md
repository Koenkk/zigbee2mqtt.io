---
title: "Sunricher SR-ZG9030A-MW control via MQTT"
description: "Integrate your Sunricher SR-ZG9030A-MW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-03T20:11:47
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9030A-MW

|     |     |
|-----|-----|
| Model | SR-ZG9030A-MW  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Zigbee compatible ceiling mount occupancy sensor |
| Exposes | model, light_pwm_frequency, brightness_curve, start_up_on_off, motion_sensor_light_duration, motion_sensor_light_sensitivity, motion_sensor_working_mode, motion_sensor_sensing_distance, motion_sensor_microwave_switch, motion_sensor_onoff_broadcast, motion_sensor_light_state, motion_sensor_in_pwm_brightness, motion_sensor_in_pwm_output, motion_sensor_leave_pwm_output, motion_sensor_leave_delay, motion_sensor_pwm_output_after_delay, linear_error_ratio_coefficient_of_lux_measurement, fixed_deviation_of_lux_measurement, light (state, brightness), effect, power_on_behavior, occupancy, illuminance, action |
| Picture | ![Sunricher SR-ZG9030A-MW](https://www.zigbee2mqtt.io/images/devices/SR-ZG9030A-MW.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Model (enum)
Model of the device.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"model": NEW_VALUE}`.
The possible values are: `HK-DIM`, `ZG9030A-MW`.

### Light pwm frequency (numeric)
Light PWM frequency (0-65535, default: 3300).
Value can be found in the published state on the `light_pwm_frequency` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_pwm_frequency": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_pwm_frequency": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### Brightness curve (enum)
Brightness curve (default: Linear).
Value can be found in the published state on the `brightness_curve` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness_curve": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_curve": NEW_VALUE}`.
The possible values are: `linear`, `gamma_logistics_1_5`, `gamma_logistics_1_8`.

### Start up on off (enum)
Start up on/off (default: last_state).
Value can be found in the published state on the `start_up_on_off` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"start_up_on_off": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"start_up_on_off": NEW_VALUE}`.
The possible values are: `last_state`, `on`, `off`.

### Motion sensor light duration (numeric)
Motion sensor light duration (0s-65535s, default: 5s).
Value can be found in the published state on the `motion_sensor_light_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_light_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_light_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `s`.

### Motion sensor light sensitivity (numeric)
Motion sensor light sensitivity (0-255, default: 0).
Value can be found in the published state on the `motion_sensor_light_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_light_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_light_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Motion sensor working mode (enum)
Motion sensor working mode (default: Automatic).
Value can be found in the published state on the `motion_sensor_working_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_working_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_working_mode": NEW_VALUE}`.
The possible values are: `automatic`, `manual`.

### Motion sensor sensing distance (numeric)
Motion sensor sensing distance (0-15, default: 1).
Value can be found in the published state on the `motion_sensor_sensing_distance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_sensing_distance": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_sensing_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `15`.

### Motion sensor microwave switch (enum)
Motion sensor microwave switch (default: On).
Value can be found in the published state on the `motion_sensor_microwave_switch` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_microwave_switch": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_microwave_switch": NEW_VALUE}`.
The possible values are: `on`, `off`.

### Motion sensor onoff broadcast (enum)
Motion sensor on/off broadcast (default: On).
Value can be found in the published state on the `motion_sensor_onoff_broadcast` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_onoff_broadcast": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_onoff_broadcast": NEW_VALUE}`.
The possible values are: `on`, `off`.

### Motion sensor light state (enum)
Motion sensor light state (default: On).
Value can be found in the published state on the `motion_sensor_light_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_light_state": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_light_state": NEW_VALUE}`.
The possible values are: `on`, `off`.

### Motion sensor in pwm brightness (numeric)
Motion sensor IN PWM brightness (0-1000 lux, default: 0).
Value can be found in the published state on the `motion_sensor_in_pwm_brightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_in_pwm_brightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_in_pwm_brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `lux`.

### Motion sensor in pwm output (numeric)
Motion sensor IN PWM output (0-254, default: 254).
Value can be found in the published state on the `motion_sensor_in_pwm_output` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_in_pwm_output": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_in_pwm_output": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `254`.

### Motion sensor leave pwm output (numeric)
Motion sensor LEAVE PWM output (0%-100%, default: 0%).
Value can be found in the published state on the `motion_sensor_leave_pwm_output` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_leave_pwm_output": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_leave_pwm_output": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Motion sensor leave delay (numeric)
Motion sensor LEAVE delay (0s-65535s, default: 0s).
Value can be found in the published state on the `motion_sensor_leave_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_leave_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_leave_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `s`.

### Motion sensor pwm output after delay (numeric)
Motion sensor PWM output after delay (0%-100%, default: 0%).
Value can be found in the published state on the `motion_sensor_pwm_output_after_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensor_pwm_output_after_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensor_pwm_output_after_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linear error ratio coefficient of lux measurement (numeric)
Linear error ratio coefficient of LUX measurement (100‰-10000‰, default: 1000‰).
Value can be found in the published state on the `linear_error_ratio_coefficient_of_lux_measurement` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"linear_error_ratio_coefficient_of_lux_measurement": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"linear_error_ratio_coefficient_of_lux_measurement": NEW_VALUE}`.
The minimal value is `100` and the maximum value is `10000`.

### Fixed deviation of lux measurement (numeric)
Fixed deviation of LUX measurement (-100~100, default: 0).
Value can be found in the published state on the `fixed_deviation_of_lux_measurement` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fixed_deviation_of_lux_measurement": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fixed_deviation_of_lux_measurement": NEW_VALUE}`.
The minimal value is `-100` and the maximum value is `100`.

### Light 
This light supports the following features: `state`, `brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands.
Support depends on the light firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

#### Transition
For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property `transition` to the payload which is the transition time in seconds.
Examples: `{"brightness":156,"transition":3}`, `{"color_temp":241,"transition":1}`.

#### Moving/stepping
Instead of setting a value (e.g. brightness) directly it is also possible to:
- move: this will automatically move the value over time, to stop send value `stop` or `0`.
- step: this will increment/decrement the current value by the given one.

The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up.
To do this send a payload like below to `zigbee2mqtt/FRIENDLY_NAME/set`

**NOTE**: brightness move/step will stop at the minimum brightness and won't turn on the light when it's off. In this case use `brightness_move_onoff`/`brightness_step_onoff`
````js
{
  "brightness_move": -40, // Starts moving brightness down at 40 units per second
  "brightness_move": 0, // Stop moving brightness
  "brightness_step": 40 // Increases brightness by 40
}
````

### Effect (enum)
Triggers an effect on the light (e.g. make light blink for a few seconds).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"effect": NEW_VALUE}`.
The possible values are: `blink`, `breathe`, `okay`, `channel_change`, `finish_effect`, `stop_effect`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Occupancy (binary, 2 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_2": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Illuminance (numeric, 3 endpoint)
Measured illuminance.
Value can be found in the published state on the `illuminance_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance_3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `lx`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `toggle`, `brightness_move_to_level`, `brightness_move_up`, `brightness_move_down`, `brightness_step_up`, `brightness_step_down`, `brightness_stop`.

