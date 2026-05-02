---
title: "SONOFF SNZB-06P24 control via MQTT"
description: "Integrate your SONOFF SNZB-06P24 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-04-30T19:57:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-06P24

|     |     |
|-----|-----|
| Model | SNZB-06P24  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee occupancy sensor with illuminance |
| Exposes | illuminance, occupancy, pir_o_to_u_delay, enable_occupancy_zone_1, enable_occupancy_zone_2, enable_occupancy_zone_3, enable_occupancy_zone_4, enable_occupancy_zone_5, enable_occupancy_zone_6, enable_occupancy_zone_7, illuminance_calibration, radar_sensitivity, spatial_learning, spatial_learning_state |
| Picture | ![SONOFF SNZB-06P24](https://www.zigbee2mqtt.io/images/devices/SNZB-06P24.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be sent after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of numbers.


## Exposes

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `lx`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Occupancy timeout (numeric)
Occupied to unoccupied delay.
Value can be found in the published state on the `pir_o_to_u_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pir_o_to_u_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pir_o_to_u_delay": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `65535`.
The unit of this value is `s`.

### Zone 1 (0m-1m) (binary)
Value can be found in the published state on the `enable_occupancy_zone_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_occupancy_zone_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_occupancy_zone_1": NEW_VALUE}`.
If value equals `true` zone 1 (0m-1m) is ON, if `false` OFF.

### Zone 2 (1m-1.5m) (binary)
Value can be found in the published state on the `enable_occupancy_zone_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_occupancy_zone_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_occupancy_zone_2": NEW_VALUE}`.
If value equals `true` zone 2 (1m-1.5m) is ON, if `false` OFF.

### Zone 3 (1.5m-2m) (binary)
Value can be found in the published state on the `enable_occupancy_zone_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_occupancy_zone_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_occupancy_zone_3": NEW_VALUE}`.
If value equals `true` zone 3 (1.5m-2m) is ON, if `false` OFF.

### Zone 4 (2m-2.5m) (binary)
Value can be found in the published state on the `enable_occupancy_zone_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_occupancy_zone_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_occupancy_zone_4": NEW_VALUE}`.
If value equals `true` zone 4 (2m-2.5m) is ON, if `false` OFF.

### Zone 5 (2.5m-3m) (binary)
Value can be found in the published state on the `enable_occupancy_zone_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_occupancy_zone_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_occupancy_zone_5": NEW_VALUE}`.
If value equals `true` zone 5 (2.5m-3m) is ON, if `false` OFF.

### Zone 6 (3m-3.5m) (binary)
Value can be found in the published state on the `enable_occupancy_zone_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_occupancy_zone_6": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_occupancy_zone_6": NEW_VALUE}`.
If value equals `true` zone 6 (3m-3.5m) is ON, if `false` OFF.

### Zone 7 (3.5m-4m) (binary)
Value can be found in the published state on the `enable_occupancy_zone_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_occupancy_zone_7": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_occupancy_zone_7": NEW_VALUE}`.
If value equals `true` zone 7 (3.5m-4m) is ON, if `false` OFF.

### Illuminance calibration (numeric)
Illuminance compensation offset.
Value can be found in the published state on the `illuminance_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_calibration": NEW_VALUE}`.
The minimal value is `-1000` and the maximum value is `1000`.
The unit of this value is `lx`.

### Fine-tune Sensitivity (numeric)
Radar sensitivity level.
Value can be found in the published state on the `radar_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"radar_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_sensitivity": NEW_VALUE}`.
The minimal value is `-6` and the maximum value is `6`.

### Spatial learning (enum)
Start space learning calibration.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"spatial_learning": NEW_VALUE}`.
The possible values are: `start_learning`.

### Spatial learning state (enum)
Current state of space learning.
Value can be found in the published state on the `spatial_learning_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `Clear`, `Learning`, `Failed`.

