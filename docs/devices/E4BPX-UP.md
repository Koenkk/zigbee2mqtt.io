---
title: "YOKIS E4BPX-UP control via MQTT"
description: "Integrate your YOKIS E4BPX-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-06T19:22:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# YOKIS E4BPX-UP

|     |     |
|-----|-----|
| Model | E4BPX-UP  |
| Vendor  | [YOKIS](/supported-devices/#v=YOKIS)  |
| Description | Flush-mounted independent 4-channel transmitter (with antenna) |
| Exposes | identify, action |
| Picture | ![YOKIS E4BPX-UP](https://www.zigbee2mqtt.io/images/devices/E4BPX-UP.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a with a maximum value of `30`

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `toggle`, `brightness_move_to_level`, `brightness_move_up`, `brightness_move_down`, `brightness_step_up`, `brightness_step_down`, `brightness_stop`, `open`, `close`, `stop`.

