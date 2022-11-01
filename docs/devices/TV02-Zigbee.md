---
title: "TuYa TV02-Zigbee control via MQTT"
description: "Integrate your TuYa TV02-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-11-30T20:10:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa TV02-Zigbee

|     |     |
|-----|-----|
| Model | TV02-Zigbee  |
| Vendor  | TuYa  |
| Description | Thermostat radiator valve |
| Exposes | battery_low, lock (state), open_window, open_window_temperature, comfort_temperature, eco_temperature, climate (system_mode, preset, local_temperature_calibration, local_temperature, current_heating_setpoint), boost_timeset_countdown, frost_protection, heating_stop, holiday_temperature, holiday_start_stop, working_day, schedule, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, online, error_status, linkquality |
| Picture | ![TuYa TV02-Zigbee](https://www.zigbee2mqtt.io/images/devices/TV02-Zigbee.jpg) |
| White-label | Moes TV01-ZB, AVATTO TRV06, Tesla Smart TSL-TRV-TV01ZG, Unknown/id3.pl GTZ08 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing

1. Pull the cover in the direction out from the radiator
2. Insert 2x AA batteries. Manual says alkaline ones should last for 1,5years. When replacing old batteries, it os recommended to wait approx 1 minute before inserting new ones.
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

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### Lock 
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Open_window (binary)
Enables/disables the status on the device.
Value can be found in the published state on the `open_window` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window": NEW_VALUE}`.
If value equals `ON` open_window is ON, if `OFF` OFF.

### Open_window_temperature (numeric)
Open window temperature.
Value can be found in the published state on the `open_window_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Comfort_temperature (numeric)
Comfort temperature.
Value can be found in the published state on the `comfort_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"comfort_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Eco_temperature (numeric)
Eco temperature.
Value can be found in the published state on the `eco_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"eco_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Climate 
This climate device supports the following features: `system_mode`, `preset`, `local_temperature_calibration`, `local_temperature`, `current_heating_setpoint`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `30`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: When switched to the "off" mode, the device will display "HS" and the valve will be fully closed. Press the pair button to cancel or switch back to "heat" mode. Battery life can be prolonged by switching the heating off. After switching to `heat` mode, `preset` will be reset to `auto` and after changing `preset` to `manual` temperature setpoint will be 20 degrees.. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `preset`: `auto` uses schedule properties, check them. `manual` allows you to control the device, `holiday` uses `holiday_start_stop` and `holiday_temperature` properties.. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `auto`, `manual`, `holiday`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"preset": ""}`.
- `local_temperature_calibration`: Offset to be used in the local_temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`

### Boost_timeset_countdown (numeric)
Setting minimum 0 - maximum 465 seconds boost time. The boost (♨) function is activated. The remaining time for the function will be counted down in seconds ( 465 to 0 )..
Value can be found in the published state on the `boost_timeset_countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_timeset_countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `465`.
The unit of this value is `second`.

### Frost_protection (binary)
When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C, the device display "AF".press the pair button to cancel..
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost_protection is ON, if `OFF` OFF.

### Heating_stop (binary)
Same as `system_mode`. Left for compatibility..
Value can be found in the published state on the `heating_stop` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"heating_stop": NEW_VALUE}`.
If value equals `ON` heating_stop is ON, if `OFF` OFF.

### Holiday_temperature (numeric)
Holiday temperature.
Value can be found in the published state on the `holiday_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `30`.
The unit of this value is `°C`.

### Holiday_start_stop (text)
The holiday mode will automatically start at the set time starting point and run the holiday temperature. Can be defined in the following format: `startYear/startMonth/startDay startHours:startMinutes | endYear/endMonth/endDay endHours:endMinutes`. For example: `2022/10/01 16:30 | 2022/10/21 18:10`. After the end of holiday mode, it switches to "auto" mode and uses schedule..
Value can be found in the published state on the `holiday_start_stop` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_start_stop": NEW_VALUE}`.

### Working_day (enum)
`mon_sun` - schedule for Monday used for each day (define it only for Monday). `mon_fri+sat+sun` - schedule for workdays used from Monday (define it only for Monday), Saturday and Sunday are defined separately. `separate` - schedule for each day is defined separately..
Value can be found in the published state on the `working_day` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"working_day": NEW_VALUE}`.
The possible values are: `mon_sun`, `mon_fri+sat+sun`, `separate`.

### Schedule (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule": {"week_day": VALUE, "schedule": VALUE}}`
- `week_day` (enum): undefined. Allowed values: `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`
- `schedule` (text): undefined. 

### Schedule_monday (text)
Value can be found in the published state on the `schedule_monday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule_tuesday (text)
Value can be found in the published state on the `schedule_tuesday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule_wednesday (text)
Value can be found in the published state on the `schedule_wednesday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule_thursday (text)
Value can be found in the published state on the `schedule_thursday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule_friday (text)
Value can be found in the published state on the `schedule_friday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule_saturday (text)
Value can be found in the published state on the `schedule_saturday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Schedule_sunday (text)
Value can be found in the published state on the `schedule_sunday` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Online (binary)
Turn on this property to poll current data from the device. It can be used to periodically fetch a new local temperature since the device doesn't update itself. Setting this property doesn't turn on the display..
Value can be found in the published state on the `online` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"online": NEW_VALUE}`.
If value equals `ON` online is ON, if `OFF` OFF.

### Error_status (numeric)
Error status.
Value can be found in the published state on the `error_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

