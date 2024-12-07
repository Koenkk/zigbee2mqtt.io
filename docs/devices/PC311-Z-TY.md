---
title: "Tuya PC311-Z-TY control via MQTT"
description: "Integrate your Tuya PC311-Z-TY via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-02-29T20:20:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya PC311-Z-TY

|     |     |
|-----|-----|
| Model | PC311-Z-TY  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Bidirectional energy meter with 80A current clamp |
| Exposes | ac_frequency, voltage, power, current, energy, energy_produced, power_a, power_b, current_a, current_b, power_factor_a, power_factor_b, energy_a, energy_b, energy_produced_a, energy_produced_b, linkquality |
| Picture | ![Tuya PC311-Z-TY](https://www.zigbee2mqtt.io/images/devices/PC311-Z-TY.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `ac_frequency_calibration`: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### AC frequency (numeric)
Measured electrical AC frequency.
Value can be found in the published state on the `ac_frequency` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Hz`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy produced (numeric)
Sum of produced energy.
Value can be found in the published state on the `energy_produced` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

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

### Power factor a (numeric)
Instantaneous measured power factor (phase A).
Value can be found in the published state on the `power_factor_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Power factor b (numeric)
Instantaneous measured power factor (phase B).
Value can be found in the published state on the `power_factor_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Energy a (numeric)
Sum of consumed energy (phase A).
Value can be found in the published state on the `energy_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy b (numeric)
Sum of consumed energy (phase B).
Value can be found in the published state on the `energy_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy produced a (numeric)
Sum of produced energy (phase A).
Value can be found in the published state on the `energy_produced_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy produced b (numeric)
Sum of produced energy (phase B).
Value can be found in the published state on the `energy_produced_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

