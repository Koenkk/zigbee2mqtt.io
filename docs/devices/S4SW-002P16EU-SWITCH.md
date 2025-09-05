---
title: "Shelly S4SW-002P16EU-SWITCH control via MQTT"
description: "Integrate your Shelly S4SW-002P16EU-SWITCH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
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
| Description | 2PM Gen4 (Switch mode) |
| Exposes | switch (state), power, voltage, ac_frequency, current, energy, produced_energy |
| Picture | ![Shelly S4SW-002P16EU-SWITCH](https://www.zigbee2mqtt.io/images/devices/S4SW-002P16EU-SWITCH.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
### Device Modes
The Shelly 2PM Gen4 device operates in two different modes that appear as separate devices in Zigbee2MQTT:

- **Cover Mode** [(`S4SW-002P16EU-COVER`)](/devices/S4SW-002P16EU-COVER.html) - Supports window covering controls with lift and tilt functionality with power monitoring
- **Switch Mode** [(`S4SW-002P16EU-SWITCH`)](/devices/S4SW-002P16EU-SWITCH.html) - This device provides dual switch functionality with power monitoring

The device mode is automatically detected based on the endpoint configuration. 

For now, changing modes is only possible through Shelly WebUI.

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

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `ac_frequency_calibration`: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.

* `ac_frequency_precision`: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Power (numeric, l1 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_l1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Power (numeric, l2 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_l2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Voltage (numeric, l1 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_l1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Voltage (numeric, l2 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_l2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### AC frequency (numeric, l1 endpoint)
Measured electrical AC frequency.
Value can be found in the published state on the `ac_frequency_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_frequency_l1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `Hz`.

### AC frequency (numeric, l2 endpoint)
Measured electrical AC frequency.
Value can be found in the published state on the `ac_frequency_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ac_frequency_l2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `Hz`.

### Current (numeric, l1 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_l1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Current (numeric, l2 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_l2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Energy (numeric, l1 endpoint)
Sum of consumed energy.
Value can be found in the published state on the `energy_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_l1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy (numeric, l2 endpoint)
Sum of consumed energy.
Value can be found in the published state on the `energy_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_l2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Produced energy (numeric, l1 endpoint)
Sum of produced energy.
Value can be found in the published state on the `produced_energy_l1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"produced_energy_l1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Produced energy (numeric, l2 endpoint)
Sum of produced energy.
Value can be found in the published state on the `produced_energy_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"produced_energy_l2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

