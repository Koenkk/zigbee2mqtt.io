---
title: "eWeLink ZB-SW03 control via MQTT"
description: "Integrate your eWeLink ZB-SW03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-01-12T20:55:21Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# eWeLink ZB-SW03

|     |     |
|-----|-----|
| Model | ZB-SW03  |
| Vendor  | [eWeLink](/supported-devices/#v=eWeLink)  |
| Description | Smart light switch - 3 gang |
| Exposes | switch (state), power_on_behavior |
| Picture | ![eWeLink ZB-SW03](https://www.zigbee2mqtt.io/images/devices/ZB-SW03.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (left endpoint)
The current state of this switch is in the published state under the `state_left` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_left": "ON"}`, `{"state_left": "OFF"}` or `{"state_left": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_left": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (center endpoint)
The current state of this switch is in the published state under the `state_center` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_center": "ON"}`, `{"state_center": "OFF"}` or `{"state_center": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_center": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (right endpoint)
The current state of this switch is in the published state under the `state_right` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_right": "ON"}`, `{"state_right": "OFF"}` or `{"state_right": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_right": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power-on behavior (enum, left endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_left` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_left": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_left": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Power-on behavior (enum, center endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_center` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_center": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_center": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

### Power-on behavior (enum, right endpoint)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior_right` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior_right": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior_right": NEW_VALUE}`.
The possible values are: `off`, `on`, `toggle`, `previous`.

