---
title: "Develco IOMZB-110 control via MQTT"
description: "Integrate your Develco IOMZB-110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-11-01T16:06:49
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Develco IOMZB-110

|     |     |
|-----|-----|
| Model | IOMZB-110  |
| Vendor  | [Develco](/supported-devices/#v=Develco)  |
| Description | IO module |
| Exposes | input, switch (state), linkquality |
| Picture | ![Develco IOMZB-110](https://www.zigbee2mqtt.io/images/devices/IOMZB-110.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Input (binary, l1 endpoint)
State of input 1.
Value can be found in the published state on the `input_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_l1": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` input is ON, if `false` OFF.

### Input (binary, l2 endpoint)
State of input 2.
Value can be found in the published state on the `input_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_l2": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` input is ON, if `false` OFF.

### Input (binary, l3 endpoint)
State of input 3.
Value can be found in the published state on the `input_l3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_l3": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` input is ON, if `false` OFF.

### Input (binary, l4 endpoint)
State of input 4.
Value can be found in the published state on the `input_l4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"input_l4": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` input is ON, if `false` OFF.

### Switch (l11 endpoint)
The current state of this switch is in the published state under the `state_l11` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l11": "ON"}`, `{"state_l11": "OFF"}` or `{"state_l11": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l11": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (l12 endpoint)
The current state of this switch is in the published state under the `state_l12` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l12": "ON"}`, `{"state_l12": "OFF"}` or `{"state_l12": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l12": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

