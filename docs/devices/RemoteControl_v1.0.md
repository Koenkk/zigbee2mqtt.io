---
title: "Vimar RemoteControl_v1.0 control via MQTT"
description: "Integrate your Vimar RemoteControl_v1.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:30:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Vimar RemoteControl_v1.0

|     |     |
|-----|-----|
| Model | RemoteControl_v1.0  |
| Vendor  | [Vimar](/supported-devices/#v=Vimar)  |
| Description | Remote control IoT |
| Exposes | action |
| Picture | ![Vimar RemoteControl_v1.0](https://www.zigbee2mqtt.io/images/devices/RemoteControl_v1.0.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


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
The possible values are: `on`, `off`, `toggle`, `open`, `close`, `stop`, `brightness_move_to_level`, `brightness_move_up`, `brightness_move_down`, `brightness_step_up`, `brightness_step_down`, `brightness_stop`.

