---
title: "CTM Lyng mKomfy_Sensor control via MQTT"
description: "Integrate your CTM Lyng mKomfy_Sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-01T15:06:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# CTM Lyng mKomfy_Sensor

|     |     |
|-----|-----|
| Model | mKomfy_Sensor  |
| Vendor  | [CTM Lyng](/supported-devices/#v=CTM%20Lyng)  |
| Description | mKomfy, stove guard |
| Exposes | battery, battery_low, temperature, alarm_status, active |
| Picture | ![CTM Lyng mKomfy_Sensor](https://www.zigbee2mqtt.io/images/devices/mKomfy_Sensor.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Alarm status (enum)
Alarm status..
Value can be found in the published state on the `alarm_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `ok`, `tamper`, `high_temperatur`, `timer`, `battery_alarm`, `error`, `unknown`.

### Active (binary)
Stove guard active/inactive (Stove in use).
Value can be found in the published state on the `active` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` active is ON, if `false` OFF.

