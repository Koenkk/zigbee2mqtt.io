---
title: "TNCE RMDZB-1PNL63 control via MQTT"
description: "Integrate your TNCE RMDZB-1PNL63 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-31T20:34:53
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TNCE RMDZB-1PNL63

|     |     |
|-----|-----|
| Model | RMDZB-1PNL63  |
| Vendor  | [TNCE](/supported-devices/#v=TNCE)  |
| Description | Zigbee DIN single phase energy meter |
| Exposes | switch (state), energy, fault, voltage_a, power_a, current_a, temperature, over_current_breaker, over_current_threshold, over_voltage_breaker, over_voltage_threshold, under_voltage_breaker, under_voltage_threshold, high_temperature_breaker, high_temperature_threshold |
| Picture | ![TNCE RMDZB-1PNL63](https://www.zigbee2mqtt.io/images/devices/RMDZB-1PNL63.png) |
| White-label | TNCE RMDZB-1PNL63 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Fault (enum)
Fault status of the device (clear = nothing).
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `clear`, `short_circuit_alarm`, `surge_alarm`, `overload_alarm`, `leakagecurr_alarm`, `temp_dif_fault`, `fire_alarm`, `high_power_alarm`, `self_test_alarm`, `ov_cr`, `unbalance_alarm`, `ov_vol`, `undervoltage_alarm`, `miss_phase_alarm`, `outage_alarm`, `magnetism_alarm`, `credit_alarm`, `no_balance_alarm`.

### Voltage a (numeric)
Measured electrical potential value (phase A).
Value can be found in the published state on the `voltage_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Power a (numeric)
Instantaneous measured power (phase A).
Value can be found in the published state on the `power_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current a (numeric)
Instantaneous measured electrical current (phase A).
Value can be found in the published state on the `current_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Over current breaker (binary)
OFF - alarm only, ON - relay will turn off when threshold reached.
Value can be found in the published state on the `over_current_breaker` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_current_breaker": NEW_VALUE}`.
If value equals `ON` over current breaker is ON, if `OFF` OFF.

### Over current threshold (numeric)
Setup the value on the device.
Value can be found in the published state on the `over_current_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_current_threshold": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `63`.
The unit of this value is `A`.

### Over voltage breaker (binary)
OFF - alarm only, ON - relay will turn off when threshold reached.
Value can be found in the published state on the `over_voltage_breaker` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_voltage_breaker": NEW_VALUE}`.
If value equals `ON` over voltage breaker is ON, if `OFF` OFF.

### Over voltage threshold (numeric)
Setup value on the device.
Value can be found in the published state on the `over_voltage_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_voltage_threshold": NEW_VALUE}`.
The minimal value is `250` and the maximum value is `300`.
The unit of this value is `V`.

### Under voltage breaker (binary)
OFF - alarm only, ON - relay will turn off when threshold reached.
Value can be found in the published state on the `under_voltage_breaker` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"under_voltage_breaker": NEW_VALUE}`.
If value equals `ON` under voltage breaker is ON, if `OFF` OFF.

### Under voltage threshold (numeric)
Setup value on the device.
Value can be found in the published state on the `under_voltage_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"under_voltage_threshold": NEW_VALUE}`.
The minimal value is `150` and the maximum value is `200`.
The unit of this value is `V`.

### High temperature breaker (binary)
OFF - alarm only, ON - relay will turn off when threshold reached.
Value can be found in the published state on the `high_temperature_breaker` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_temperature_breaker": NEW_VALUE}`.
If value equals `ON` high temperature breaker is ON, if `OFF` OFF.

### High temperature threshold (numeric)
Setup value on the device.
Value can be found in the published state on the `high_temperature_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_temperature_threshold": NEW_VALUE}`.
The minimal value is `40` and the maximum value is `100`.
The unit of this value is `°C`.

