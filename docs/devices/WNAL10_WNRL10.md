---
title: "Legrand WNAL10/WNRL10 control via MQTT"
description: "Integrate your Legrand WNAL10/WNRL10 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-02-01T14:45:57
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Legrand WNAL10/WNRL10

|     |     |
|-----|-----|
| Model | WNAL10/WNRL10  |
| Vendor  | [Legrand](/supported-devices/#v=Legrand)  |
| Description | Smart switch with Netatmo |
| Exposes | switch (state), led_in_dark, led_if_on, linkquality |
| Picture | ![Legrand WNAL10/WNRL10](https://www.zigbee2mqtt.io/images/devices/WNAL10-WNRL10.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Led_in_dark (binary)
Enables the LED when the light is turned off, allowing to see the switch in the dark.
Value can be found in the published state on the `led_in_dark` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_in_dark": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_in_dark": NEW_VALUE}`.
If value equals `ON` led_in_dark is ON, if `OFF` OFF.

### Led_if_on (binary)
Enables the LED when the light is turned on.
Value can be found in the published state on the `led_if_on` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_if_on": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_if_on": NEW_VALUE}`.
If value equals `ON` led_if_on is ON, if `OFF` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

