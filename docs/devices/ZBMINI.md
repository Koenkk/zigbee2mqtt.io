---
title: "SONOFF ZBMINI control via MQTT"
description: "Integrate your SONOFF ZBMINI via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-01T19:02:25Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF ZBMINI

|     |     |
|-----|-----|
| Model | ZBMINI  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee two way smart switch |
| Exposes | switch (state), linkquality |
| Picture | ![SONOFF ZBMINI](https://www.zigbee2mqtt.io/images/devices/ZBMINI.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Re-pairing
ZBMINI can be factory reset / re-paired with a help of a Hue dimmer switch. This is extremely helpful when your device isn't easily reachable to use the reset pin (i.e. when already hidden in a back box). See [instructions on Hue dimmer switch page](https://www.zigbee2mqtt.io/devices/324131092621.html#using-the-dimmer-to-reset-other-zigbee-devices).

### Device stuck
In case of switching the coordinators a device may stuck in error state which is indicated by slowly blinking light (about 1 flash per second).
To switch a device to a pairing mode power it off for 10 sec. After power on it enters pairing mode automatically.
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

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

