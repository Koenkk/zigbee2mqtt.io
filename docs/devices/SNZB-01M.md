---
title: "SONOFF SNZB-01M control via MQTT"
description: "Integrate your SONOFF SNZB-01M via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-01M

|     |     |
|-----|-----|
| Model | SNZB-01M  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Four-way wireless button |
| Exposes | battery, action |
| Picture | ![SONOFF SNZB-01M](https://www.zigbee2mqtt.io/images/devices/SNZB-01M.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

## Notes

**All information is taken from the SONOFF website. It needs confirmation!**

### Battery
Uses 1 x CR2477 battery

**This device *sleeps* to preserve energy when it's not actively used.**  
When sleeping, it will not respond to any Z2M commands.  
Press its buttons to keep it awake and allow interactions.

### Pairing
**Press and hold the reset button for 5s**. An LED indicator should slowly flash until it connects.  
The button is found under the back cover, next to the battery.

### Binding

**This remote can directly control individual devices and/or groups.**

- Pairing inside the network is possible by [binding](../guide/usage/binding.md): 
  - `OnOff` cluster for toggling 
  - `LevelCtrl` cluster for dimming
  - `Scenes` cluster for changing scenes
- Pairing outside the network is possible through [Touchlink](../guide/usage/touchlink.md).  
  - Activate by keeping it very close to the target device and holding **Button 1** 'until the indicator stays solid for about 3 seconds, then release'.
  - No information about *cloning*
  
### Action mapping

| Real Action     |        Z2M Action |       Bind Action |
| --------------- | ----------------: | ----------------: |
| Button 1 single | `single_button_1` |        'On/Off' ? |
| Button 1 double | `double_button_1` |                 ? |
| Button 1 triple | `triple_button_1` |                 ? |
| Button 1 long   |   `long_button_1` |                 ? |
| Button 2 single | `single_button_2` |                 ? |
| Button 2 double | `double_button_2` |                 ? |
| Button 2 triple | `triple_button_2` |                 ? |
| Button 2 long   |   `long_button_2` |      'Brighten' ? |
| Button 3 single | `single_button_3` |                 ? |
| Button 3 double | `double_button_3` |                 ? |
| Button 3 triple | `triple_button_3` |                 ? |
| Button 3 long   |   `long_button_3` |           'Dim' ? |
| Button 4 single | `single_button_4` | 'Switch Scenes' ? |
| Button 4 double | `double_button_4` |                 ? |
| Button 4 triple | `triple_button_4` |                 ? |
| Button 4 long   |   `long_button_4` |                 ? |

<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_button_1`, `double_button_1`, `long_button_1`, `triple_button_1`, `single_button_2`, `double_button_2`, `long_button_2`, `triple_button_2`, `single_button_3`, `double_button_3`, `long_button_3`, `triple_button_3`, `single_button_4`, `double_button_4`, `long_button_4`, `triple_button_4`.

