---
title: "SONOFF MINI-ZBDIM control via MQTT"
description: "Integrate your SONOFF MINI-ZBDIM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF MINI-ZBDIM

|     |     |
|-----|-----|
| Model | MINI-ZBDIM  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee smart mini dimmer switch |
| Exposes | light (state, brightness), power_on_behavior, current, voltage, power, delayed_power_on_state, delayed_power_on_time, inching_control_set, external_trigger_mode, set_calibration_action, calibration_status, calibration_progress, min_brightness_threshold, transition_time, dimming_light_rate |
| Picture | ![SONOFF MINI-ZBDIM](https://www.zigbee2mqtt.io/images/devices/MINI-ZBDIM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

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
```js
{
  "brightness_move": -40, // Starts moving brightness down at 40 units per second
  "brightness_move": 0, // Stop moving brightness
  "brightness_step": 40 // Increases brightness by 40
}
````

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Current (numeric)
Current.
Value can be found in the published state on the `current` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Voltage.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Power (numeric)
Active power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Delayed power on state (binary)
Delayed Power-on State.
Value can be found in the published state on the `delayed_power_on_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"delayed_power_on_state": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delayed_power_on_state": NEW_VALUE}`.
If value equals `true` delayed power on state is ON, if `false` OFF.

### Delayed power on time (numeric)
Delayed Power-on time.
Value can be found in the published state on the `delayed_power_on_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"delayed_power_on_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delayed_power_on_time": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `3599.5`.
The unit of this value is `seconds`.

### Inching control set (composite)
Device Inching function Settings. The device will automatically turn off (turn on) after each turn on (turn off) for a specified period of time..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"inching_control_set": {"inching_control": VALUE, "inching_time": VALUE, "inching_mode": VALUE}}`
- `inching_control` (binary): Enable/disable inching function. allowed values: `ENABLE` or `DISABLE`
- `inching_time` (numeric): Delay time for executing a inching action. min value is 0.5, max value is 86399.5, unit is seconds
- `inching_mode` (binary): Set inching off or inching on mode. allowed values: `ON` or `OFF`

### External trigger mode (enum)
External trigger mode, which can be one of edge, pulse,double pulse,triple pulse.The appropriate triggering mode can be selected according to the type of external switch to achieve a better use experience..
Value can be found in the published state on the `external_trigger_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"external_trigger_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"external_trigger_mode": NEW_VALUE}`.
The possible values are: `edge`, `pulse`, `double pulse`, `triple pulse`.

### Set calibration action (enum)
After calibration, the light adjustment becomes smooth and consistent.. Takes about 2 minutes; device unavailable during calibration..
Value can be found in the published state on the `set_calibration_action` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"set_calibration_action": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_calibration_action": NEW_VALUE}`.
The possible values are: `start`, `stop`, `clear`.

### Calibration status (enum)
Calibration status..
Value can be found in the published state on the `calibration_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `uncalibrate`, `cailbrating`, `calibration_failed`, `calibrated`.

### Calibration progress (numeric)
Calibration progress..
Value can be found in the published state on the `calibration_progress` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_progress": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Min brightness threshold (numeric)
Lowest brightness level mapped to 1 % on the dimmer slider..
Value can be found in the published state on the `min_brightness_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_brightness_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_brightness_threshold": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `50`.
The unit of this value is `%`.

### Transition time (numeric)
Transition time.
Value can be found in the published state on the `transition_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"transition_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"transition_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5`.
The unit of this value is `s`.

### Dimming light rate (enum)
Speed of brightness change via external switch..
Value can be found in the published state on the `dimming_light_rate` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimming_light_rate": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimming_light_rate": NEW_VALUE}`.
The possible values are: `1x`, `2x`, `3x`, `4x`, `5x`.

