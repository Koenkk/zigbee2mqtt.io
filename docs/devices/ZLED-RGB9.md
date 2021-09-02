---
title: "Trust ZLED-RGB9 control via MQTT"
description: "Integrate your Trust ZLED-RGB9 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZLED-RGB9.md)*

# Trust ZLED-RGB9

| Model | ZLED-RGB9  |
| Vendor  | Trust  |
| Description | Smart RGB LED bulb |
| Exposes | light (state, brightness, color_temp, color_temp_startup, color_xy), effect, linkquality |
| Picture | ![Trust ZLED-RGB9](../images/devices/ZLED-RGB9.jpg) |

## Notes

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* `color_sync`: Synchronizes the color values in the state, e.g. if the state contains `color_temp` and `color.xy` and
the `color_temp` is set, `color.xy` will be updated to match the `color_temp`. (default: `true`)


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


* `hue_correction`: (optional) Corrects hue values based on a correction map for matching color
rendition to other lights. Provide a minimum of 2 data sets in the correction map. To build a map:
    * choose one of your other lights to be the color reference
    * send a sample color to both lights (reference and non-reference)
    * modify hue value for non-reference light until it color matches the reference light
    * take note of the in and out values, where
        * `in` is the hue value you sent to your reference light
        * `out` is the hue value you had to dial your non-reference light to
    * repeat with a few other sample colors (4-5 should suffice)

    **Example correction map:**
    ```yaml
    hue_correction:
        - in: 28
          out: 45
        - in: 89
          out: 109
        - in: 184
          out: 203
        - in: 334
          out: 318
    ```



## Exposes

### Light 
This light supports the following features: `state`, `brightness`, `color_temp`, `color_temp_startup`, `color_xy`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
- `color_temp`: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp": VALUE}` where `VALUE` is a number between `153` and `500`, the higher the warmer the color. To read the color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp": ""}`. Besides the numeric values the following values are accepected: `coolest`, `cool`, `neutral`, `warm`, `warmest`.
- `color_temp_startup`: To set the startup color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp_startup": VALUE}` where `VALUE` is a number between `153` and `500`, the higher the warmer the color. To read the startup color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp_startup": ""}`. Besides the numeric values the following values are accepected: `coolest`, `cool`, `neutral`, `warm`, `warmest`, `previous`.
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
The possible values are: `blink`, `breathe`, `okay`, `channel_change`, `finish_effect`, `stop_effect`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    brightness_scale: 254
    color_mode: true
    supported_color_modes: 
      - "xy"
      - "color_temp"
    max_mireds: 500
    min_mireds: 153
    effect: true
    effect_list: 
      - "blink"
      - "breathe"
      - "okay"
      - "channel_change"
      - "finish_effect"
      - "stop_effect"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    enabled_by_default: false
    icon: "mdi:signal"
    state_class: "measurement"
```
{% endraw %}


