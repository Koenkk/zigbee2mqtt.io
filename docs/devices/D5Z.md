---
title: "Nous D5Z control via MQTT"
description: "Integrate your Nous D5Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nous D5Z

|     |     |
|-----|-----|
| Model | D5Z  |
| Vendor  | [Nous](/supported-devices/#v=Nous)  |
| Description | Zigbee smart energy meter with leakage and prepayment |
| Exposes | switch (state), countdown, power_on_behavior, inching, status, power, current, voltage, energy, energy_produced, leakage_current, device_temperature, faults, reclosing, reclosing_delay, reclosing_count, prepayment, energy_balance, energy_balance_add, energy_balance_reset, alarm_set_1, over_current_threshold_time, alarm_set_2, alarm_set_3, lost_flow_threshold_time |
| Picture | ![Nous D5Z](https://www.zigbee2mqtt.io/images/devices/D5Z.png) |



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

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Countdown (numeric)
Toggle the device after a set duration (one time action).
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Power on behavior (enum)
State to apply after a power outage (It takes ~35s to check faults before applying).
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Inching (composite)
Inching configuration.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"inching": {"state": VALUE, "minutes": VALUE, "seconds": VALUE}}`
- `state` (binary): Whenever the device is switched ON, switch it OFF automatically after the configured delay allowed values: `ON` or `OFF`
- `minutes` (numeric): Minutes component of the delay duration max value is 1440, unit is m
- `seconds` (numeric): Seconds component of the delay duration max value is 59, unit is s

### Status (enum)
Current operating status.
Value can be found in the published state on the `status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `off`, `consumption`, `production`.

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

### Energy produced (numeric)
Sum of produced energy.
Value can be found in the published state on the `energy_produced` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Leakage current (numeric)
Current measured by the external ring. Place it over BOTH live and neutral wires to detect leakage current.
Value can be found in the published state on the `leakage_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mA`.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Faults (list)
List of current faults.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"faults": ["short_circuit", "surge", "overload", "leakage_current", "temperature", "fire", "high_power", "self_test", "over_current", "unbalance", "over_voltage", "under_voltage", "miss_phase", "outage", "magnetism", "credit", "no_balance"]}`

### Reclosing (binary)
Automatically attempt switching ON the circuit after it was turned OFF by a detected fault (WARNING: It seems this happens even when disabled).
Value can be found in the published state on the `reclosing` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reclosing": NEW_VALUE}`.
If value equals `ON` reclosing is ON, if `OFF` OFF.

### Reclosing delay (numeric)
Time to wait after the fault is cleared, before attempting reclose.
Value can be found in the published state on the `reclosing_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reclosing_delay": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `99`.
The unit of this value is `s`.

### Reclosing count (numeric)
Number of allowed reclosing attempts per fault.
Value can be found in the published state on the `reclosing_count` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reclosing_count": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.

### Prepayment (binary)
Automatically switch OFF the circuit when the energy balance reaches zero.
Value can be found in the published state on the `prepayment` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"prepayment": NEW_VALUE}`.
If value equals `ON` prepayment is ON, if `OFF` OFF.

### Energy balance (numeric)
Amount of energy allowed for consumption (Decreases when Prepayment is enabled).
Value can be found in the published state on the `energy_balance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy balance add (numeric)
Add an amount of energy to the balance.
Value can be found in the published state on the `energy_balance_add` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"energy_balance_add": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `999999`.
The unit of this value is `kWh`.

### Energy balance reset (enum)
Set the energy balance to zero.
Value can be found in the published state on the `energy_balance_reset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"energy_balance_reset": NEW_VALUE}`.
The possible values are: `RESET`.

### Alarm set 1 (composite)
Leakage current and temperature alarms configuration.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_set_1": {"leakage_current_alarm": VALUE, "leakage_current_threshold": VALUE, "device_temperature_alarm": VALUE, "device_temperature_threshold": VALUE}}`
- `leakage_current_alarm` (binary): Automatically switch OFF the circuit when the leakage current is above the limit (Default ON) allowed values: `ON` or `OFF`
- `leakage_current_threshold` (numeric): Leakage current limit (Default 50mA) min value is 1, max value is 99, unit is mA
- `device_temperature_alarm` (binary): Automatically switch OFF the circuit when the measured temperature exceeds the limit (Default ON) allowed values: `ON` or `OFF`
- `device_temperature_threshold` (numeric): Temperature limit (Default 80°C) min value is 10, max value is 85, unit is °C

### Over current threshold time (numeric)
Time overcurrent is allowed before the circuit is switched OFF (Default 0s).
Value can be found in the published state on the `over_current_threshold_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_current_threshold_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `999`.
The unit of this value is `s`.

### Alarm set 2 (composite)
Current and voltage alarms configuration.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_set_2": {"over_current_alarm": VALUE, "over_current_threshold": VALUE, "over_voltage_alarm": VALUE, "over_voltage_threshold": VALUE, "under_voltage_alarm": VALUE, "under_voltage_threshold": VALUE}}`
- `over_current_alarm` (binary): Automatically switch OFF the circuit when the circuit draws more current than the limit (Default ON) allowed values: `ON` or `OFF`
- `over_current_threshold` (numeric): Current upper limit (Default 63A) min value is 1, max value is 80, unit is A
- `over_voltage_alarm` (binary): Automatically switch OFF the circuit when the voltage is above the limit (Default ON) allowed values: `ON` or `OFF`
- `over_voltage_threshold` (numeric): Voltage upper limit (Default 275V) min value is 120, max value is 300, unit is V
- `under_voltage_alarm` (binary): Automatically switch OFF the circuit when the voltage is below the limit (Default ON) allowed values: `ON` or `OFF`
- `under_voltage_threshold` (numeric): Voltage lower limit (Default 175V) min value is 80, max value is 210, unit is V

### Alarm set 3 (composite)
Lost flow alarm configuration.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_set_3": {"lost_flow_alarm": VALUE, "lost_flow_threshold": VALUE}}`
- `lost_flow_alarm` (binary): Unknown allowed values: `ON` or `OFF`
- `lost_flow_threshold` (numeric): Unknown min value is 1, max value is 100, unit is A

### Lost flow threshold time (numeric)
Unknown (Default 0s).
Value can be found in the published state on the `lost_flow_threshold_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lost_flow_threshold_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `999`.
The unit of this value is `s`.

