---
title: "Tuya TS0601_3ch_bidirectional_meter control via MQTT"
description: "Integrate your Tuya TS0601_3ch_bidirectional_meter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:29:03.089Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_3ch_bidirectional_meter

|     |     |
|-----|-----|
| Model | TS0601_3ch_bidirectional_meter  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 3-channel bidirectional smart energy meter with relay |
| Exposes | switch (state), voltage, power, energy, produced_energy, temperature, current_a, power_a, power_factor_a, energy_a, reverse_energy_a, current_b, power_b, power_factor_b, energy_b, reverse_energy_b, current_c, power_c, power_factor_c, energy_c, reverse_energy_c, power_setting_a, power_setting_b, power_setting_c, power_alarm_a, power_alarm_b, power_alarm_c, voltage_calibration, current_a_calibration, current_b_calibration, current_c_calibration, power_a_calibration, power_b_calibration, power_c_calibration |
| Picture | ![Tuya TS0601_3ch_bidirectional_meter](https://www.zigbee2mqtt.io/images/devices/TS0601_3ch_bidirectional_meter.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

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

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Current a (numeric)
Instantaneous measured electrical current (phase A).
Value can be found in the published state on the `current_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Power a (numeric)
Instantaneous measured power (phase A).
Value can be found in the published state on the `power_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power factor a (numeric)
Instantaneous measured power factor (phase A).
Value can be found in the published state on the `power_factor_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Energy a (numeric)
Sum of consumed energy (phase A).
Value can be found in the published state on the `energy_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Reverse energy a (numeric)
Value can be found in the published state on the `reverse_energy_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Current b (numeric)
Instantaneous measured electrical current (phase B).
Value can be found in the published state on the `current_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Power b (numeric)
Instantaneous measured power (phase B).
Value can be found in the published state on the `power_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power factor b (numeric)
Instantaneous measured power factor (phase B).
Value can be found in the published state on the `power_factor_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Energy b (numeric)
Sum of consumed energy (phase B).
Value can be found in the published state on the `energy_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Reverse energy b (numeric)
Value can be found in the published state on the `reverse_energy_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Current c (numeric)
Instantaneous measured electrical current (phase C).
Value can be found in the published state on the `current_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Power c (numeric)
Instantaneous measured power (phase C).
Value can be found in the published state on the `power_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power factor c (numeric)
Instantaneous measured power factor (phase C).
Value can be found in the published state on the `power_factor_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Energy c (numeric)
Sum of consumed energy (phase C).
Value can be found in the published state on the `energy_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Reverse energy c (numeric)
Value can be found in the published state on the `reverse_energy_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Power setting a (numeric)
Value can be found in the published state on the `power_setting_a` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_setting_a": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3680`.
The unit of this value is `W`.

### Power setting b (numeric)
Value can be found in the published state on the `power_setting_b` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_setting_b": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3680`.
The unit of this value is `W`.

### Power setting c (numeric)
Value can be found in the published state on the `power_setting_c` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_setting_c": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3680`.
The unit of this value is `W`.

### Power alarm a (binary)
Value can be found in the published state on the `power_alarm_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` power alarm a is ON, if `false` OFF.

### Power alarm b (binary)
Value can be found in the published state on the `power_alarm_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` power alarm b is ON, if `false` OFF.

### Power alarm c (binary)
Value can be found in the published state on the `power_alarm_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` power alarm c is ON, if `false` OFF.

### Voltage calibration (numeric)
Value can be found in the published state on the `voltage_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"voltage_calibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `260`.
The unit of this value is `V`.

### Current a calibration (numeric)
Value can be found in the published state on the `current_a_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_a_calibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100000`.
The unit of this value is `mA`.

### Current b calibration (numeric)
Value can be found in the published state on the `current_b_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_b_calibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100000`.
The unit of this value is `mA`.

### Current c calibration (numeric)
Value can be found in the published state on the `current_c_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_c_calibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100000`.
The unit of this value is `mA`.

### Power a calibration (numeric)
Value can be found in the published state on the `power_a_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_a_calibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3680`.
The unit of this value is `W`.

### Power b calibration (numeric)
Value can be found in the published state on the `power_b_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_b_calibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3680`.
The unit of this value is `W`.

### Power c calibration (numeric)
Value can be found in the published state on the `power_c_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_c_calibration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3680`.
The unit of this value is `W`.

