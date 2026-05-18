---
title: "eWeLink NAS-AB03B3 control via MQTT"
description: "Integrate your eWeLink NAS-AB03B3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# eWeLink NAS-AB03B3

|     |     |
|-----|-----|
| Model | NAS-AB03B3  |
| Vendor  | [eWeLink](/supported-devices/#v=eWeLink)  |
| Description | Indoor sound and light alarm |
| Exposes | alarm, battery_low, battery, alarm_duration, volume, melody |
| Picture | ![eWeLink NAS-AB03B3](https://www.zigbee2mqtt.io/images/devices/NAS-AB03B3.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Alarm (binary)
Turn the siren alarm on or off.
Value can be found in the published state on the `alarm` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `true` alarm is ON, if `false` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Alarm duration (numeric)
Duration in seconds of the alarm.
Value can be found in the published state on the `alarm_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `1800`.
The unit of this value is `s`.

### Volume (numeric)
Indoor siren volume level.
Value can be found in the published state on the `volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"volume": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"volume": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `15`.

### Melody (enum)
Alarm melody.
Value can be found in the published state on the `melody` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"melody": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"melody": NEW_VALUE}`.
The possible values are: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`.

