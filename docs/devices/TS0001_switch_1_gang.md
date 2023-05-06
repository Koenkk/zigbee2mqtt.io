---
title: "Tuya TS0001_switch_1_gang control via MQTT"
description: "Integrate your Tuya TS0001_switch_1_gang via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-04-14T22:17:44Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0001_switch_1_gang

|     |     |
|-----|-----|
| Model | TS0001_switch_1_gang  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 1-Gang switch with backlight |
| Exposes | switch (state), power_on_behavior, backlight_mode, linkquality |
| Picture | ![Tuya TS0001_switch_1_gang](https://www.zigbee2mqtt.io/images/devices/TS0001_switch_1_gang.jpg) |

<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

<!-- Notes END: Do not edit below this line -->

## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Power_on_behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Backlight Mode
The current state of this switch is in the published state under the `backlight_mode` property (value is `on` or `off`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight_mode": "on"}` or `{"backlight_mode": "off"}`.
It's not possible to read (`/get`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

