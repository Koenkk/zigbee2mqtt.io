---
title: "zunzunbee SSWZ8T control via MQTT"
description: "Integrate your zunzunbee SSWZ8T via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:20:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# zunzunbee SSWZ8T

|     |     |
|-----|-----|
| Model | SSWZ8T  |
| Vendor  | [zunzunbee](/supported-devices/#v=zunzunbee)  |
| Description | Slate switch (8-button touch controller) |
| Exposes | battery, temperature, action |
| Picture | ![zunzunbee SSWZ8T](https://www.zigbee2mqtt.io/images/devices/SSWZ8T.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `button_1_short_press`, `button_1_long_press`, `button_2_short_press`, `button_2_long_press`, `button_3_short_press`, `button_3_long_press`, `button_4_short_press`, `button_4_long_press`, `button_5_short_press`, `button_5_long_press`, `button_6_short_press`, `button_6_long_press`, `button_7_short_press`, `button_7_long_press`, `button_8_short_press`, `button_8_long_press`.

