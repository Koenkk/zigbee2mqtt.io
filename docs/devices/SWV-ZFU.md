---
title: "SONOFF SWV-ZFU control via MQTT"
description: "Integrate your SONOFF SWV-ZFU via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-02-28T20:18:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SWV-ZFU

|     |     |
|-----|-----|
| Model | SWV-ZFU  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee smart water valve |
| Exposes | battery, switch (state), child_lock, valve_abnormal_state, manual_irrigation_duration, manual_irrigation_mode, manual_irrigation_amount_unit, manual_irrigation_amount, manual_fail_safe, irrigation_plan_index, irrigation_plan_enabled, irrigation_plan_loop_type, irrigation_plan_interval_days, irrigation_plan_sunday, irrigation_plan_monday, irrigation_plan_tuesday, irrigation_plan_wednesday, irrigation_plan_thursday, irrigation_plan_friday, irrigation_plan_saturday, irrigation_plan_enable_date, irrigation_plan_start_time, irrigation_plan_mode, irrigation_plan_total_duration, irrigation_plan_duration, irrigation_plan_interval_duration, irrigation_plan_amount_unit, irrigation_plan_amount, irrigation_plan_fail_safe, irrigation_plan_create_datetime, irrigation_plan_remove_plan_index, irrigation_schedule_status, rain_delay, rain_delay_end_datetime, seasonal_watering_adjustment_january, seasonal_watering_adjustment_february, seasonal_watering_adjustment_march, seasonal_watering_adjustment_april, seasonal_watering_adjustment_may, seasonal_watering_adjustment_june, seasonal_watering_adjustment_july, seasonal_watering_adjustment_august, seasonal_watering_adjustment_september, seasonal_watering_adjustment_october, seasonal_watering_adjustment_november, seasonal_watering_adjustment_december, enable_alarm_water_shortage, enable_alarm_water_leak, enable_water_shortage_auto_close, alarm_water_shortage_duration, alarm_water_leak_duration, real_time_irrigation_duration, real_time_irrigation_volume, hour_irrigation_duration, hour_irrigation_volume, 24_hours_records, 30_days_records, 180_days_records, read_swvzf_records |
| Picture | ![SONOFF SWV-ZFU](https://www.zigbee2mqtt.io/images/devices/SWV-ZFU.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands.
Support depends on the switch firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Valve abnormal state (enum)
Valve abnormal state.
Value can be found in the published state on the `valve_abnormal_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `water_shortage`, `water_leakage`, `water_shortage,water_leakage`, `fail_safe`, `water_shortage,fail_safe`, `water_leakage,fail_safe`, `water_shortage,water_leakage,fail_safe`.

### Manual irrigation duration (numeric)
Default duration for manual irrigation.
Value can be found in the published state on the `manual_irrigation_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_irrigation_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_irrigation_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `719`.
The unit of this value is `min`.

### Manual irrigation mode (enum)
Default mode for manual irrigation.
Value can be found in the published state on the `manual_irrigation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_irrigation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_irrigation_mode": NEW_VALUE}`.
The possible values are: `duration`, `capacity`.

### Manual irrigation amount unit (enum)
Default manual irrigation unit.
Value can be found in the published state on the `manual_irrigation_amount_unit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_irrigation_amount_unit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_irrigation_amount_unit": NEW_VALUE}`.
The possible values are: `US gallon`, `liter`.

### Manual irrigation amount (numeric)
Default manual irrigation amount.
Value can be found in the published state on the `manual_irrigation_amount` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_irrigation_amount": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_irrigation_amount": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.

### Manual fail safe (numeric)
Manual irrigation safety timeout.
Value can be found in the published state on the `manual_fail_safe` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_fail_safe": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_fail_safe": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `719`.
The unit of this value is `min`.

### Irrigation plan index (numeric)
Irrigation plan index.
Value can be found in the published state on the `irrigation_plan_index` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_index": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_index": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5`.

### Irrigation plan enabled (binary)
Enable the selected irrigation plan.
Value can be found in the published state on the `irrigation_plan_enabled` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_enabled": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_enabled": NEW_VALUE}`.
If value equals `true` irrigation plan enabled is ON, if `false` OFF.

### Irrigation plan loop type (enum)
Repeat mode for the selected irrigation plan.
Value can be found in the published state on the `irrigation_plan_loop_type` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_loop_type": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_loop_type": NEW_VALUE}`.
The possible values are: `odd_days`, `even_days`, `day_interval`, `weekdays`.

### Irrigation plan interval days (numeric)
Repeat interval in days when loop type is day_interval.
Value can be found in the published state on the `irrigation_plan_interval_days` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_interval_days": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_interval_days": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `30`.

### Irrigation plan sunday (binary)
Run the selected irrigation plan on sunday.
Value can be found in the published state on the `irrigation_plan_sunday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_sunday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_sunday": NEW_VALUE}`.
If value equals `true` irrigation plan sunday is ON, if `false` OFF.

### Irrigation plan monday (binary)
Run the selected irrigation plan on monday.
Value can be found in the published state on the `irrigation_plan_monday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_monday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_monday": NEW_VALUE}`.
If value equals `true` irrigation plan monday is ON, if `false` OFF.

### Irrigation plan tuesday (binary)
Run the selected irrigation plan on tuesday.
Value can be found in the published state on the `irrigation_plan_tuesday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_tuesday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_tuesday": NEW_VALUE}`.
If value equals `true` irrigation plan tuesday is ON, if `false` OFF.

### Irrigation plan wednesday (binary)
Run the selected irrigation plan on wednesday.
Value can be found in the published state on the `irrigation_plan_wednesday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_wednesday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_wednesday": NEW_VALUE}`.
If value equals `true` irrigation plan wednesday is ON, if `false` OFF.

### Irrigation plan thursday (binary)
Run the selected irrigation plan on thursday.
Value can be found in the published state on the `irrigation_plan_thursday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_thursday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_thursday": NEW_VALUE}`.
If value equals `true` irrigation plan thursday is ON, if `false` OFF.

### Irrigation plan friday (binary)
Run the selected irrigation plan on friday.
Value can be found in the published state on the `irrigation_plan_friday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_friday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_friday": NEW_VALUE}`.
If value equals `true` irrigation plan friday is ON, if `false` OFF.

### Irrigation plan saturday (binary)
Run the selected irrigation plan on saturday.
Value can be found in the published state on the `irrigation_plan_saturday` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_saturday": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_saturday": NEW_VALUE}`.
If value equals `true` irrigation plan saturday is ON, if `false` OFF.

### Irrigation plan enable date (text)
Enable date in local YYYY-MM-DD format.
Value can be found in the published state on the `irrigation_plan_enable_date` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_enable_date": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_enable_date": NEW_VALUE}`.

### Irrigation plan start time (text)
Start time in local HH:mm format.
Value can be found in the published state on the `irrigation_plan_start_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_start_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_start_time": NEW_VALUE}`.

### Irrigation plan mode (enum)
Irrigation mode for the selected plan.
Value can be found in the published state on the `irrigation_plan_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_mode": NEW_VALUE}`.
The possible values are: `duration`, `capacity`, `duration_with_interval`.

### Irrigation plan total duration (numeric)
Total duration for the selected irrigation plan.
Value can be found in the published state on the `irrigation_plan_total_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_total_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_total_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `719`.
The unit of this value is `min`.

### Irrigation plan duration (numeric)
Irrigation duration for the selected plan.
Value can be found in the published state on the `irrigation_plan_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `60`.
The unit of this value is `min`.

### Irrigation plan interval duration (numeric)
Pause duration between irrigation cycles.
Value can be found in the published state on the `irrigation_plan_interval_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_interval_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_interval_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `60`.
The unit of this value is `min`.

### Irrigation plan amount unit (enum)
Water amount unit for the selected irrigation plan.
Value can be found in the published state on the `irrigation_plan_amount_unit` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_amount_unit": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_amount_unit": NEW_VALUE}`.
The possible values are: `US gallon`, `liter`.

### Irrigation plan amount (numeric)
Water amount for the selected irrigation plan.
Value can be found in the published state on the `irrigation_plan_amount` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_amount": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_amount": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10000`.

### Irrigation plan fail safe (numeric)
Safety timeout for the selected irrigation plan.
Value can be found in the published state on the `irrigation_plan_fail_safe` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_fail_safe": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_fail_safe": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `719`.
The unit of this value is `min`.

### Irrigation plan create datetime (text)
Create datetime in ISO format with timezone (e.g. YYYY-MM-DDTHH:mm:ss+08:00).
Value can be found in the published state on the `irrigation_plan_create_datetime` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_plan_create_datetime": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_create_datetime": NEW_VALUE}`.

### Irrigation plan remove plan index (numeric)
Index of the irrigation plan to remove.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_remove_plan_index": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5`.

### Irrigation schedule status (composite)
Irrigation schedule execution status.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_schedule_status": ""}`.
- `schedule_status` (enum): Schedule status allowed values: `start`, `end`, `running`, `standby`
- `schedule_index` (numeric): Schedule index 
- `schedule_type` (enum): Schedule type allowed values: `automatic`, `manual`
- `irrigation_mode` (enum): Irrigation mode allowed values: `duration`, `capacity`, `duration_with_interval`
- `start_time` (text): Schedule start time 
- `expected_end_time` (text): Expected end time 
- `actual_end_time` (text): Actual end time 
- `irrigation_amount_unit` (enum): Irrigation amount unit allowed values: `US gallon`, `liter`
- `expected_irrigation_amount` (numeric): Expected irrigation amount 
- `actual_irrigation_amount` (numeric): Actual irrigation amount 

### Rain delay (text)
Schedule delay end time in ISO format with timezone (e.g. YYYY-MM-DDTHH:mm:ss+08:00), or "0" to disable.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rain_delay": NEW_VALUE}`.

### Rain delay end datetime (text)
User triggered delay end time..
Value can be found in the published state on the `rain_delay_end_datetime` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Seasonal watering adjustment january (numeric)
Watering adjustment multiplier for january (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_january` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_january": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_january": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Seasonal watering adjustment february (numeric)
Watering adjustment multiplier for february (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_february` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_february": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_february": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Seasonal watering adjustment march (numeric)
Watering adjustment multiplier for march (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_march` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_march": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_march": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Seasonal watering adjustment april (numeric)
Watering adjustment multiplier for april (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_april` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_april": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_april": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Seasonal watering adjustment may (numeric)
Watering adjustment multiplier for may (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_may` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_may": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_may": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Seasonal watering adjustment june (numeric)
Watering adjustment multiplier for june (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_june` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_june": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_june": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Seasonal watering adjustment july (numeric)
Watering adjustment multiplier for july (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_july` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_july": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_july": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Seasonal watering adjustment august (numeric)
Watering adjustment multiplier for august (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_august` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_august": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_august": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Seasonal watering adjustment september (numeric)
Watering adjustment multiplier for september (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_september` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_september": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_september": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Seasonal watering adjustment october (numeric)
Watering adjustment multiplier for october (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_october` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_october": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_october": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Seasonal watering adjustment november (numeric)
Watering adjustment multiplier for november (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_november` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_november": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_november": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Seasonal watering adjustment december (numeric)
Watering adjustment multiplier for december (1.0 = 100%, 2.0 = 200%).
Value can be found in the published state on the `seasonal_watering_adjustment_december` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment_december": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment_december": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `2`.

### Enable alarm water shortage (binary)
Water shortage alarm.
Value can be found in the published state on the `enable_alarm_water_shortage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_alarm_water_shortage": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_alarm_water_shortage": NEW_VALUE}`.
If value equals `true` enable alarm water shortage is ON, if `false` OFF.

### Enable alarm water leak (binary)
Water leak alarm.
Value can be found in the published state on the `enable_alarm_water_leak` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_alarm_water_leak": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_alarm_water_leak": NEW_VALUE}`.
If value equals `true` enable alarm water leak is ON, if `false` OFF.

### Enable water shortage auto close (binary)
Auto close valve on water shortage.
Value can be found in the published state on the `enable_water_shortage_auto_close` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_water_shortage_auto_close": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_water_shortage_auto_close": NEW_VALUE}`.
If value equals `true` enable water shortage auto close is ON, if `false` OFF.

### Alarm water shortage duration (numeric)
Water shortage trigger alarm duration.
Value can be found in the published state on the `alarm_water_shortage_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_water_shortage_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_water_shortage_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.
The unit of this value is `min`.

### Alarm water leak duration (numeric)
Water leak trigger alarm duration.
Value can be found in the published state on the `alarm_water_leak_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"alarm_water_leak_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_water_leak_duration": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `3`.
The unit of this value is `min`.

### Real time irrigation duration (numeric)
Real-time irrigation duration.
Value can be found in the published state on the `real_time_irrigation_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"real_time_irrigation_duration": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `min`.

### Real time irrigation volume (numeric)
The amount of water irrigated in real time.
Value can be found in the published state on the `real_time_irrigation_volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"real_time_irrigation_volume": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `L`.

### Hour irrigation duration (numeric)
Hourly irrigation duration.
Value can be found in the published state on the `hour_irrigation_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"hour_irrigation_duration": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `min`.

### Hour irrigation volume (numeric)
Hourly irrigation volume.
Value can be found in the published state on the `hour_irrigation_volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"hour_irrigation_volume": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `L`.

### 24 hours records (text)
Value can be found in the published state on the `24_hours_records` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### 30 days records (text)
Value can be found in the published state on the `30_days_records` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### 180 days records (text)
Value can be found in the published state on the `180_days_records` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Read irrigation history (composite)
Read irrigation water volume and duration in the past 24 hours, 30 days, and 6 months..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"read_swvzf_records": {"type": VALUE, "time_start": VALUE, "time_end": VALUE}}`
- `type` (enum): Reading type allowed values: `24_hours`, `30_days`, `6_months`
- `time_start` (text): Start time in ISO format with timezone (e.g. YYYY-MM-DDTHH:mm:ss+08:00) 
- `time_end` (text): End time in ISO format with timezone (e.g. YYYY-MM-DDTHH:mm:ss+08:00) 

