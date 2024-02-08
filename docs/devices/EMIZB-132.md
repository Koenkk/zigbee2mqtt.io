---
title: "Develco EMIZB-132 control via MQTT"
description: "Integrate your Develco EMIZB-132 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-03-20T17:24:57Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Develco EMIZB-132

|     |     |
|-----|-----|
| Model | EMIZB-132  |
| Vendor  | [Develco](/supported-devices/#v=Develco)  |
| Description | Wattle AMS HAN power-meter sensor |
| Exposes | power, power_reactive, energy, current, voltage, current_phase_b, voltage_phase_b, current_phase_c, voltage_phase_c, linkquality |
| Picture | ![Develco EMIZB-132](https://www.zigbee2mqtt.io/images/devices/EMIZB-132.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Configuring interface mode
In order to get measurements, after pairing the device you need to configure the interface mode.

To do this send to `zigbee2mqtt/FRIENDLY_NAME/set` payload `{"interface_mode": "INTERFACE_MODE"}`.

Possible values for `INTERFACE_MODE` are:

| Value | Description |
| - | - |
| `norwegian_han` | Norwegian HAN  |
| `norwegian_han_extra_load` | Norwegian HAN – Enable extra load. This is need to enable Adion meter communication |
| `aidon_meter` | Aidon Meter supporting Norwegian HAN HW interface. SW protocol is Aidon Manufacture Specific |
| `kaifa_and_kamstrup` | Kaifa meter and Kamstrup meters running old firmware |

Example of payload: `{"interface_mode": "norwegian_han_extra_load"}`

### Not getting measurements
In case you are not getting any measurements, it could be that your firmware is too old. You can ask Wattle for a replacement.

Related issues:
- https://github.com/Koenkk/zigbee-herdsman-converters/issues/974#issuecomment-590450035
- https://github.com/dresden-elektronik/deconz-rest-plugin/issues/2127#issuecomment-587949747
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_phase_b_calibration`: Calibrates the current_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_phase_b_precision`: Number of digits after decimal point for current_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_phase_b_calibration`: Calibrates the voltage_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_phase_b_precision`: Number of digits after decimal point for voltage_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_phase_c_calibration`: Calibrates the current_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_phase_c_precision`: Number of digits after decimal point for current_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_phase_c_calibration`: Calibrates the voltage_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_phase_c_precision`: Number of digits after decimal point for voltage_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Power (numeric)
Total active power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Power reactive (numeric)
Total reactive power.
Value can be found in the published state on the `power_reactive` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `VAr`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current phase B (numeric)
Instantaneous measured electrical current on phase B.
Value can be found in the published state on the `current_phase_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage phase B (numeric)
Measured electrical potential value on phase B.
Value can be found in the published state on the `voltage_phase_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Current phase C (numeric)
Instantaneous measured electrical current on phase C.
Value can be found in the published state on the `current_phase_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage phase C (numeric)
Measured electrical potential value on phase C.
Value can be found in the published state on the `voltage_phase_c` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

