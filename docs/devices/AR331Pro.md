---
title: "Tuya AR331Pro control via MQTT"
description: "Integrate your Tuya AR331Pro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:39
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya AR331Pro

|     |     |
|-----|-----|
| Model | AR331Pro  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Thermostatic radiator valve |
| Exposes | battery, battery_status, preheat, child_lock, climate (preset, current_heating_setpoint, local_temperature, local_temperature_calibration, running_state), summer_mode, heating_cooling_mode, eco_temperature, comfort_temperature, holiday_time, frost_protection_temperature, boost_heating, boost_time, window_detection, window_open, window_temp, window_delay, window_close_delay, valve_state, fault_code, screen_orientation, display_brightness, override_active, override_temperature, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday |
| Picture | ![Tuya AR331Pro](https://www.zigbee2mqtt.io/images/devices/AR331Pro.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
### Pairing
To start pairing of this device, long press the main knob until the menu is entered (display changes to PX, where X is a blinking number) and select P0 by pressing the knob shortly. It will show then CF and a blinking antenna symbol in the display and switch back to the actual temperature and a stable antenna symbol when finished.

### Firmware
Firmware version needs to be >=0.2.3. Older firmware versions are not working properly. Update via the manufacturer's app (needs a Tuya compatible gateway/hub).

<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery status (binary)
Battery low warning.
Value can be found in the published state on the `battery_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery status is ON, if `false` OFF.

### Preheat (binary)
Preheat/boost active (read-only status; use boost_heating to control).
Value can be found in the published state on the `preheat` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` preheat is ON, if `OFF` OFF.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Climate 
This climate device supports the following features: `preset`, `current_heating_setpoint`, `local_temperature`, `local_temperature_calibration`, `running_state`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `40`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `auto`, `manual`, `holiday`, `comfort`, `eco`, `standby`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-7` and the maximum value is `7` with a step size of `0.5`.

### Summer mode (binary)
Summer mode: disables heating, valve stays closed. Frost protection temperature remains active as safety net..
Value can be found in the published state on the `summer_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"summer_mode": NEW_VALUE}`.
If value equals `ON` summer mode is ON, if `OFF` OFF.

### Heating cooling mode (enum)
Heating or cooling mode. In cooling mode valve is closed, works as temperature and window/door sensor..
Value can be found in the published state on the `heating_cooling_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"heating_cooling_mode": NEW_VALUE}`.
The possible values are: `heat`, `cool`.

### Eco temperature (numeric)
Eco temperature.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `20`.
The unit of this value is `°C`.

### Comfort temperature (numeric)
Comfort temperature.
Value can be found in the published state on the `comfort_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `40`.
The unit of this value is `°C`.

### Holiday time (text)
Holiday start and end in format YYYY/MM/DD HH:MM | YYYY/MM/DD HH:MM.
Value can be found in the published state on the `holiday_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_time": NEW_VALUE}`.

### Frost protection temperature (numeric)
Frost protection: valve opens below this temperature.
Value can be found in the published state on the `frost_protection_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection_temperature": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `15`.
The unit of this value is `°C`.

### Boost heating (binary)
Boost heating: the device will enter boost heating mode..
Value can be found in the published state on the `boost_heating` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_heating": NEW_VALUE}`.
If value equals `ON` boost heating is ON, if `OFF` OFF.

### Boost time (numeric)
Boost duration in minutes.
Value can be found in the published state on the `boost_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1440`.
The unit of this value is `min`.

### Window detection (binary)
Enable open-window detection.
Value can be found in the published state on the `window_detection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": NEW_VALUE}`.
If value equals `ON` window detection is ON, if `OFF` OFF.

### Window open (binary)
Window is currently detected as.
Value can be found in the published state on the `window_open` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `open` window open is ON, if `closed` OFF.

### Window temp (numeric)
Window detection: temperature drop threshold.
Value can be found in the published state on the `window_temp` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_temp": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `40`.
The unit of this value is `°C`.

### Window delay (numeric)
Window detection: delay before triggering (minutes).
Value can be found in the published state on the `window_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1440`.
The unit of this value is `min`.

### Window close delay (numeric)
Window detection: minimum open time before valve closes (minutes).
Value can be found in the published state on the `window_close_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_close_delay": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1440`.
The unit of this value is `min`.

### Valve state (binary)
Current valve state (read-only).
Value can be found in the published state on the `valve_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `open` valve state is ON, if `close` OFF.

### Fault code (numeric)
Fault code bitmap (bit 0: program_fault, bit 1: low_battery, bit 2: sensor_fault).
Value can be found in the published state on the `fault_code` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Screen orientation (enum)
Display orientation.
Value can be found in the published state on the `screen_orientation` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"screen_orientation": NEW_VALUE}`.
The possible values are: `up`, `right`, `down`, `left`.

### Display brightness (numeric)
Display brightness (1–7).
Value can be found in the published state on the `display_brightness` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_brightness": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `7`.

### Override active (binary)
Temporary manual override active.
Value can be found in the published state on the `override_active` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"override_active": NEW_VALUE}`.
If value equals `ON` override active is ON, if `OFF` OFF.

### Override temperature (numeric)
Temporary manual override temperature.
Value can be found in the published state on the `override_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"override_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `40`.
The unit of this value is `°C`.

### Schedule monday (text)
Schedule for monday, example: "00:00/16.0 06:00/20.5 09:00/18.0 12:00/21.0 14:00/18.0 17:00/21.0 22:00/16.0 23:00/16.0".
Value can be found in the published state on the `schedule_monday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_monday": NEW_VALUE}`.

### Schedule tuesday (text)
Schedule for tuesday, example: "00:00/16.0 06:00/20.5 09:00/18.0 12:00/21.0 14:00/18.0 17:00/21.0 22:00/16.0 23:00/16.0".
Value can be found in the published state on the `schedule_tuesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_tuesday": NEW_VALUE}`.

### Schedule wednesday (text)
Schedule for wednesday, example: "00:00/16.0 06:00/20.5 09:00/18.0 12:00/21.0 14:00/18.0 17:00/21.0 22:00/16.0 23:00/16.0".
Value can be found in the published state on the `schedule_wednesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_wednesday": NEW_VALUE}`.

### Schedule thursday (text)
Schedule for thursday, example: "00:00/16.0 06:00/20.5 09:00/18.0 12:00/21.0 14:00/18.0 17:00/21.0 22:00/16.0 23:00/16.0".
Value can be found in the published state on the `schedule_thursday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_thursday": NEW_VALUE}`.

### Schedule friday (text)
Schedule for friday, example: "00:00/16.0 06:00/20.5 09:00/18.0 12:00/21.0 14:00/18.0 17:00/21.0 22:00/16.0 23:00/16.0".
Value can be found in the published state on the `schedule_friday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_friday": NEW_VALUE}`.

### Schedule saturday (text)
Schedule for saturday, example: "00:00/16.0 06:00/20.5 09:00/18.0 12:00/21.0 14:00/18.0 17:00/21.0 22:00/16.0 23:00/16.0".
Value can be found in the published state on the `schedule_saturday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_saturday": NEW_VALUE}`.

### Schedule sunday (text)
Schedule for sunday, example: "00:00/16.0 06:00/20.5 09:00/18.0 12:00/21.0 14:00/18.0 17:00/21.0 22:00/16.0 23:00/16.0".
Value can be found in the published state on the `schedule_sunday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_sunday": NEW_VALUE}`.

