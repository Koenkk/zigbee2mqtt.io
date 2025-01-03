---
title: "Sunricher SR-ZG2836D5-Pro control via MQTT"
description: "Integrate your Sunricher SR-ZG2836D5-Pro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-11-30T20:27:20
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG2836D5-Pro

|     |     |
|-----|-----|
| Model | SR-ZG2836D5-Pro  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Zigbee smart remote |
| Exposes | battery, action, linkquality |
| Picture | ![Sunricher SR-ZG2836D5-Pro](https://www.zigbee2mqtt.io/images/devices/SR-ZG2836D5-Pro.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Home Assistant

For easy integration with Home Assistant, you can use our blueprint. This blueprint helps you:

- Identify and respond to button press events from different buttons on the device
- Easily distinguish between buttons in your automations
- Simplify the automation setup process

<a href="https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fraw.githubusercontent.com%2Fmaginawin%2Fsr_ha_blueprints%2Frefs%2Fheads%2Fmain%2Fblueprints%2FSR-ZG2836D5-Pro%2Fbutton-trigger.yaml"><img src="https://my.home-assistant.io/badges/blueprint_import.svg" width="200"></a>
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
The possible values are: `short_press`, `double_press`, `hold`, `hold_released`, `clockwise_rotation`, `anti_clockwise_rotation`, `stop_rotation`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

