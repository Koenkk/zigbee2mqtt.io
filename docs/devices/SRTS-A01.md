---
title: "Aqara SRTS-A01 control via MQTT"
description: "Integrate your Aqara SRTS-A01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-30T20:52:51
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara SRTS-A01

|     |     |
|-----|-----|
| Model | SRTS-A01  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Smart radiator thermostat E1 |
| Exposes | setup, climate (occupied_heating_setpoint, local_temperature, system_mode, preset), sensor, external_temperature_input, calibrated, calibrate, child_lock, window_detection, window_open, valve_detection, valve_alarm, away_preset_temperature, voltage, battery, power_outage_count, device_temperature, schedule, schedule_settings, linkquality |
| Picture | ![Aqara SRTS-A01](https://www.zigbee2mqtt.io/images/devices/SRTS-A01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Press and hold the center ring for 10 seconds until the blue network indicator flashes.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Setup (binary)
Indicates if the device is in setup mode (E11).
Value can be found in the published state on the `setup` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` setup is ON, if `false` OFF.

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`, `preset`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured by the internal or external sensor (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `manual`, `away`, `auto`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"preset": ""}`.

### Sensor (enum)
Select temperature sensor to use.
Value can be found in the published state on the `sensor` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `internal`, `external`.

### External temperature input (numeric)
Input for remote temperature sensor (when sensor is set to external).
Value can be found in the published state on the `external_temperature_input` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"external_temperature_input": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"external_temperature_input": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `55`.
The unit of this value is `°C`.

### Calibrated (binary)
Indicates if this valve is calibrated, use the calibrate option to calibrate.
Value can be found in the published state on the `calibrated` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` calibrated is ON, if `false` OFF.

### Calibrate (enum)
Calibrates the valve.
Value can be found in the published state on the `calibrate` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibrate": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibrate": NEW_VALUE}`.
The possible values are: `calibrate`.

### Child lock (binary)
Unlocks/locks physical input on the device.
Value can be found in the published state on the `child_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `true` child lock is ON, if `false` OFF.

### Window detection (binary)
Enables/disables window detection on the device.
Value can be found in the published state on the `window_detection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"window_detection": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": NEW_VALUE}`.
If value equals `true` window detection is ON, if `false` OFF.

### Window open (binary)
Indicates if window is open.
Value can be found in the published state on the `window_open` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` window open is ON, if `false` OFF.

### Valve detection (binary)
Determines if temperature control abnormalities should be detected.
Value can be found in the published state on the `valve_detection` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_detection": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_detection": NEW_VALUE}`.
If value equals `true` valve detection is ON, if `false` OFF.

### Valve alarm (binary)
Notifies of a temperature control abnormality if valve detection is enabled (e.g., thermostat not installed correctly, valve failure or incorrect calibration, incorrect link to external temperature sensor).
Value can be found in the published state on the `valve_alarm` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` valve alarm is ON, if `false` OFF.

### Away preset temperature (numeric)
Away preset temperature.
Value can be found in the published state on the `away_preset_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"away_preset_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"away_preset_temperature": NEW_VALUE}`.
The minimal value is `-10` and the maximum value is `35`.
The unit of this value is `°C`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Power outage count (numeric)
Number of power outages (since last pairing).
Value can be found in the published state on the `power_outage_count` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Schedule (binary)
When enabled, the device will change its state based on your schedule settings.
Value can be found in the published state on the `schedule` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule": NEW_VALUE}`.
If value equals `true` schedule is ON, if `false` OFF.

### Schedule settings (text)
Smart schedule configuration (default: mon,tue,wed,thu,fri|8:00,24.0|18:00,17.0|23:00,22.0|8:00,22.0).
Value can be found in the published state on the `schedule_settings` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule_settings": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_settings": NEW_VALUE}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

