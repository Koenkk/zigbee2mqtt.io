---
title: "PirogovX ZB-MIDEA-AC control via MQTT"
description: "Integrate your PirogovX ZB-MIDEA-AC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-08-30T18:06:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# PirogovX ZB-MIDEA-AC

|     |     |
|-----|-----|
| Model | ZB-MIDEA-AC  |
| Vendor  | [PirogovX](/supported-devices/#v=PirogovX)  |
| Description | Zigbee air conditioner controller for Midea / Royal Clima / Hommyn / Neoline (ESP32-H2/C6) |
| Exposes | climate (occupied_heating_setpoint, local_temperature, system_mode), fan_mode, swing_mode, preset, display, outdoor_temperature, firmware_version |
| Picture | ![PirogovX ZB-MIDEA-AC](https://www.zigbee2mqtt.io/images/devices/ZB-MIDEA-AC.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `16` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `cool`, `heat`, `dry`, `fan_only`. Reading (`/get`) this attribute is not possible.

### Fan mode (enum)
Fan speed.
Value can be found in the published state on the `fan_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_mode": NEW_VALUE}`.
The possible values are: `auto`, `low`, `medium`, `high`, `quiet`.

### Swing mode (enum)
Swing mode.
Value can be found in the published state on the `swing_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"swing_mode": NEW_VALUE}`.
The possible values are: `off`, `horizontal`, `vertical`, `both`.

### Preset (enum)
Preset mode.
Value can be found in the published state on the `preset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": NEW_VALUE}`.
The possible values are: `none`, `sleep`, `turbo`.

### Display (binary)
AC display and beep control.
Value can be found in the published state on the `display` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display": NEW_VALUE}`.
If value equals `ON` display is ON, if `OFF` OFF.

### Outdoor temperature (numeric)
Outdoor unit temperature.
Value can be found in the published state on the `outdoor_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Firmware version (text)
AC controller firmware version.
Value can be found in the published state on the `firmware_version` property.
It's not possible to read (`/get`) or write (`/set`) this value.

