---
title: "Sunricher ZG2819S-RGBW control via MQTT"
description: "Integrate your Sunricher ZG2819S-RGBW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-06-01T17:54:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher ZG2819S-RGBW

|     |     |
|-----|-----|
| Model | ZG2819S-RGBW  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Zigbee handheld remote RGBW 4 channels |
| Exposes | battery, voltage, action |
| Picture | ![Sunricher ZG2819S-RGBW](https://www.zigbee2mqtt.io/images/devices/ZG2819S-RGBW.png) |
| White-label | Iluminize 511.344 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Using the remote to reset other Zigbee devices

Many devices can be factory reset / re-paired with a help of ZG2819-RGBW remote:
1. Make sure your device is powered on and set to start Touchlink commissionning.
2. Bring the remote within 10cm of the lighting device.
3. Take the remote, press and hold down the ON/OFF button until the LED indictaor turns on.
4. Immediately short press 5 times **S2** to start touch reset of the remote. LED indicator flashes fast for 3s then flashes 3 times slowly to indicate sucessful reset.
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

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `brightness_step_up`, `brightness_step_down`, `brightness_move_up`, `brightness_move_down`, `brightness_stop`, `recall_*`, `hue_move`, `hue_stop`, `color_move`, `color_temperature_move`.

