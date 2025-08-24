---
title: "Tuya TS0601_3_phase_clamp_meter_relay control via MQTT"
description: "Integrate your Tuya TS0601_3_phase_clamp_meter_relay via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-04-27T17:39:26
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_3_phase_clamp_meter_relay

|     |     |
|-----|-----|
| Model | TS0601_3_phase_clamp_meter_relay  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 3-phase clamp power meter with relay |
| Exposes | switch (state), power, energy, produced_energy, voltage_a, voltage_b, voltage_c, power_a, power_b, power_c, current_a, current_b, current_c |
| Picture | ![Tuya TS0601_3_phase_clamp_meter_relay](https://www.zigbee2mqtt.io/images/devices/TS0601_3_phase_clamp_meter_relay.png) |
| White-label | Wenzhou Taiye Electric TAC7361C BI |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Produced energy (numeric)
Sum of produced energy.
Value can be found in the published state on the `produced_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Voltage a (numeric)
Measured electrical potential value (phase A).
Value can be found in the published state on the `voltage_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Voltage b (numeric)
Measured electrical potential value (phase B).
Value can be found in the published state on the `voltage_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Voltage c (numeric)
Measured electrical potential value (phase C).
Value can be found in the published state on the `voltage_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power a (numeric)
Instantaneous measured power (phase A).
Value can be found in the published state on the `power_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power b (numeric)
Instantaneous measured power (phase B).
Value can be found in the published state on the `power_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power c (numeric)
Instantaneous measured power (phase C).
Value can be found in the published state on the `power_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current a (numeric)
Instantaneous measured electrical current (phase A).
Value can be found in the published state on the `current_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Current b (numeric)
Instantaneous measured electrical current (phase B).
Value can be found in the published state on the `current_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Current c (numeric)
Instantaneous measured electrical current (phase C).
Value can be found in the published state on the `current_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

