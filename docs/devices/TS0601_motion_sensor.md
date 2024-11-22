---
title: "Tuya TS0601_motion_sensor control via MQTT"
description: "Integrate your Tuya TS0601_motion_sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_motion_sensor

|     |     |
|-----|-----|
| Model | TS0601_motion_sensor  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Human presence sensor AIR |
| Exposes | occupancy, o_sensitivity, v_sensitivity, led_status, vacancy_delay, light_on_luminance_prefer, light_off_luminance_prefer, mode, luminance_level, reference_luminance, vacant_confirm_time, linkquality |
| Picture | ![Tuya TS0601_motion_sensor](https://www.zigbee2mqtt.io/images/devices/TS0601_motion_sensor.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### O sensitivity (enum)
O-Sensitivity mode.
Value can be found in the published state on the `o_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"o_sensitivity": NEW_VALUE}`.
The possible values are: `sensitive`, `normal`, `cautious`.

### V sensitivity (enum)
V-Sensitivity mode.
Value can be found in the published state on the `v_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"v_sensitivity": NEW_VALUE}`.
The possible values are: `speed_priority`, `normal_priority`, `accuracy_priority`.

### Led status (enum)
Led status switch.
Value can be found in the published state on the `led_status` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_status": NEW_VALUE}`.
The possible values are: `ON`, `OFF`.

### Vacancy delay (numeric)
Vacancy delay.
Value can be found in the published state on the `vacancy_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"vacancy_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `sec`.

### Light on luminance prefer (numeric)
Light-On luminance prefer.
Value can be found in the published state on the `light_on_luminance_prefer` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_on_luminance_prefer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.

### Light off luminance prefer (numeric)
Light-Off luminance prefer.
Value can be found in the published state on the `light_off_luminance_prefer` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_off_luminance_prefer": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.

### Mode (enum)
Working mode.
Value can be found in the published state on the `mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `general_model`, `temporaty_stay`, `basic_detection`, `sensor_test`.

### Luminance level (numeric)
Luminance level.
Value can be found in the published state on the `luminance_level` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Reference luminance (numeric)
Reference luminance.
Value can be found in the published state on the `reference_luminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Vacant confirm time (numeric)
Vacant confirm time.
Value can be found in the published state on the `vacant_confirm_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

