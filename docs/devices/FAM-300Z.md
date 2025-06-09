---
title: "ShinaSystem FAM-300Z control via MQTT"
description: "Integrate your ShinaSystem FAM-300Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:59:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ShinaSystem FAM-300Z

|     |     |
|-----|-----|
| Model | FAM-300Z  |
| Vendor  | [ShinaSystem](/supported-devices/#v=ShinaSystem)  |
| Description | SiHAS Smoke detector |
| Exposes | remote_control_permission, force_smoke_alarm, smoke_battery, smoke, battery |
| Picture | ![ShinaSystem FAM-300Z](https://www.zigbee2mqtt.io/images/devices/FAM-300Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Remote control permission (binary)
Indicate whether remote control is permitted or denied..
Value can be found in the published state on the `remote_control_permission` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `True` remote control permission is ON, if `False` OFF.

### Force smoke alarm (binary)
Forcibly activating/deactivating smoke alarms. This command is only available when Remote control permission is True..
Value can be found in the published state on the `force_smoke_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"force_smoke_alarm": NEW_VALUE}`.
If value equals `ON` force smoke alarm is ON, if `OFF` OFF.

### Smoke battery (numeric)
Remaining battery in % for smoke sensor, For reference, two batteries are used. One is for Smoke sensor, the other is for Zigbee..
Value can be found in the published state on the `smoke_battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

