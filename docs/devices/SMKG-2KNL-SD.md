---
title: "Tuya SMKG-2KNL-SD control via MQTT"
description: "Integrate your Tuya SMKG-2KNL-SD via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:39
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya SMKG-2KNL-SD

|     |     |
|-----|-----|
| Model | SMKG-2KNL-SD  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart leakage protector 63a with leakage monitoring |
| Exposes | switch (state), voltage, current, power, energy, temperature, leakage_current, over_voltage_threshold, under_voltage_threshold, over_current_threshold, leakage_threshold, temp_threshold, fault_code |
| Picture | ![Tuya SMKG-2KNL-SD](https://www.zigbee2mqtt.io/images/devices/SMKG-2KNL-SD.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

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

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

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

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Leakage current (numeric)
Real-time leakage current (DP 53).
Value can be found in the published state on the `leakage_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mA`.

### Over voltage threshold (numeric)
Value can be found in the published state on the `over_voltage_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_voltage_threshold": NEW_VALUE}`.
The minimal value is `220` and the maximum value is `265`.
The unit of this value is `V`.

### Under voltage threshold (numeric)
Value can be found in the published state on the `under_voltage_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"under_voltage_threshold": NEW_VALUE}`.
The minimal value is `76` and the maximum value is `240`.
The unit of this value is `V`.

### Over current threshold (numeric)
Value can be found in the published state on the `over_current_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"over_current_threshold": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `63`.
The unit of this value is `A`.

### Leakage threshold (numeric)
Value can be found in the published state on the `leakage_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"leakage_threshold": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `100`.
The unit of this value is `mA`.

### Temp threshold (numeric)
Value can be found in the published state on the `temp_threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_threshold": NEW_VALUE}`.
The minimal value is `40` and the maximum value is `150`.
The unit of this value is `°C`.

### Fault code (numeric)
0 = OK.
Value can be found in the published state on the `fault_code` property.
It's not possible to read (`/get`) or write (`/set`) this value.

