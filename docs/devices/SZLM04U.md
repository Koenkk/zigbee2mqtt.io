---
title: "Lincukoo SZLM04U control via MQTT"
description: "Integrate your Lincukoo SZLM04U via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:59:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lincukoo SZLM04U

|     |     |
|-----|-----|
| Model | SZLM04U  |
| Vendor  | [Lincukoo](/supported-devices/#v=Lincukoo)  |
| Description | Motion and brightness sensor |
| Exposes | occupancy, illuminance, battery, usb_power, switch, fading_time |
| Picture | ![Lincukoo SZLM04U](https://www.zigbee2mqtt.io/images/devices/SZLM04U.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Usb power (binary)
check usb power plug in or not.
Value can be found in the published state on the `usb_power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` usb power is ON, if `OFF` OFF.

### Switch (binary)
enable or disable the sensor.
Value can be found in the published state on the `switch` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` switch is ON, if `OFF` OFF.

### Fading time (numeric)
Fading time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `300`.
The unit of this value is `s`.

