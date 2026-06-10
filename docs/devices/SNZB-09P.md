---
title: "SONOFF SNZB-09P control via MQTT"
description: "Integrate your SONOFF SNZB-09P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-06-01T18:22:36
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-09P

|     |     |
|-----|-----|
| Model | SNZB-09P  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Siren |
| Exposes | siren_on, power_supply_mode, battery, alarm_sound_enable, alarm_light_enable, tamper, alarm_sound_type, alarm_volume_level, alarm_duration |
| Picture | ![SONOFF SNZB-09P](https://www.zigbee2mqtt.io/images/devices/SNZB-09P.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Siren on (binary)
using the configured sound, light, volume, and duration..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"siren_on": NEW_VALUE}`.
If value equals `ON` siren on is ON, if `OFF` OFF.

### Power supply mode (enum)
Current power source of the device..
Value can be found in the published state on the `power_supply_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_supply_mode": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `battery`, `external`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Alarm sound enable (binary)
Enable or disable the alarm sound..
Value can be found in the published state on the `alarm_sound_enable` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_sound_enable": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_sound_enable": NEW_VALUE}`.
If value equals `ON` alarm sound enable is ON, if `OFF` OFF.

### Alarm light enable (binary)
Enable or disable the alarm light..
Value can be found in the published state on the `alarm_light_enable` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_light_enable": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_light_enable": NEW_VALUE}`.
If value equals `ON` alarm light enable is ON, if `OFF` OFF.

### Tamper (binary)
Tamper-proof status.
Value can be found in the published state on the `tamper` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"tamper": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Alarm sound type (enum)
Select the alarm sound preset..
Value can be found in the published state on the `alarm_sound_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_sound_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_sound_type": NEW_VALUE}`.
The possible values are: `sound_0`, `sound_1`, `sound_2`, `sound_3`, `sound_4`, `sound_5`, `sound_6`, `sound_7`, `sound_8`, `sound_9`.

### Alarm volume level (enum)
Set the alarm sound volume level..
Value can be found in the published state on the `alarm_volume_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_volume_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_volume_level": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`, `highest`.

### Alarm duration (numeric)
Alarm duration in seconds..
Value can be found in the published state on the `alarm_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `900`.
The unit of this value is `s`.

