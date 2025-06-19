---
title: "Bacchus Mercury_3ph_Counter control via MQTT"
description: "Integrate your Bacchus Mercury_3ph_Counter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:56:31
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bacchus Mercury_3ph_Counter

|     |     |
|-----|-----|
| Model | Mercury_3ph_Counter  |
| Vendor  | [Bacchus](/supported-devices/#v=Bacchus)  |
| Description | Zigbee Mercury 3 Phase electricity meter |
| Exposes | power, voltage, current, power_phase_b, power_phase_c, voltage_phase_b, voltage_phase_c, current_phase_b, current_phase_c, energy_t1, energy_t2, energy_t3, energy_t4, measurement_period, device_address, temperature |
| Picture | ![Bacchus Mercury_3ph_Counter](https://www.zigbee2mqtt.io/images/devices/Mercury_3ph_Counter.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
[Original project description](https://github.com/Bacchus777/Mercury_3Ph)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `power_phase_b_calibration`: Calibrates the power_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_phase_b_precision`: Number of digits after decimal point for power_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `power_phase_c_calibration`: Calibrates the power_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_phase_c_precision`: Number of digits after decimal point for power_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_phase_b_calibration`: Calibrates the voltage_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_phase_b_precision`: Number of digits after decimal point for voltage_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_phase_c_calibration`: Calibrates the voltage_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_phase_c_precision`: Number of digits after decimal point for voltage_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_phase_b_calibration`: Calibrates the current_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_phase_b_precision`: Number of digits after decimal point for current_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_phase_c_calibration`: Calibrates the current_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_phase_c_precision`: Number of digits after decimal point for current_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Power phase b (numeric)
Instantaneous measured power on phase B.
Value can be found in the published state on the `power_phase_b` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_phase_b": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Power phase c (numeric)
Instantaneous measured power on phase C.
Value can be found in the published state on the `power_phase_c` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_phase_c": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Voltage phase B (numeric)
Measured electrical potential value on phase B.
Value can be found in the published state on the `voltage_phase_b` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_phase_b": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Voltage phase C (numeric)
Measured electrical potential value on phase C.
Value can be found in the published state on the `voltage_phase_c` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_phase_c": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Current phase B (numeric)
Instantaneous measured electrical current on phase B.
Value can be found in the published state on the `current_phase_b` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_phase_b": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Current phase C (numeric)
Instantaneous measured electrical current on phase C.
Value can be found in the published state on the `current_phase_c` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_phase_c": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### Energy t1 (numeric)
Energy on tariff 1.
Value can be found in the published state on the `energy_t1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_t1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy t2 (numeric)
Energy on tariff 2.
Value can be found in the published state on the `energy_t2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_t2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy t3 (numeric)
Energy on tariff 3.
Value can be found in the published state on the `energy_t3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_t3": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy t4 (numeric)
Energy on tariff 4.
Value can be found in the published state on the `energy_t4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_t4": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Measurement period (numeric)
Measurement Period.
Value can be found in the published state on the `measurement_period` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"measurement_period": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"measurement_period": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `600`.
The unit of this value is `sec`.

### Device address (numeric)
Device Address.
Value can be found in the published state on the `device_address` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_address": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_address": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99999999`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

