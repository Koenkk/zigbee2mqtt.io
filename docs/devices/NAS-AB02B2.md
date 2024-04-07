---
title: "Neo NAS-AB02B2 control via MQTT"
description: "Integrate your Neo NAS-AB02B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-01-31T17:42:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Neo NAS-AB02B2

|     |     |
|-----|-----|
| Model | NAS-AB02B2  |
| Vendor  | [Neo](/supported-devices/#v=Neo)  |
| Description | Alarm |
| Exposes | battery_low, alarm, melody, duration, volume, battpercentage, linkquality |
| Picture | ![Neo NAS-AB02B2](https://www.zigbee2mqtt.io/images/devices/NAS-AB02B2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Alarm (binary)
Value can be found in the published state on the `alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `true` alarm is ON, if `false` OFF.

### Melody (enum)
Value can be found in the published state on the `melody` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"melody": NEW_VALUE}`.
The possible values are: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`.

### Duration (numeric)
Value can be found in the published state on the `duration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1800`.
The unit of this value is `s`.

### Volume (enum)
Value can be found in the published state on the `volume` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"volume": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Battpercentage (numeric)
Value can be found in the published state on the `battpercentage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

