---
title: "Tuya 2CT control via MQTT"
description: "Integrate your Tuya 2CT via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-01T20:02:57
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya 2CT

|     |     |
|-----|-----|
| Model | 2CT  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Bidirectional energy meter with 80A current clamp |
| Exposes | ac_frequency, voltage, power, power_a, power_b, current_a, current_b, power_factor_a, power_factor_b, energy_a, energy_b, update_frequency, timestamp_a, timestamp_b, calibration_ac_frequency, calibration_voltage, calibration_power_a, calibration_current_a, calibration_power_b, calibration_current_b |
| Picture | ![Tuya 2CT](https://www.zigbee2mqtt.io/images/devices/2CT.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `ac_frequency_calibration`: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.

* `ac_frequency_precision`: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


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

### Update frequency (numeric)
Update frequency.
Value can be found in the published state on the `update_frequency` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"update_frequency": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `60`.
The unit of this value is `s`.
Besides the numeric values the following values are accepted: `default`.

### Timestamp a (numeric)
Timestamp at power measure (phase a).
Value can be found in the published state on the `timestamp_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Timestamp b (numeric)
Timestamp at power measure (phase b).
Value can be found in the published state on the `timestamp_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Calibration ac frequency (numeric)
Calibration AC frequency.
Value can be found in the published state on the `calibration_ac_frequency` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_ac_frequency": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `1.5`.
Besides the numeric values the following values are accepted: `default`.

### Calibration voltage (numeric)
Calibration voltage.
Value can be found in the published state on the `calibration_voltage` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_voltage": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `1.5`.
Besides the numeric values the following values are accepted: `default`.

### Calibration power a (numeric)
Calibration power A.
Value can be found in the published state on the `calibration_power_a` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_power_a": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `1.5`.
Besides the numeric values the following values are accepted: `default`.

### Calibration current a (numeric)
Calibration current A.
Value can be found in the published state on the `calibration_current_a` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_current_a": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `1.5`.
Besides the numeric values the following values are accepted: `default`.

### Calibration power b (numeric)
Calibration power B.
Value can be found in the published state on the `calibration_power_b` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_power_b": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `1.5`.
Besides the numeric values the following values are accepted: `default`.

### Calibration current b (numeric)
Calibration current B.
Value can be found in the published state on the `calibration_current_b` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_current_b": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `1.5`.
Besides the numeric values the following values are accepted: `default`.

