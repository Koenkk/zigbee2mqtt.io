---
title: "Ekaza TS0225_EKAZA control via MQTT"
description: "Integrate your Ekaza TS0225_EKAZA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:29:02.794Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Ekaza TS0225_EKAZA

|     |     |
|-----|-----|
| Model | TS0225_EKAZA  |
| Vendor  | [Ekaza](/supported-devices/#v=Ekaza)  |
| Description | 24 GHz presence sensor |
| Exposes | illuminance, presence_delay, occupancy, detection_distance |
| Picture | ![Ekaza TS0225_EKAZA](https://www.zigbee2mqtt.io/images/devices/TS0225_EKAZA.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Illuminance (numeric)
Raw illuminance reported by the sensor.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Presence delay (numeric)
Delay before reporting absence after presence is no longer detected.
Value can be found in the published state on the `presence_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_delay": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `300`.
The unit of this value is `s`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Detection distance (numeric)
Maximum detection distance.
Value can be found in the published state on the `detection_distance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"detection_distance": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_distance": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `6`.
The unit of this value is `m`.

