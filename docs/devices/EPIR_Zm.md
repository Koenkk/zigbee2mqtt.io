---
title: "AwoX EPIR_Zm control via MQTT"
description: "Integrate your AwoX EPIR_Zm via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-06-01T17:54:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# AwoX EPIR_Zm

|     |     |
|-----|-----|
| Model | EPIR_Zm  |
| Vendor  | [AwoX](/supported-devices/#v=AwoX)  |
| Description | Connect-Z motion (PIR) sensor |
| Exposes | battery, occupancy, action |
| Picture | ![AwoX EPIR_Zm](https://www.zigbee2mqtt.io/images/devices/EPIR_Zm.png) |
| White-label | EGLO 99106 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->

## Warning: degrades network performance
AwoX devices are known to cause network instability. If your Zigbee network has poor performance or you are seeing errors like `NO_NETWORK_ROUTE` you should remove this device from the network.
It [may help](https://github.com/Koenkk/zigbee2mqtt/discussions/18366) to OTA update your device via the "AwoX HomeControl" app over Bluetooth.



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `toggle`, `brightness_move_to_level`, `brightness_move_up`, `brightness_move_down`, `brightness_step_up`, `brightness_step_down`, `brightness_stop`.

