---
title: "Aqara LGYCDD01LM control via MQTT"
description: "Integrate your Aqara LGYCDD01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-09-01T13:40:11
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara LGYCDD01LM

|     |     |
|-----|-----|
| Model | LGYCDD01LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | LED Strip T1 |
| Exposes | light (state, brightness, color_temp, color_xy), power_outage_count, device_temperature, identify, power_on_behavior, dimming_range_minimum, dimming_range_maximum, on_off_duration, off_on_duration, length, audio, audio_sensitivity, audio_effect, effect, effect_speed, effect_segments, effect_colors, segment_colors |
| Picture | ![Aqara LGYCDD01LM](https://www.zigbee2mqtt.io/images/devices/LGYCDD01LM.png) |
| White-label | Aqara RLS-K01D |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `color_sync`: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be `true` or `false`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `brightness`, `color_temp`, `color_xy`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
- `color_temp`: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp": VALUE}` where `VALUE` is a number between `153` and `370`, the higher the warmer the color. To read the color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp": ""}`. Besides the numeric values the following values are accepted: `coolest`, `cool`, `neutral`, `warmest`.
- `color_xy`: To control the XY color (CIE 1931 color space) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color": {"x": X_VALUE, "y": Y_VALUE}}` (e.g. `{"color":{"x":0.123,"y":0.123}}`). To read the XY color send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color":{"x":"","y":""}}`. Alternatively it is possible to set the XY color via RGB:
  - `{"color": {"r": R, "g": G, "b": B}}` e.g. `{"color":{"r":46,"g":102,"b":150}}`
  - `{"color": {"rgb": "R,G,B"}}` e.g. `{"color":{"rgb":"46,102,150"}}`
  - `{"color": {"hex": HEX}}` e.g. `{"color":{"hex":"#547CFF"}}`

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
  "color_temp_move": 60, // Starts moving color temperature up at 60 units per second
  "color_temp_move": -40, // Starts moving color temperature down at 40 units per second
  "color_temp_move": "stop", // Stop moving color temperature
  "color_temp_move": "release", // Stop moving color temperature
  "color_temp_move": 0, // Stop moving color temperature
  "color_temp_move": "up", // Move to warmer color temperature at default rate
  "color_temp_move": 1, // Move to warmer color temperature at default rate
  "color_temp_move": "down", // Move to cooler color temperature at default rate
  "color_temp_move": {"rate": 30, "minimum": 150, "maximum": 500}, // Move with custom rate and constraints
  "color_temp_step": 99, // Increase color temperature by 99
}
````

### Power outage count (numeric)
Number of power outages (since last pairing).
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Power on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `on`, `previous`, `off`.

### Dimming range minimum (numeric)
Minimum allowed dimming value.
Value can be found in the published state on the `dimming_range_minimum` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimming_range_minimum": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimming_range_minimum": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `99`.
The unit of this value is `%`.

### Dimming range maximum (numeric)
Maximum allowed dimming value.
Value can be found in the published state on the `dimming_range_maximum` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dimming_range_maximum": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dimming_range_maximum": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `100`.
The unit of this value is `%`.

### On off duration (numeric)
Duration for light to gradually dim when turning off.
Value can be found in the published state on the `on_off_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"on_off_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"on_off_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `s`.

### Off on duration (numeric)
Duration for light to gradually brighten when turning on.
Value can be found in the published state on the `off_on_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"off_on_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"off_on_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `s`.

### Length (numeric)
LED strip length (5 x 20cm segments per meter).
Value can be found in the published state on the `length` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"length": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"length": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.
The unit of this value is `m`.

### Audio (binary)
Audio sync mode.
Value can be found in the published state on the `audio` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"audio": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"audio": NEW_VALUE}`.
If value equals `ON` audio is ON, if `OFF` OFF.

### Audio sensitivity (enum)
Audio sync sensitivity.
Value can be found in the published state on the `audio_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"audio_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"audio_sensitivity": NEW_VALUE}`.
The possible values are: `low`, `high`.

### Audio effect (enum)
Audio effect.
Value can be found in the published state on the `audio_effect` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"audio_effect": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"audio_effect": NEW_VALUE}`.
The possible values are: `random`, `blink`, `rainbow`, `wave`.

### Effect (enum)
RGB dynamic effect type.
Value can be found in the published state on the `effect` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"effect": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"effect": NEW_VALUE}`.
The possible values are: `breathing`, `rainbow1`, `chasing`, `flash`, `hopping`, `rainbow2`, `flicker`, `dash`.

### Effect speed (numeric)
RGB dynamic effect speed (1-100%).
Value can be found in the published state on the `effect_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"effect_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"effect_speed": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `100`.
The unit of this value is `%`.

### Effect segments (text)
Segment selection for effects. Formats: '1,2,5' (list), '1-10' (range), '1-5,10-15' (multiple ranges), '1,3,5-8,10' (mixed), 'odd/even/first-half/last-half/first-third/middle-third/last-third' (patterns). Empty = all segments. Each meter = 5 segments (20cm each)..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"effect_segments": NEW_VALUE}`.

### Effect colors (list)
Array of RGB color objects for dynamic effects (1-8 colors)..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"effect_colors": [{"r": VALUE, "g": VALUE, "b": VALUE}]}`
- `r` (numeric): Red (0-255) max value is 255
- `g` (numeric): Green (0-255) max value is 255
- `b` (numeric): Blue (0-255) max value is 255

### Segment colors (list)
Set individual segment colors..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"segment_colors": [{"segment": VALUE, "color": VALUE}]}`
- `segment` (numeric): Segment number 
- `color` (composite): RGB color object 

