---
title: "Bacchus Presence_Sensor_v2 control via MQTT"
description: "Integrate your Bacchus Presence_Sensor_v2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:56:31
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bacchus Presence_Sensor_v2

|     |     |
|-----|-----|
| Model | Presence_Sensor_v2  |
| Vendor  | [Bacchus](/supported-devices/#v=Bacchus)  |
| Description | Bacchus presence sensor with illuminance |
| Exposes | occupancy, illuminance, local_time, led_mode, illuminance_threshold, min_time, max_time, sensor, day_output, night_output |
| Picture | ![Bacchus Presence_Sensor_v2](https://www.zigbee2mqtt.io/images/devices/Presence_Sensor_v2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
[Original project description](https://github.com/Bacchus777/Presence-Sensor-v2/)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`


## Exposes

### Occupancy (binary, 1 endpoint)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_1": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `lx`.

### Local time (text)
Local time.
Value can be found in the published state on the `local_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_time": ""}`.
It's not possible to write (`/set`) this value.

### Led mode (enum, 3 endpoint)
Led working mode.
Value can be found in the published state on the `led_mode_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_mode_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_mode_3": NEW_VALUE}`.
The possible values are: `Always`, `Never`, `Night`.

### Illuminance threshold (numeric)
Illuminance threshold.
Value can be found in the published state on the `illuminance_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `50000`.
The unit of this value is `raw`.

### Min time (text)
Day start.
Value can be found in the published state on the `min_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_time": NEW_VALUE}`.

### Max time (text)
Day end.
Value can be found in the published state on the `max_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_time": NEW_VALUE}`.

### Sensor (binary, 1 endpoint)
Enable sensor.
Value can be found in the published state on the `sensor_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_1": NEW_VALUE}`.
If value equals `ON` sensor is ON, if `OFF` OFF.

### Day output (binary, 2 endpoint)
Day binding output.
Value can be found in the published state on the `day_output_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` day output is ON, if `OFF` OFF.

### Night output (binary, 3 endpoint)
Night binding output.
Value can be found in the published state on the `night_output_3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` night output is ON, if `OFF` OFF.

