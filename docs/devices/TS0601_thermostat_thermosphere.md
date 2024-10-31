---
title: "TuYa TS0601_thermostat_thermosphere control via MQTT"
description: "Integrate your TuYa TS0601_thermostat_thermosphere via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-10-31T20:34:53
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa TS0601_thermostat_thermosphere

|     |     |
|-----|-----|
| Model | TS0601_thermostat_thermosphere  |
| Vendor  | [TuYa](/supported-devices/#v=TuYa)  |
| Description | ThermoSphere thermostat |
| Exposes | climate (system_mode, current_heating_setpoint, local_temperature), sensor_mode, adaptive_start, max_temperature_limit, min_temperature_limit, boost, display_brightness, holiday_start_stop, holiday_temperature, frost_protection, switch_delay, power_rating, open_window_active, open_window_sensing_time, open_window_drop_limit, open_window_off_time, linkquality |
| Picture | ![TuYa TS0601_thermostat_thermosphere](https://www.zigbee2mqtt.io/images/devices/TS0601_thermostat_thermosphere.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Climate 
This climate device supports the following features: `system_mode`, `current_heating_setpoint`, `local_temperature`.
- `current_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"current_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. Reading (`/get`) this attribute is not possible.
- `local_temperature`: Current temperature measured on the device (in °C). Reading (`/get`) this attribute is not possible.
- `system_mode`: Whether the thermostat is turned on or off. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`. Reading (`/get`) this attribute is not possible.

### Sensor mode (enum)
What type of sensor are you using to meausure the temperature of the floor?.
Value can be found in the published state on the `sensor_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_mode": NEW_VALUE}`.
The possible values are: `room_temperature`, `floor_temperature`, `room_with_floor_limit`.

### Adaptive start (binary)
Preheat the room to the desired tempature before the scheduled start time..
Value can be found in the published state on the `adaptive_start` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"adaptive_start": NEW_VALUE}`.
If value equals `ON` adaptive start is ON, if `OFF` OFF.

### Max temperature limit (numeric)
Maximum temperature (default: 35 ºC).
Value can be found in the published state on the `max_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_temperature_limit": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.

### Min temperature limit (numeric)
Minimum temperature limit for frost protection. Turns the thermostat on regardless of setpoint if the temperature drops below this..
Value can be found in the published state on the `min_temperature_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_temperature_limit": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `5`.
The unit of this value is `°C`.

### Boost (enum)
Override the schedule and boost at the current temperature until turned off.
Value can be found in the published state on the `boost` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"boost": NEW_VALUE}`.
The possible values are: `ON`, `OFF`.

### Display brightness (numeric)
Brightness of the display when in use.
Value can be found in the published state on the `display_brightness` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"display_brightness": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### Holiday start stop (numeric)
Set the number of days of holiday, this will start immediately..
Value can be found in the published state on the `holiday_start_stop` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_start_stop": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `99`.

### Holiday temperature (numeric)
Holiday temperature.
Value can be found in the published state on the `holiday_temperature` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"holiday_temperature": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `35`.
The unit of this value is `°C`.

### Frost protection (binary)
Turning on will keep heating at the minimum temperature limit.
Value can be found in the published state on the `frost_protection` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection": NEW_VALUE}`.
If value equals `ON` frost protection is ON, if `OFF` OFF.

### Switch delay (numeric)
How long to wait between making a change and it taking effect.
Value can be found in the published state on the `switch_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_delay": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `90`.
The unit of this value is `s`.

### Power rating (numeric)
How much power is the underfloor heating rated to. Entering a value will allow the Thermostat to record a value of power usage that can be checked under settings on the physical Thermostat.
Value can be found in the published state on the `power_rating` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_rating": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `4500`.
The unit of this value is `W`.

### Open window active (binary)
When active the heating will cut off if an Open Window is detected.
Value can be found in the published state on the `open_window_active` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window_active": NEW_VALUE}`.
If value equals `ON` open window active is ON, if `OFF` OFF.

### Open window sensing time (numeric)
The duration that the drop in temperature needs to occur over.
Value can be found in the published state on the `open_window_sensing_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window_sensing_time": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `30`.
The unit of this value is `minutes`.

### Open window drop limit (numeric)
The drop in ambient room temperature that will trigger an open window warning.
Value can be found in the published state on the `open_window_drop_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window_drop_limit": NEW_VALUE}`.
The minimal value is `2` and the maximum value is `4`.
The unit of this value is `C`.

### Open window off time (numeric)
The length of time the drop in temperature must be consistent for to turn the heating off.
Value can be found in the published state on the `open_window_off_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window_off_time": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `60`.
The unit of this value is `minutes`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

