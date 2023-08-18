---
title: "Nue / 3A NUE-ZBFLB control via MQTT"
description: "Integrate your Nue / 3A NUE-ZBFLB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-09-30T20:52:56Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nue / 3A NUE-ZBFLB

|     |     |
|-----|-----|
| Model | NUE-ZBFLB  |
| Vendor  | [Nue / 3A](/supported-devices/#v=Nue%20%2F%203A)  |
| Description | Smart fan light switch |
| Exposes | switch (state), linkquality |
| Picture | ![Nue / 3A NUE-ZBFLB](https://www.zigbee2mqtt.io/images/devices/NUE-ZBFLB.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (button_light endpoint)
The current state of this switch is in the published state under the `state_button_light` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_light": "ON"}`, `{"state_button_light": "OFF"}` or `{"state_button_light": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_button_light": ""}`.

### Switch (button_fan_high endpoint)
The current state of this switch is in the published state under the `state_button_fan_high` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_fan_high": "ON"}`, `{"state_button_fan_high": "OFF"}` or `{"state_button_fan_high": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_button_fan_high": ""}`.

### Switch (button_fan_med endpoint)
The current state of this switch is in the published state under the `state_button_fan_med` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_fan_med": "ON"}`, `{"state_button_fan_med": "OFF"}` or `{"state_button_fan_med": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_button_fan_med": ""}`.

### Switch (button_fan_low endpoint)
The current state of this switch is in the published state under the `state_button_fan_low` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_button_fan_low": "ON"}`, `{"state_button_fan_low": "OFF"}` or `{"state_button_fan_low": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_button_fan_low": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

