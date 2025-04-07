---
title: "Sunricher SR-ZG9030F-PS control via MQTT"
description: "Integrate your Sunricher SR-ZG9030F-PS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-01T20:02:57
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9030F-PS

|     |     |
|-----|-----|
| Model | SR-ZG9030F-PS  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Smart human presence sensor |
| Exposes | illuminance, occupancy, indicator_light, detection_area, illuminance_threshold, action |
| Picture | ![Sunricher SR-ZG9030F-PS](https://www.zigbee2mqtt.io/images/devices/SR-ZG9030F-PS.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].


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

### Indicator light (enum)
Enable/disable the LED indicator.
Value can be found in the published state on the `indicator_light` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"indicator_light": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_light": NEW_VALUE}`.
The possible values are: `on`, `off`.

### Detection area (numeric)
Detection area range (default: 50%).
Value can be found in the published state on the `detection_area` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"detection_area": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_area": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Illuminance threshold (numeric)
Illuminance threshold for triggering (default: 100).
Value can be found in the published state on the `illuminance_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_threshold": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `100`.
The unit of this value is `lx`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `toggle`.

