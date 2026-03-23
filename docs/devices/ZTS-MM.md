---
title: "Nova Digital ZTS-MM control via MQTT"
description: "Integrate your Nova Digital ZTS-MM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nova Digital ZTS-MM

|     |     |
|-----|-----|
| Model | ZTS-MM  |
| Vendor  | [Nova Digital](/supported-devices/#v=Nova%20Digital)  |
| Description | mmWave radar 5.8GHz |
| Exposes | illuminance, occupancy, presence_timeout, move_sensitivity, move_minimum_range, move_maximum_range, breath_sensitivity, breath_minimum_range, breath_maximum_range |
| Picture | ![Nova Digital ZTS-MM](https://www.zigbee2mqtt.io/images/devices/ZTS-MM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Presence timeout (numeric)
Presence timeout.
Value can be found in the published state on the `presence_timeout` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `180`.
The unit of this value is `s`.

### Move sensitivity (numeric)
sensitivity of the radar.
Value can be found in the published state on the `move_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"move_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `X`.

### Move minimum range (numeric)
Movement minimum range.
Value can be found in the published state on the `move_minimum_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"move_minimum_range": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `cm`.

### Move maximum range (numeric)
Movement maximum range.
Value can be found in the published state on the `move_maximum_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"move_maximum_range": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `cm`.

### Breath sensitivity (numeric)
Breath sensitivity of the radar.
Value can be found in the published state on the `breath_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breath_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `X`.

### Breath minimum range (numeric)
Breath minimum range.
Value can be found in the published state on the `breath_minimum_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breath_minimum_range": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `cm`.

### Breath maximum range (numeric)
Breath maximum range.
Value can be found in the published state on the `breath_maximum_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breath_maximum_range": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `cm`.

