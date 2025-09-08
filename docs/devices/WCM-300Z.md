---
title: "ShinaSystem WCM-300Z control via MQTT"
description: "Integrate your ShinaSystem WCM-300Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ShinaSystem WCM-300Z

|     |     |
|-----|-----|
| Model | WCM-300Z  |
| Vendor  | [ShinaSystem](/supported-devices/#v=ShinaSystem)  |
| Description | SiHAS 4-gang wall outlet |
| Exposes | switch (state), power, energy, button_lock_mode |
| Picture | ![ShinaSystem WCM-300Z](https://www.zigbee2mqtt.io/images/devices/WCM-300Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (p1 endpoint)
The current state of this switch is in the published state under the `state_p1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_p1": "ON"}`, `{"state_p1": "OFF"}` or `{"state_p1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_p1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (p2 endpoint)
The current state of this switch is in the published state under the `state_p2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_p2": "ON"}`, `{"state_p2": "OFF"}` or `{"state_p2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_p2": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (p3 endpoint)
The current state of this switch is in the published state under the `state_p3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_p3": "ON"}`, `{"state_p3": "OFF"}` or `{"state_p3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_p3": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (p4 endpoint)
The current state of this switch is in the published state under the `state_p4` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_p4": "ON"}`, `{"state_p4": "OFF"}` or `{"state_p4": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_p4": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power (numeric, p1 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_p1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_p1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Power (numeric, p2 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_p2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_p2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Power (numeric, p3 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_p3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_p3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Power (numeric, p4 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_p4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_p4": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric, p1 endpoint)
Sum of consumed energy.
Value can be found in the published state on the `energy_p1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_p1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy (numeric, p2 endpoint)
Sum of consumed energy.
Value can be found in the published state on the `energy_p2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_p2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy (numeric, p3 endpoint)
Sum of consumed energy.
Value can be found in the published state on the `energy_p3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_p3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy (numeric, p4 endpoint)
Sum of consumed energy.
Value can be found in the published state on the `energy_p4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_p4": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Button lock mode (binary, p1 endpoint)
Enables/disables the physical input lock for Button 1..
Value can be found in the published state on the `button_lock_mode_p1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"button_lock_mode_p1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"button_lock_mode_p1": NEW_VALUE}`.
If value equals `lock` button lock mode is ON, if `unlock` OFF.

### Button lock mode (binary, p2 endpoint)
Enables/disables the physical input lock for Button 2..
Value can be found in the published state on the `button_lock_mode_p2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"button_lock_mode_p2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"button_lock_mode_p2": NEW_VALUE}`.
If value equals `lock` button lock mode is ON, if `unlock` OFF.

### Button lock mode (binary, p3 endpoint)
Enables/disables the physical input lock for Button 3..
Value can be found in the published state on the `button_lock_mode_p3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"button_lock_mode_p3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"button_lock_mode_p3": NEW_VALUE}`.
If value equals `lock` button lock mode is ON, if `unlock` OFF.

### Button lock mode (binary, p4 endpoint)
Enables/disables the physical input lock for Button 4..
Value can be found in the published state on the `button_lock_mode_p4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"button_lock_mode_p4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"button_lock_mode_p4": NEW_VALUE}`.
If value equals `lock` button lock mode is ON, if `unlock` OFF.

