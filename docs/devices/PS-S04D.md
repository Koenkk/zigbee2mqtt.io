---
title: "Aqara PS-S04D control via MQTT"
description: "Integrate your Aqara PS-S04D via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-30T19:37:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara PS-S04D

|     |     |
|-----|-----|
| Model | PS-S04D  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Presence sensor FP300 |
| Exposes | power_outage_count, motion_sensitivity, battery, voltage, presence, pir_detection, presence_detection_options, ai_interference_source_selfidentification, ai_sensitivity_adaptive, absence_delay_timer, pir_detection_interval, illuminance, humidity, temperature, spatial_learning, restart_device, identify, temp_and_humidity_sampling, temp_and_humidity_sampling_period, temp_reporting_interval, temp_reporting_threshold, temp_reporting_mode, humidity_reporting_interval, humidity_reporting_threshold, humidity_report_mode, light_sampling, light_sampling_period, light_reporting_interval, light_reporting_threshold, light_report_mode, track_target_distance, target_distance, detection_range, detection_range_composite, led_disabled_night, schedule_start_time, schedule_end_time |
| Picture | ![Aqara PS-S04D](https://www.zigbee2mqtt.io/images/devices/PS-S04D.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`


## Exposes

### Power outage count (numeric)
Number of power outages (since last pairing).
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Motion sensitivity (enum)
Presence Detection Sensitivity..
Value can be found in the published state on the `motion_sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motion_sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"presence": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Pir detection (binary)
Indicates whether the PIR sensor detects motion (in mmWave + PIR mode after mmWave presence detection PIR sensors gets turned off so this attribute might change to false although the presence is detected)..
Value can be found in the published state on the `pir_detection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pir_detection": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` pir detection is ON, if `false` OFF.

### Presence detection options (enum)
Presence detection sensor type.
Value can be found in the published state on the `presence_detection_options` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"presence_detection_options": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_detection_options": NEW_VALUE}`.
The possible values are: `both`, `mmwave`, `pir`.

### Ai interference source selfidentification (binary)
AI interference source self-identification switch, when enabled can identify fans, air conditioners and other interference sources.
Value can be found in the published state on the `ai_interference_source_selfidentification` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ai_interference_source_selfidentification": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ai_interference_source_selfidentification": NEW_VALUE}`.
If value equals `ON` ai interference source selfidentification is ON, if `OFF` OFF.

### Ai sensitivity adaptive (binary)
Adaptive sensitivity switch function..
Value can be found in the published state on the `ai_sensitivity_adaptive` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"ai_sensitivity_adaptive": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ai_sensitivity_adaptive": NEW_VALUE}`.
If value equals `ON` ai sensitivity adaptive is ON, if `OFF` OFF.

### Absence delay timer (numeric)
Value for delay before the device reports absence when no presence is detected.
Value can be found in the published state on the `absence_delay_timer` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"absence_delay_timer": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"absence_delay_timer": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `300`.
The unit of this value is `sec`.

### Pir detection interval (numeric)
Higher detection frequency results in higher accuracy but lower battery life..
Value can be found in the published state on the `pir_detection_interval` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pir_detection_interval": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pir_detection_interval": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `300`.
The unit of this value is `sec`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `lx`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Spatial learning (enum)
Initiate AI Spatial Learning..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"spatial_learning": NEW_VALUE}`.
The possible values are: `Start Learning`.

### Restart device (enum)
Restarts the device..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"restart_device": NEW_VALUE}`.
The possible values are: `Restart Device`.

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Temp and humidity sampling (enum)
Sampling time frequency, increasing affects battery life. Setting to custom allows specifying period, interval & threshold..
Value can be found in the published state on the `temp_and_humidity_sampling` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temp_and_humidity_sampling": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_and_humidity_sampling": NEW_VALUE}`.
The possible values are: `off`, `low`, `medium`, `high`, `custom`.

### Temp and humidity sampling period (numeric)
How often temp & humidity readings are taken on the device when in custom mode..
Value can be found in the published state on the `temp_and_humidity_sampling_period` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temp_and_humidity_sampling_period": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_and_humidity_sampling_period": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `3600`.
The unit of this value is `sec`.

### Temp reporting interval (numeric)
Custom time interval for temperature data reporting..
Value can be found in the published state on the `temp_reporting_interval` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temp_reporting_interval": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_reporting_interval": NEW_VALUE}`.
The minimal value is `600` and the maximum value is `3600`.
The unit of this value is `sec`.

### Temp reporting threshold (numeric)
Reporting will trigger as temperature change reaches this value when in custom mode..
Value can be found in the published state on the `temp_reporting_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temp_reporting_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_reporting_threshold": NEW_VALUE}`.
The minimal value is `0.2` and the maximum value is `3`.
The unit of this value is `°C`.

### Temp reporting mode (enum)
Temperature reporting type when in custom mode..
Value can be found in the published state on the `temp_reporting_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temp_reporting_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temp_reporting_mode": NEW_VALUE}`.
The possible values are: `threshold`, `reporting interval`, `threshold and interval`.

### Humidity reporting interval (numeric)
Custom time interval for humidity data reporting..
Value can be found in the published state on the `humidity_reporting_interval` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_reporting_interval": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_reporting_interval": NEW_VALUE}`.
The minimal value is `600` and the maximum value is `3600`.
The unit of this value is `sec`.

### Humidity reporting threshold (numeric)
Reporting will trigger as humidity change reaches this value when in custom mode..
Value can be found in the published state on the `humidity_reporting_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_reporting_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_reporting_threshold": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `10`.
The unit of this value is `%`.

### Humidity report mode (enum)
Humidity reporting type when in custom mode..
Value can be found in the published state on the `humidity_report_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity_report_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"humidity_report_mode": NEW_VALUE}`.
The possible values are: `threshold`, `reporting interval`, `threshold and interval`.

### Light sampling (enum)
Sampling time frequency, increasing affects battery life. Setting to custom allows specifying period, interval & threshold..
Value can be found in the published state on the `light_sampling` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_sampling": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_sampling": NEW_VALUE}`.
The possible values are: `off`, `low`, `medium`, `high`, `custom`.

### Light sampling period (numeric)
How often illumination readings are taken on the device when in custom mode..
Value can be found in the published state on the `light_sampling_period` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_sampling_period": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_sampling_period": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `3600`.
The unit of this value is `sec`.

### Light reporting interval (numeric)
Custom interval for illumination data reporting..
Value can be found in the published state on the `light_reporting_interval` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_reporting_interval": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_reporting_interval": NEW_VALUE}`.
The minimal value is `20` and the maximum value is `3600`.
The unit of this value is `sec`.

### Light reporting threshold (numeric)
Reporting will trigger as illumination percentage change reaches this value when in custom mode..
Value can be found in the published state on the `light_reporting_threshold` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_reporting_threshold": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_reporting_threshold": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `20`.
The unit of this value is `%`.

### Light report mode (enum)
illumination reporting type when in custom mode..
Value can be found in the published state on the `light_report_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"light_report_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_report_mode": NEW_VALUE}`.
The possible values are: `threshold`, `reporting interval`, `threshold and interval`.

### Track target distance (enum)
Initiate current target distance tracking..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"track_target_distance": NEW_VALUE}`.
The possible values are: `start_tracking_distance`.

### Target distance (numeric)
Distance to the detected target.
Value can be found in the published state on the `target_distance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"target_distance": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `m`.

### Detection range (numeric)
Specifies the range that is being detected. Requires mmWave radar mode. Press the on-device button to wake the device up and refresh its' settings..
Value can be found in the published state on the `detection_range` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"detection_range": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_range": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `16777215`.

### Detection range composite (composite)
Specifies the detection range using set of boolean settings..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_range_composite": {"detection_range_0": VALUE, "detection_range_1": VALUE, "detection_range_2": VALUE, "detection_range_3": VALUE, "detection_range_4": VALUE, "detection_range_5": VALUE, "detection_range_6": VALUE, "detection_range_7": VALUE, "detection_range_8": VALUE, "detection_range_9": VALUE, "detection_range_10": VALUE, "detection_range_11": VALUE, "detection_range_12": VALUE, "detection_range_13": VALUE, "detection_range_14": VALUE, "detection_range_15": VALUE, "detection_range_16": VALUE, "detection_range_17": VALUE, "detection_range_18": VALUE, "detection_range_19": VALUE, "detection_range_20": VALUE, "detection_range_21": VALUE, "detection_range_22": VALUE, "detection_range_23": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"detection_range_composite": ""}`.
- `detection_range_0` (binary): 0.00m - 0.25m allowed values: `true` or `false`
- `detection_range_1` (binary): 0.25m - 0.50m allowed values: `true` or `false`
- `detection_range_2` (binary): 0.50m - 0.75m allowed values: `true` or `false`
- `detection_range_3` (binary): 0.75m - 1.00m allowed values: `true` or `false`
- `detection_range_4` (binary): 1.00m - 1.25m allowed values: `true` or `false`
- `detection_range_5` (binary): 1.25m - 1.50m allowed values: `true` or `false`
- `detection_range_6` (binary): 1.50m - 1.75m allowed values: `true` or `false`
- `detection_range_7` (binary): 1.75m - 2.00m allowed values: `true` or `false`
- `detection_range_8` (binary): 2.00m - 2.25m allowed values: `true` or `false`
- `detection_range_9` (binary): 2.25m - 2.50m allowed values: `true` or `false`
- `detection_range_10` (binary): 2.50m - 2.75m allowed values: `true` or `false`
- `detection_range_11` (binary): 2.75m - 3.00m allowed values: `true` or `false`
- `detection_range_12` (binary): 3.00m - 3.25m allowed values: `true` or `false`
- `detection_range_13` (binary): 3.25m - 3.50m allowed values: `true` or `false`
- `detection_range_14` (binary): 3.50m - 3.75m allowed values: `true` or `false`
- `detection_range_15` (binary): 3.75m - 4.00m allowed values: `true` or `false`
- `detection_range_16` (binary): 4.00m - 4.25m allowed values: `true` or `false`
- `detection_range_17` (binary): 4.25m - 4.50m allowed values: `true` or `false`
- `detection_range_18` (binary): 4.50m - 4.75m allowed values: `true` or `false`
- `detection_range_19` (binary): 4.75m - 5.00m allowed values: `true` or `false`
- `detection_range_20` (binary): 5.00m - 5.25m allowed values: `true` or `false`
- `detection_range_21` (binary): 5.25m - 5.50m allowed values: `true` or `false`
- `detection_range_22` (binary): 5.50m - 5.75m allowed values: `true` or `false`
- `detection_range_23` (binary): 5.75m - 6.00m allowed values: `true` or `false`

### Led disabled night (binary)
Enables/disables LED indicator at night.
Value can be found in the published state on the `led_disabled_night` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"led_disabled_night": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_disabled_night": NEW_VALUE}`.
If value equals `true` led disabled night is ON, if `false` OFF.

### Schedule start time (text)
LED disable schedule start time (HH:MM format).
Value can be found in the published state on the `schedule_start_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule_start_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_start_time": NEW_VALUE}`.

### Schedule end time (text)
LED disable schedule end time (HH:MM format).
Value can be found in the published state on the `schedule_end_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule_end_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_end_time": NEW_VALUE}`.

