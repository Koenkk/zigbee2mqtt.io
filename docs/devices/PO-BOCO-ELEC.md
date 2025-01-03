---
title: "Powernity PO-BOCO-ELEC control via MQTT"
description: "Integrate your Powernity PO-BOCO-ELEC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-03T20:11:47
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Powernity PO-BOCO-ELEC

|     |     |
|-----|-----|
| Model | PO-BOCO-ELEC  |
| Vendor  | [Powernity](/supported-devices/#v=Powernity)  |
| Description | Pilot wire heating module |
| Exposes | climate (preset, local_temperature, occupied_heating_setpoint, local_temperature_calibration, system_mode), auto_mode, manual_mode, frost_protection, humidity, child_lock, switch (state), window_opening_mode, window_opening_mode_duration, temperature_unit, boost_heating, boost_timeset_countdown, power_rating, energy_consumed, mode_switching, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, holiday_start_stop, reset_consumption, linkquality |
| Picture | ![Powernity PO-BOCO-ELEC](https://www.zigbee2mqtt.io/images/devices/PO-BOCO-ELEC.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `humidity_calibration`: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.

* `humidity_precision`: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Climate 
This climate device supports the following features: `preset`, `local_temperature`, `occupied_heating_setpoint`, `local_temperature_calibration`, `system_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `0` and `20`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `manual`, `auto`, `holiday`. Reading (`/get`) this attribute is not possible.
- `system_mode`: Only for Homeassistant. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `auto`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-5.5` and the maximum value is `5.5` with a step size of `0.5`.

### Auto mode (enum)
Auto Mode.
Value can be found in the published state on the `auto_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_mode": NEW_VALUE}`.
The possible values are: `off`, `antifrost`, `eco`, `comfort_-2`, `comfort_-1`, `comfort`.

### Manual mode (enum)
Manual Mode.
Value can be found in the published state on the `manual_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_mode": NEW_VALUE}`.
The possible values are: `off`, `antifrost`, `eco`, `comfort_-2`, `comfort_-1`, `comfort`.

### Frost protection (binary)
When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C..
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

### Humidity (numeric)
Measured relative humidity.
Value can be found in the published state on the `humidity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Window detection (switch)
The current state of this switch is in the published state under the `window_detection` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_detection": "ON"}`, `{"window_detection": "OFF"}` or `{"window_detection": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Window opening mode (enum)
Window Opening Mode.
Value can be found in the published state on the `window_opening_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_opening_mode": NEW_VALUE}`.
The possible values are: `off`, `antifrost`, `eco`, `comfort_-2`, `comfort_-1`, `comfort`.

### Window opening mode duration (numeric)
Duration of the window opening mode.
Value can be found in the published state on the `window_opening_mode_duration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"window_opening_mode_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `90`.
The unit of this value is `min`.

### Temperature unit (enum)
Temperature unit.
Value can be found in the published state on the `temperature_unit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_unit": NEW_VALUE}`.
The possible values are: `celsius`, `fahrenheit`.

### Boost heating (binary)
Boost Heating: the device will enter the boost heating mode..
Value can be found in the published state on the `boost_heating` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_heating": NEW_VALUE}`.
If value equals `ON` boost heating is ON, if `OFF` OFF.

### Boost timeset countdown (numeric)
The remaining time for the function will be counted down in seconds ( 900 to 0 ) when the boost heating is activated..
Value can be found in the published state on the `boost_timeset_countdown` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `900`.
The unit of this value is `s`.

### Power rating (numeric)
How much power is the heater rated to. Entering a value will allow the Thermostat to record a value of power usage that can be checked under settings on the physical Thermostat.
Value can be found in the published state on the `power_rating` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_rating": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `10000`.
The unit of this value is `kWh`.

### Energy consumed (numeric)
Consumed energy.
Value can be found in the published state on the `energy_consumed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `kWh`.

### Mode switching (enum)
Choose the number of mode your heater supports..
Value can be found in the published state on the `mode_switching` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode_switching": NEW_VALUE}`.
The possible values are: `four_modes`, `six_modes`.

### Schedule monday (text)
Schedule for the auto mode. Can be defined in the following format: `mode / hours:minutes / mode`. For example: `comfort / 06:00 / eco / 12:00 / off`. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max..
Value can be found in the published state on the `schedule_monday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_monday": NEW_VALUE}`.

### Schedule tuesday (text)
Schedule for the auto mode. Can be defined in the following format: `mode / hours:minutes / mode`. For example: `comfort / 06:00 / eco / 12:00 / off`. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max..
Value can be found in the published state on the `schedule_tuesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_tuesday": NEW_VALUE}`.

### Schedule wednesday (text)
Schedule for the auto mode. Can be defined in the following format: `mode / hours:minutes / mode`. For example: `comfort / 06:00 / eco / 12:00 / off`. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max..
Value can be found in the published state on the `schedule_wednesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_wednesday": NEW_VALUE}`.

### Schedule thursday (text)
Schedule for the auto mode. Can be defined in the following format: `mode / hours:minutes / mode`. For example: `comfort / 06:00 / eco / 12:00 / off`. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max..
Value can be found in the published state on the `schedule_thursday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_thursday": NEW_VALUE}`.

### Schedule friday (text)
Schedule for the auto mode. Can be defined in the following format: `mode / hours:minutes / mode`. For example: `comfort / 06:00 / eco / 12:00 / off`. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max..
Value can be found in the published state on the `schedule_friday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_friday": NEW_VALUE}`.

### Schedule saturday (text)
Schedule for the auto mode. Can be defined in the following format: `mode / hours:minutes / mode`. For example: `comfort / 06:00 / eco / 12:00 / off`. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max..
Value can be found in the published state on the `schedule_saturday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_saturday": NEW_VALUE}`.

### Schedule sunday (text)
Schedule for the auto mode. Can be defined in the following format: `mode / hours:minutes / mode`. For example: `comfort / 06:00 / eco / 12:00 / off`. Note: Minutes can only be set by multiple of 5. Your limited to 9 modes max..
Value can be found in the published state on the `schedule_sunday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_sunday": NEW_VALUE}`.

### Holiday start stop (text)
The holiday mode will automatically start at the set time starting point and run the holiday mode. Can be defined in the following format: `startYear/startMonth/startDay startHours:startMinutes | endYear/endMonth/endDay endHours:endMinutes  | mode`. For example: `2024/12/12 09:00 | 2024/12/14 10:00 | comfort`Note: You cannot set an interval superior at 255 hours. The end date minutes will be ignore..
Value can be found in the published state on the `holiday_start_stop` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_start_stop": NEW_VALUE}`.

### Reset consumption (binary)
Reset energy consumption to zero.
Value can be found in the published state on the `reset_consumption` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reset_consumption": NEW_VALUE}`.
If value equals `ON` reset consumption is ON, if `OFF` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

