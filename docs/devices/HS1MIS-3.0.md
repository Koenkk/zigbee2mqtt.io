---
title: "Heiman HS1MIS-3.0 control via MQTT"
description: "Integrate your Heiman HS1MIS-3.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-01T18:54:40
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS1MIS-3.0

|     |     |
|-----|-----|
| Model | HS1MIS-3.0  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | Smart occupancy sensor |
| Exposes | occupancy, battery, ambient_light |
| Picture | ![Heiman HS1MIS-3.0](https://www.zigbee2mqtt.io/images/devices/HS1MIS-3.0.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be sent after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of numbers.


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Ambient light (numeric)
ambient illuminance in lux.
Value can be found in the published state on the `ambient_light` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ambient_light": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `Lx`.

