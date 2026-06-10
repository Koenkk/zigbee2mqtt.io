---
title: "RTX TS0601_RTX_DIN control via MQTT"
description: "Integrate your RTX TS0601_RTX_DIN via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-01T19:01:34
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# RTX TS0601_RTX_DIN

|     |     |
|-----|-----|
| Model | TS0601_RTX_DIN  |
| Vendor  | [RTX](/supported-devices/#v=RTX)  |
| Description | Din rail switch |
| Exposes | switch (state), power, current, voltage, energy, power_on_behavior, temperature, leakage, faults, reclosing_allowed_times, reclosing_enable, timer, clear_energy, status |
| Picture | ![RTX TS0601_RTX_DIN](https://www.zigbee2mqtt.io/images/devices/TS0601_RTX_DIN.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


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

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `previous`, `on`.

### Temperature (numeric)
Current temperature.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Leakage (numeric)
Current leakage.
Value can be found in the published state on the `leakage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mA`.

### Faults (list)
List of current faults.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"faults": ["short_circuit", "surge", "overload", "leakage_current", "temperature", "fire", "high_power", "self_test", "over_current", "unbalance", "over_voltage", "under_voltage", "miss_phase", "outage", "magnetism", "credit", "no_balance"]}`

### Reclosing allowed times (numeric)
Reclosing tries.
Value can be found in the published state on the `reclosing_allowed_times` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reclosing_allowed_times": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.

### Auto reclosing (binary)
Value can be found in the published state on the `reclosing_enable` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reclosing_enable": NEW_VALUE}`.
If value equals `ON` auto reclosing is ON, if `OFF` OFF.

### Timer (numeric)
Value can be found in the published state on the `timer` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"timer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Clear energy (binary)
Value can be found in the published state on the `clear_energy` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"clear_energy": NEW_VALUE}`.
If value equals `ON` clear energy is ON, if `OFF` OFF.

### Status (text)
Status.
Value can be found in the published state on the `status` property.
It's not possible to read (`/get`) or write (`/set`) this value.

