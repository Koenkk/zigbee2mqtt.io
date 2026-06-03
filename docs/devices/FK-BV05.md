---
title: "FrankEver FK-BV05 control via MQTT"
description: "Integrate your FrankEver FK-BV05 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-31T19:17:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# FrankEver FK-BV05

|     |     |
|-----|-----|
| Model | FK-BV05  |
| Vendor  | [FrankEver](/supported-devices/#v=FrankEver)  |
| Description | Zigbee smart water valve with flow meter and temperature sensor |
| Exposes | switch (state), threshold, position, power_off_state, weather_delay, countdown, water_temperature, water_consumed_last, water_consumed_total, water_leakage_state, single_irrigation_switch, single_irrigation_set, day_irrigation_switch, day_irrigation_set, water_volume_alarm_switch, water_volume_alarm_set, water_temp_alarm_switch, water_temp_alarm_max, water_temp_alarm_min, creep_switch |
| Picture | ![FrankEver FK-BV05](https://www.zigbee2mqtt.io/images/devices/FK-BV05.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Threshold (numeric)
Target valve opening percentage.
Value can be found in the published state on the `threshold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"threshold": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Position (numeric)
Current valve position.
Value can be found in the published state on the `position` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Power off state (enum)
Power-off status behavior.
Value can be found in the published state on the `power_off_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_off_state": NEW_VALUE}`.
The possible values are: `off`, `on`, `maintain`.

### Weather delay (enum)
Weather delay.
Value can be found in the published state on the `weather_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weather_delay": NEW_VALUE}`.
The possible values are: `cancel`, `24h`, `48h`, `72h`.

### Countdown (numeric)
Irrigation Duration (countdown in seconds).
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `86400`.
The unit of this value is `s`.

### Water temperature (numeric)
Water temperature.
Value can be found in the published state on the `water_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Water consumed last (numeric)
Single water consumption (Last irrigation).
Value can be found in the published state on the `water_consumed_last` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `L`.

### Water consumed total (numeric)
Daily water consumption total.
Value can be found in the published state on the `water_consumed_total` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `L`.

### Water leakage state (enum)
Leak detection status.
Value can be found in the published state on the `water_leakage_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `water_leakage_yes`, `water_leakage_no`.

### Single irrigation switch (binary)
Enable single irrigation volume limit.
Value can be found in the published state on the `single_irrigation_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"single_irrigation_switch": NEW_VALUE}`.
If value equals `ON` single irrigation switch is ON, if `OFF` OFF.

### Single irrigation set (numeric)
Single irrigation water volume setting.
Value can be found in the published state on the `single_irrigation_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"single_irrigation_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `L`.

### Day irrigation switch (binary)
Enable daily irrigation volume limit.
Value can be found in the published state on the `day_irrigation_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"day_irrigation_switch": NEW_VALUE}`.
If value equals `ON` day irrigation switch is ON, if `OFF` OFF.

### Day irrigation set (numeric)
Daily irrigation water volume setting.
Value can be found in the published state on the `day_irrigation_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"day_irrigation_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `L`.

### Water volume alarm switch (binary)
Water volume alarm switch.
Value can be found in the published state on the `water_volume_alarm_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"water_volume_alarm_switch": NEW_VALUE}`.
If value equals `ON` water volume alarm switch is ON, if `OFF` OFF.

### Water volume alarm set (numeric)
Alarm water volume setting value.
Value can be found in the published state on the `water_volume_alarm_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"water_volume_alarm_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `L`.

### Water temp alarm switch (binary)
Water temperature alarm switch.
Value can be found in the published state on the `water_temp_alarm_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"water_temp_alarm_switch": NEW_VALUE}`.
If value equals `ON` water temp alarm switch is ON, if `OFF` OFF.

### Water temp alarm max (numeric)
Alarm water temperature maximum setting.
Value can be found in the published state on the `water_temp_alarm_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"water_temp_alarm_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `120`.
The unit of this value is `°C`.

### Water temp alarm min (numeric)
Alarm water temperature minimum setting.
Value can be found in the published state on the `water_temp_alarm_min` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"water_temp_alarm_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `120`.
The unit of this value is `°C`.

### Creep switch (binary)
Peristaltic function switch (Auto cycle anti-calc) - KEEP OFF for normal use.
Value can be found in the published state on the `creep_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"creep_switch": NEW_VALUE}`.
If value equals `ON` creep switch is ON, if `OFF` OFF.

