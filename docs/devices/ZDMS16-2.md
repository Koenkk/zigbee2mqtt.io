---
title: "Avatto ZDMS16-2 control via MQTT"
description: "Integrate your Avatto ZDMS16-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-04-29T19:24:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Avatto ZDMS16-2

|     |     |
|-----|-----|
| Model | ZDMS16-2  |
| Vendor  | [Avatto](/supported-devices/#v=Avatto)  |
| Description | Zigbee 2 channels Dimmer |
| Exposes | light (state, brightness, min_brightness, max_brightness), countdown, switch_type, power_on_behavior, linkquality |
| Picture | ![Avatto ZDMS16-2](https://www.zigbee2mqtt.io/images/devices/ZDMS16-2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Light (l1 endpoint)
This light supports the following features: `state`, `brightness`, `min_brightness`, `max_brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_l1": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness_l1": ""}`.

### Countdown (numeric, l1 endpoint)
Countdown to turn device off after a certain time.
Value can be found in the published state on the `countdown_l1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Switch type (enum, l1 endpoint)
Type of the switch.
Value can be found in the published state on the `switch_type_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_l1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_l1": NEW_VALUE}`.
The possible values are: `toggle`, `state`, `momentary`.

### Light (l2 endpoint)
This light supports the following features: `state`, `brightness`, `min_brightness`, `max_brightness`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_l2": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness_l2": ""}`.

### Countdown (numeric, l2 endpoint)
Countdown to turn device off after a certain time.
Value can be found in the published state on the `countdown_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_l2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Switch type (enum, l2 endpoint)
Type of the switch.
Value can be found in the published state on the `switch_type_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_l2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_l2": NEW_VALUE}`.
The possible values are: `toggle`, `state`, `momentary`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss. If you get an `UNSUPPORTED_ATTRIBUTE` error, the device does not support it..
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

