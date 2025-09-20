---
title: "DOMRAEM DOM-Z-105P control via MQTT"
description: "Integrate your DOMRAEM DOM-Z-105P Zigbee 3.0 5-in-1 Smart LED Controller via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-20T14:24:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# DOMRAEM DOM-Z-105P

|     |     |
|-----|-----|
| Model | DOM-Z-105P  |
| Vendor  | [DOMRAEM](/supported-devices/#v=DOMRAEM)  |
| Description | Zigbee 3.0 5-in-1 Smart LED Controller |
| Exposes | light (state, brightness, color_temp, color_xy, color_temp_startup, effect, power_on_behavior), mode, PWM frequency, scenes, power_on_memory |
| Picture | ![DOMRAEM DOM-Z-105P](https://www.zigbee2mqtt.io/images/devices/DOMRAEM_RGBWC.png) |

<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

## Notes

DOMRAEM Zigbee 3.0 5-in-1 Smart LED Controller

### Device highlights

- Supports all popular LED strip types: DIMMER (single color), CCT (dual white), RGB, RGBW, RGBCCT
- Zigbee 3.0 protocol, compatible with Zigbee2MQTT, Home Assistant, Amazon Echo Plus, Philips Hue, SmartThings (not Tuya)
- Wide voltage: DC 12-24 V, max load 20A (up to 15A per channel), 480W max
- 5 output channels, suitable for contour and architectural lighting, premium ABS enclosure, IP20
- Precise PWM dimming (default 1000Hz, switchable), 0-100% dimming, supports millions of colors, preset scenes, and effects
- Power-off memory, supports RF remotes FUT089/FUT092 (works without gateway)
- Quick mode switching: Hold RESET to change between RGBCCT, RGBW, RGB, CCT, DIMMER modes (see below)
- Smart reset: Hold RESET 5s to clear pairing, 5x power cycle for factory reset

### Button/mode functions

- **RESET**: Hold 5 seconds to reset pairing, 5x power cycle for full factory reset.
- **Mode switch**: Short press RESET button to cycle through work modes:
  1. RGBCCT (White, 5 channels)
  2. RGBW (Yellow, 4 channels)
  3. RGB (Red, 3 channels)
  4. CCT (Green, 2 channels)
  5. DIMMER (Blue, 1 channel)

- **PUSH button**: Short press = ON/OFF, long press = smooth brightness adjustment

- **PWM frequency**: Press OPT button to change PWM frequency for power compatibility

### Features

- Voice and App control, scenes, RF remote, power-off memory
- Preset effects: Gradient, Strobe, Breathing, etc.
- Power source: DC12-24V (recommended margin 10%)
- Remote distance: up to 30m (RF control)
- Professional performance for commercial and residential use

### Safety

- Only use power supplies within 12-24V and <20A total current
- Do not exceed rated current per channel; recommend margin for safety

### Re-pair / starting pairing mode again

- Hold RESET button for 5 seconds to clear pairing data
- Power cycle device 5 times for factory reset

<!-- Notes END: Do not edit below this line -->

## Options

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `color_sync`: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This controller supports the following features: `state`, `brightness`, `color_temp`, `color_temp_startup`, `color_xy`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
- `color_temp`: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp": VALUE}` where `VALUE` is a number between `153` and `555`, the higher the warmer the color. To read the color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp": ""}`. Besides the numeric values the following values are accepted: `coolest`, `cool`, `neutral`, `warm`, `warmest`.
- `color_temp_startup`: To set the startup color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp_startup": VALUE}` where `VALUE` is a number between `153` and `555`, the higher the warmer the color. To read the startup color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp_startup": ""}`. Besides the numeric values the following values are accepted: `coolest`, `cool`, `neutral`, `warm`, `warmest`, `previous`.
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
