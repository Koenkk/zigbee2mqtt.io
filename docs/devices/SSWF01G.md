---
title: "Mercator Ikuü SSWF01G control via MQTT"
description: "Integrate your Mercator Ikuü SSWF01G via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-02T12:41:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Mercator Ikuü SSWF01G

|     |     |
|-----|-----|
| Model | SSWF01G  |
| Vendor  | [Mercator Ikuü](/supported-devices/#v=Mercator%20Iku%C3%BC)  |
| Description | AC fan controller |
| Exposes | switch (state), fan (state, mode), linkquality |
| Picture | ![Mercator Ikuü SSWF01G](https://www.zigbee2mqtt.io/images/devices/SSWF01G.png) |


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

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Fan 
The current state of this fan is in the published state under the `fan_state` property (value is `ON` or `OFF`).
To control this fan publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_state": "ON"}` or `{"fan_state": "OFF"}`.
To read the current state of this fan publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"fan_state": ""}`.
To change the mode publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_mode": VALUE}` where `VALUE` can be: `off`, `low`, `medium`, `high`, `on`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

