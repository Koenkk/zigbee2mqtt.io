---
title: "Sunricher SR-ZG9092A control via MQTT"
description: "Integrate your Sunricher SR-ZG9092A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-01T15:06:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9092A

|     |     |
|-----|-----|
| Model | SR-ZG9092A  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Touch thermostat |
| Exposes | outdoor_temperature, climate (occupied_heating_setpoint, unoccupied_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state), away_mode, child_lock, power, current, voltage, energy, lcd_brightness, button_vibration_level, floor_sensor_type, sensor, powerup_status, floor_sensor_calibration, dry_time, mode_after_dry, temperature_display, window_open_check, hysterersis, display_auto_off_enabled, alarm_airtemp_overvalue, linkquality |
| Picture | ![Sunricher SR-ZG9092A](https://www.zigbee2mqtt.io/images/devices/SR-ZG9092A.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Outdoor temperature (numeric)
Current temperature measured from the floor sensor.
Value can be found in the published state on the `outdoor_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"outdoor_temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `unoccupied_heating_setpoint`, `local_temperature`, `local_temperature_calibration`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `0` and `40`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-3` and the maximum value is `3` with a step size of `0.1`.

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

### Power (numeric)
Instantaneous measured power.
Value can be found in the published state on the `power` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `W`.

### Current (numeric)
Instantaneous measured electrical current.
Value can be found in the published state on the `current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `A`.

### Voltage (numeric)
Measured electrical potential value.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

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
The possible values are: `air`, `floor`, `both`.

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
The minimal value is `-3` and the maximum value is `3`.
The unit of this value is `°C`.

### Dry time (numeric)
The duration of Dry Mode, between 5 and 100 minutes.  Default: 5..
Value can be found in the published state on the `dry_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"dry_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dry_time": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `100`.
The unit of this value is `min`.

### Mode after dry (enum)
The mode after Dry Mode.  Default: Auto..
Value can be found in the published state on the `mode_after_dry` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"mode_after_dry": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode_after_dry": NEW_VALUE}`.
The possible values are: `off`, `manual`, `auto`, `away`.

### Temperature display (enum)
The temperature on the display.  Default: Room Temperature..
Value can be found in the published state on the `temperature_display` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"temperature_display": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_display": NEW_VALUE}`.
The possible values are: `room`, `floor`.

### Window open check (numeric)
The threshold to detect window open, between 0.0 and 8.0 in 0.5 °C.  Default: 0 (disabled)..
Value can be found in the published state on the `window_open_check` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"window_open_check": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_open_check": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `8`.
The unit of this value is `°C`.

### Hysterersis (numeric)
Hysteresis setting, between 0.5 and 2 in 0.1 °C.  Default: 0.5..
Value can be found in the published state on the `hysterersis` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"hysterersis": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"hysterersis": NEW_VALUE}`.
The minimal value is `0.5` and the maximum value is `2`.
The unit of this value is `°C`.

### Display auto off enabled (enum)
Value can be found in the published state on the `display_auto_off_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"display_auto_off_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_auto_off_enabled": NEW_VALUE}`.
The possible values are: `disabled`, `enabled`.

### Alarm airtemp overvalue (numeric)
Room temperature alarm threshold, between 20 and 60 in °C.  0 means disabled.  Default: 45..
Value can be found in the published state on the `alarm_airtemp_overvalue` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_airtemp_overvalue": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_airtemp_overvalue": NEW_VALUE}`.
The minimal value is `20` and the maximum value is `60`.
The unit of this value is `°C`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

