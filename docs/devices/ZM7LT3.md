---
title: "Moes ZM7LT3 control via MQTT"
description: "Integrate your Moes ZM7LT3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-10-31T19:31:40.433Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZM7LT3

|     |     |
|-----|-----|
| Model | ZM7LT3  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Three-phase energy meter with CT clamps |
| Exposes | energy, produced_energy, combined_energy, power, power_reactive, power_apparent, ac_frequency, power_factor, voltage_l1, current_l1, power_l1, power_reactive_l1, power_apparent_l1, power_factor_l1, voltage_l2, current_l2, power_l2, power_reactive_l2, power_apparent_l2, power_factor_l2, voltage_l3, current_l3, power_l3, power_reactive_l3, power_apparent_l3, power_factor_l3, alarm_status, over_current_threshold, over_voltage_threshold, under_voltage_threshold, clear_energy, refresh_measurements |
| Picture | ![Moes ZM7LT3](https://www.zigbee2mqtt.io/images/devices/ZM7LT3.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `ac_frequency_calibration`: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.

* `ac_frequency_precision`: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

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

### Combined energy (numeric)
Combined active energy.
Value can be found in the published state on the `combined_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Power (numeric)
Total active power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power reactive (numeric)
Total reactive power.
Value can be found in the published state on the `power_reactive` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VAR`.

### Power apparent (numeric)
Total apparent power.
Value can be found in the published state on the `power_apparent` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### AC frequency (numeric)
Mains frequency.
Value can be found in the published state on the `ac_frequency` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Hz`.

### Power factor (numeric)
Total power factor.
Value can be found in the published state on the `power_factor` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Voltage l1 (numeric)
Phase L1 voltage.
Value can be found in the published state on the `voltage_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current l1 (numeric)
Phase L1 current.
Value can be found in the published state on the `current_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Power l1 (numeric)
Phase L1 active power.
Value can be found in the published state on the `power_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power reactive l1 (numeric)
Phase L1 reactive power.
Value can be found in the published state on the `power_reactive_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `var`.

### Power apparent l1 (numeric)
Phase L1 apparent power.
Value can be found in the published state on the `power_apparent_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### Power factor l1 (numeric)
Phase L1 power factor (0 to 1).
Value can be found in the published state on the `power_factor_l1` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Voltage l2 (numeric)
Phase L2 voltage.
Value can be found in the published state on the `voltage_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current l2 (numeric)
Phase L2 current.
Value can be found in the published state on the `current_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Power l2 (numeric)
Phase L2 active power.
Value can be found in the published state on the `power_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power reactive l2 (numeric)
Phase L2 reactive power.
Value can be found in the published state on the `power_reactive_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `var`.

### Power apparent l2 (numeric)
Phase L2 apparent power.
Value can be found in the published state on the `power_apparent_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### Power factor l2 (numeric)
Phase L2 power factor (0 to 1).
Value can be found in the published state on the `power_factor_l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Voltage l3 (numeric)
Phase L3 voltage.
Value can be found in the published state on the `voltage_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current l3 (numeric)
Phase L3 current.
Value can be found in the published state on the `current_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Power l3 (numeric)
Phase L3 active power.
Value can be found in the published state on the `power_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power reactive l3 (numeric)
Phase L3 reactive power.
Value can be found in the published state on the `power_reactive_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `var`.

### Power apparent l3 (numeric)
Phase L3 apparent power.
Value can be found in the published state on the `power_apparent_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VA`.

### Power factor l3 (numeric)
Phase L3 power factor (0 to 1).
Value can be found in the published state on the `power_factor_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Alarm status (text)
Active alarm conditions.
Value can be found in the published state on the `alarm_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Over current threshold (numeric)
Overcurrent alarm threshold.
Value can be found in the published state on the `over_current_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_current_threshold": VALUE}`.
The minimal value is `1` and the maximum value is `63`.
The unit of this value is `A`.

### Over voltage threshold (numeric)
Overvoltage alarm threshold.
Value can be found in the published state on the `over_voltage_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_voltage_threshold": VALUE}`.
The minimal value is `230` and the maximum value is `300`.
The unit of this value is `V`.

### Under voltage threshold (numeric)
Undervoltage alarm threshold.
Value can be found in the published state on the `under_voltage_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"under_voltage_threshold": VALUE}`.
The minimal value is `90` and the maximum value is `190`.
The unit of this value is `V`.

### Clear energy (enum)
Clear accumulated energy.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"clear_energy": "VALUE"}`.
The possible values are: `press`.

### Refresh measurements (enum)
Trigger fast measurement updates.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"refresh_measurements": "VALUE"}`.
The possible values are: `press`.

