---
title: "Tuya TOQCB2-80 control via MQTT"
description: "Integrate your Tuya TOQCB2-80 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-08-01T18:23:40
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TOQCB2-80

|     |     |
|-----|-----|
| Model | TOQCB2-80  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart circuit breaker |
| Exposes | switch (state), energy, power, voltage, current, temperature, voltage_a, voltage_b, voltage_c, power_a, power_b, power_c, current_a, current_b, current_c, last_event, over_current_setting, current_threshold, under_voltage_setting, under_voltage_threshold, over_voltage_setting, over_voltage_threshold, over_power_setting, over_power_threshold, temperature_setting, temperature_threshold, clear_fault, factory_reset, linkquality |
| Picture | ![Tuya TOQCB2-80](https://www.zigbee2mqtt.io/images/devices/TOQCB2-80.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

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

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

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

### Last event (enum)
Last event.
Value can be found in the published state on the `last_event` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `trip_over_current`, `trip_over_power`, `trip_over_temperature`, `trip_voltage_1`, `trip_voltage_2`, `alarm_over_current`, `alarm_over_power`, `alarm_over_temperature`, `alarm_voltage_1`, `alarm_voltage_2`, `remote_on`, `remote_off`, `manual_on`, `manual_off`, `value_15`, `value_16`, `factory_reset`.

### Over current setting (enum)
Action if threshold value is reached.
Value can be found in the published state on the `over_current_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_current_setting": NEW_VALUE}`.
The possible values are: `closed`, `alarm`, `trip`.

### Current threshold (numeric)
Current threshold setting.
Value can be found in the published state on the `current_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_threshold": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `63`.
The unit of this value is `A`.

### Under voltage setting (enum)
Action if threshold value is reached.
Value can be found in the published state on the `under_voltage_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"under_voltage_setting": NEW_VALUE}`.
The possible values are: `closed`, `alarm`, `trip`.

### Under voltage threshold (numeric)
Under voltage threshold setting.
Value can be found in the published state on the `under_voltage_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"under_voltage_threshold": NEW_VALUE}`.
The minimal value is `145` and the maximum value is `220`.
The unit of this value is `V`.

### Over voltage setting (enum)
Action if threshold value is reached.
Value can be found in the published state on the `over_voltage_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_voltage_setting": NEW_VALUE}`.
The possible values are: `closed`, `alarm`, `trip`.

### Over voltage threshold (numeric)
Over-voltage threshold setting.
Value can be found in the published state on the `over_voltage_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_voltage_threshold": NEW_VALUE}`.
The minimal value is `245` and the maximum value is `295`.
The unit of this value is `V`.

### Over power setting (enum)
Action if threshold value is reached.
Value can be found in the published state on the `over_power_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_power_setting": NEW_VALUE}`.
The possible values are: `closed`, `alarm`, `trip`.

### Over power threshold (numeric)
Over-power threshold setting.
Value can be found in the published state on the `over_power_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_power_threshold": NEW_VALUE}`.
The minimal value is `200` and the maximum value is `20000`.
The unit of this value is `W`.

### Temperature setting (enum)
Action if threshold value is reached.
Value can be found in the published state on the `temperature_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_setting": NEW_VALUE}`.
The possible values are: `closed`, `alarm`, `trip`.

### Temperature threshold (numeric)
Temperature threshold setting.
Value can be found in the published state on the `temperature_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_threshold": NEW_VALUE}`.
The minimal value is `-40` and the maximum value is `100`.
The unit of this value is `°C`.

### Clear fault (binary)
Recover from an incident.
Value can be found in the published state on the `clear_fault` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"clear_fault": NEW_VALUE}`.
If value equals `ON` clear fault is ON, if `OFF` OFF.

### Factory reset (binary)
Back to factory settings, USE WITH CAUTION.
Value can be found in the published state on the `factory_reset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset": NEW_VALUE}`.
If value equals `ON` factory reset is ON, if `OFF` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

