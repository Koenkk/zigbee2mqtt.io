---
title: "Linxura SHCB-1-MO control via MQTT"
description: "Integrate your Linxura SHCB-1-MO via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-08-30T18:06:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Linxura SHCB-1-MO

|     |     |
|-----|-----|
| Model | SHCB-1-MO  |
| Vendor  | [Linxura](/supported-devices/#v=Linxura)  |
| Description | Aura 12-button smart controller |
| Exposes | battery, action |
| Picture | ![Linxura SHCB-1-MO](https://www.zigbee2mqtt.io/images/devices/SHCB-1-MO.png) |



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
The possible values are: `button_1_click`, `button_1_double_click`, `button_1_hold`, `button_2_click`, `button_2_double_click`, `button_2_hold`, `button_3_click`, `button_3_double_click`, `button_3_hold`, `button_4_click`, `button_4_double_click`, `button_4_hold`, `button_5_click`, `button_5_double_click`, `button_5_hold`, `button_6_click`, `button_6_double_click`, `button_6_hold`, `button_7_click`, `button_7_double_click`, `button_7_hold`, `button_8_click`, `button_8_double_click`, `button_8_hold`, `button_9_click`, `button_9_double_click`, `button_9_hold`, `button_10_click`, `button_10_double_click`, `button_10_hold`, `button_11_click`, `button_11_double_click`, `button_11_hold`, `button_12_click`, `button_12_double_click`, `button_12_hold`.

