---
title: "Sunricher SR-ZG9001K2-DIM2 control via MQTT"
description: "Integrate your Sunricher SR-ZG9001K2-DIM2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-01-31T22:24:43Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9001K2-DIM2

|     |     |
|-----|-----|
| Model | SR-ZG9001K2-DIM2  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Zigbee 2 button wall switch |
| Exposes | battery, action, linkquality |
| Picture | ![Sunricher SR-ZG9001K2-DIM2](https://www.zigbee2mqtt.io/images/devices/SR-ZG9001K2-DIM2.png) |


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

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on_1`, `off_1`, `stop_1`, `brightness_move_up_1`, `brightness_move_down_1`, `brightness_stop_1`, `on_2`, `off_2`, `stop_2`, `brightness_move_up_2`, `brightness_move_down_2`, `brightness_stop_2`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

