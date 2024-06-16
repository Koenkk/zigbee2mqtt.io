---
title: "Moes ZSS-HM-SSD01 control via MQTT"
description: "Integrate your Moes ZSS-HM-SSD01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-30T19:41:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes ZSS-HM-SSD01

|     |     |
|-----|-----|
| Model | ZSS-HM-SSD01  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Smoke sensor |
| Exposes | smoke, battery, battery_state, silence, self_test, linkquality |
| Picture | ![Moes ZSS-HM-SSD01](https://www.zigbee2mqtt.io/images/devices/ZSS-HM-SSD01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery state (enum)
State of the battery.
Value can be found in the published state on the `battery_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `medium`, `high`.

### Silence (binary)
Value can be found in the published state on the `silence` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"silence": NEW_VALUE}`.
If value equals `ON` silence is ON, if `OFF` OFF.

### Self test (enum)
Value can be found in the published state on the `self_test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `checking`, `check_success`, `check_failure`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

