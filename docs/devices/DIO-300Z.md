---
title: "ShinaSystem DIO-300Z control via MQTT"
description: "Integrate your ShinaSystem DIO-300Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-03-31T18:43:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ShinaSystem DIO-300Z

|     |     |
|-----|-----|
| Model | DIO-300Z  |
| Vendor  | [ShinaSystem](/supported-devices/#v=ShinaSystem)  |
| Description | SiHAS DI/DO Module |
| Exposes | di_status, switch (state), di_type, do_type, di_do_link, do_pulse_time, action, linkquality |
| Picture | ![ShinaSystem DIO-300Z](https://www.zigbee2mqtt.io/images/devices/DIO-300Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Di status (enum)
Indicates whether the DI(Digital Input) is open or closed.
Value can be found in the published state on the `di_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"di_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `Close`, `Open`.

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Di type (enum)
Set the DI(Digital Input) type to either a button or door sensor(latch) type.
Value can be found in the published state on the `di_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"di_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"di_type": NEW_VALUE}`.
The possible values are: `Button`, `Door`.

### Do type (enum)
Set the DO(Digital Output) type to either a pulse or latch type.
Value can be found in the published state on the `do_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"do_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"do_type": NEW_VALUE}`.
The possible values are: `Pulse`, `Latch`.

### Di do link (enum)
Configure DO linkage according to DI status. When set to ON, DO is output according to the DI input..
Value can be found in the published state on the `di_do_link` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"di_do_link": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"di_do_link": NEW_VALUE}`.
The possible values are: `Off`, `On`.

### Do pulse time (numeric)
When the DO output is set to pulse type, you can set the DO pulse time. The unit is milliseconds..
Value can be found in the published state on the `do_pulse_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"do_pulse_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"do_pulse_time": NEW_VALUE}`.
The minimal value is `100` and the maximum value is `3000`.
The unit of this value is `ms`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `long`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

