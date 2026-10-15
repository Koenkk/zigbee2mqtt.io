---
title: "Heiman HS2NLV control via MQTT"
description: "Integrate your Heiman HS2NLV via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-08-30T18:06:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS2NLV

|     |     |
|-----|-----|
| Model | HS2NLV  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Smart notifier |
| Exposes | identify, light (state, brightness, color_temp, color_temp_startup, color_hs), power_on_behavior, temperature, humidity, light_effect, light_speed, light_intensity, light_palette, light_options, light_effect_count, light_pixel_count, sound_volume, language, room, floor, voice, temperature_offset, humidity_offset, reported_packages, rejoin_count, reboot_count |
| Picture | ![Heiman HS2NLV](https://www.zigbee2mqtt.io/images/devices/HS2NLV.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `color_sync`: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Light 
This light supports the following features: `state`, `brightness`, `color_temp`, `color_temp_startup`, `color_hs`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
                
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
                
- `color_temp`: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp": VALUE}` where `VALUE` is a number between `153` and `500`, the higher the warmer the color. To read the color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp": ""}`. Besides the numeric values the following values are accepted: `coolest`, `cool`, `neutral`, `warm`, `warmest`.
                
- `color_temp_startup`: To set the startup color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp_startup": VALUE}` where `VALUE` is a number between `153` and `500`, the higher the warmer the color. To read the startup color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp_startup": ""}`. Besides the numeric values the following values are accepted: `coolest`, `cool`, `neutral`, `warm`, `warmest`, `previous`.
                
- `color_hs`: To control the hue/saturation (color) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color": {"hue": HUE, "saturation": SATURATION}}` (e.g. `{"color":{"hue":360,"saturation":100}}`). To read the hue/saturation send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color":{"hue":"","saturation":""}}`. Alternatively it is possible to set the hue/saturation via:
                
  - HSB space (hue, saturation, brightness): `{"color": {"h": H, "s": S, "b": B}}` e.g. `{"color":{"h":360,"s":100,"b":100}}` or `{"color": {"hsb": "H,S,B"}}` e.g. `{"color":{"hsb":"360,100,100"}}`
  - HSV space (hue, saturation, value):`{"color": {"h": H, "s": S, "v": V}}` e.g. `{"color":{"h":360,"s":100,"v":100}}` or `{"color": {"hsv": "H,S,V"}}` e.g. `{"color":{"hsv":"360,100,100"}}`
  - HSL space (hue, saturation, lightness)`{"color": {"h": H, "s": S, "l": L}}` e.g. `{"color":{"h":360,"s":100,"l":100}}` or `{"color": {"hsl": "H,S,L"}}` e.g. `{"color":{"hsl":"360,100,100"}}`

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
  "hue_move": 40, // Starts moving hue up at 40 units per second, will endlessly loop (allowed value range: -255 till 255)
  "hue_step": -90, // Decrease hue by 90 (allowed value range: -255 till 255)
  "saturation_move": -55, // Starts moving saturation down at -55 units per second (allowed value range: -255 till 255)
  "saturation_step": 66, // Increase saturation by 66 (allowed value range: -255 till 255)
}
````

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Light effect (enum)
Light effect.
Value can be found in the published state on the `light_effect` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_effect": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_effect": NEW_VALUE}`.
The possible values are: `solid`, `blink`, `breathe`, `wipe`, `wipe_random`, `random_colors`, `sweep`, `dynamic`, `colorloop`, `rainbow`, `scan`, `dual_scan`, `fade`, `theater`, `theater_rainbow`, `running`, `saw`, `twinkle`, `dissolve`, `dissolve_random`, `sparkle`, `dark_sparkle`, `sparkle_plus`, `strobe`, `strobe_rainbow`, `mega_strobe`, `blink_rainbow`, `android`, `chase`, `chase_random`, `chase_rainbow`, `chase_flash`, `chase_flash_random`, `rainbow_runner`, `colorful`, `traffic_light`, `sweep_random`, `running_2`, `aurora`, `stream`, `scanner`, `comet`, `fireworks`, `rain`, `tetrix`, `fire_flicker`, `gradient`, `loading`, `rolling_balls`, `fairy`, `two_dots`, `fairy_twinkle`, `running_dual`, `image`, `tricolor_chase`, `tricolor_wipe`, `tricolor_fade`, `lightning`, `icu`, `multi_comet`, `dual_scanner`, `random_chase`, `oscillate`, `pride_2015`, `juggle`, `palette`, `fire_2012`, `colorwaves`, `bpm`, `fill_noise`, `noise_1`, `noise_2`, `noise_3`, `noise_4`, `color_twinkle`, `lake`, `meteor`, `copy`, `railway`, `ripple`, `twinklefox`, `twinklecat`, `halloween_eyes`, `static_pattern`, `tri_static_pattern`, `spots`, `spots_fade`, `glitter`, `candle`, `starburst`, `exploding_fireworks`, `bouncing_balls`, `sinelon`, `sinelon_dual`, `sinelon_rainbow`, `popcorn`, `drip`, `plasma`, `percent`, `ripple_rainbow`, `heartbeat`, `pacifica`, `candle_multi`, `solid_glitter`, `sunrise`, `phased`, `twinkleup`, `noisepal`, `sinewave`, `phased_noise`, `flow`, `chunchun`, `dancing_shadows`, `washing_machine`, `2d_plasma_rotozoom`, `blends`, `tv_simulator`, `dynamic_smooth`, `2d_spaceships`, `2d_crazy_bees`, `2d_ghost_rider`, `2d_blobs`, `2d_scroll_text`, `2d_drift_rose`, `2d_distortion_waves`, `2d_soap`, `2d_octopus`, `2d_waving_cell`, `pixels`, `pixelwave`, `juggles`, `matripix`, `gravimeter`, `plasmoid`, `puddles`, `midnoise`, `noisemeter`, `freqwave`, `freqmatrix`, `2d_geq`, `waterfall`, `freqpixels`, `binmap`, `noisefire`, `puddlepeak`, `noisemove`, `2d_noise`, `perlinmove`, `ripplepeak`, `2d_firenoise`, `2d_squared_swirl`, `pacman`, `2d_dna`, `2d_matrix`, `2d_metaballs`, `freqmap`, `gravcenter`, `gravcentric`, `gravfreq`, `dj_light`, `2d_funky_plank`, `shimmer`, `2d_pulser`, `blurz`, `2d_drift`, `2d_waverly`, `2d_sun_radiation`, `2d_colored_bursts`, `2d_julia`, `reserved_169`, `reserved_170`, `reserved_171`, `2d_game_of_life`, `2d_tartan`, `2d_polar_lights`, `2d_swirl`, `2d_lissajous`, `2d_frizzles`, `2d_plasma_ball`, `flow_stripe`, `2d_hiphotic`, `2d_sin_dots`, `2d_dna_spiral`, `2d_black_hole`, `wavesins`, `rocktaves`, `2d_akemi`, `particle_volcano`, `particle_fire`, `particle_fireworks`, `particle_vortex`, `particle_perlin`, `particle_pit`, `particle_box`, `particle_attractor`, `particle_impact`, `particle_waterfall`, `particle_spray`, `particles_geq`, `particle_center_geq`, `particle_ghost_rider`, `particle_blobs`, `ps_drip`, `ps_pinball`, `ps_dancing_shadows`, `ps_fireworks_1d`, `ps_sparkler`, `ps_hourglass`, `ps_1d_spray`, `ps_balance`, `ps_chase`, `ps_starburst`, `ps_1d_geq`, `ps_fire_1d`, `ps_1d_sonic_stream`, `ps_1d_sonic_boom`, `ps_1d_springy`, `particle_galaxy`, `color_clouds`, `slow_transition`.

### Light speed (numeric)
Light effect speed.
Value can be found in the published state on the `light_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_speed": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Light intensity (numeric)
Light effect intensity.
Value can be found in the published state on the `light_intensity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_intensity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_intensity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Light palette (numeric)
Light effect palette.
Value can be found in the published state on the `light_palette` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_palette": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_palette": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Light options (numeric)
Light effect options bitmap.
Value can be found in the published state on the `light_options` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_options": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_options": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Light effect count (numeric)
Number of available light effects.
Value can be found in the published state on the `light_effect_count` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_effect_count": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `200`.

### Light pixel count (numeric)
Number of light pixels.
Value can be found in the published state on the `light_pixel_count` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_pixel_count": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_pixel_count": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.

### Sound volume (numeric)
Sound volume.
Value can be found in the published state on the `sound_volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sound_volume": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sound_volume": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### Language (enum)
Device language.
Value can be found in the published state on the `language` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"language": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"language": NEW_VALUE}`.
The possible values are: `english`, `german`, `french`, `italian`, `spanish`.

### Room (enum)
Device room location.
Value can be found in the published state on the `room` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"room": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"room": NEW_VALUE}`.
The possible values are: `no_location`, `attic`, `basement`, `bedroom`, `child_room`, `den`, `dining_room`, `entryway`, `family_room`, `guest_bedroom`, `hallway`, `kitchen`, `living_room`, `master_bedroom`, `office`, `utility_room`, `other_room`.

### Floor (enum)
Device floor location.
Value can be found in the published state on the `floor` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor": NEW_VALUE}`.
The possible values are: `no_floor`, `ground_floor`, `first_floor`, `second_floor`, `third_floor`, `fourth_floor`.

### Voice (enum)
Play a device voice prompt.
Value can be found in the published state on the `voice` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voice": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"voice": NEW_VALUE}`.
The possible values are: `unset`, `boot_ready`, `test_intro`, `smoke_warning`, `smoke_silenced`, `co_warning`, `co_silenced`, `smoke_cannot_be_silenced`, `co_cannot_be_silenced`, `low_battery`, `smoke_sensor_malfunction`, `co_sensor_open_circuit`, `co_sensor_short_circuit`, `end_of_life`, `room_selection_instructions`, `floor_selection_instructions`, `room_saved`, `floor_saved`, `no_room_saved`, `no_floor_saved`, `language_change`, `selected`, `evacuate`, `count_five`, `count_four`, `count_three`, `count_two`, `count_one`, `communication_mode_matter`, `communication_mode_zigbee`, `network_joined`, `network_join_failed`, `language_set`.

### Temperature offset (numeric)
used for temperature offset, unit: ℃.
Value can be found in the published state on the `temperature_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-15` and the maximum value is `15`.

### Humidity offset (numeric)
used for humidity offset, unit: RH%.
Value can be found in the published state on the `humidity_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_offset": NEW_VALUE}`.
The minimal value is `-15` and the maximum value is `15`.

### Reported packages (numeric)
for diagnostic purpose, how many zigbee packages has the reported in a day..
Value can be found in the published state on the `reported_packages` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"reported_packages": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `60000`.

### Rejoin count (numeric)
for diagnostic purpose, how many times has the product rejoined to zigbee network..
Value can be found in the published state on the `rejoin_count` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rejoin_count": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `60000`.

### Reboot count (numeric)
for diagnostic purpose, how many times has the product rebooted..
Value can be found in the published state on the `reboot_count` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"reboot_count": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `60000`.

