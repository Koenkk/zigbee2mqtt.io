---
title: "Shelly S4SW-002P16EU-SWITCH control via MQTT"
description: "Integrate your Shelly S4SW-002P16EU-SWITCH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-08-01T15:19:08
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Shelly S4SW-002P16EU-SWITCH

|     |     |
|-----|-----|
| Model | S4SW-002P16EU-SWITCH  |
| Vendor  | [Shelly](/supported-devices/#v=Shelly)  |
| Description | 2PM Gen4 (Switch Mode) |
| Exposes | switch (state, l1, l2), power, energy, voltage, current |
| Picture | ![Shelly S4SW-002P16EU-SWITCH](https://www.zigbee2mqtt.io/images/devices/2PM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Device Modes
The Shelly 2PM Gen4 device operates in two different modes that appear as separate devices in Zigbee2MQTT:

- **Cover Mode** (`S4SW-002P16EU-COVER`) - Supports window covering controls with lift and tilt functionality
- **Switch Mode** (`S4SW-002P16EU-SWITCH`) - This device provides dual switch functionality with power monitoring

The device mode is automatically detected based on the endpoint configuration. No manual configuration is required.

### Switch Mode Features
When operating in switch mode, this device provides:
- Dual on/off switches (l1 and l2 endpoints)
- Power monitoring for both switches
- Energy consumption tracking
- Voltage and current measurements

Vendor product page: [Shelly 2PM Gen4](https://kb.shelly.cloud/knowledge-base/shelly-2pm-gen4)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*


## Exposes

### Switch (endpoint l1)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

### Switch (endpoint l2)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

### Power (numeric, endpoint l1)
Instantaneous measured power for endpoint l1.
Value can be found in the published state on the `power_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_l1": ""}`.
It's not possible to set this value.
The unit of this value is `W`.

### Power (numeric, endpoint l2)
Instantaneous measured power for endpoint l2.
Value can be found in the published state on the `power_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_l2": ""}`.
It's not possible to set this value.
The unit of this value is `W`.

### Energy (numeric, endpoint l1)
Sum of consumed energy for endpoint l1.
Value can be found in the published state on the `energy_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_l1": ""}`.
It's not possible to set this value.
The unit of this value is `kWh`.

### Energy (numeric, endpoint l2)
Sum of consumed energy for endpoint l2.
Value can be found in the published state on the `energy_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_l2": ""}`.
It's not possible to set this value.
The unit of this value is `kWh`.

### Voltage (numeric, endpoint l1)
Measured electrical potential value for endpoint l1.
Value can be found in the published state on the `voltage_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_l1": ""}`.
It's not possible to set this value.
The unit of this value is `V`.

### Voltage (numeric, endpoint l2)
Measured electrical potential value for endpoint l2.
Value can be found in the published state on the `voltage_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_l2": ""}`.
It's not possible to set this value.
The unit of this value is `V`.

### Current (numeric, endpoint l1)
Instantaneous measured electrical current for endpoint l1.
Value can be found in the published state on the `current_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_l1": ""}`.
It's not possible to set this value.
The unit of this value is `A`.

### Current (numeric, endpoint l2)
Instantaneous measured electrical current for endpoint l2.
Value can be found in the published state on the `current_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_l2": ""}`.
It's not possible to set this value.
The unit of this value is `A`.

