---
title: "Lincukoo R12LM-Z20T control via MQTT"
description: "Integrate your Lincukoo R12LM-Z20T via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-03T18:55:24
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lincukoo R12LM-Z20T

|     |     |
|-----|-----|
| Model | R12LM-Z20T  |
| Vendor  | [Lincukoo](/supported-devices/#v=Lincukoo)  |
| Description | Human Motion & Presence Sensor |
| Exposes | scan_environment, scan_result, mode, presence, illuminance, radar_switch, set_detection_distance, fading_time, battery_state, switch_night_light |
| Picture | ![Lincukoo R12LM-Z20T](https://www.zigbee2mqtt.io/images/devices/R12LM-Z20T.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Scan environment (enum)
Set no one environment.
Value can be found in the published state on the `scan_environment` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scan_environment": NEW_VALUE}`.
The possible values are: `start`.

### Scan result (enum)
Environment scan result.
Value can be found in the published state on the `scan_result` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `scanning`, `scan_success`, `scan_failure`, `scan_start`.

### Mode (enum)
Device mode.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `radar_mode`, `fusion_mode`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Radar switch (binary)
Radar switch.
Value can be found in the published state on the `radar_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_switch": NEW_VALUE}`.
If value equals `ON` radar switch is ON, if `OFF` OFF.

### Set detection distance (numeric)
Detection distance.
Value can be found in the published state on the `set_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_detection_distance": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `9`.
The unit of this value is `m`.

### Fading time (numeric)
Fading time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `60`.
The unit of this value is `s`.

### Battery state (enum)
Battery status.
Value can be found in the published state on the `battery_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `middle`, `high`, `USB`.

### Switch night light (binary)
Night light switch.
Value can be found in the published state on the `switch_night_light` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_night_light": NEW_VALUE}`.
If value equals `ON` switch night light is ON, if `OFF` OFF.

