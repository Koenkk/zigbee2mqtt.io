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
| Exposes | energy, produced_energy, current, temperature, leakage_current, switch (state), reclosing_enable, timer, cycle_schedule, clear_energy, switch_prepayment, balance_energy, charge_energy, fault, status, reclose_recover_seconds, power_on_delay, overcurrent_threshold_time, lost_flow_threshold_time, relay_status_on_power_on, alarm_set_1, alarm_set_2, alarm_set_3 |
| Picture | ![Nous D5Z](https://www.zigbee2mqtt.io/images/devices/D5Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

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

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Leakage current (numeric)
Leakage current.
Value can be found in the published state on the `leakage_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mA`.

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Reclosing enable (binary)
Reclosing enable.
Value can be found in the published state on the `reclosing_enable` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"reclosing_enable": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reclosing_enable": NEW_VALUE}`.
If value equals `true` reclosing enable is ON, if `false` OFF.

### Timer (numeric)
Timer (schedule control in seconds).
Value can be found in the published state on the `timer` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"timer": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"timer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.

### Cycle schedule (text)
Cycle schedule configuration (JSON string).
Value can be found in the published state on the `cycle_schedule` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"cycle_schedule": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cycle_schedule": NEW_VALUE}`.

### Clear energy (binary)
Clear accumulated forward and reverse energy.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"clear_energy": NEW_VALUE}`.
If value equals `true` clear energy is ON, if `false` OFF.

### Switch prepayment (binary)
Switch prepayment mode ON/OFF.
Value can be found in the published state on the `switch_prepayment` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_prepayment": NEW_VALUE}`.
If value equals `true` switch prepayment is ON, if `false` OFF.

### Balance energy (numeric)
Remaining energy balance for prepayment.
Value can be found in the published state on the `balance_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Charge energy (numeric)
Last charged energy amount.
Value can be found in the published state on the `charge_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Fault (binary)
General fault detected.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` fault is ON, if `false` OFF.

### Status (text)
Detailed status information (e.g., fault codes).
Value can be found in the published state on the `status` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Reclose recover seconds (numeric)
Time for auto reclosing recovery.
Value can be found in the published state on the `reclose_recover_seconds` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Power on delay (numeric)
Power-on delay time.
Value can be found in the published state on the `power_on_delay` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Overcurrent threshold time (numeric)
Overcurrent event threshold time.
Value can be found in the published state on the `overcurrent_threshold_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Lost flow threshold time (numeric)
Lost flow event threshold time.
Value can be found in the published state on the `lost_flow_threshold_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

### Relay status on power on (binary)
Relay status after power on (true=ON).
Value can be found in the published state on the `relay_status_on_power_on` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` relay status on power on is ON, if `false` OFF.

### Alarm set 1 (text)
Alarm set 1 configuration.
Value can be found in the published state on the `alarm_set_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_set_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_set_1": NEW_VALUE}`.

### Alarm set 2 (text)
Alarm set 2 configuration.
Value can be found in the published state on the `alarm_set_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_set_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_set_2": NEW_VALUE}`.

### Alarm set 3 (text)
Alarm set 3 configuration.
Value can be found in the published state on the `alarm_set_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_set_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_set_3": NEW_VALUE}`.

