---
title: "Tuya TS0001_fingerbot control via MQTT"
description: "Integrate your Tuya TS0001_fingerbot via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-06-27T19:46:16
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0001_fingerbot

|     |     |
|-----|-----|
| Model | TS0001_fingerbot  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Zigbee fingerbot plus |
| Exposes | switch (state), battery, mode, lower, upper, delay, reverse, touch, linkquality |
| Picture | ![Tuya TS0001_fingerbot](https://www.zigbee2mqtt.io/images/devices/TS0001_fingerbot.png) |


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

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Mode (enum)
Working mode.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `click`, `switch`, `program`.

### Lower (numeric)
Down movement limit.
Value can be found in the published state on the `lower` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lower": NEW_VALUE}`.
The minimal value is `50` and the maximum value is `100`.
The unit of this value is `%`.

### Upper (numeric)
Up movement limit.
Value can be found in the published state on the `upper` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"upper": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `50`.
The unit of this value is `%`.

### Delay (numeric)
Sustain time.
Value can be found in the published state on the `delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `s`.

### Reverse (binary)
Reverse.
Value can be found in the published state on the `reverse` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reverse": NEW_VALUE}`.
If value equals `ON` reverse is ON, if `OFF` OFF.

### Touch (binary)
Touch control.
Value can be found in the published state on the `touch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"touch": NEW_VALUE}`.
If value equals `ON` touch is ON, if `OFF` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

