---
title: "Moes ZM6LT1 control via MQTT"
description: "Integrate your Moes ZM6LT1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-07-30T18:55:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZM6LT1

|     |     |
|-----|-----|
| Model | ZM6LT1  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Smart 1-phase energy power meter with CT sensor clamp |
| Exposes | energy, voltage, current, power, ac_frequency, reverse_energy, active_energy, fault, clear_event, online_state, countdown_1, device_restart |
| Picture | ![Moes ZM6LT1](https://www.zigbee2mqtt.io/images/devices/ZM6LT1.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `ac_frequency_calibration`: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.

* `ac_frequency_precision`: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

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

### AC frequency (numeric)
Measured electrical AC frequency.
Value can be found in the published state on the `ac_frequency` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `Hz`.

### Reverse energy (numeric)
Total reverse active energy.
Value can be found in the published state on the `reverse_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Active energy (numeric)
Total active energy.
Value can be found in the published state on the `active_energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Fault (numeric)
Fault status.
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Clear event (binary)
Clear event.
Value can be found in the published state on the `clear_event` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"clear_event": NEW_VALUE}`.
If value equals `ON` clear event is ON, if `OFF` OFF.

### Online state (enum)
Online state.
Value can be found in the published state on the `online_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `offline`, `online`.

### Countdown 1 (numeric)
Countdown timer.
Value can be found in the published state on the `countdown_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `s`.

### Device restart (binary)
Device restart.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"device_restart": NEW_VALUE}`.
If value equals `ON` device restart is ON, if `OFF` OFF.

