---
title: "Lincukoo B08LRT-Z10T control via MQTT"
description: "Integrate your Lincukoo B08LRT-Z10T via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-03T18:55:24
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lincukoo B08LRT-Z10T

|     |     |
|-----|-----|
| Model | B08LRT-Z10T  |
| Vendor  | [Lincukoo](/supported-devices/#v=Lincukoo)  |
| Description | 5in1 Sensor Button Switch |
| Exposes | presence, illuminance, temperature, humidity, scene_switch, radar_switch, scan_environment, scan_result, set_detection_distance, hold_time, temp_unit, battery_state, action |
| Picture | ![Lincukoo B08LRT-Z10T](https://www.zigbee2mqtt.io/images/devices/B08LRT-Z10T.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

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

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Scene switch (enum)
Scene switch click.
Value can be found in the published state on the `scene_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene_switch": NEW_VALUE}`.
The possible values are: `single_click`, `double_click`, `long_press`.

### Radar switch (binary)
Radar switch.
Value can be found in the published state on the `radar_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_switch": NEW_VALUE}`.
If value equals `ON` radar switch is ON, if `OFF` OFF.

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

### Set detection distance (numeric)
Detection distance.
Value can be found in the published state on the `set_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_detection_distance": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `6`.
The unit of this value is `m`.

### Hold time (numeric)
Hold time.
Value can be found in the published state on the `hold_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"hold_time": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `60`.
The unit of this value is `s`.

### Temp unit (enum)
Temperature unit.
Value can be found in the published state on the `temp_unit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_unit": NEW_VALUE}`.
The possible values are: `c`, `f`.

### Battery state (enum)
Battery state.
Value can be found in the published state on the `battery_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `middle`, `high`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_click`, `double_click`, `long_press`.

