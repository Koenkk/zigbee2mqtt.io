---
title: "TuYa TS004F 6 button control via MQTT"
description: "Integrate your TuYa TS004F 6 button via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-12-13T19:17:03Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa TS004F 6 button

|     |     |
|-----|-----|
| Model | TS004F_6_button  |
| Vendor  | [TuYa](/supported-devices/#v=TuYa)  |
| Description | Wireless switch with 6 buttons |
| Exposes | battery, operation_mode, action, linkquality |
| Picture | ![TuYa TS004F 6 button](https://www.zigbee2mqtt.io/images/devices/TS004F_6_button.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Button positions
|1|3|5
|-----|-----|-----|
|2|4|6

### Pairing
To enter pairing mode hold button 1 and 2 (about 10 seconds) until all 6 LEDs start flashing.
Note: When the battery is low, it will also flash all 6 leds, so if your pairing is failing, double check your battries.
### Device modes
This device has two modes:
1. button mode  *(to have the 18 actions mentioned below)*
2. scene mode

To switch between modes hold buttons 2+3 (about 6 seconds) until light 3 flashes once.
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

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported..
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

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `brightness_step_up`, `brightness_step_down`, `brightness_move_up`, `brightness_move_down`, `1_single`, `1_double`, `1_hold`, `2_single`, `2_double`, `2_hold`, `3_single`, `3_double`, `3_hold`, `4_single`, `4_double`, `4_hold`, `5_single`, `5_double`, `5_hold`, `6_single`, `6_double`, `6_hold`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

