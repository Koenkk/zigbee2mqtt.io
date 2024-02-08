---
title: "JAVIS JS-MC-SENSOR-ZB control via MQTT"
description: "Integrate your JAVIS JS-MC-SENSOR-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-11-30T20:10:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# JAVIS JS-MC-SENSOR-ZB

|     |     |
|-----|-----|
| Model | JS-MC-SENSOR-ZB  |
| Vendor  | [JAVIS](/supported-devices/#v=JAVIS)  |
| Description | Microwave sensor |
| Exposes | occupancy, illuminance_lux, led_enable, keep_time, sensitivity, illuminance_calibration, linkquality |
| Picture | ![JAVIS JS-MC-SENSOR-ZB](https://www.zigbee2mqtt.io/images/devices/JS-MC-SENSOR-ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_lux_calibration`: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Illuminance (lux) (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance_lux` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Led enable (binary)
Enabled LED.
Value can be found in the published state on the `led_enable` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_enable": NEW_VALUE}`.
If value equals `true` led enable is ON, if `false` OFF.

### Keep time (enum)
PIR keep time 0:5s|1:30s|2:60s|3:180s|4:300s|5:600s|6:1200s|7:1800s.
Value can be found in the published state on the `keep_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"keep_time": NEW_VALUE}`.
The possible values are: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`.

### Sensitivity (enum)
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `25`, `50`, `75`, `100`.

### Illuminance calibration (numeric)
Illuminance calibration.
Value can be found in the published state on the `illuminance_calibration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_calibration": NEW_VALUE}`.
The minimal value is `-10000` and the maximum value is `10000`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

