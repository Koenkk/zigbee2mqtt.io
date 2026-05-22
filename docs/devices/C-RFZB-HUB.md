---
title: "Candeo C-RFZB-HUB control via MQTT"
description: "Integrate your Candeo C-RFZB-HUB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-04-30T19:57:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Candeo C-RFZB-HUB

|     |     |
|-----|-----|
| Model | C-RFZB-HUB  |
| Vendor  | [Candeo](/supported-devices/#v=Candeo)  |
| Description | Kinetic RF to Zigbee gateway |
| Exposes | action |
| Picture | ![Candeo C-RFZB-HUB](https://www.zigbee2mqtt.io/images/devices/C-RFZB-HUB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `actions`: Which press actions do you wish to detect (default: single)?. The value must be one of `single`, `single & double`, `single, double & triple`, `single, double, triple & quadruple`, `single, double, triple, quadruple & quintuple`

* `timeout`: Time in ms to delay sending of action since last event to allow for multi-press event detection (ignored if only single event is being detected). The value must be a number with a minimum value of `500` and with a maximum value of `1500`


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `button_1_single_pressed`, `button_1_double_pressed`, `button_1_triple_pressed`, `button_1_quadruple_pressed`, `button_1_quintuple_pressed`, `button_2_single_pressed`, `button_2_double_pressed`, `button_2_triple_pressed`, `button_2_quadruple_pressed`, `button_2_quintuple_pressed`, `button_3_single_pressed`, `button_3_double_pressed`, `button_3_triple_pressed`, `button_3_quadruple_pressed`, `button_3_quintuple_pressed`, `button_4_single_pressed`, `button_4_double_pressed`, `button_4_triple_pressed`, `button_4_quadruple_pressed`, `button_4_quintuple_pressed`, `button_5_single_pressed`, `button_5_double_pressed`, `button_5_triple_pressed`, `button_5_quadruple_pressed`, `button_5_quintuple_pressed`, `button_6_single_pressed`, `button_6_double_pressed`, `button_6_triple_pressed`, `button_6_quadruple_pressed`, `button_6_quintuple_pressed`, `button_7_single_pressed`, `button_7_double_pressed`, `button_7_triple_pressed`, `button_7_quadruple_pressed`, `button_7_quintuple_pressed`, `button_8_single_pressed`, `button_8_double_pressed`, `button_8_triple_pressed`, `button_8_quadruple_pressed`, `button_8_quintuple_pressed`, `button_9_single_pressed`, `button_9_double_pressed`, `button_9_triple_pressed`, `button_9_quadruple_pressed`, `button_9_quintuple_pressed`, `button_10_single_pressed`, `button_10_double_pressed`, `button_10_triple_pressed`, `button_10_quadruple_pressed`, `button_10_quintuple_pressed`.

