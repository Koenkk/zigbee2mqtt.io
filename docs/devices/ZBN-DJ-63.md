---
title: "Tuya ZBN-DJ-63 control via MQTT"
description: "Integrate your Tuya ZBN-DJ-63 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-06-30T19:08:32
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZBN-DJ-63

|     |     |
|-----|-----|
| Model | ZBN-DJ-63  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart circuit breaker |
| Exposes | switch (state), energy, reverse_energy, power, voltage, current, temperature, switch_prepayment, clear_energy, balance_energy, charge_energy, over_current_breaker, over_current_threshold, over_voltage_breaker, over_voltage_threshold, under_voltage_breaker, under_voltage_threshold, leakage_current, leakage_breaker, leakage_delay, leakage_threshold, high_temperature_breaker, high_temperature_threshold, countdown, power_on_delay, recover_count, recover_enable, fault, relay_power_on_state |
| Picture | ![Tuya ZBN-DJ-63](https://www.zigbee2mqtt.io/images/devices/ZBN-DJ-63.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Energy (numeric)
Total Forward Energy (kWh).
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Reverse energy (numeric)
Total Reverse Energy (kWh).
Value can be found in the published state on the `reverse_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Power (numeric)
Active Power (W).
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Voltage (numeric)
Phase A Voltage (V).
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current (numeric)
Phase A Current (A).
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Temperature (numeric)
Current Temperature.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Switch prepayment (binary)
Prepaid Function Switch.
Value can be found in the published state on the `switch_prepayment` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_prepayment": NEW_VALUE}`.
If value equals `ON` switch prepayment is ON, if `OFF` OFF.

### Clear energy (binary)
Clear Remaining Available Energy.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"clear_energy": NEW_VALUE}`.
If value equals `ON` clear energy is ON, if `OFF` OFF.

### Balance energy (numeric)
Remaining Available Energy Display (kWh).
Value can be found in the published state on the `balance_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Charge energy (numeric)
Energy Recharge.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"charge_energy": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `999999`.
The unit of this value is `kWh`.

### Over current breaker (binary)
Overcurrent Alarm Enabled.
Value can be found in the published state on the `over_current_breaker` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"over_current_breaker": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_current_breaker": NEW_VALUE}`.
If value equals `ON` over current breaker is ON, if `OFF` OFF.

### Over current threshold (numeric)
Overcurrent Threshold.
Value can be found in the published state on the `over_current_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"over_current_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_current_threshold": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `63`.
The unit of this value is `A`.

### Over voltage breaker (binary)
Overvoltage Alarm Enabled.
Value can be found in the published state on the `over_voltage_breaker` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"over_voltage_breaker": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_voltage_breaker": NEW_VALUE}`.
If value equals `ON` over voltage breaker is ON, if `OFF` OFF.

### Over voltage threshold (numeric)
Overvoltage Threshold.
Value can be found in the published state on the `over_voltage_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"over_voltage_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_voltage_threshold": NEW_VALUE}`.
The minimal value is `240` and the maximum value is `260`.
The unit of this value is `V`.

### Under voltage breaker (binary)
Undervoltage Alarm Enabled.
Value can be found in the published state on the `under_voltage_breaker` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"under_voltage_breaker": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"under_voltage_breaker": NEW_VALUE}`.
If value equals `ON` under voltage breaker is ON, if `OFF` OFF.

### Under voltage threshold (numeric)
Undervoltage Threshold.
Value can be found in the published state on the `under_voltage_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"under_voltage_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"under_voltage_threshold": NEW_VALUE}`.
The minimal value is `195` and the maximum value is `220`.
The unit of this value is `V`.

### Leakage current (numeric)
Residual Current Display.
Value can be found in the published state on the `leakage_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mA`.

### Leakage breaker (binary)
Leakage Current Alarm Enabled.
Value can be found in the published state on the `leakage_breaker` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"leakage_breaker": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"leakage_breaker": NEW_VALUE}`.
If value equals `ON` leakage breaker is ON, if `OFF` OFF.

### Leakage delay (numeric)
Leakage Delay.
Value can be found in the published state on the `leakage_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"leakage_delay": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `9999`.
The unit of this value is `s`.

### Leakage threshold (numeric)
Leakage Current Threshold.
Value can be found in the published state on the `leakage_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"leakage_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"leakage_threshold": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `99`.
The unit of this value is `mA`.

### High temperature breaker (binary)
Temperature Alarm Enabled.
Value can be found in the published state on the `high_temperature_breaker` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_temperature_breaker": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_temperature_breaker": NEW_VALUE}`.
If value equals `ON` high temperature breaker is ON, if `OFF` OFF.

### High temperature threshold (numeric)
Temperature Threshold.
Value can be found in the published state on the `high_temperature_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_temperature_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_temperature_threshold": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `85`.
The unit of this value is `°C`.

### Countdown (numeric)
Countdown Timer.
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Power on delay (numeric)
Power-On Delay Energization Time.
Value can be found in the published state on the `power_on_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_delay": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `9999`.
The unit of this value is `s`.

### Recover count (numeric)
Reclosing Attempt Limit.
Value can be found in the published state on the `recover_count` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"recover_count": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `999`.

### Recover enable (binary)
Reclosing Enable.
Value can be found in the published state on the `recover_enable` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"recover_enable": NEW_VALUE}`.
If value equals `ON` recover enable is ON, if `OFF` OFF.

### Fault (enum)
Fault Alarm.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `clear`, `short_circuit_alarm`, `surge_alarm`, `overload_alarm`, `leakagecurr_alarm`, `temp_dif_fault`, `fire_alarm`, `high_power_alarm`, `self_test_alarm`, `ov_cr`, `unbalance_alarm`, `ov_vol`, `undervoltage_alarm`, `miss_phase_alarm`, `outage_alarm`, `magnetism_alarm`, `credit_alarm`, `no_balance_alarm`.

### Relay power on state (enum)
Relay Power-On State Setting.
Value can be found in the published state on the `relay_power_on_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"relay_power_on_state": NEW_VALUE}`.
The possible values are: `Off`, `On`, `Restore`.

