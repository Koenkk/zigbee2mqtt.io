---
title: "SONOFF SNZB-01M control via MQTT"
description: "Integrate your SONOFF SNZB-01M via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-01M

|     |     |
|-----|-----|
| Model | SNZB-01M  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Four-way wireless button |
| Exposes | battery, action |
| Picture | ![SONOFF SNZB-01M](https://www.zigbee2mqtt.io/images/devices/SNZB-01M.png) |


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

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_button_1`, `double_button_1`, `long_button_1`, `triple_button_1`, `single_button_2`, `double_button_2`, `long_button_2`, `triple_button_2`, `single_button_3`, `double_button_3`, `long_button_3`, `triple_button_3`, `single_button_4`, `double_button_4`, `long_button_4`, `triple_button_4`.

