---
title: "Gledopto GL-SPI-206P control via MQTT"
description: "Integrate your Gledopto GL-SPI-206P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-08-27T14:37:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Gledopto GL-SPI-206P

|     |     |
|-----|-----|
| Model | GL-SPI-206P |
| Vendor  | [Gledopto](/supported-devices/#v=Gledopto)  |
| Description | Tuya SPI Pixel Controller RGBCCT/RGBW/RGB |
| Exposes | light (state, brightness) |
| Picture | ![Gledopto GL-SPI-206P](https://www.zigbee2mqtt.io/images/devices/GL-SPI-206P.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

# Button Functions

**Opt:**

1. **Short press:** Turn lights on/off.
2. **Double short press:** Cycle through lighting dynamic effects (Total 24 dynamicmodes).
   **Triple short press:** Toggle power-on memory function, the connected strip3.fashes once to confrm.(Default is memory off. The power-on memoryfunction determines whether the controller remembers its on/off statebefore power loss).
3. **Long press:** Reset the controller-clear Wi-Fi network and RF remotepairing and return to initial factory settings. (indication: strip flashes fivetimes, then the status LED blinks).Initial settings are:
   1.Chip type: WS2811;2.Color order: RGB; 3. Number of chips: 60.

**Push:**

1. **Short press:** Turn lights on/off.2.Double short press: Cycle through lighting dynamic effects (Total 24 dynamicmodes).
2. **Long press:** Adjust brightness (holding increases brightness; after release,holding again decreases brightness).

# Supported chips

| Chip model     | Compatible chip models                                       |
| -------------- | ------------------------------------------------------------ |
| WS2801         | WS2803                                                       |
| LPD6803        | LPD1101,D705,UCS6909,UCS6912                                 |
| LPD8803        | LPD8806                                                      |
| TM1809         | TM1804,TM1812,UCS1903,UCS1909,UCS1912,SK6813,UCS2903,UCS2909,UCS2912,WS2811,WS2812,WS2813,WS2815,SM16703P,GS8206 |
| TM1814B(RGBW)  |                                                              |
| TM1934A        |                                                              |
| SK6812(RGBW)   | UCS2904(RGBW),SM16704(RGBW)                                  |
| SK9822         |                                                              |
| UCS2904B(RGBW) |                                                              |
| UCS8904B(RGBW) |                                                              |

# Indicator Light Status

**Flashing:** Not Connected to Network

**Steady On:** Connected to Network

<!-- Notes END: Do not edit below this line -->

## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `brightness`.
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
```js
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

