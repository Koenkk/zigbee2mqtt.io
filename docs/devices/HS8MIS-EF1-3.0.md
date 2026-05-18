---
title: "Heiman HS8MIS-EF1-3.0 control via MQTT"
description: "Integrate your Heiman HS8MIS-EF1-3.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-02-28T20:18:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Heiman HS8MIS-EF1-3.0

|     |     |
|-----|-----|
| Model | HS8MIS-EF1-3.0  |
| Vendor  | [Heiman](/supported-devices/#v=Heiman)  |
| Description | PIR sensor |
| Exposes | occupancy, enable_indicator, ambient_light, radar_delay_time, sensitivity |
| Picture | ![Heiman HS8MIS-EF1-3.0](https://www.zigbee2mqtt.io/images/devices/HS8MIS-EF1-3.0.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be sent after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of numbers.


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Enable indicator (binary)
active green indicator.
Value can be found in the published state on the `enable_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_indicator": NEW_VALUE}`.
If value equals `true` enable indicator is ON, if `false` OFF.

### Ambient light (numeric)
ambient illuminance in lux.
Value can be found in the published state on the `ambient_light` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ambient_light": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `Lx`.

### Radar delay time (numeric)
Occupied to unoccupied delay.
Value can be found in the published state on the `radar_delay_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"radar_delay_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_delay_time": NEW_VALUE}`.
The minimal value is `60` and the maximum value is `3600`.

### Sensitivity (enum)
sensitivity for PIR sensor.
Value can be found in the published state on the `sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `high`, `medium`, `low`.

