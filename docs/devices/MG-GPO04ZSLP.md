---
title: "Tuya MG-GPO04ZSLP control via MQTT"
description: "Integrate your Tuya MG-GPO04ZSLP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya MG-GPO04ZSLP

|     |     |
|-----|-----|
| Model | MG-GPO04ZSLP  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 2 x socket + 1 x light with master switch and metering |
| Exposes | switch (state), voltage, current, energy_wh |
| Picture | ![Tuya MG-GPO04ZSLP](https://www.zigbee2mqtt.io/images/devices/MG-GPO04ZSLP.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Switch (master endpoint)
The current state of this switch is in the published state under the `state_master` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_master": "ON"}`, `{"state_master": "OFF"}` or `{"state_master": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (light endpoint)
The current state of this switch is in the published state under the `state_light` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_light": "ON"}`, `{"state_light": "OFF"}` or `{"state_light": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (left endpoint)
The current state of this switch is in the published state under the `state_left` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_left": "ON"}`, `{"state_left": "OFF"}` or `{"state_left": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (right endpoint)
The current state of this switch is in the published state under the `state_right` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_right": "ON"}`, `{"state_right": "OFF"}` or `{"state_right": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Voltage (numeric)
Line voltage reported by the outlet.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current (numeric)
Line current reported by the outlet.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Energy wh (numeric)
Accumulated energy (raw Wh counter).
Value can be found in the published state on the `energy_wh` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Wh`.

