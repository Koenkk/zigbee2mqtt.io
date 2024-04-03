---
title: "Aqara WXCJKG13LM control via MQTT"
description: "Integrate your Aqara WXCJKG13LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-12-15T17:27:48Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara WXCJKG13LM

|     |     |
|-----|-----|
| Model | WXCJKG13LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Opple wireless switch (triple band) |
| Exposes | battery, voltage, operation_mode, power_outage_count, action, linkquality |
| Picture | ![Aqara WXCJKG13LM](https://www.zigbee2mqtt.io/images/devices/WXCJKG13LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing Instructions
Press and hold the button on the backside of the device until the blue light starts blinking; release it, and the pairing should begin.

### Binding
By default, the device is bound to the coordinator, but it can also be used to directly control other lights and switches in the network (see [guide on binding](https://www.zigbee2mqtt.io/guide/usage/binding.html)).

Note that this device can only be bound to one device or group at a time.

For proper commands, you will need to change the operation mode of the device; by default, it is in `event` mode, but when binding, we need to change it to `command` mode.
To do this, send the `{"operation_mode": "command"}` payload to `zigbee2mqtt/FRIENDLY_NAME/set` (or use the `operation_mode` parameter in the GUI). Right before doing this, make sure to wake up the device.

As the device is sleeping by default, you need to wake it up after sending the bind/unbind command by pressing the reset button once.

When endpoint `1` is bound to a light or a group of lights, the behavior is as follows (for a triple band model):
| Button | Click | Action | Comment |
|-----|-----|-----|-----|
| Top<br>left | Single<br>Double<br>Long  | Turn off | Using the `commandOff` command. |
| Top<br>right | Single<br>Double<br>Long  | Turn on | Using the `commandOn` command. |
| Middle<br>left | Single<br>Double | Step down the brightness | In steps of 85 points (33%), using the `step` command. |
| Middle<br>right | Single<br>Double | Step up the brightness | In steps of 85 points (33%), using the `step` command. |
| Middle<br>left | Long | Smoothly decrease the brightness | In steps of 15 points (around 6%), using the `commandMove` command.<br>Sends the `commandStop` command, on button release. |
| Middle<br>right | Long | Smoothly increase the brightness | In steps of 15 points (around 6%), using the `commandMove` command.<br>Sends the `commandStop` command, on button release. |
| Bottom<br>left | Single<br>Double | Step color the temperature down | In steps of 69 mired, using the `stepColorTemp` command.<br>I.e., make it warmer. |
| Bottom<br>right | Single<br>Double | Step color the temperature up | In steps of 69 mired, using the `stepColorTemp` command.<br>I.e., make it colder. |
| Bottom<br>left | Double | Smoothly decrease the color temperature | In steps of 15 mired, using the `commandMoveColorTemp` command.<br>I.e., make it warmer. |
| Bottom<br>right | Double | Smoothly increase the color temperature | In steps of 15 mired, using the `commandMoveColorTemp` command.<br>I.e., make it colder. |

### Battery Replacement
All devices in the Opple line share the same internal design. First, you will need to remove the wireless switch part from its mount.
Then use a long and thin object (preferably a plastic spudger, as the plastic is soft) to unclip the front button(s) from the frame by reaching underneath and carefully prying up.
For the triple-band model, removing the side buttons will help with the center one. After removing buttons, the black frame must be unscrewed using a small Phillips screwdriver and then unclipped from the device case on the sides.
When the logic board is exposed, simply remove it and turn it upside down, where a **single CR2032** battery is located. Be careful with the logic board removed, as it also holds a small pairing button in place on the other side.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Operation mode (enum)
Operation mode, select "command" to enable bindings (wake up the device before changing modes!).
Value can be found in the published state on the `operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `command`, `event`.

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `button_1_hold`, `button_1_release`, `button_1_single`, `button_1_double`, `button_1_triple`, `button_2_hold`, `button_2_release`, `button_2_single`, `button_2_double`, `button_2_triple`, `button_3_hold`, `button_3_release`, `button_3_single`, `button_3_double`, `button_3_triple`, `button_4_hold`, `button_4_release`, `button_4_single`, `button_4_double`, `button_4_triple`, `button_5_hold`, `button_5_release`, `button_5_single`, `button_5_double`, `button_5_triple`, `button_6_hold`, `button_6_release`, `button_6_single`, `button_6_double`, `button_6_triple`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

