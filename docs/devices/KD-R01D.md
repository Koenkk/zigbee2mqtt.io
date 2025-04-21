---
title: "Aqara KD-R01D control via MQTT"
description: "Integrate your Aqara KD-R01D via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-03-01T20:31:41
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara KD-R01D

|     |     |
|-----|-----|
| Model | KD-R01D  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Dimmer switch H2 EU |
| Exposes | power, energy, voltage, current, led_indicator, flip_indicator_light, power_on_behavior, light (state, brightness), effect, action_rotation_angle, action_rotation_angle_speed, action_rotation_percent, action_rotation_percent_speed, action_rotation_time, action_rotation_button_state, operation_mode, sensitivity, phase, min_brightness, max_brightness, action |
| Picture | ![Aqara KD-R01D](https://www.zigbee2mqtt.io/images/devices/KD-R01D.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Led indicator (binary)
LED indicator.
Value can be found in the published state on the `led_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_indicator": NEW_VALUE}`.
If value equals `ON` led indicator is ON, if `OFF` OFF.

### Flip indicator light (binary)
After turn on, the indicator light turns on while switch is off, and vice versa.
Value can be found in the published state on the `flip_indicator_light` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"flip_indicator_light": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"flip_indicator_light": NEW_VALUE}`.
If value equals `ON` flip indicator light is ON, if `OFF` OFF.

### Power on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `on`, `previous`, `off`, `inverted`.

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

### Action rotation angle (numeric)
Rotation angle.
Value can be found in the published state on the `action_rotation_angle` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `*`.

### Action rotation angle speed (numeric)
Rotation angle speed.
Value can be found in the published state on the `action_rotation_angle_speed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `*`.

### Action rotation percent (numeric)
Rotation percent.
Value can be found in the published state on the `action_rotation_percent` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Action rotation percent speed (numeric)
Rotation percent speed.
Value can be found in the published state on the `action_rotation_percent_speed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Action rotation time (numeric)
Rotation time.
Value can be found in the published state on the `action_rotation_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ms`.

### Action rotation button state (enum)
Button state during rotation.
Value can be found in the published state on the `action_rotation_button_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `released`, `pressed`.

### Operation mode (enum)
Decoupled mode for knob.
Value can be found in the published state on the `operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `decoupled`, `control_relay`.

### Sensitivity (enum)
Rotation sensitivity.
Value can be found in the published state on the `sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Phase (enum)
Dimming phase.
Value can be found in the published state on the `phase` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"phase": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"phase": NEW_VALUE}`.
The possible values are: `forward`, `reverse`.

### Min brightness (numeric)
Minimum brightness level.
Value can be found in the published state on the `min_brightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_brightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.
The unit of this value is `%`.

### Max brightness (numeric)
Maximum brightness level.
Value can be found in the published state on the `max_brightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_brightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_brightness": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `start_rotating`, `rotation`, `stop_rotating`, `single`.

