---
title: "Essentials _TZE200_i48qyn9s control via MQTT"
description: "Integrate your Essentials _TZE200_i48qyn9s via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-03T20:11:48
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Essentials _TZE200_i48qyn9s

|     |     |
|-----|-----|
| Model | _TZE200_i48qyn9s  |
| Vendor  | [Essentials](/supported-devices/#v=Essentials)  |
| Description | Thermostat Zigbee smart home |
| Exposes | battery, battery_low, child_lock, climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode), comfort_temperature, eco_temperature, open_window_temperature, window_open, detect_window_time_minute, away_setting, linkquality |
| Picture | ![Essentials _TZE200_i48qyn9s](https://www.zigbee2mqtt.io/images/devices/_TZE200_i48qyn9s.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `local_temperature_calibration`, `system_mode`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `0.5` and `29.5`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode auto: schedule active. Mode heat: manual temperature setting. Mode off: "away" setting active. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `auto`, `heat`, `off`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-12.5` and the maximum value is `5.5` with a step size of `0.1`.

### Comfort temperature (numeric)
Comfort temperature.
Value can be found in the published state on the `comfort_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.
The unit of this value is `°C`.

### Eco temperature (numeric)
Eco temperature.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `35`.
The unit of this value is `°C`.

### Open window temperature (numeric)
open winow detection temperature.
Value can be found in the published state on the `open_window_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `35`.
The unit of this value is `°C`.

### Window open (binary)
Open window detected.
Value can be found in the published state on the `window_open` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `YES` window open is ON, if `NO` OFF.

### Detect window time minute (numeric)
Open window time in minutes.
Value can be found in the published state on the `detect_window_time_minute` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detect_window_time_minute": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `min`.

### Away setting (composite)
- `away_preset_days` (numeric): Away preset days max value is 100
- `away_preset_temperature` (numeric): Away preset temperature min value is -10, max value is 35, unit is °C
- `year` (numeric): Start away year 20xx unit is year
- `month` (numeric): Start away month unit is month
- `day` (numeric): Start away day unit is day
- `hour` (numeric): Start away hours unit is hour
- `minute` (numeric): Start away minutes unit is min

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

