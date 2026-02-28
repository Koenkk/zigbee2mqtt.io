---
title: "Heiman HS8MLS-EF1-3.0 control via MQTT"
description: "Integrate your Heiman HS8MLS-EF1-3.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-02-28T20:18:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS8MLS-EF1-3.0

|     |     |
|-----|-----|
| Model | HS8MLS-EF1-3.0  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | PIR sensor with night light |
| Exposes | occupancy, switch (state), power_on_behavior, enable_indicator, ambient_light, radar_delay_time, sensitivity |
| Picture | ![Heiman HS8MLS-EF1-3.0](https://www.zigbee2mqtt.io/images/devices/HS8MLS-EF1-3.0.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be sent after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of numbers.

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

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

### Enable indicator (binary)
active green indicator.
Value can be found in the published state on the `enable_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_indicator": NEW_VALUE}`.
If value equals `true` enable indicator is ON, if `false` OFF.

### Ambient light (numeric)
ambient illuminance in lux.
Value can be found in the published state on the `ambient_light` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ambient_light": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `Lx`.

### Radar delay time (numeric)
Occupied to unoccupied delay.
Value can be found in the published state on the `radar_delay_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"radar_delay_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_delay_time": NEW_VALUE}`.
The minimal value is `60` and the maximum value is `3600`.

### Sensitivity (enum)
sensitivity for PIR sensor.
Value can be found in the published state on the `sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `high`, `medium`, `low`.

