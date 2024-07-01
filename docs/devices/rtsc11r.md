---
title: "Tuya rtsc11r control via MQTT"
description: "Integrate your Tuya rtsc11r via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-09-28T10:54:36
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya rtsc11r

|     |     |
|-----|-----|
| Model | rtsc11r  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 5.8G human presence sensor with relay |
| Exposes | presence, illuminance, detection_delay, detection_distance, sensitivity, keep_time, minimum_range, maximum_range, linkquality |
| Picture | ![Tuya rtsc11r](https://www.zigbee2mqtt.io/images/devices/rtsc11r.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Illuminance (numeric)
Raw measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Detection delay (numeric)
Detection delay.
Value can be found in the published state on the `detection_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `s`.

### Detection distance (numeric)
Distance of detected person.
Value can be found in the published state on the `detection_distance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `cm`.

### Sensitivity (numeric)
Detection sensitivity.
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Keep time (numeric)
Detection keep time.
Value can be found in the published state on the `keep_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"keep_time": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `3600`.
The unit of this value is `s`.

### Minimum range (numeric)
Minimum detection range.
Value can be found in the published state on the `minimum_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"minimum_range": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `m`.

### Maximum range (numeric)
Maximum detection range.
Value can be found in the published state on the `maximum_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"maximum_range": NEW_VALUE}`.
The minimal value is `50` and the maximum value is `1000`.
The unit of this value is `m`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

