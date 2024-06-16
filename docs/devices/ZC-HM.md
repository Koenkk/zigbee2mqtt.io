---
title: "Moes ZC-HM control via MQTT"
description: "Integrate your Moes ZC-HM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-01T18:54:40
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZC-HM

|     |     |
|-----|-----|
| Model | ZC-HM  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Carbon monoxide alarm |
| Exposes | carbon_monoxide, co, self_test_result, battery, silence, linkquality |
| Picture | ![Moes ZC-HM](https://www.zigbee2mqtt.io/images/devices/ZC-HM.png) |


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

### Self test result (enum)
Result of the self-test.
Value can be found in the published state on the `self_test_result` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `checking`, `success`, `failure`, `others`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Silence (binary)
Silence the alarm.
Value can be found in the published state on the `silence` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"silence": NEW_VALUE}`.
If value equals `true` silence is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

