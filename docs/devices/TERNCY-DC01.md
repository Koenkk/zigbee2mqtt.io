---
title: "TERNCY TERNCY-DC01 control via MQTT"
description: "Integrate your TERNCY TERNCY-DC01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-05-04T11:36:48Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TERNCY TERNCY-DC01

|     |     |
|-----|-----|
| Model | TERNCY-DC01  |
| Vendor  | [TERNCY](/supported-devices/#v=TERNCY)  |
| Description | Temperature & contact sensor  |
| Exposes | temperature, contact, battery, linkquality |
| Picture | ![TERNCY TERNCY-DC01](https://www.zigbee2mqtt.io/images/devices/TERNCY-DC01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the green light starts blinking).
After this the device will automatically join.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


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

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

