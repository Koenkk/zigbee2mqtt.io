---
title: "Frient EMIZB-151 control via MQTT"
description: "Integrate your Frient EMIZB-151 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-31T20:32:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Frient EMIZB-151

|     |     |
|-----|-----|
| Model | EMIZB-151  |
| Vendor  | [Frient](/supported-devices/#v=Frient)  |
| Description | Electricity Meter Interface 2 P1 |
| Exposes | power, voltage, current, energy, produced_energy, energy_tier_1, energy_tier_2, produced_energy_tier_1, produced_energy_tier_2, power_phase_b, power_phase_c, voltage_phase_b, voltage_phase_c |
| Picture | ![Frient EMIZB-151](https://www.zigbee2mqtt.io/images/devices/EMIZB-151.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
Steps for resetting
1. Open the casing of the device
2. Press and hold the reset button for approximately 14-16 seconds.
3. While holding down the button, the LED first flashes once, then two times in a row, and finally numerous times in a row.
4. After a succesful reset, the yellow LED will start flashing which indicates network search.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


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

* `power_phase_b_calibration`: Calibrates the power_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_phase_b_precision`: Number of digits after decimal point for power_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `power_phase_c_calibration`: Calibrates the power_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_phase_c_precision`: Number of digits after decimal point for power_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_phase_b_calibration`: Calibrates the voltage_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_phase_b_precision`: Number of digits after decimal point for voltage_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_phase_c_calibration`: Calibrates the voltage_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_phase_c_precision`: Number of digits after decimal point for voltage_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


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

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Produced energy (numeric)
Sum of produced energy.
Value can be found in the published state on the `produced_energy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"produced_energy": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy tier 1 (numeric)
Energy consumed in tariff 1 (peak/high) - OBIS 1.8.1.
Value can be found in the published state on the `energy_tier_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_tier_1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Energy tier 2 (numeric)
Energy consumed in tariff 2 (off-peak/low) - OBIS 1.8.2.
Value can be found in the published state on the `energy_tier_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"energy_tier_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Produced energy tier 1 (numeric)
Energy produced in tariff 1 (peak/high) - OBIS 2.8.1.
Value can be found in the published state on the `produced_energy_tier_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"produced_energy_tier_1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

### Produced energy tier 2 (numeric)
Energy produced in tariff 2 (off-peak/low) - OBIS 2.8.2.
Value can be found in the published state on the `produced_energy_tier_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"produced_energy_tier_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kWh`.

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

