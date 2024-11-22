---
title: "Tuya BAB-1413_Pro control via MQTT"
description: "Integrate your Tuya BAB-1413_Pro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-13T14:51:03Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya BAB-1413_Pro

|     |     |
|-----|-----|
| Model | BAB-1413_Pro  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Thermostat radiator valve |
| Exposes | battery, lock (state), max_temperature, min_temperature, switch (state), open_window_temperature, comfort_temperature, eco_temperature, holiday_temperature, climate (preset, local_temperature_calibration, local_temperature, current_heating_setpoint, system_mode, running_state), frost_protection, boost_timeset_countdown, schedule, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, valve, factory_reset, error_status, linkquality |
| Picture | ![Tuya BAB-1413_Pro](https://www.zigbee2mqtt.io/images/devices/BAB-1413_Pro.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
Still in WIP. Copied most from BRT-100-TRV
### Pairing

While pairing, keep the valve close to the coordinator.

1. *Turn the display on*: Short press home (🏠).
2. *Enable pairing mode*: Long press + (plus) for 3 seconds. WiFi logo is now blinking.
3.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Child lock (lock)
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Max temperature (numeric)
Maximum temperature.
Value can be found in the published state on the `max_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature": NEW_VALUE}`.
The minimal value is `15` and the maximum value is `45`.
The unit of this value is `°C`.

### Min temperature (numeric)
Minimum temperature.
Value can be found in the published state on the `min_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `15`.
The unit of this value is `°C`.

### Window detection (switch)
The current state of this switch is in the published state under the `window_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": "ON"}`, `{"window_detection": "OFF"}` or `{"window_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Open window temperature (numeric)
Open window temperature.
Value can be found in the published state on the `open_window_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `25`.
The unit of this value is `°C`.

### Comfort temperature (numeric)
Comfort temperature.
Value can be found in the published state on the `comfort_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.

### Eco temperature (numeric)
Eco temperature.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.

### Holiday temperature (numeric)
Holiday temperature.
Value can be found in the published state on the `holiday_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.

### Climate 
This climate device supports the following features: `preset`, `local_temperature_calibration`, `local_temperature`, `current_heating_setpoint`, `system_mode`, `running_state`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `auto`, `manual`, `holiday`, `comfort`. Reading (`/get`) this attribute is not possible.
- `system_mode`: Only for Homeassistant. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-9` and the maximum value is `9` with a step size of `0.1`.

### Frost protection (binary)
When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C.When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C, the device display "AF".press the pair button to cancel..
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

### Boost timeset countdown (numeric)
Setting minimum 0 - maximum 465 seconds boost time. The boost function is activated. The remaining time for the function will be counted down in seconds ( 465 to 0 )..
Value can be found in the published state on the `boost_timeset_countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_timeset_countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `465`.
The unit of this value is `s`.

### Schedule (composite)
Schedule will work with "auto" preset. In this mode, the device executes a preset week programming temperature time and temperature. Before using these properties, check `working_day` property. Each day can contain up to 10 segments. At least 1 segment should be defined. Different count of segments can be defined for each day, e.g., 3 segments for Monday, 5 segments for Thursday, etc. It should be defined in the following format: `hours:minutes/temperature`. Minutes can be only tens, i.e., 00, 10, 20, 30, 40, 50. Segments should be divided by space symbol. Each day should end with the last segment of 24:00. Examples: `04:00/20 08:30/22 10:10/18 18:40/24 22:50/19.5`; `06:00/21.5 17:20/26 24:00/18`. The temperature will be set from the beginning/start of one period and until the next period, e.g., `04:00/20 24:00/22` means that from 00:00 to 04:00 temperature will be 20 degrees and from 04:00 to 00:00 temperature will be 22 degrees..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule": {"week_day": VALUE, "schedule": VALUE}}`
- `week_day` (enum) allowed values: `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`
- `schedule` (text) 

### Schedule monday (text)
Schedule for monday, format: "HH:MM/C".
Value can be found in the published state on the `schedule_monday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule tuesday (text)
Schedule for tuesday, format: "HH:MM/C".
Value can be found in the published state on the `schedule_tuesday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule wednesday (text)
Schedule for wednesday, format: "HH:MM/C".
Value can be found in the published state on the `schedule_wednesday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule thursday (text)
Schedule for thursday, format: "HH:MM/C".
Value can be found in the published state on the `schedule_thursday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule friday (text)
Schedule for friday, format: "HH:MM/C".
Value can be found in the published state on the `schedule_friday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule saturday (text)
Schedule for saturday, format: "HH:MM/C".
Value can be found in the published state on the `schedule_saturday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule sunday (text)
Schedule for sunday, format: "HH:MM/C".
Value can be found in the published state on the `schedule_sunday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Valve (binary)
Value can be found in the published state on the `valve` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `CLOSED` valve is ON, if `OPEN` OFF.

### Factory reset (enum)
Remove limits.
Value can be found in the published state on the `factory_reset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"factory_reset": NEW_VALUE}`.
The possible values are: `SET`.

### Error status (numeric)
Error status.
Value can be found in the published state on the `error_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

