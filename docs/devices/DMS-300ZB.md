---
title: "ShinaSystem DMS-300ZB control via MQTT"
description: "Integrate your ShinaSystem DMS-300ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ShinaSystem DMS-300ZB

|     |     |
|-----|-----|
| Model | DMS-300ZB  |
| Vendor  | [ShinaSystem](/supported-devices/#v=ShinaSystem)  |
| Description | SiHAS dual motion sensor |
| Exposes | battery, voltage, occupancy_in, occupancy_out, occupancy_or, occupancy_and, occupancy_timeout, linkquality |
| Picture | ![ShinaSystem DMS-300ZB](https://www.zigbee2mqtt.io/images/devices/DMS-300ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].


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

### Occupancy in (binary)
Indicates whether "IN" Sensor of the device detected occupancy.
Value can be found in the published state on the `occupancy_in` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy in is ON, if `false` OFF.

### Occupancy out (binary)
Indicates whether "OUT" Sensor of the device detected occupancy.
Value can be found in the published state on the `occupancy_out` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy out is ON, if `false` OFF.

### Occupancy or (binary)
Indicates whether "IN or OUT" Sensor of the device detected occupancy.
Value can be found in the published state on the `occupancy_or` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy or is ON, if `false` OFF.

### Occupancy and (binary)
Indicates whether "IN and OUT" Sensor of the device detected occupancy.
Value can be found in the published state on the `occupancy_and` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy and is ON, if `false` OFF.

### Occupancy timeout (numeric)
Value can be found in the published state on the `occupancy_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `3600`.
The unit of this value is `s`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

