---
title: "MiBoxer FUT039Z control via MQTT"
description: "Integrate your MiBoxer FUT039Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-08-01T20:41:55Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# MiBoxer FUT039Z

|     |     |
|-----|-----|
| Model | FUT039Z  |
| Vendor  | [MiBoxer](/supported-devices/#v=MiBoxer)  |
| Description | RGB+CCT LED controller |
| Exposes | light (state, brightness, color_temp, color_xy), effect, do_not_disturb, color_power_on_behavior |
| Picture | ![MiBoxer FUT039Z](https://www.zigbee2mqtt.io/images/devices/FUT039Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `color_sync`: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `brightness`, `color_temp`, `color_xy`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
- `color_temp`: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp": VALUE}` where `VALUE` is a number between `153` and `500`, the higher the warmer the color. To read the color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp": ""}`. Besides the numeric values the following values are accepted: `coolest`, `cool`, `neutral`, `warm`, `warmest`.
- `color_xy`: To control the XY color (CIE 1931 color space) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color": {"x": X_VALUE, "y": Y_VALUE}}` (e.g. `{"color":{"x":0.123,"y":0.123}}`). To read the XY color send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color":{"x":"","y":""}}`. Alternatively it is possible to set the XY color via RGB:
  - `{"color": {"r": R, "g": G, "b": B}}` e.g. `{"color":{"r":46,"g":102,"b":150}}`
  - `{"color": {"rgb": "R,G,B"}}` e.g. `{"color":{"rgb":"46,102,150"}}`
  - `{"color": {"hex": HEX}}` e.g. `{"color":{"hex":"#547CFF"}}`

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
  "color_temp_move": 60, // Starts moving color temperature up at 60 units per second
  "color_temp_move": "stop", // Stop moving color temperature
  "color_temp_step": 99, // Increase color temperature by 99
}
````

### Effect (enum)
Triggers an effect on the light (e.g. make light blink for a few seconds).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"effect": NEW_VALUE}`.
The possible values are: `blink`, `breathe`, `okay`, `channel_change`, `finish_effect`, `stop_effect`, `colorloop`, `stop_colorloop`.

### Do not disturb (binary)
Do not disturb mode, when enabled this function will keep the light OFF after a power outage.
Value can be found in the published state on the `do_not_disturb` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"do_not_disturb": NEW_VALUE}`.
If value equals `true` do not disturb is ON, if `false` OFF.

### Color power on behavior (enum)
Power on behavior state.
Value can be found in the published state on the `color_power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_power_on_behavior": NEW_VALUE}`.
The possible values are: `initial`, `previous`, `customized`.

