---
title: "Schneider Electric NHMOTION/UNIDIM/1 control via MQTT"
description: "Integrate your Schneider Electric NHMOTION/UNIDIM/1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-03T20:11:47
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Schneider Electric NHMOTION/UNIDIM/1

|     |     |
|-----|-----|
| Model | NHMOTION/UNIDIM/1  |
| Vendor  | [Schneider Electric](/supported-devices/#v=Schneider%20Electric)  |
| Description | Motion sensor with dimmer |
| Exposes | light (state, brightness, level_config), ballast_minimum_level, ballast_maximum_level, illuminance, occupancy, occupancy_timeout, occupancy_sensitivity, ambience_light_threshold, dimmer_mode |
| Picture | ![Schneider Electric NHMOTION/UNIDIM/1](https://www.zigbee2mqtt.io/images/devices/NHMOTION-UNIDIM-1.png) |
| White-label | ELKO EKO06984, ELKO EKO06985, ELKO EKO06986 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing

Short press (less than 0.5 seconds) the dimmer button 3 times to set it in pairing mode.
The status LED will start blinking amber. The status LED will change to green when it is paired.

### Reset to factory settings

Short press (less than 0.5 seconds) the dimmer button 3 times, then press the dimmer button for more than 10 seconds.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].


## Exposes

### Light 
This light supports the following features: `state`, `brightness`, `level_config`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.

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

### Ballast minimum level (numeric)
Specifies the minimum light output of the ballast.
Value can be found in the published state on the `ballast_minimum_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ballast_minimum_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ballast_minimum_level": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `254`.

### Ballast maximum level (numeric)
Specifies the maximum light output of the ballast.
Value can be found in the published state on the `ballast_maximum_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ballast_maximum_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ballast_maximum_level": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `254`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `lx`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy timeout (numeric)
Time in seconds before occupancy is cleared after the last detected movement..
Value can be found in the published state on the `occupancy_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65534`.
The unit of this value is `s`.

### Occupancy sensitivity (enum)
Sensitivity of the occupancy sensor.
Value can be found in the published state on the `occupancy_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_sensitivity": NEW_VALUE}`.
The possible values are: `Low`, `Medium`, `High`.

### Ambience light threshold (numeric)
Threshold above which occupancy will not trigger the light switch..
Value can be found in the published state on the `ambience_light_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ambience_light_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ambience_light_threshold": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `2000`.
The unit of this value is `lx`.

### Dimmer mode (enum)
Auto detects the correct mode for the ballast. RL-LED may have improved dimming quality for LEDs..
Value can be found in the published state on the `dimmer_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimmer_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimmer_mode": NEW_VALUE}`.
The possible values are: `Auto`, `RL-LED`.

