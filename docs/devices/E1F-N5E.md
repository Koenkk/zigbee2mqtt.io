---
title: "Sengled E1F-N5E control via MQTT"
description: "Integrate your Sengled E1F-N5E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-09-30T20:52:56Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sengled E1F-N5E

|     |     |
|-----|-----|
| Model | E1F-N5E  |
| Vendor  | [Sengled](/supported-devices/#v=Sengled)  |
| Description | Element color plus E12 |
| Exposes | light (state, brightness, color_temp, color_temp_startup, color_xy), power, energy |
| Picture | ![Sengled E1F-N5E](https://www.zigbee2mqtt.io/images/devices/E1F-N5E.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->

## Device Type
Sengled bulbs are Zigbee [end devices](/advanced/zigbee/01_zigbee_network.html#end-device), not [routers](/advanced/zigbee/01_zigbee_network.html#router), and therefore will not extend the reach of your Zigbee network. For more information see the [Sengled FAQ](https://support.sengled.com/hc/en-us/articles/115010871308-Do-any-Sengled-Zigbee-devices-act-as-Zigbee-repeaters-).


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `color_sync`: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `brightness`, `color_temp`, `color_temp_startup`, `color_xy`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
- `color_temp`: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp": VALUE}` where `VALUE` is a number between `154` and `500`, the higher the warmer the color. To read the color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp": ""}`. Besides the numeric values the following values are accepted: `coolest`, `cool`, `neutral`, `warm`, `warmest`.
- `color_temp_startup`: To set the startup color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp_startup": VALUE}` where `VALUE` is a number between `154` and `500`, the higher the warmer the color. To read the startup color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp_startup": ""}`. Besides the numeric values the following values are accepted: `coolest`, `cool`, `neutral`, `warm`, `warmest`, `previous`.
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

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

