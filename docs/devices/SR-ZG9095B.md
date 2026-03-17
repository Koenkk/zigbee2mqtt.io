---
title: "Sunricher SR-ZG9095B control via MQTT"
description: "Integrate your Sunricher SR-ZG9095B via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-06-01T17:54:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9095B

|     |     |
|-----|-----|
| Model | SR-ZG9095B  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Touch thermostat |
| Exposes | outdoor_temperature, climate (occupied_heating_setpoint, unoccupied_heating_setpoint, occupied_cooling_setpoint, unoccupied_cooling_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state, fan_mode, control_sequence_of_operation), away_mode, child_lock, lcd_brightness, button_vibration_level, floor_sensor_type, sensor, powerup_status, floor_sensor_calibration, temperature_display, min_setpoint_deadband |
| Picture | ![Sunricher SR-ZG9095B](https://www.zigbee2mqtt.io/images/devices/SR-ZG9095B.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Outdoor temperature (numeric)
Current temperature measured from the floor sensor.
Value can be found in the published state on the `outdoor_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"outdoor_temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `unoccupied_heating_setpoint`, `occupied_cooling_setpoint`, `unoccupied_cooling_setpoint`, `local_temperature`, `local_temperature_calibration`, `system_mode`, `running_state`, `fan_mode`, `control_sequence_of_operation`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `32`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `occupied_cooling_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_cooling_setpoint": VALUE}` where `VALUE` is the °C between `5` and `32`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_cooling_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `cool`, `heat`, `fan_only`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`, `cool`, `fan_only`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-2.5` and the maximum value is `2.5` with a step size of `0.1`.

### Away mode (binary)
Enable/disable away mode.
Value can be found in the published state on the `away_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"away_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"away_mode": NEW_VALUE}`.
If value equals `ON` away mode is ON, if `OFF` OFF.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `UNLOCK` child lock is ON, if `LOCK` OFF.

### Lcd brightness (enum)
OLED brightness when operating the buttons.  Default: Medium..
Value can be found in the published state on the `lcd_brightness` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"lcd_brightness": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"lcd_brightness": NEW_VALUE}`.
The possible values are: `low`, `mid`, `high`.

### Button vibration level (enum)
Key beep volume and vibration level.  Default: Low..
Value can be found in the published state on the `button_vibration_level` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"button_vibration_level": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"button_vibration_level": NEW_VALUE}`.
The possible values are: `off`, `low`, `high`.

### Floor sensor type (enum)
Type of the external floor sensor.  Default: NTC 10K/25..
Value can be found in the published state on the `floor_sensor_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_sensor_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_sensor_type": NEW_VALUE}`.
The possible values are: `10k`, `15k`, `50k`, `100k`, `12k`.

### Sensor (enum)
The sensor used for heat control.  Default: Room Sensor..
Value can be found in the published state on the `sensor` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor": NEW_VALUE}`.
The possible values are: `room`, `floor`.

### Powerup status (enum)
The mode after a power reset.  Default: Previous Mode..
Value can be found in the published state on the `powerup_status` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"powerup_status": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"powerup_status": NEW_VALUE}`.
The possible values are: `default`, `last_status`.

### Floor sensor calibration (numeric)
The tempearatue calibration for the external floor sensor, between -3 and 3 in 0.1°C.  Default: 0..
Value can be found in the published state on the `floor_sensor_calibration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"floor_sensor_calibration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"floor_sensor_calibration": NEW_VALUE}`.
The minimal value is `-2.5` and the maximum value is `2.5`.
The unit of this value is `°C`.

### Temperature display (enum)
The temperature on the display. room: shows the temperature recorded by the sensor embedded in the thermostat. set: shows the set (target) temperature. floor: shows the temperature recorded by the external floor sensor  Default: Room Temperature..
Value can be found in the published state on the `temperature_display` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_display": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_display": NEW_VALUE}`.
The possible values are: `room`, `set`, `floor`.

### Min setpoint deadband (numeric)
This parameter refers to the minimum difference between cooling and heating temperatures. between 1 and 1.5 in 0.1 °C  Default: 1 °C. The hysteresis used by this device = MinSetpointDeadBand /2.
Value can be found in the published state on the `min_setpoint_deadband` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"min_setpoint_deadband": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_setpoint_deadband": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `1.5`.
The unit of this value is `°C`.

