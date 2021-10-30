---
title: "SmartThings F-MLT-US-2 control via MQTT"
description: "Integrate your SmartThings F-MLT-US-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section till next h1 (#) or h2 heading (##). -->
<!-- Do NOT use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SmartThings F-MLT-US-2

|     |     |
|-----|-----|
| Model | F-MLT-US-2  |
| Vendor  | SmartThings  |
| Description | Multipurpose sensor (2016 model) |
| Exposes | temperature, contact, battery_low, tamper, battery, moving, x_axis, y_axis, z_axis, linkquality |
| Picture | ![SmartThings F-MLT-US-2](https://psi-4ward.github.io/zigbee2mqtt.io/images/devices/F-MLT-US-2.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
To control the precision based on the temperature value set it to e.g. `{30: 0, 10: 1}`,
when temperature >= 30 precision will be 0, when temperature >= 10 precision will be 1. Precision will take into affect with next report of device.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`. Calibration will take into affect with next report of device.

<!-- Notes END: Do not edit below this line -->


## Exposes

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Moving (binary)
Indicates if the device is moving.
Value can be found in the published state on the `moving` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` moving is ON, if `false` OFF.

### X_axis (numeric)
Accelerometer X value.
Value can be found in the published state on the `x_axis` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Y_axis (numeric)
Accelerometer Y value.
Value can be found in the published state on the `y_axis` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Z_axis (numeric)
Accelerometer Z value.
Value can be found in the published state on the `z_axis` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

