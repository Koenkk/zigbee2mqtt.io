---
title: "Tuya ERS-10TZBVK-AA control via MQTT"
description: "Integrate your Tuya ERS-10TZBVK-AA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-12-31T16:51:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ERS-10TZBVK-AA

|     |     |
|-----|-----|
| Model | ERS-10TZBVK-AA  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart knob |
| Exposes | action, action_step_size, action_transition_time, action_rate, battery, operation_mode, linkquality |
| Picture | ![Tuya ERS-10TZBVK-AA](https://www.zigbee2mqtt.io/images/devices/ERS-10TZBVK-AA.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair, press the reset button on the back until the green LED flashes.

> Note: When you release the reset button, the green LED should keep flashing until the device is paired. If it only flashes a few times and then stops, your battery level is most likely too low (<3v) and you need to replace the battery.

### The `toggle` action switches on/off an unexpected zigbee device
The source of the problem is that manufactures of the knob and another device placed them into group 0 by default. To bypass it, you should manually create a group in Z2M with different ID (ID=1, for example) and add your knob inside.
For more details take a look at [the issue](https://github.com/Koenkk/zigbee2mqtt/issues/12397).

### Device operation
Device can be set in two modes : COMMAND and EVENT (Current Mode is published on the operation_mode property). A triple click seems firmware dependend (no action shown) and will toggle between COMMAND and EVENT mode.

- `COMMAND` mode

| User Action  | `action` property |
| ------------- | ------------- |
| Rotate Left | Brightness_Step_Up|
| Rotate Right | Brightness_Step_Down|
| Single Click | Toggle|
| HOLD more than 3s | Hue_Move|
| UnHold button | Hue_Stop|
| Push+Hold and Rotate Left | color_temperature_step_up|
| Push+Hold and Rotate Left | color_temperature_step_down|

Action_Step_Size = %Numeric_Value (0_255)
Action_Rate = Keeps "No value" all the time
- `EVENT` mode

| User Action  | `action` property |
|--------------| ------------- |
| Rotate Left  | rotate_left |
| Rotate Right | rotate_right |
| Single Click | single |
| Double Click | double |
| Hold         | hold |

action_step_size, action_transition_time, action_rate are still present but show "no value"
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `toggle`, `brightness_step_up`, `brightness_step_down`, `color_temperature_step_up`, `color_temperature_step_down`, `saturation_move`, `hue_move`, `hue_stop`, `single`, `double`, `hold`, `rotate_left`, `rotate_right`.

### Action step size (numeric)
Value can be found in the published state on the `action_step_size` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Action transition time (numeric)
Value can be found in the published state on the `action_transition_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Action rate (numeric)
Value can be found in the published state on the `action_rate` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Operation mode (enum)
Operation mode: "command" - for group control, "event" - for clicks.
Value can be found in the published state on the `operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `command`, `event`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

