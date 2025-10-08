---
title: "IMOU ZGA1-EN control via MQTT"
description: "Integrate your IMOU ZGA1-EN via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:59:08
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# IMOU ZGA1-EN

|     |     |
|-----|-----|
| Model | ZGA1-EN  |
| Vendor  | [IMOU](/supported-devices/#v=IMOU)  |
| Description | Smart gas detector |
| Exposes | gas_alarm_1, gas_alarm_2, tamper, test |
| Picture | ![IMOU ZGA1-EN](https://www.zigbee2mqtt.io/images/devices/ZGA1-EN.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `gas_timeout`: Time in seconds after which gas is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of `0`


## Exposes

### Gas alarm 1 (binary)
Indicates whether the device detected gas (alarm_1).
Value can be found in the published state on the `gas_alarm_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` gas alarm 1 is ON, if `false` OFF.

### Gas alarm 2 (binary)
Indicates whether the device detected gas (alarm_2).
Value can be found in the published state on the `gas_alarm_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` gas alarm 2 is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Test (binary)
Indicates whether the device is currently performing a test.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

