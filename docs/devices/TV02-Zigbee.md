---
title: "Tuya TV02-Zigbee control via MQTT"
description: "Integrate your Tuya TV02-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-11-30T20:10:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TV02-Zigbee

|     |     |
|-----|-----|
| Model | TV02-Zigbee  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Thermostat radiator valve |
| Exposes | battery_low, lock (state), open_window, open_window_temperature, comfort_temperature, eco_temperature, climate (preset, local_temperature_calibration, local_temperature, current_heating_setpoint, system_mode), heating_stop, frost_protection, boost_timeset_countdown, holiday_temperature, holiday_start_stop, working_day, schedule, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, online, error_status, linkquality |
| Picture | ![Tuya TV02-Zigbee](https://www.zigbee2mqtt.io/images/devices/TV02-Zigbee.png) |
| White-label | Moes TV01-ZB, AVATTO TRV06-1, Tesla Smart TSL-TRV-TV01ZG, Unknown/id3.pl GTZ08 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing

1. Pull the cover in the direction out from the radiator
2. Insert 2x AA batteries. Manual says alkaline ones should last for 1,5years. When replacing old batteries, it is recommended to wait approx 1 minute before inserting new ones.
3. Ins will appear on the display - motor is travelling back - to allow easy installation (Ins + rotating n is shown). After few seconds Ada is shown.
4. Install the thermostat on radiator valve - display whould be on top side.
5. Insert the cover back to thermostat - Push and Pull symbols should match.
6. Shortly press the big round button - adaptation to the valve will start (Ada + rotating n is shown).
7. To pair - long-press the main big rotating button. Make sure the thermostat has a good signal from ZigBee coordinator.
8. There is a hidden reset button under the cover, in case of repairing or other issues press it for 5 seconds.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Child lock (lock)
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Open window (binary)
Enables/disables the status on the device.
Value can be found in the published state on the `open_window` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window": NEW_VALUE}`.
If value equals `ON` open window is ON, if `OFF` OFF.

### Open window temperature (numeric)
Open window temperature.
Value can be found in the published state on the `open_window_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Comfort temperature (numeric)
Comfort temperature.
Value can be found in the published state on the `comfort_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Eco temperature (numeric)
Eco temperature.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Climate 
This climate device supports the following features: `preset`, `local_temperature_calibration`, `local_temperature`, `current_heating_setpoint`, `system_mode`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `auto`, `manual`, `holiday`. Reading (`/get`) this attribute is not possible.
- `system_mode`: Only for Homeassistant. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-5` and the maximum value is `5` with a step size of `0.1`.

### Heating stop (binary)
Battery life can be prolonged by switching the heating off. To achieve this, the valve is closed fully. To activate the heating stop, the device display "HS", press the pair button to cancel..
Value can be found in the published state on the `heating_stop` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"heating_stop": NEW_VALUE}`.
If value equals `ON` heating stop is ON, if `OFF` OFF.

### Frost protection (binary)
When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C.When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C, the device display "AF".press the pair button to cancel..
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

### Boost timeset countdown (numeric)
Setting minimum 0 - maximum 465 seconds boost time. The boost (â¨) function is activated. The remaining time for the function will be counted down in seconds ( 465 to 0 )..
Value can be found in the published state on the `boost_timeset_countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_timeset_countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `465`.
The unit of this value is `s`.

### Holiday temperature (numeric)
Holiday temperature.
Value can be found in the published state on the `holiday_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Holiday start stop (text)
The holiday mode will automatically start at the set time starting point and run the holiday temperature. Can be defined in the following format: `startYear/startMonth/startDay startHours:startMinutes | endYear/endMonth/endDay endHours:endMinutes`. For example: `2022/10/01 16:30 | 2022/10/21 18:10`. After the end of holiday mode, it switches to "auto" mode and uses schedule..
Value can be found in the published state on the `holiday_start_stop` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_start_stop": NEW_VALUE}`.

### Working day (enum)
`mon_sun` - schedule for Monday used for each day (define it only for Monday). `mon_fri+sat+sun` - schedule for workdays used from Monday (define it only for Monday), Saturday and Sunday are defined separately. `separate` - schedule for each day is defined separately..
Value can be found in the published state on the `working_day` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"working_day": NEW_VALUE}`.
The possible values are: `mon_sun`, `mon_fri+sat+sun`, `separate`.

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

### Online (binary)
The current data request from the device..
Value can be found in the published state on the `online` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"online": NEW_VALUE}`.
If value equals `ON` online is ON, if `OFF` OFF.

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

