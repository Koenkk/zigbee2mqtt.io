---
title: "Lincukoo E04CF-Z10T control via MQTT"
description: "Integrate your Lincukoo E04CF-Z10T via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:10:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lincukoo E04CF-Z10T

|     |     |
|-----|-----|
| Model | E04CF-Z10T  |
| Vendor  | [Lincukoo](/supported-devices/#v=Lincukoo)  |
| Description | Smart gas and CO sensor |
| Exposes | gas, co, set_max_gas_alarm, set_max_co_alarm, gas_sensor_state, co_state, self_checking, checking_result |
| Picture | ![Lincukoo E04CF-Z10T](https://www.zigbee2mqtt.io/images/devices/E04CF-Z10T.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co_calibration`: Calibrates the co value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Gas (numeric)
Current Gas Value.
Value can be found in the published state on the `gas` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `20`.
The unit of this value is `%LEL`.

### CO (numeric)
The measured CO (carbon monoxide) value.
Value can be found in the published state on the `co` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### Set max gas alarm (numeric)
Gas alarm value.
Value can be found in the published state on the `set_max_gas_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_max_gas_alarm": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `20`.
The unit of this value is `%LEL`.

### Set max co alarm (numeric)
CO alarm value.
Value can be found in the published state on the `set_max_co_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_max_co_alarm": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1000`.
The unit of this value is `ppm`.

### Gas sensor state (enum)
Gas alarm status.
Value can be found in the published state on the `gas_sensor_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `alarm`.

### Co state (enum)
CO alarm status.
Value can be found in the published state on the `co_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `alarm`.

### Self checking (binary)
self checking.
Value can be found in the published state on the `self_checking` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"self_checking": NEW_VALUE}`.
If value equals `ON` self checking is ON, if `OFF` OFF.

### Checking result (enum)
checking result.
Value can be found in the published state on the `checking_result` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `checking`, `check_success`, `check_failure`, `others`.

