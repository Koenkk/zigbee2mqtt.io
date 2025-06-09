---
title: "SONOFF ZBMicro control via MQTT"
description: "Integrate your SONOFF ZBMicro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-04-29T19:24:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF ZBMicro

|     |     |
|-----|-----|
| Model | ZBMicro  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee USB repeater plug |
| Exposes | switch (state), power_on_behavior, rf_turbo_mode, inching_control_set |
| Picture | ![SONOFF ZBMicro](https://www.zigbee2mqtt.io/images/devices/ZBMicro.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


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
The possible values are: `off`, `on`, `toggle`, `previous`.

### Rf turbo mode (binary)
Enable/disable Radio power turbo mode.
Value can be found in the published state on the `rf_turbo_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rf_turbo_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rf_turbo_mode": NEW_VALUE}`.
If value equals `true` rf turbo mode is ON, if `false` OFF.

### Inching control set (composite)
Device Inching function Settings. The device will automatically turn off (turn on) after each turn on (turn off) for a specified period of time..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"inching_control_set": {"inching_control": VALUE, "inching_time": VALUE, "inching_mode": VALUE}}`
- `inching_control` (binary): Enable/disable inching function. allowed values: `ENABLE` or `DISABLE`
- `inching_time` (numeric): Delay time for executing a inching action. min value is 0.5, max value is 3599.5, unit is seconds
- `inching_mode` (binary): Set inching off or inching on mode. allowed values: `ON` or `OFF`

