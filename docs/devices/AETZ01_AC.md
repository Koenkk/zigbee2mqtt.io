---
title: "Tuya AETZ01_AC control via MQTT"
description: "Integrate your Tuya AETZ01_AC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-10-31T19:12:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya AETZ01_AC

|     |     |
|-----|-----|
| Model | AETZ01_AC  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart air conditioner |
| Exposes | state, climate (local_temperature, current_heating_setpoint, system_mode, fan_mode, swing_mode), sleep, turbo, quiet, power, energy |
| Picture | ![Tuya AETZ01_AC](https://www.zigbee2mqtt.io/images/devices/AETZ01_AC.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### State (binary)
Turn AC ON/OFF.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": NEW_VALUE}`.
If value equals `ON` state is ON, if `OFF` OFF.

### Climate 
This climate device supports the following features: `local_temperature`, `current_heating_setpoint`, `system_mode`, `fan_mode`, `swing_mode`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `16` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `cool`, `dry`, `fan_only`. Reading (`/get`) this attribute is not possible.

### Sleep (binary)
Sleep Mode.
Value can be found in the published state on the `sleep` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sleep": NEW_VALUE}`.
If value equals `ON` sleep is ON, if `OFF` OFF.

### Turbo (binary)
Turbo Mode.
Value can be found in the published state on the `turbo` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"turbo": NEW_VALUE}`.
If value equals `ON` turbo is ON, if `OFF` OFF.

### Quiet (binary)
Quiet Mode.
Value can be found in the published state on the `quiet` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"quiet": NEW_VALUE}`.
If value equals `ON` quiet is ON, if `OFF` OFF.

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

