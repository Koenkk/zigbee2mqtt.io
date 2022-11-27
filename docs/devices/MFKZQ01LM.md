---
title: "Xiaomi MFKZQ01LM control via MQTT"
description: "Integrate your Xiaomi MFKZQ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi MFKZQ01LM

|     |     |
|-----|-----|
| Model | MFKZQ01LM  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Mi/Aqara smart home cube |
| Exposes | battery, voltage, action_angle, device_temperature, power_outage_count, action_from_side, action_side, action_to_side, side, action, linkquality |
| Picture | ![Xiaomi MFKZQ01LM](https://www.zigbee2mqtt.io/images/devices/MFKZQ01LM.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Battery
Uses a CR2450 battery

### Pairing
Remove the back plate by using the included tool or a wedge to click it off.
Press and hold the reset button inside the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join, but the interview process may not finish.
If that happens, keep doing short presses to the reset button to keep the light flashing, until the interview process finishes successfully.


### Troubleshooting: device stops sending messages/disconnects from network
Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network.
Most of the times this happens because of the following reasons:
- Device has a weak signal, you can see the signal quality in the published messages as `linkquality`. A linkquality < 20 is considered weak.
- Low battery voltage, this can even happen when the battery still appears full. Try a different battery.
- The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.

More detailed information about this can be found [here](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623).
<!-- Notes END: Do not edit below this line -->


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Action_angle (numeric)
Value can be found in the published state on the `action_angle` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-360` and the maximum value is `360`.
The unit of this value is `°`.

### Device_temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Power_outage_count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Action_from_side (numeric)
Side of the cube.
Value can be found in the published state on the `action_from_side` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `6`.

### Action_side (numeric)
Side of the cube.
Value can be found in the published state on the `action_side` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `6`.

### Action_to_side (numeric)
Side of the cube.
Value can be found in the published state on the `action_to_side` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `6`.

### Side (numeric)
Side of the cube.
Value can be found in the published state on the `side` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `6`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `shake`, `wakeup`, `fall`, `tap`, `slide`, `flip180`, `flip90`, `rotate_left`, `rotate_right`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

