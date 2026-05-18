---
title: "Tuya LYAI-14 control via MQTT"
description: "Integrate your Tuya LYAI-14 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:10:30
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya LYAI-14

|     |     |
|-----|-----|
| Model | LYAI-14  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Solar intelligent timed water valve controller |
| Exposes | countdown, error_status, rain_sensor_status, rain_sensor_switch, battery_state, battery, switch (state) |
| Picture | ![Tuya LYAI-14](https://www.zigbee2mqtt.io/images/devices/LYAI-14.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### Countdown
Support for the shutoff countdown timer is not currently working. This needs further investigation. The default countdown timer to shutoff is 10 minutes, but can be changed using the Tuya app/hub and the device will continue to use the set time even in HA.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Countdown (numeric)
Countdown to turn device off after a certain time.
Value can be found in the published state on the `countdown` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"countdown": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Error status (numeric)
Device error code.
Value can be found in the published state on the `error_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Rain sensor status (enum)
Rain sensor state.
Value can be found in the published state on the `rain_sensor_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `rain`, `no_rain`.

### Rain sensor switch (binary)
Enable/disable rain sensor.
Value can be found in the published state on the `rain_sensor_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rain_sensor_switch": NEW_VALUE}`.
If value equals `ON` rain sensor switch is ON, if `OFF` OFF.

### Battery state (enum)
Battery charging state.
Value can be found in the published state on the `battery_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `no_charge`, `charging`, `charged`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

