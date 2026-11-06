---
title: "STREDA BN0-T-03/PW control via MQTT"
description: "Integrate your STREDA BN0-T-03/PW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:29:03.032Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# STREDA BN0-T-03/PW

|     |     |
|-----|-----|
| Model | BN0-T-03/PW  |
| Vendor  | [STREDA](/supported-devices/#v=STREDA)  |
| Description | 4-button wall switch |
| Exposes | battery, voltage, battery_low, action |
| Picture | ![STREDA BN0-T-03/PW](https://www.zigbee2mqtt.io/images/devices/BN0-T-03-PW.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_up_button_1`, `single_up_button_2`, `double_up_button_1`, `double_up_button_2`, `release_up_button_1`, `release_up_button_2`, `hold_up_button_1`, `hold_up_button_2`, `single_down_button_1`, `single_down_button_2`, `double_down_button_1`, `double_down_button_2`, `release_down_button_1`, `release_down_button_2`, `hold_down_button_1`, `hold_down_button_2`.

