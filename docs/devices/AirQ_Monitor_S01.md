---
title: "Slacky-DIY AirQ_Monitor_S01 control via MQTT"
description: "Integrate your Slacky-DIY AirQ_Monitor_S01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:17:11
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Slacky-DIY AirQ_Monitor_S01

|     |     |
|-----|-----|
| Model | AirQ_Monitor_S01  |
| Vendor  | [Slacky-DIY](/supported-devices/#v=Slacky-DIY)  |
| Description | Air quality monitor |
| Exposes | co2, voc_index, temperature, humidity, pressure, illuminance, display_rotate, display_inversion, temperature_display_mode, temperature_offset, read_interval, enabling_co2_control, low_co2, high_co2, enabling_voc_control, low_voc, high_voc, switch_actions, brightness, enabling_sound, frc_co2_correction, features_sensors, life_time |
| Picture | ![Slacky-DIY AirQ_Monitor_S01](https://www.zigbee2mqtt.io/images/devices/AirQ_Monitor_S01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
[Original project description](https://github.com/slacky1965/air_quality_monitor_zrd)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `pressure_calibration`: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.

* `pressure_precision`: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.

* `illuminance_raw`: Expose the raw illuminance value. The value must be `true` or `false`


## Exposes

### CO2 (numeric)
Measured value.
Value can be found in the published state on the `co2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"co2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `ppm`.

### Voc index (numeric)
VOC index.
Value can be found in the published state on the `voc_index` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voc_index": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `VOC Index points`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"humidity": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

### Pressure (numeric)
The measured atmospheric pressure.
Value can be found in the published state on the `pressure` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pressure": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `kPa`.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"illuminance": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `lx`.

### Display rotate (enum)
Display orientation (horizontal/vertical).
Value can be found in the published state on the `display_rotate` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_rotate": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_rotate": NEW_VALUE}`.
The possible values are: `horizontal`, `vertical`.

### Display inversion (enum)
Display inversion (black on white/white on black).
Value can be found in the published state on the `display_inversion` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_inversion": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_inversion": NEW_VALUE}`.
The possible values are: `black_on_white`, `white_on_black`.

### Temperature display mode (enum)
The units of the temperature displayed on the device screen.
Value can be found in the published state on the `temperature_display_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_display_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_display_mode": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Temperature offset (numeric)
Offset to add/subtract to the inside temperature.
Value can be found in the published state on the `temperature_offset` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_offset": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-5` and the maximum value is `5`.
The unit of this value is `°C`.

### Read interval (numeric)
Sensors reading period.
Value can be found in the published state on the `read_interval` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"read_interval": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"read_interval": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `600`.
The unit of this value is `Sec`.

### Enabling co2 control (binary)
Enables/disables CO2 control.
Value can be found in the published state on the `enabling_co2_control` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enabling_co2_control": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enabling_co2_control": NEW_VALUE}`.
If value equals `ON` enabling co2 control is ON, if `OFF` OFF.

### Low co2 (numeric)
CO2 low turn-off limit.
Value can be found in the published state on the `low_co2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_co2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_co2": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `2000`.
The unit of this value is `ppm`.

### High co2 (numeric)
CO2 high turn-on limit.
Value can be found in the published state on the `high_co2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_co2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_co2": NEW_VALUE}`.
The minimal value is `400` and the maximum value is `2000`.
The unit of this value is `ppm`.

### Enabling voc control (binary)
Enables/disables VOC control.
Value can be found in the published state on the `enabling_voc_control` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enabling_voc_control": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enabling_voc_control": NEW_VALUE}`.
If value equals `ON` enabling voc control is ON, if `OFF` OFF.

### Low voc (numeric)
VOC low turn-off limit.
Value can be found in the published state on the `low_voc` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"low_voc": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"low_voc": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `500`.
The unit of this value is `VOC index points`.

### High voc (numeric)
VOC high turn-on limit.
Value can be found in the published state on the `high_voc` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"high_voc": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"high_voc": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `500`.
The unit of this value is `VOC index points`.

### Switch actions (enum)
Actions switch.
Value can be found in the published state on the `switch_actions` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions": NEW_VALUE}`.
The possible values are: `off`, `on`.

### Brightness (numeric)
LED brightness.
Value can be found in the published state on the `brightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.

### Enabling sound (binary)
Enables/disables sound.
Value can be found in the published state on the `enabling_sound` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enabling_sound": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enabling_sound": NEW_VALUE}`.
If value equals `ON` enabling sound is ON, if `OFF` OFF.

### Frc co2 correction (numeric)
FRC CO2 correction.
Value can be found in the published state on the `frc_co2_correction` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"frc_co2_correction": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `ppm`.

### Features sensors (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"features_sensors": {"features": VALUE}}`
- `features` (enum) allowed values: `nothing`, `co2_forced_calibration`, `co2_factory_reset`, `bind_reset`, ``

### Life time (numeric)
Life time of device.
Value can be found in the published state on the `life_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"life_time": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `h`.

