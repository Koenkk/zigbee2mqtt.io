---
title: "Moes ZS-D3 control via MQTT"
description: "Integrate your Moes ZS-D3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZS-D3

|     |     |
|-----|-----|
| Model | ZS-D3  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Intelligent dimming switch - 3 gang |
| Exposes | switch (state), brightness_1, brightness_min_1, brightness_max_1, countdown_1, brightness_2, brightness_min_2, brightness_max_2, countdown_2, relay_status, brightness_3, brightness_min_3, brightness_max_3, countdown_3, light_mode, switch_backlight |
| Picture | ![Moes ZS-D3](https://www.zigbee2mqtt.io/images/devices/ZS-D3.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l3": ""}`.

### Brightness 1 (numeric)
Channel 1 brightness.
Value can be found in the published state on the `brightness_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_1": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1000`.

### Brightness min 1 (numeric)
Channel 1 minimum brightness.
Value can be found in the published state on the `brightness_min_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_min_1": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1000`.

### Brightness max 1 (numeric)
Channel 1 maximum brightness.
Value can be found in the published state on the `brightness_max_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_max_1": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1000`.

### Countdown 1 (numeric)
Channel 1 countdown.
Value can be found in the published state on the `countdown_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Brightness 2 (numeric)
Channel 2 brightness.
Value can be found in the published state on the `brightness_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_2": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1000`.

### Brightness min 2 (numeric)
Channel 2 minimum brightness.
Value can be found in the published state on the `brightness_min_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_min_2": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1000`.

### Brightness max 2 (numeric)
Channel 2 maximum brightness.
Value can be found in the published state on the `brightness_max_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_max_2": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1000`.

### Countdown 2 (numeric)
Channel 2 countdown.
Value can be found in the published state on the `countdown_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Relay status (enum)
Relay mode after power restoration.
Value can be found in the published state on the `relay_status` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"relay_status": NEW_VALUE}`.
The possible values are: `off`, `on`, `memory`.

### Brightness 3 (numeric)
Channel 3 brightness.
Value can be found in the published state on the `brightness_3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_3": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1000`.

### Brightness min 3 (numeric)
Channel 3 minimum brightness.
Value can be found in the published state on the `brightness_min_3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_min_3": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1000`.

### Brightness max 3 (numeric)
Channel 3 maximum brightness.
Value can be found in the published state on the `brightness_max_3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_max_3": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1000`.

### Countdown 3 (numeric)
Channel 3 countdown.
Value can be found in the published state on the `countdown_3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Light mode (enum)
Indicator light mode.
Value can be found in the published state on the `light_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode": NEW_VALUE}`.
The possible values are: `none`, `relay`, `pos`.

### Switch backlight (binary)
Backlight switch.
Value can be found in the published state on the `switch_backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_backlight": NEW_VALUE}`.
If value equals `ON` switch backlight is ON, if `OFF` OFF.

