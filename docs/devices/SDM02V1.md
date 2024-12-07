---
title: "Tuya SDM02V1 control via MQTT"
description: "Integrate your Tuya SDM02V1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-01T19:01:34
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya SDM02V1

|     |     |
|-----|-----|
| Model | SDM02V1  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart energy monitor for 2P+N system |
| Exposes | voltage_l1, voltage_l2, power_l1, power_l2, current_l1, current_l2, energy, produced_energy, power_factor, power, ac_frequency, energy_l1, energy_l2, energy_produced_l1, energy_produced_l2, power_factor_l1, power_factor_l2, linkquality |
| Picture | ![Tuya SDM02V1](https://www.zigbee2mqtt.io/images/devices/SDM02V1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `ac_frequency_calibration`: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Voltage l1 (numeric)
Measured electrical potential value (phase L1).
Value can be found in the published state on the `voltage_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Voltage l2 (numeric)
Measured electrical potential value (phase L2).
Value can be found in the published state on the `voltage_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power l1 (numeric)
Instantaneous measured power (phase L1).
Value can be found in the published state on the `power_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power l2 (numeric)
Instantaneous measured power (phase L2).
Value can be found in the published state on the `power_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current l1 (numeric)
Instantaneous measured electrical current (phase L1).
Value can be found in the published state on the `current_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Current l2 (numeric)
Instantaneous measured electrical current (phase L2).
Value can be found in the published state on the `current_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Energy (numeric)
Total forward active energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Produced energy (numeric)
Total reverse active energy.
Value can be found in the published state on the `produced_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Power factor (numeric)
Total power factor.
Value can be found in the published state on the `power_factor` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Power (numeric)
Total active power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### AC frequency (numeric)
Measured electrical AC frequency.
Value can be found in the published state on the `ac_frequency` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Hz`.

### Energy l1 (numeric)
Sum of consumed energy (phase L1).
Value can be found in the published state on the `energy_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy l2 (numeric)
Sum of consumed energy (phase L2).
Value can be found in the published state on the `energy_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy produced l1 (numeric)
Sum of produced energy (phase L1).
Value can be found in the published state on the `energy_produced_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy produced l2 (numeric)
Sum of produced energy (phase L2).
Value can be found in the published state on the `energy_produced_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Power factor l1 (numeric)
Instantaneous measured power factor (phase L1).
Value can be found in the published state on the `power_factor_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Power factor l2 (numeric)
Instantaneous measured power factor (phase L2).
Value can be found in the published state on the `power_factor_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

