---
title: "Sunricher SR-ZG9001K12-DIM-Z4 control via MQTT"
description: "Integrate your Sunricher SR-ZG9001K12-DIM-Z4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-09-01T18:11:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9001K12-DIM-Z4

|     |     |
|-----|-----|
| Model | SR-ZG9001K12-DIM-Z4  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | 4 zone remote and dimmer |
| Exposes | battery, action, linkquality |
| Picture | ![Sunricher SR-ZG9001K12-DIM-Z4](https://www.zigbee2mqtt.io/images/devices/SR-ZG9001K12-DIM-Z4.png) |
| White-label | RGB Genie ZGRC-KEY-013 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Press and hold the All On button on the Remote until the Status LED turns on. Then immediately press the All Off button. The Status LED will blink 5 times quickly to indicate a successful pairing.

### Resetting
Press and hold the All On button on the Remote until the Status LED turns on. Then immediately press 5 times the All On button. The Status LED will blink 3 times to indicate successful reset.


### Deprecated click event
By default this device exposes a deprecated `click` event. It's recommended to use the `action` event instead.

To disable the `click` event, set `legacy: false` for this device in `configuration.yaml`. Example:

```yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
```
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


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
The possible values are: `brightness_move_up`, `brightness_move_down`, `brightness_stop`, `on`, `off`, `recall_*`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

