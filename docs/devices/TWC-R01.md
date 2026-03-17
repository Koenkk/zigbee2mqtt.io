---
title: "THALEOS TWC-R01 control via MQTT"
description: "Integrate your THALEOS TWC-R01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-11-30T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# THALEOS TWC-R01

|     |     |
|-----|-----|
| Model | TWC-R01  |
| Vendor  | [THALEOS](/supported-devices/#v=THALEOS)  |
| Description | Smart thermostat for electric heater with pilot wire |
| Exposes | pilot_wire_mode, local_temperature, local_temperature_calibration, eco_mode, open_window, open_window_temperature, power, voltage, current, energy, energy_today, energy_yesterday, device_mode_type |
| Picture | ![THALEOS TWC-R01](https://www.zigbee2mqtt.io/images/devices/TWC-R01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Pilot wire mode (enum)
Controls the target temperature of the heater, with respect to the temperature set on that heater. Possible values: comfort (target temperature = heater set temperature) eco (target temperature = heater set temperature - 3.5°C), frost_protection (target temperature = 7 to 8°C), off (heater stops heating), and the less commonly used comfort_-1 (target temperature = heater set temperature - 1°C), comfort_-2 (target temperature = heater set temperature - 2°C),..
Value can be found in the published state on the `pilot_wire_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pilot_wire_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pilot_wire_mode": NEW_VALUE}`.
The possible values are: `comfort`, `eco`, `antifrost`, `off`, `comfort_1`, `comfort_2`.

### Local temperature (numeric)
Current temperature measured on the device.
Value can be found in the published state on the `local_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Local temperature calibration (numeric)
Set temperature calibration.
Value can be found in the published state on the `local_temperature_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": NEW_VALUE}`.
The minimal value is `-8` and the maximum value is `8`.
The unit of this value is `°C`.

### Eco mode (binary)
Enables/disables the weekly program..
Value can be found in the published state on the `eco_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_mode": NEW_VALUE}`.
If value equals `ON` eco mode is ON, if `OFF` OFF.

### Open window (binary)
Enables/disables the status on the device.
Value can be found in the published state on the `open_window` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window": NEW_VALUE}`.
If value equals `ON` open window is ON, if `OFF` OFF.

### Open window temperature (numeric)
Open window temperature.
Value can be found in the published state on the `open_window_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `35`.
The unit of this value is `°C`.

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

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy today (numeric)
Energy consumed today.
Value can be found in the published state on the `energy_today` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Energy yesterday (numeric)
Energy consumed yesterday.
Value can be found in the published state on the `energy_yesterday` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Device mode type (binary)
Set pilot wire mode to 6 modes (includes comfort 1 & 2)..
Value can be found in the published state on the `device_mode_type` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_mode_type": NEW_VALUE}`.
If value equals `ON` device mode type is ON, if `OFF` OFF.

