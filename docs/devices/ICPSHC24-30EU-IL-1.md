---
title: "IKEA ICPSHC24-30EU-IL-1 control via MQTT"
description: "Integrate your IKEA ICPSHC24-30EU-IL-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# IKEA ICPSHC24-30EU-IL-1

|     |     |
|-----|-----|
| Model | ICPSHC24-30EU-IL-1  |
| Vendor  | IKEA  |
| Description | TRADFRI driver for wireless control (30 watt) |
| Exposes | light (state, brightness), effect, power_on_behavior, linkquality |
| Picture | ![IKEA ICPSHC24-30EU-IL-1](https://www.zigbee2mqtt.io/images/devices/ICPSHC24-30EU-IL-1.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
To factory reset the TRADFRI drivers use a small pin or paperclip to push the reset button once.
There are two differend modes, long push will reset the device (blinking lights), short presses (no blinking lights) will help pairing the device.

NB: you HAVE to put the device VERY close to the zigbee device, otherwise it won't be able to detect.

If you struggle to pair this device, the following procedure should help getting it paired:

If you have troubles pairing this device, note that you should always start with a freshly powered on device. Even when you reset the device you should switch the power off afterwards. And retry powering on the device.

Timing is key, I'd advice you to disable zigbee2mqtt auto join and wait a few seconds before each try.

The device is only able to pair for a short period of time after powering it on.
After powering on the device you should immediately keep short-pressing (LEDs can't blink, blinking means that the driver has been reset to factory state) the reset on the device until it is successfully configured / you see a green pairing notification in your zigbee2mqtt server.

I'd guess that depending on your zigbee hardware you need to enable zigbees autojoin mode between -3 to 3 seconds to the point you power on the device.
I used a conbee II usb stick and had to enable autojoin -1 to 0 seconds before powering on the device, and I immediately started short pressing (put the pin inside the hole before powering on)
Maybe you need to play around with the timing.

If you didn't see any connection / pairing notifications within 5 to 10 seconds you can try again. I always powered off, powered on, reset with long push, powered off, and restartet the process.

I've tried this procedure with models in plastic packaging from around 2020 and newer models in paper packaging from 2022.
Both came with the firmware `1.2.245` -> I don't know if it gets easier with newer firmware versions

Wifi from your Notebook might interfere with the pairing.

<!-- Notes END: Do not edit below this line -->

## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`


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

### Power_on_behavior (enum)
Controls the behavior when the device is powered on.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

