---
title: "ShinaSystem CSM-300ZB control via MQTT"
description: "Integrate your ShinaSystem CSM-300ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ShinaSystem CSM-300ZB

|     |     |
|-----|-----|
| Model | CSM-300ZB  |
| Vendor  | [ShinaSystem](/supported-devices/#v=ShinaSystem)  |
| Description | SiHAS multipurpose sensor |
| Exposes | battery, voltage, status, people, linkquality |
| Picture | ![ShinaSystem CSM-300ZB](https://www.zigbee2mqtt.io/images/devices/CSM-300ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Status (enum)
Currently status.
Value can be found in the published state on the `status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `idle`, `in`, `out`.

### People (numeric)
People count.
Value can be found in the published state on the `people` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"people": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"people": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `50`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

