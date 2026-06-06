---
title: "AVATTO ZWSM16-DC-1 control via MQTT"
description: "Integrate your AVATTO ZWSM16-DC-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-06-06T00:00:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# AVATTO ZWSM16-DC-1

|     |     |
|-----|-----|
| Model | ZWSM16-DC-1  |
| Vendor  | [AVATTO](/supported-devices/#v=AVATTO)  |
| Description | Smart ZigBee Dry Contact Switch Module |
| Exposes | switch (state), countdown, power_outage_memory, switch_type, indicator_mode |
| Picture | ![AVATTO ZWSM16-DC-1](https://www.zigbee2mqtt.io/images/devices/ZWSM16-DC-1.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

## Notes

### Pairing
Press and hold the button on the device for more than 5 seconds (until the LED starts blinking), then release and wait for the device to join the network.

### Dry contact output
This module switches a dry contact (potential-free relay output), suitable for controlling devices that require a volt-free switching signal (e.g. gate controllers, alarm systems, boilers).

<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Countdown (numeric)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Power outage memory (enum)
Recover state after power outage.
Value can be found in the published state on the `power_outage_memory` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_outage_memory": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_outage_memory": NEW_VALUE}`.
The possible values are: `on`, `off`, `restore`.

### Switch type (enum)
Type of the switch.
Value can be found in the published state on the `switch_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type": NEW_VALUE}`.
The possible values are: `toggle`, `state`, `momentary`.

### Indicator mode (enum)
LED indicator mode.
Value can be found in the published state on the `indicator_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_mode": NEW_VALUE}`.
The possible values are: `off`, `off/on`, `on/off`, `on`.
