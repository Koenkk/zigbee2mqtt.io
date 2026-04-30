---
title: "Heiman HS1SA-E Lover control via MQTT"
description: "Integrate your Heiman HS1SA-E Lover via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-04-30T19:57:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS1SA-E Lover

|     |     |
|-----|-----|
| Model | HS1SA-E Lover  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Smoke detector |
| Exposes | battery, identify, smoke, battery_low, test, trouble, trigger_selftest, temporary_mute, siren_for_automation_only, reported_packages, rejoin_count, reboot_count |
| Picture | ![Heiman HS1SA-E Lover](https://www.zigbee2mqtt.io/images/devices/HS1SA-E-Lover.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Test (binary)
Indicates whether the device is currently performing a test.
Value can be found in the published state on the `test` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` test is ON, if `false` OFF.

### Trouble (binary)
Indicates whether the device is currently having trouble.
Value can be found in the published state on the `trouble` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` trouble is ON, if `false` OFF.

### Trigger selftest (enum)
Trigger smoke alarm self-check test..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"trigger_selftest": NEW_VALUE}`.
The possible values are: `test`.

### Temporary mute (enum)
temporarily mute smoke alarm but please ensure there is no real fire..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temporary_mute": NEW_VALUE}`.
The possible values are: `mute`.

### Siren for automation only (enum)
siren effect.
Value can be found in the published state on the `siren_for_automation_only` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"siren_for_automation_only": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"siren_for_automation_only": NEW_VALUE}`.
The possible values are: `stop`, `smoke_siren`.

### Reported packages (numeric)
for diagnostic purpose, how many zigbee packages has the reported in a day..
Value can be found in the published state on the `reported_packages` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"reported_packages": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `60000`.

### Rejoin count (numeric)
for diagnostic purpose, how many times has the product rejoined to zigbee network..
Value can be found in the published state on the `rejoin_count` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"rejoin_count": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `60000`.

### Reboot count (numeric)
for diagnostic purpose, how many times has the product rebooted..
Value can be found in the published state on the `reboot_count` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"reboot_count": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `60000`.

