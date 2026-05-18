---
title: "Tuya JKD-816COM-Z control via MQTT"
description: "Integrate your Tuya JKD-816COM-Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:20:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya JKD-816COM-Z

|     |     |
|-----|-----|
| Model | JKD-816COM-Z  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Carbon monoxide & gas sensor |
| Exposes | carbon_monoxide, co, gas, gas_value, silence, self_test, fault |
| Picture | ![Tuya JKD-816COM-Z](https://www.zigbee2mqtt.io/images/devices/JKD-816COM-Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co_calibration`: Calibrates the co value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Carbon monoxide (binary)
Indicates if CO (carbon monoxide) is detected.
Value can be found in the published state on the `carbon_monoxide` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` carbon monoxide is ON, if `false` OFF.

### CO (numeric)
The measured CO (carbon monoxide) value.
Value can be found in the published state on the `co` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### Gas (binary)
Indicates whether the device detected gas.
Value can be found in the published state on the `gas` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` gas is ON, if `false` OFF.

### Gas value (numeric)
Measured gas concentration.
Value can be found in the published state on the `gas_value` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `LEL`.

### Silence (binary)
Mute the alarm buzzer.
Value can be found in the published state on the `silence` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"silence": NEW_VALUE}`.
If value equals `true` silence is ON, if `false` OFF.

### Self test (enum)
Value can be found in the published state on the `self_test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `checking`, `check_success`, `check_failure`, `others`.

### Fault (enum)
Fault status of the device (none = no fault).
Value can be found in the published state on the `fault` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `fault`, `serious_fault`, `sensor_fault`, `probe_fault`, `power_fault`.

