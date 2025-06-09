---
title: "Tuya TS0601_3_phase_clamp_meter control via MQTT"
description: "Integrate your Tuya TS0601_3_phase_clamp_meter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-12-01T15:07:19
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_3_phase_clamp_meter

|     |     |
|-----|-----|
| Model | TS0601_3_phase_clamp_meter  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 3-phase clamp power meter |
| Exposes | ac_frequency, temperature, current, power, energy, energy_a, energy_b, energy_c, voltage_a, voltage_b, voltage_c, power_a, power_b, power_c, current_a, current_b, current_c, power_factor_a, power_factor_b, power_factor_c |
| Picture | ![Tuya TS0601_3_phase_clamp_meter](https://www.zigbee2mqtt.io/images/devices/TS0601_3_phase_clamp_meter.png) |
| White-label | MatSee Plus PC321-Z-TY, OWON PC321-Z-TY |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

Device is powered through wire A/L1.


The device can be <ins>**modified**</ins> to work in systems <ins>**without a neutral**</ins>, like the Norwegian <ins>**IT-system**</ins> (isolé-terre).
This modification should only be conducted by someone with knowledge about mains electricity. All three phases have to be connected to ensure propper function and avoid short circuits. Make 100% sure that you have no more than 240 V between any two phases. 

First, the voltage sensing transformers (VT) have to be isolated from the common neutral line (N) by scratching away the copper traces:

![PC321-Z-TY_trace](https://github.com/user-attachments/assets/534a8b4d-6deb-47a8-8749-fc23f91868fd)
Note that a capacitor was removed temporarily for better access. The copper traces were removed thoroughly to absolutely guarantee that no short circuit could occur.

Afterwards, the inputs have to be re-connected to the voltage transformers (VT):

![PC321-Z-TY_input](https://github.com/user-attachments/assets/70425e25-db41-4691-a02d-1990275997ac)
In this example, phase 3 (L3) has been connected to neutral (N). This will power the device from L1 & L3.
Use propper mains cables; although the current is very low (2 mA) the insulation has to be able to withstand mains voltage and voltage spikes.

Here is a circuit diagram, created with TinyCAD (https://www.tinycad.net), comparing the original wiring with the modification:

![power_meter](https://github.com/user-attachments/assets/8749ef72-538a-4b16-905c-1382163fc094)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `ac_frequency_calibration`: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.

* `ac_frequency_precision`: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### AC frequency (numeric)
Measured electrical AC frequency.
Value can be found in the published state on the `ac_frequency` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Hz`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

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

### Energy c (numeric)
Sum of consumed energy (phase C).
Value can be found in the published state on the `energy_c` property.
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

### Power factor c (numeric)
Instantaneous measured power factor (phase C).
Value can be found in the published state on the `power_factor_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

