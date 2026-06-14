---
title: "Tuya TS0726_1_gang control via MQTT"
description: "Integrate your Tuya TS0726_1_gang via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-01T13:30:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0726_1_gang

|     |     |
|-----|-----|
| Model | TS0726_1_gang  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 1 gang switch with neutral wire |
| Exposes | switch (state), power_on_behavior, switch_mode, action |
| Picture | ![Tuya TS0726_1_gang](https://www.zigbee2mqtt.io/images/devices/TS0726_1_gang.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Zemismart KES-606US (`_TZ3000_ovbvmhiq`)

This 1 gang variant is the Zemismart KES-606US-LH1. It additionally exposes an `indicator_mode` enum (`none` / `relay` / `pos`) to control the LED backlight behaviour.

**Scene mode requires one-time initialization with the Tuya / Smart Life app before pairing to Zigbee2MQTT.** Without this step, setting `switch_mode` to `scene` will not emit `action` events. To enable it:

1. Pair the switch to the Tuya Smart Life app (using a Tuya Zigbee gateway).
2. Set the desired gang(s) to **Scene Mode** in the Smart Life device settings.
3. Remove the device from Smart Life.
4. Factory reset the switch and pair it to Zigbee2MQTT.

After this, `switch_mode: scene` will emit `scene_1` actions that can be used in automations.

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

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_on_behavior": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Switch mode (enum)
Value can be found in the published state on the `switch_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_mode": NEW_VALUE}`.
The possible values are: `switch`, `scene`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `scene_1`.

