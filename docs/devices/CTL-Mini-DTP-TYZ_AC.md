---
title: "CTL CTL-Mini-DTP-TYZ/AC control via MQTT"
description: "Integrate your CTL CTL-Mini-DTP-TYZ/AC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:29:03.042Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# CTL CTL-Mini-DTP-TYZ/AC

|     |     |
|-----|-----|
| Model | CTL-Mini-DTP-TYZ/AC  |
| Vendor  | [CTL](/supported-devices/#v=CTL)  |
| Description | Radar and PIR dual-technology presence sensor |
| Exposes | presence, illuminance, illuminance_threshold_high, illuminance_threshold_low, presence_timeout, light_switch, light_linkage, illuminance_linkage, breathing_indicator, detection_method, sensitivity, program_function, installation_mode, installation_height, detection_radius, detection_range, environment_learning, manual_annotation, sensor_power, system_setting, system_info |
| Picture | ![CTL CTL-Mini-DTP-TYZ/AC](https://www.zigbee2mqtt.io/images/devices/CTL-Mini-DTP-TYZ-AC.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Presence (binary)
Presence detected by the radar/PIR sensor.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Illuminance high threshold (numeric)
Turn the linked light off above this illuminance.
Value can be found in the published state on the `illuminance_threshold_high` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_threshold_high": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `lx`.

### Illuminance low threshold (numeric)
Allow presence to turn the linked light on below this illuminance.
Value can be found in the published state on the `illuminance_threshold_low` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_threshold_low": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `lx`.

### No-presence delay (numeric)
Delay before reporting no presence.
Value can be found in the published state on the `presence_timeout` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_timeout": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `3600`.
The unit of this value is `s`.

### Light state (binary)
Light output state.
Value can be found in the published state on the `light_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_switch": NEW_VALUE}`.
If value equals `ON` light state is ON, if `OFF` OFF.

### Light linkage (binary)
Enable automatic light linkage.
Value can be found in the published state on the `light_linkage` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_linkage": NEW_VALUE}`.
If value equals `ON` light linkage is ON, if `OFF` OFF.

### Illuminance linkage (binary)
Apply the illuminance thresholds to light linkage.
Value can be found in the published state on the `illuminance_linkage` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_linkage": NEW_VALUE}`.
If value equals `ON` illuminance linkage is ON, if `OFF` OFF.

### Presence breathing indicator (binary)
Enable the breathing indicator while presence is detected.
Value can be found in the published state on the `breathing_indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breathing_indicator": NEW_VALUE}`.
If value equals `ON` presence breathing indicator is ON, if `OFF` OFF.

### Detection method (enum)
Motion-only or continuous presence detection.
Value can be found in the published state on the `detection_method` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_method": NEW_VALUE}`.
The possible values are: `presence`, `motion`.

### Sensitivity (enum)
LL: very low, L: low, M: medium, H: high, HH: very high.
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `LL`, `L`, `M`, `H`, `HH`.

### Available program function (enum)
Current timed presence/no-presence condition available to Tuya programs.
Value can be found in the published state on the `program_function` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `null`, `no_one_1min`, `no_one_3min`, `no_one_5min`, `no_one_10min`, `no_one_15min`, `no_one_30min`, `no_one_1hour`, `no_one_2hour`, `no_one_4hour`, `no_one_8hour`, `no_one_12hour`, `no_one_24hour`, `presence_1min`, `presence_3min`, `presence_5min`, `presence_10min`, `presence_15min`, `presence_30min`, `presence_1hour`, `presence_2hour`, `presence_4hour`, `presence_8hour`, `presence_12hour`, `presence_24hour`.

### Installation mode (enum)
Value can be found in the published state on the `installation_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"installation_mode": NEW_VALUE}`.
The possible values are: `ceiling`, `wall`.

### Installation height (numeric)
Value can be found in the published state on the `installation_height` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"installation_height": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `3.2`.
The unit of this value is `m`.

### Ceiling detection radius (numeric)
Value can be found in the published state on the `detection_radius` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_radius": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `5`.
The unit of this value is `m`.

### Wall detection distance (numeric)
Value can be found in the published state on the `detection_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_range": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `8`.
The unit of this value is `m`.

### Environment learning (enum)
Value can be found in the published state on the `environment_learning` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"environment_learning": NEW_VALUE}`.
The possible values are: `none`, `light`, `medium`, `deep`, `disable`.

### Manual annotation (enum)
Mark how long the monitored area has been unoccupied.
Value can be found in the published state on the `manual_annotation` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_annotation": NEW_VALUE}`.
The possible values are: `null`, `no_one_last_1h`, `no_one_last_2h`, `no_one_last_4h`, `no_one_last_8h`, `no_one_last_12h`, `no_one_last_24h`.

### Sensor power control (enum)
Power-cycle the sensor or pause its reports.
Value can be found in the published state on the `sensor_power` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_power": NEW_VALUE}`.
The possible values are: `on`, `off`, `off_10s_restart`, `off_30s_restart`, `off_60s_restart`, `pause_upload`, `pause_upload_10s`, `pause_upload_30s`, `pause_upload_60s`, `pause_upload_3min`, `pause_upload_5min`, `pause_upload_10min`, `pause_upload_15min`, `pause_upload_30min`, `pause_upload_1hour`.

### System setting (enum)
Warning: restore_factory resets the device to factory settings.
Value can be found in the published state on the `system_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_setting": NEW_VALUE}`.
The possible values are: `none`, `identify_start`, `identify_stop`, `check_start`, `check_stop`, `restore_factory`, `state_flip_report`.

### System information (text)
Value can be found in the published state on the `system_info` property.
It's not possible to read (`/get`) or write (`/set`) this value.

