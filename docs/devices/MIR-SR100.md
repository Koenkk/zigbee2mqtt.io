---
title: "MultIR MIR-SR100 control via MQTT"
description: "Integrate your MultIR MIR-SR100 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-10-31T19:31:40.434Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# MultIR MIR-SR100

|     |     |
|-----|-----|
| Model | MIR-SR100  |
| Vendor  | [MultIR](/supported-devices/#v=MultIR)  |
| Description | Zigbee SR100 siren |
| Exposes | warning, switch (state), alarm, tamper |
| Picture | ![MultIR MIR-SR100](https://www.zigbee2mqtt.io/images/devices/MIR-SR100.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Warning (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"warning": {"level": "VALUE", "strobe": "VALUE", "duration": VALUE, "strobe_duty_cycle": VALUE}}`
- `level` (enum): Sound level allowed values: `low`, `medium`, `high`, `very_high`
- `strobe` (binary): Turn on/off the strobe (light) during warning allowed values: `ON` or `OFF`
- `duration` (numeric): Duration of the warning in seconds min value is 1, max value is 1800, unit is s
- `strobe_duty_cycle` (numeric): Length of the flash cycle max value is 10

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Alarm (binary)
Indicates whether the alarm is triggered.
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

