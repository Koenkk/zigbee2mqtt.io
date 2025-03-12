---
title: "Gledopto GL-C-009P control via MQTT"
description: "Integrate your Gledopto GL-C-009P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-03-30T20:29:35Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Gledopto GL-C-009P

|     |     |
|-----|-----|
| Model | GL-C-009P  |
| Vendor  | [Gledopto](/supported-devices/#v=Gledopto)  |
| Description | Zigbee LED Controller W (pro) |
| Exposes | light (state, brightness), effect, power_on_behavior, identify |
| Picture | ![Gledopto GL-C-009P](https://www.zigbee2mqtt.io/images/devices/GL-C-009P.png) |
| White-label | Gledopto GL-C-009P_mini |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
1. Switch on your device.
2. Now switch off and on within 2 seconds.
3. Repeat off/on four times.
4. Reset is done when the device is switched on in the fifth time and the light stays on after blinking 4 times

## Multi-mode 5-in-1 devices
Gledopto produces devices that allow you to select one of up to 5 different LED Controller types with each mode displaying a different [Indicator Light] **color**.

* `RGB+CCT` [GL-C-008P](./GL-C-008P.md) [White]
* `RGBW` [GL-C-007P](./GL-C-007P.md) [Yellow]
* `RGB` [GL-C-003P](./GL-C-003P.md) [Blue]
* `CCT` [GL-C-006P](./GL-C-006P.md) [Green]
* `Dimmer` [GL-C-009P](./GL-C-009P.md) [Red]

This `GL-C-009P` mode is available as a `modelId` in the following models:

* **GL-C-001P** - Zigbee Pro 5 in 1 Smart LED Controller
* **GL-C-002P** - Zigbee Pro 5 in 1 LED Controller Mini Ultra Thin
* **GL-C-011P** - Zigbee Pro 5 in 1 Smart LED Controller DIN Rail
* **GL-C-201P** - Zigbee Pro+ 5 in 1 Smart LED Controller
* **GL-C-301P** - Zigbee Pro+ 5 in 1 Smart LED Controller Ultra-Mini

You can switch to this `GL-C-009P` mode by short pressing the `Opt` button on the device until the Indicator Light is `Red`.

To pair with, or change modes on, Zigbee2MQTT, press the `Reset` button 4 times

## Dual-mode 2-in-1 devices
Gledopto produces devices that allow you to select one of up to 2 different LED Controller types with each mode displaying a different [Indicator Light] **status**.

* `CCT` [GL-C-006P](./GL-C-006P.md) [Indicator Light Off]
* `Dimmer` [GL-C-009P](./GL-C-009P.md) [Indicator Light On]

This `GL-C-009P` mode is available as a `modelId` in the following models:
* **GL-C-003P**† - Zigbee Pro 3-wire/2-wire 2 in 1 CCT/DIM LED Controller
* **GL-C-203P** - Zigbee Pro+ 3-wire/2-wire 2 in 1 CCT/DIM LED Controller

You can switch to this `GL-C-009P` mode by short pressing the `Reset` button on the device until the Indicator Light is `On`.

To pair with, or change modes on, Zigbee2MQTT, long press the `Reset` button for more that 2 seconds.

† Note that this **GL-C-003P** Model is not an RGB Controller and not capable of being selected as an `RGB` controller or sending the `GL-C-003P` ModelId to Zigbee2MQTT. See [GL-C-003P](./GL-C-003P.md) for devices that can do this.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

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

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

