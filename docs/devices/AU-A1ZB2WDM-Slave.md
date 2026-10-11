---
title: "Aurora AU-A1ZB2WDM-Slave control via MQTT"
description: "Integrate your Aurora AU-A1ZB2WDM-Slave via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-31T19:17:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aurora AU-A1ZB2WDM-Slave

|     |     |
|-----|-----|
| Model | AU-A1ZB2WDM-Slave  |
| Vendor  | [Aurora](/supported-devices/#v=Aurora)  |
| Description | AOne Rotary Slave Dimmer |
| Exposes | switch (state), action |
| Picture | ![Aurora AU-A1ZB2WDM-Slave](https://www.zigbee2mqtt.io/images/devices/AU-A1ZB2WDM-Slave.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `simulated_brightness`: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:
```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (backlight endpoint)
The current state of this switch is in the published state under the `state_backlight` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_backlight": "ON"}`, `{"state_backlight": "OFF"}` or `{"state_backlight": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_backlight": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on_default`, `off_default`, `toggle_default`, `brightness_move_to_level_default`, `brightness_move_up_default`, `brightness_move_down_default`, `brightness_step_up_default`, `brightness_step_down_default`, `brightness_stop_default`.

