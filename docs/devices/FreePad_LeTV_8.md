---
title: "DIYRuZ FreePad_LeTV_8 control via MQTT"
description: "Integrate your DIYRuZ FreePad_LeTV_8 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-01T19:02:25Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# DIYRuZ FreePad_LeTV_8

|     |     |
|-----|-----|
| Model | FreePad_LeTV_8  |
| Vendor  | [DIYRuZ](/supported-devices/#v=DIYRuZ)  |
| Description | LeTV 8key FreePad mod |
| Exposes | battery, action, switch_type, switch_actions, linkquality |
| Picture | ![DIYRuZ FreePad_LeTV_8](https://www.zigbee2mqtt.io/images/devices/FreePad_LeTV_8.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[LeTV 8key FreePad mod](https://modkam.ru/?p=1791)
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `*_single`, `*_double`, `*_triple`, `*_quadruple`, `*_release`.

### Switch type (enum, button_1 endpoint)
Value can be found in the published state on the `switch_type_button_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_1": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_1 endpoint)
Value can be found in the published state on the `switch_actions_button_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_1": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_2 endpoint)
Value can be found in the published state on the `switch_type_button_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_2": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_2 endpoint)
Value can be found in the published state on the `switch_actions_button_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_2": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_3 endpoint)
Value can be found in the published state on the `switch_type_button_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_3": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_3 endpoint)
Value can be found in the published state on the `switch_actions_button_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_3": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_4 endpoint)
Value can be found in the published state on the `switch_type_button_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_4": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_4 endpoint)
Value can be found in the published state on the `switch_actions_button_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_4": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_5 endpoint)
Value can be found in the published state on the `switch_type_button_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_5": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_5 endpoint)
Value can be found in the published state on the `switch_actions_button_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_5": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_6 endpoint)
Value can be found in the published state on the `switch_type_button_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_6": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_6 endpoint)
Value can be found in the published state on the `switch_actions_button_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_6": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_7 endpoint)
Value can be found in the published state on the `switch_type_button_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_7": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_7 endpoint)
Value can be found in the published state on the `switch_actions_button_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_7": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Switch type (enum, button_8 endpoint)
Value can be found in the published state on the `switch_type_button_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_button_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_button_8": NEW_VALUE}`.
The possible values are: `toggle`, `momentary`, `multifunction`.

### Switch actions (enum, button_8 endpoint)
Value can be found in the published state on the `switch_actions_button_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_button_8": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_button_8": NEW_VALUE}`.
The possible values are: `on`, `off`, `toggle`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

