---
title: "Aqara CTP-R01 control via MQTT"
description: "Integrate your Aqara CTP-R01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-01T14:45:22
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara CTP-R01

|     |     |
|-----|-----|
| Model | CTP-R01  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Cube T1 Pro |
| Exposes | battery, voltage, power_outage_count, operation_mode, side, action_from_side, action_angle, action, linkquality |
| Picture | ![Aqara CTP-R01](https://www.zigbee2mqtt.io/images/devices/CTP-R01.png) |
| White-label | Aqara MFCZQ12LM |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes 

### Battery
Uses a CR2450 battery

### Pairing
Remove the back plate by using the included tool or a wedge to click it off.
Press and hold the LINK button inside the device for +- 5 seconds (until the blue light blinks three times).
After this the device will automatically join, but the interview process may not finish.
If that happens, keep doing short presses to the LINK button to keep the light flashing, until the interview process finishes successfully.

### Mode Switch 
There are two ways to toggle between scene mode and action mode: 
1. Hard switch: 

    Open lid, and click LINK 5 times in a row. 

2. Soft switch (using Zigbee2MQTT frontend): 

    Toggle `operation_mode` in the Exposes tab of the device in Zigbee2MQTT frontend. 
    Change won't happen right away, the device only responds to mode switch once an hour. 
    But you can give the device a throw (a forceful shake action without backward motion), which, when done right, will force the device to respond. 
    Otherwise you can open lid and click LINK button to have it respond immediately. 

### Supported Actions

- Scene mode: 

  | Action           | additional attributes in payload |
  | ---------------- | -------------------------------- |
  | rotate_left      | action_angle                     |
  | rotate_right     | action_angle                     |
  | shake            | -                                |
  | throw            | -                                |
  | hold             | -                                |
  | side_up          | side                             |
  | flip_to_side     | side                             |
  | 1_min_inactivity | -                                |

- Action mode: 

  | Action           | additional attributes in payload |
  | ---------------- | -------------------------------- |
  | rotate_left      | action_angle                     |
  | rotate_right     | action_angle                     |
  | shake            | -                                |
  | throw            | -                                |
  | slide            | side                             |
  | tap              | side                             |
  | flip90           | side, action_from_side           |
  | flip180          | side, action_from_side           |
  | 1_min_inactivity | -                                |
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


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

### Power outage count (numeric)
Number of power outages.
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Operation mode (enum)
[Soft Switch]: There is a configuration window, opens once an hour on itself, only during which the cube will respond to mode switch. Mode switch will be scheduled to take effect when the window becomes available. You can also give it a throw action (no backward motion) to force a respond! Otherwise, you may open lid and click LINK once to make the cube respond immediately. [Hard Switch]: Open lid and click LINK button 5 times..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `action_mode`, `scene_mode`.

### Side (numeric)
Side of the cube.
Value can be found in the published state on the `side` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `6`.

### Action from side (numeric)
Side of the cube.
Value can be found in the published state on the `action_from_side` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `6`.

### Action angle (numeric)
Value can be found in the published state on the `action_angle` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `-360` and the maximum value is `360`.
The unit of this value is `°`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `shake`, `throw`, `tap`, `slide`, `flip180`, `flip90`, `hold`, `side_up`, `rotate_left`, `rotate_right`, `1_min_inactivity`, `flip_to_side`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

