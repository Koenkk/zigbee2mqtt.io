---
title: "Slacky-DIY THERM_SLACKY_DIY_R06 control via MQTT"
description: "Integrate your Slacky-DIY THERM_SLACKY_DIY_R06 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:29:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Slacky-DIY THERM_SLACKY_DIY_R06

|     |     |
|-----|-----|
| Model | THERM_SLACKY_DIY_R06  |
| Vendor  | [Slacky-DIY](/supported-devices/#v=Slacky-DIY)  |
| Description | Tuya Thermostat for Floor Heating with custom Firmware |
| Exposes | child_lock, sound, inversion, brightness_level, programming_operation_mode, sensor, histeresis_temperature, max_heat_setpoint_limit, frost_protect_on_off, heat_protect, climate (local_temperature, occupied_heating_setpoint, local_temperature_calibration, system_mode, running_state, schedule), schedule_monday, schedule_sunday, schedule_mode, settings_reset |
| Picture | ![Slacky-DIY THERM_SLACKY_DIY_R06](https://www.zigbee2mqtt.io/images/devices/THERM_SLACKY_DIY_R06.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
[Original project description](https://github.com/slacky1965/tuya_thermostat_zrd)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`


## Exposes

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Sound (binary)
Sound On/Off.
Value can be found in the published state on the `sound` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sound": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sound": NEW_VALUE}`.
If value equals `On` sound is ON, if `Off` OFF.

### Inversion (binary)
Inversion of the output.
Value can be found in the published state on the `inversion` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"inversion": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"inversion": NEW_VALUE}`.
If value equals `On` inversion is ON, if `Off` OFF.

### Brightness level (enum)
Screen brightness.
Value can be found in the published state on the `brightness_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness_level": NEW_VALUE}`.
The possible values are: `Off`, `Low`, `Medium`, `High`.

### Programming operation mode (enum)
Setpoint or Schedule mode.
Value can be found in the published state on the `programming_operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"programming_operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"programming_operation_mode": NEW_VALUE}`.
The possible values are: `setpoint`, `schedule`.

### Sensor (enum)
Select temperature sensor to use.
Value can be found in the published state on the `sensor` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `Inner (IN)`, `All (AL)`, `Outer (OU)`.

### Histeresis temperature (numeric)
The delta between local_temperature and current_heating_setpoint to trigger activity.
Value can be found in the published state on the `histeresis_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"histeresis_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"histeresis_temperature": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `10`.
The unit of this value is `°C`.

### Max heat setpoint limit (numeric)
Maximum Heating set point limit.
Value can be found in the published state on the `max_heat_setpoint_limit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_heat_setpoint_limit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_heat_setpoint_limit": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `95`.
The unit of this value is `°C`.

### Frost protect on off (binary)
Frost protection.
Value can be found in the published state on the `frost_protect_on_off` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"frost_protect_on_off": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protect_on_off": NEW_VALUE}`.
If value equals `On` frost protect on off is ON, if `Off` OFF.

### Heat protect (numeric)
Protection against maximum heating temperature.
Value can be found in the published state on the `heat_protect` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"heat_protect": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"heat_protect": NEW_VALUE}`.
The minimal value is `35` and the maximum value is `60`.
The unit of this value is `°C`.

### Climate 
This climate device supports the following features: `local_temperature`, `occupied_heating_setpoint`, `local_temperature_calibration`, `system_mode`, `running_state`, `schedule`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `45`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-9.9` and the maximum value is `9.9` with a step size of `0.1`.

### Schedule monday (text)
Schedule for the working week.
Value can be found in the published state on the `schedule_monday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule sunday (text)
Weekend schedule.
Value can be found in the published state on the `schedule_sunday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule mode (enum)
Schedule mode.
Value can be found in the published state on the `schedule_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"schedule_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_mode": NEW_VALUE}`.
The possible values are: `Off`, `5+2`, `6+1`, `7`.

### Settings reset (enum)
Default settings.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"settings_reset": NEW_VALUE}`.
The possible values are: `Default`.

