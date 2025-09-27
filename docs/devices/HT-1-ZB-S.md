---
title: "ONOKOM HT-1-ZB-S control via MQTT"
description: "Integrate your ONOKOM HT-1-ZB-S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ONOKOM HT-1-ZB-S

|     |     |
|-----|-----|
| Model | HT-1-ZB-S  |
| Vendor  | [ONOKOM](/supported-devices/#v=ONOKOM)  |
| Description | AIR HT-1-MB-B (Adapter for household Hitachi systems) |
| Exposes | ac_connected, switch (state), current_temperature, target_temperature, system_mode, mode, zb_fan_speed, fan_speed, smart_fan_speed, status_led |
| Picture | ![ONOKOM HT-1-ZB-S](https://www.zigbee2mqtt.io/images/devices/HT-1-ZB-S.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Ac connected (enum)
AC connected.
Value can be found in the published state on the `ac_connected` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `disconnected`, `invalid_data_recieved`, `connected_with_issues`, `connected`.

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Current temperature (numeric)
Current temperature.
Value can be found in the published state on the `current_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Target temperature (numeric)
Target temperature.
Value can be found in the published state on the `target_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"target_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"target_temperature": NEW_VALUE}`.
The minimal value is `16` and the maximum value is `32`.
The unit of this value is `°C`.

### System mode (enum)
Active mode.
Value can be found in the published state on the `system_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": NEW_VALUE}`.
The possible values are: `off`, `auto`, `cool`, `heat`, `fan_only`, `dry`.

### Mode (enum)
Modes.
Value can be found in the published state on the `mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `heat`, `cool`, `auto`, `dry`, `fan_only`.

### Zb fan speed (numeric)
Fan speed modes: Auto(5), Low(1), Medium(2), Maximum(3).
Value can be found in the published state on the `zb_fan_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zb_fan_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zb_fan_speed": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `5`.

### Fan speed (numeric)
Fan speed: Auto(0), First(1) - Maximum(3).
Value can be found in the published state on the `fan_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fan_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_speed": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3`.

### Smart fan speed (numeric)
Smart fan speed: Auto (0), Low (1) ... Maximum (3).
Value can be found in the published state on the `smart_fan_speed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"smart_fan_speed": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"smart_fan_speed": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4`.

### Status led (enum)
Status LED.
Value can be found in the published state on the `status_led` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"status_led": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"status_led": NEW_VALUE}`.
The possible values are: `normal_mode`, `disabled_if_no_errors`, `disabled_untill_reboot`, `always_disabled`, `green_untill_reboot`, `red_untill_reboot`.

