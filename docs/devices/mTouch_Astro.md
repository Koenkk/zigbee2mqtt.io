---
title: "CTM Lyng mTouch_Astro control via MQTT"
description: "Integrate your CTM Lyng mTouch_Astro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-01T15:06:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# CTM Lyng mTouch_Astro

|     |     |
|-----|-----|
| Model | mTouch_Astro  |
| Vendor  | [CTM Lyng](/supported-devices/#v=CTM%20Lyng)  |
| Description | mTouch Astro OP, astro clock |
| Exposes | switch (state), action, device_mode, device_enabled, child_lock, group_id, linkquality |
| Picture | ![CTM Lyng mTouch_Astro](https://www.zigbee2mqtt.io/images/devices/mTouch_Astro.png) |


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

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`.

### Device mode (enum)
Device mode..
Value can be found in the published state on the `device_mode` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `astro_clock`, `timer`, `daily_timer`, `weekly_timer`.

### Device enabled (binary)
Turn the device on or off.
Value can be found in the published state on the `device_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_enabled": NEW_VALUE}`.
If value equals `ON` device enabled is ON, if `OFF` OFF.

### Child lock (binary)
Physical input on the device enabled/disabled.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `locked` child lock is ON, if `unlocked` OFF.

### Group id (numeric)
The device sends commands with this group ID. Put devices in this group to control them..
Value can be found in the published state on the `group_id` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

