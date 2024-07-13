---
title: "Tuya TS0601_thermostat_4 control via MQTT"
description: "Integrate your Tuya TS0601_thermostat_4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-30T19:41:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_thermostat_4

|     |     |
|-----|-----|
| Model | TS0601_thermostat_4  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Thermostatic radiator valve |
| Exposes | lock (state), battery, battery_low, climate (current_heating_setpoint, local_temperature, preset, system_mode, local_temperature_calibration), schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, holiday_temperature, comfort_temperature, eco_temperature, scale_protection, frost_protection, error, boost_heating, linkquality |
| Picture | ![Tuya TS0601_thermostat_4](https://www.zigbee2mqtt.io/images/devices/TS0601_thermostat_4.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Child lock (lock)
The current state of this lock is in the published state under the `child_lock` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": "LOCK"}` or `{"child_lock": "UNLOCK"}`.
It's not possible to read (`/get`) this value.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Climate 
This climate device supports the following features: `current_heating_setpoint`, `local_temperature`, `preset`, `system_mode`, `local_temperature_calibration`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `preset`: Mode of this device (similar to system_mode). To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": VALUE}` where `VALUE` is one of: `schedule`, `holiday`, `manual`, `comfort`, `eco`. Reading (`/get`) this attribute is not possible.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. Reading (`/get`) this attribute is not possible.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`The minimal value is `-3` and the maximum value is `3` with a step size of `1`.

### Schedule monday (text)
Schedule for monday, format: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_monday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_monday": NEW_VALUE}`.

### Schedule tuesday (text)
Schedule for tuesday, format: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_tuesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_tuesday": NEW_VALUE}`.

### Schedule wednesday (text)
Schedule for wednesday, format: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_wednesday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_wednesday": NEW_VALUE}`.

### Schedule thursday (text)
Schedule for thursday, format: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_thursday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_thursday": NEW_VALUE}`.

### Schedule friday (text)
Schedule for friday, format: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_friday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_friday": NEW_VALUE}`.

### Schedule saturday (text)
Schedule for saturday, format: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_saturday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_saturday": NEW_VALUE}`.

### Schedule sunday (text)
Schedule for sunday, format: "HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C".
Value can be found in the published state on the `schedule_sunday` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"schedule_sunday": NEW_VALUE}`.

### Holiday temperature (numeric)
Holiday temperature.
Value can be found in the published state on the `holiday_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_temperature": NEW_VALUE}`.
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

### Scale protection (binary)
If the heat sink is not fully opened within two weeks or is not used for a long time, the valve will be blocked due to silting up and the heat sink will not be able to be used. To ensure normal use of the heat sink, the controller will automatically open the valve fully every two weeks. It will run for 30 seconds per time with the screen displaying "Ad", then return to its normal working state again..
Value can be found in the published state on the `scale_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scale_protection": NEW_VALUE}`.
If value equals `ON` scale protection is ON, if `OFF` OFF.

### Frost protection (binary)
When the room temperature is lower than 5 °C, the valve opens; when the temperature rises to 8 °C, the valve closes..
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

### Error (numeric)
If NTC is damaged, "Er" will be on the TRV display..
Value can be found in the published state on the `error` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Boost heating (binary)
Boost Heating: the device will enter the boost heating mode..
Value can be found in the published state on the `boost_heating` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost_heating": NEW_VALUE}`.
If value equals `ON` boost heating is ON, if `OFF` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

