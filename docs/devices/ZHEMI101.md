---
title: "Develco ZHEMI101 control via MQTT"
description: "Integrate your Develco ZHEMI101 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-02-28T13:58:01Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Develco ZHEMI101

|     |     |
|-----|-----|
| Model | ZHEMI101  |
| Vendor  | [Develco](/supported-devices/#v=Develco)  |
| Description | Energy/gas/water meter interface |
| Exposes | energy, produced_energy, power, gas, water_consumed, flow, battery_low, unit_of_measure, metering_device_type, summation_formatting, demand_formatting, multiplier, divisor, pulse_configuration, interface_mode, unit_summation, check_meter |
| Picture | ![Develco ZHEMI101](https://www.zigbee2mqtt.io/images/devices/ZHEMI101.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Energy (numeric)
Normalized cumulative energy. Source units such as kWh or BTU are converted to kWh..
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Produced energy (numeric)
Normalized produced energy, when reported by the meter..
Value can be found in the published state on the `produced_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Power (numeric)
Normalized instantaneous demand. Source units such as kW or BTU/h are converted to kW..
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kW`.

### Gas (numeric)
Normalized cumulative gas volume. Source units are converted to cubic meters..
Value can be found in the published state on the `gas` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³`.

### Water consumed (numeric)
Normalized cumulative water volume. Source units are converted to cubic meters..
Value can be found in the published state on the `water_consumed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³`.

### Flow (numeric)
Normalized volume flow rate for gas or water. Source units are converted to cubic meters per hour..
Value can be found in the published state on the `flow` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m³/h`.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Unit of measure (numeric)
Raw ZigBee Smart Energy UnitOfMeasure attribute..
Value can be found in the published state on the `unit_of_measure` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Metering device type (numeric)
Raw ZigBee Smart Energy MeteringDeviceType attribute..
Value can be found in the published state on the `metering_device_type` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Summation formatting (numeric)
Raw ZigBee Smart Energy SummationFormatting attribute..
Value can be found in the published state on the `summation_formatting` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Demand formatting (numeric)
Raw ZigBee Smart Energy DemandFormatting attribute..
Value can be found in the published state on the `demand_formatting` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Multiplier (numeric)
Raw ZigBee Smart Energy Multiplier attribute..
Value can be found in the published state on the `multiplier` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Divisor (numeric)
Raw ZigBee Smart Energy Divisor attribute..
Value can be found in the published state on the `divisor` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Pulse configuration (numeric)
Pulses per unit. Default 1000 imp/kWh for electricity. Range 0 to 65535.
Value can be found in the published state on the `pulse_configuration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pulse_configuration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pulse_configuration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.

### Interface mode (enum)
Operating mode/probe.
Value can be found in the published state on the `interface_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"interface_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"interface_mode": NEW_VALUE}`.
The possible values are: `electricity`, `gas`, `water`, `kamstrup-kmp`, `linky`, `IEC62056-21`, `DSMR-2.3`, `DSMR-4.0`.

### Unit summation (numeric)
Sets the meter summation in the normalized published unit: kWh for energy meters and m³ for gas/water meters..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"unit_summation": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `9007199254740991`.

### Check meter (binary)
Is true if communication problem with meter is experienced.
Value can be found in the published state on the `check_meter` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` check meter is ON, if `false` OFF.

