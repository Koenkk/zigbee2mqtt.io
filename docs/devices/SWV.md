---
title: "SONOFF SWV control via MQTT"
description: "Integrate your SONOFF SWV via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-03-31T18:43:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SWV

|     |     |
|-----|-----|
| Model | SWV  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee smart water valve |
| Exposes | flow, battery, switch (state), current_device_status, auto_close_when_water_shortage, cyclic_timed_irrigation, cyclic_quantitative_irrigation, linkquality |
| Picture | ![SONOFF SWV](https://www.zigbee2mqtt.io/images/devices/SWV.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Flow (numeric)
Current water flow.
Value can be found in the published state on the `flow` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³/h`.

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

### Current device status (enum)
The water valve is in normal state, water shortage or water leakage.
Value can be found in the published state on the `current_device_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_device_status": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `normal_state`, `water_shortage`, `water_leakage`, `water_shortage & water_leakage`.

### Auto close when water shortage (binary)
Automatically shut down the water valve after the water shortage exceeds 30 minutes. Requires firmware version 1.0.4 or later!.
Value can be found in the published state on the `auto_close_when_water_shortage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"auto_close_when_water_shortage": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_close_when_water_shortage": NEW_VALUE}`.
If value equals `ENABLE` auto close when water shortage is ON, if `DISABLE` OFF.

### Cyclic timed irrigation (composite)
Smart water valve cycle timing irrigation.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cyclic_timed_irrigation": {"current_count": VALUE, "total_number": VALUE, "irrigation_duration": VALUE, "irrigation_interval": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"cyclic_timed_irrigation": ""}`.
- `current_count` (numeric): Number of times it has been executed unit is times
- `total_number` (numeric): Total times of circulating irrigation max value is 100, unit is times
- `irrigation_duration` (numeric): Single irrigation duration max value is 86400, unit is seconds
- `irrigation_interval` (numeric): Time interval between two adjacent irrigation max value is 86400, unit is seconds

### Cyclic quantitative irrigation (composite)
Smart water valve circulating quantitative irrigation.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cyclic_quantitative_irrigation": {"current_count": VALUE, "total_number": VALUE, "irrigation_capacity": VALUE, "irrigation_interval": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"cyclic_quantitative_irrigation": ""}`.
- `current_count` (numeric): Number of times it has been executed unit is times
- `total_number` (numeric): Total times of circulating irrigation max value is 100, unit is times
- `irrigation_capacity` (numeric): Single irrigation capacity max value is 6500, unit is liter
- `irrigation_interval` (numeric): Time interval between two adjacent irrigation max value is 86400, unit is seconds

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

