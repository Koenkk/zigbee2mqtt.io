---
title: "Candeo C-ZB-SR5BR control via MQTT"
description: "Integrate your Candeo C-ZB-SR5BR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-07-01T17:54:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Candeo C-ZB-SR5BR

|     |     |
|-----|-----|
| Model | C-ZB-SR5BR  |
| Vendor  | [Candeo](/supported-devices/#v=Candeo)  |
| Description | Zigbee scene switch remote - 5 button rotary |
| Exposes | battery, action |
| Picture | ![Candeo C-ZB-SR5BR](https://www.zigbee2mqtt.io/images/devices/C-ZB-SR5BR.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




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
The possible values are: `button_1_click`, `button_1_double_click`, `button_1_hold`, `button_1_release`, `button_2_click`, `button_2_double_click`, `button_2_hold`, `button_2_release`, `button_3_click`, `button_3_double_click`, `button_3_hold`, `button_3_release`, `button_4_click`, `button_4_double_click`, `button_4_hold`, `button_4_release`, `centre_button_click`, `centre_button_double_click`, `centre_button_hold`, `centre_button_release`, `started_rotating_left`, `continued_rotating_left`, `stopped_rotating_left`, `started_rotating_right`, `continued_rotating_right`, `stopped_rotating_right`.

