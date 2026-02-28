---
title: "SONOFF SWV-ZNU control via MQTT"
description: "Integrate your SONOFF SWV-ZNU via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-02-28T20:18:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SWV-ZNU

|     |     |
|-----|-----|
| Model | SWV-ZNU  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee smart water valve |
| Exposes | battery, switch (state), child_lock, valve_abnormal_state, irrigation_start_time, irrigation_end_time, daily_irrigation_volume, valve_work_state, rain_delay_end_datetime, weather_delay_end_datetime, longitude, latitude, weather_based_adjustment, daily_irrigation_duration, hour_irrigation_volume, hour_irrigation_duration, manual_default_settings, seasonal_watering_adjustment, irrigation_schedule_status, valve_alarm_settings, 24_hours_records, 30_days_records, 180_days_records, read_swvzf_records, irrigation_plan_settings, irrigation_plan_report, irrigation_plan_remove, rain_delay |
| Picture | ![SONOFF SWV-ZNU](https://www.zigbee2mqtt.io/images/devices/SWV-ZNU.png) |


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
The possible values are: `normal`, `water_shortage`, `water_leakage`, `water_shortage,water_leakage`, `frost_protection`, `water_shortage,frost_protection`, `water_leakage,frost_protection`, `water_shortage,water_leakage,frost_protection`, `fail_safe`, `water_shortage,fail_safe`, `water_leakage,fail_safe`, `water_shortage,water_leakage,fail_safe`, `frost_protection,fail_safe`, `water_shortage,frost_protection,fail_safe`, `water_leakage,frost_protection,fail_safe`, `water_shortage,water_leakage,frost_protection,fail_safe`.

### Irrigation start time (text)
Time when irrigation starts.
Value can be found in the published state on the `irrigation_start_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Irrigation end time (text)
Time when irrigation ends.
Value can be found in the published state on the `irrigation_end_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Daily irrigation volume (numeric)
The amount of water irrigated today.
Value can be found in the published state on the `daily_irrigation_volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"daily_irrigation_volume": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `L`.

### Valve work state (binary)
The water valve work state.
Value can be found in the published state on the `valve_work_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_work_state": ""}`.
It's not possible to write (`/set`) this value.
If value equals `working` valve work state is ON, if `idle` OFF.

### Rain delay end datetime (text)
User triggered delay end time.
Value can be found in the published state on the `rain_delay_end_datetime` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Weather delay end datetime (composite)
Weather delay end time and trigger types..
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"weather_delay_end_datetime": ""}`.
- `delay_due_to_rain` (binary): Delay due to rain allowed values: `true` or `false`
- `delay_due_to_humidity` (binary): Delay due to humidity allowed values: `true` or `false`
- `delay_due_to_frost` (binary): Delay due to frost allowed values: `true` or `false`
- `delay_end_time` (text): Delay end time. 

### Longitude (numeric)
Longitude coordinate.
Value can be found in the published state on the `longitude` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"longitude": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"longitude": NEW_VALUE}`.
The minimal value is `-180` and the maximum value is `180`.
The unit of this value is `°`.

### Latitude (numeric)
Latitude coordinate.
Value can be found in the published state on the `latitude` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"latitude": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"latitude": NEW_VALUE}`.
The minimal value is `-90` and the maximum value is `90`.
The unit of this value is `°`.

### Weather based adjustment (composite)
Weather-based irrigation delay settings.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weather_based_adjustment": {"enable_rain_delay": VALUE, "enable_humidity_delay": VALUE, "enable_frost_delay": VALUE, "rain_probability_threshold": VALUE, "frost_temperature_threshold": VALUE, "humidity_delay_threshold": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"weather_based_adjustment": ""}`.
- `enable_rain_delay` (binary): Enable rain-based 24h delay allowed values: `true` or `false`
- `enable_humidity_delay` (binary): Enable humidity-based 24h delay allowed values: `true` or `false`
- `enable_frost_delay` (binary): Enable frost-based 24h delay allowed values: `true` or `false`
- `rain_probability_threshold` (numeric): Rain probability threshold to trigger 24h delay min value is 10, max value is 90, unit is %
- `frost_temperature_threshold` (numeric): Temperature threshold to trigger 24h delay when below this value max value is 10, unit is °C
- `humidity_delay_threshold` (numeric): Humidity threshold to trigger 24h delay when exceeded min value is 40, max value is 90, unit is %

### Daily irrigation duration (numeric)
Daily irrigation duration.
Value can be found in the published state on the `daily_irrigation_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"daily_irrigation_duration": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `min`.

### Hour irrigation volume (numeric)
Hourly irrigation volume.
Value can be found in the published state on the `hour_irrigation_volume` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"hour_irrigation_volume": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `L`.

### Hour irrigation duration (numeric)
Hourly irrigation duration.
Value can be found in the published state on the `hour_irrigation_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"hour_irrigation_duration": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `min`.

### Manual default settings (composite)
Single irrigation settings.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"manual_default_settings": {"irrigation_mode": VALUE, "irrigation_total_duration": VALUE, "irrigation_duration": VALUE, "interval_duration": VALUE, "irrigation_amount_unit": VALUE, "irrigation_amount": VALUE, "fail_safe": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"manual_default_settings": ""}`.
- `irrigation_mode` (enum): Irrigation mode: duration, capacity, or duration with interval allowed values: `duration`, `capacity`, `duration_with_interval`
- `irrigation_total_duration` (numeric): Total irrigation duration max value is 719, unit is min
- `irrigation_duration` (numeric): Irrigation duration min value is 1, max value is 60, unit is min
- `interval_duration` (numeric): Irrigation interval min value is 1, max value is 60, unit is min
- `irrigation_amount_unit` (enum): Capacity unit allowed values: `gallon`, `liter`
- `irrigation_amount` (numeric): Irrigation volume max value is 10000
- `fail_safe` (numeric): Safety protection timeout max value is 719, unit is min

### Seasonal watering adjustment (composite)
Monthly watering adjustment multiplier (1.0 = 100%, 2.0 = 200%).
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"seasonal_watering_adjustment": {"january": VALUE, "february": VALUE, "march": VALUE, "april": VALUE, "may": VALUE, "june": VALUE, "july": VALUE, "august": VALUE, "september": VALUE, "october": VALUE, "november": VALUE, "december": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"seasonal_watering_adjustment": ""}`.
- `january` (numeric): Adjustment multiplier for january min value is 0.1, max value is 2
- `february` (numeric): Adjustment multiplier for february min value is 0.1, max value is 2
- `march` (numeric): Adjustment multiplier for march min value is 0.1, max value is 2
- `april` (numeric): Adjustment multiplier for april min value is 0.1, max value is 2
- `may` (numeric): Adjustment multiplier for may min value is 0.1, max value is 2
- `june` (numeric): Adjustment multiplier for june min value is 0.1, max value is 2
- `july` (numeric): Adjustment multiplier for july min value is 0.1, max value is 2
- `august` (numeric): Adjustment multiplier for august min value is 0.1, max value is 2
- `september` (numeric): Adjustment multiplier for september min value is 0.1, max value is 2
- `october` (numeric): Adjustment multiplier for october min value is 0.1, max value is 2
- `november` (numeric): Adjustment multiplier for november min value is 0.1, max value is 2
- `december` (numeric): Adjustment multiplier for december min value is 0.1, max value is 2

### Irrigation schedule status (composite)
Irrigation schedule execution status.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"irrigation_schedule_status": ""}`.
- `schedule_status` (enum): Schedule status allowed values: `start`, `end`, `running`, `standby`
- `schedule_index` (numeric): Schedule index 
- `schedule_type` (enum): Schedule type allowed values: `automatic`, `manual`
- `irrigation_mode` (enum): Irrigation mode allowed values: `duration`, `capacity`, `duration_with_interval`
- `start_time` (text): Schedule start time in ISO format with timezone 
- `expected_end_time` (text): Expected end time in ISO format with timezone 
- `actual_end_time` (text): Actual end time in ISO format with timezone 
- `irrigation_amount_unit` (enum): Irrigation amount unit allowed values: `gallon`, `liter`
- `expected_irrigation_amount` (numeric): Expected irrigation amount 
- `actual_irrigation_amount` (numeric): Actual irrigation amount 

### Valve alarm settings (composite)
Valve alarm settings.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_alarm_settings": {"enable_alarm_water_shortage": VALUE, "enable_alarm_water_leak": VALUE, "enable_frost_protection": VALUE, "enable_water_shortage_auto_close": VALUE, "enable_water_leak_auto_close": VALUE, "alarm_water_shortage_duration": VALUE, "alarm_water_leak_duration": VALUE, "set_frost_temperature": VALUE}}`
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_alarm_settings": ""}`.
- `enable_alarm_water_shortage` (binary): Water shortage alarm allowed values: `true` or `false`
- `enable_alarm_water_leak` (binary): Water leak alarm allowed values: `true` or `false`
- `enable_frost_protection` (binary): Frost protection allowed values: `true` or `false`
- `enable_water_shortage_auto_close` (binary): Auto close valve on water shortage allowed values: `true` or `false`
- `enable_water_leak_auto_close` (binary): Auto close valve on water leak allowed values: `true` or `false`
- `alarm_water_shortage_duration` (numeric): Water shortage trigger alarm duration min value is 1, max value is 10, unit is min
- `alarm_water_leak_duration` (numeric): Water leak trigger alarm duration min value is 1, max value is 3, unit is min
- `set_frost_temperature` (numeric): Frost protection temperature max value is 10, unit is °C

### 24 hours records (text)
Value can be found in the published state on the `24_hours_records` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### 30 days records (text)
Value can be found in the published state on the `30_days_records` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### 180 days records (text)
Value can be found in the published state on the `180_days_records` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Read swvzf records (composite)
Read irrigation water volume and duration in the past 24 hours, 30 days, and 6 months..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"read_swvzf_records": {"type": VALUE, "time_start": VALUE, "time_end": VALUE}}`
- `type` (enum): Reading type allowed values: `24_hours`, `30_days`, `6_months`
- `time_start` (text): Start time 
- `time_end` (text): End time 

### Irrigation plan settings (composite)
Set irrigation plan.
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_settings": {"plan_index": VALUE, "enable_state": VALUE, "loop_type_mode": VALUE, "loop_type_interval_days": VALUE, "loop_type_week_days": VALUE, "enable_date": VALUE, "start_time": VALUE, "irrigation_mode": VALUE, "irrigation_total_duration": VALUE, "irrigation_duration": VALUE, "interval_duration": VALUE, "irrigation_amount_unit": VALUE, "irrigation_amount": VALUE, "fail_safe": VALUE, "create_datetime": VALUE}}`
- `plan_index` (numeric): Plan index max value is 5
- `enable_state` (binary) allowed values: `true` or `false`
- `loop_type_mode` (enum) allowed values: `odd_days`, `even_days`, `day_interval`, `weekdays`
- `loop_type_interval_days` (numeric): Only effective when loop_type_mode is day_interval min value is 1, max value is 30
- `loop_type_week_days` (composite): Only effective when loop_type_mode is weekdays 
- `enable_date` (text): Enable date in local YYYY-MM-DD format (fixed at 00:00:00 local day start). Omit to use current local date 
- `start_time` (text): Start time in local HH:mm format (24-hour, zero-padded), converted to seconds from start of local day. Omit to use current local time rounded to minute 
- `irrigation_mode` (enum) allowed values: `duration`, `capacity`, `duration_with_interval`
- `irrigation_total_duration` (numeric) max value is 719, unit is min
- `irrigation_duration` (numeric) min value is 1, max value is 60, unit is min
- `interval_duration` (numeric) min value is 1, max value is 60, unit is min
- `irrigation_amount_unit` (enum) allowed values: `gallon`, `liter`
- `irrigation_amount` (numeric) min value is 1, max value is 10000
- `fail_safe` (numeric) max value is 719, unit is min
- `create_datetime` (text): Create datetime in ISO format with timezone (e.g. YYYY-MM-DDTHH:mm:ss+08:00) 

### Irrigation plan report (composite)
Irrigation plan report.
- `plan_index` (numeric) 
- `enable_state` (binary) allowed values: `true` or `false`
- `loop_type_mode` (enum) allowed values: `odd_days`, `even_days`, `day_interval`, `weekdays`
- `loop_type_interval_days` (numeric): Effective when loop_type_mode is day_interval 
- `loop_type_week_days` (composite): Effective when loop_type_mode is weekdays 
- `enable_date` (text): Enable date in local YYYY-MM-DD format (local day start) 
- `start_time` (text): Start time in local HH:mm format (24-hour) 
- `irrigation_mode` (enum) allowed values: `duration`, `capacity`, `duration_with_interval`
- `irrigation_total_duration` (numeric) 
- `irrigation_duration` (numeric) 
- `interval_duration` (numeric) 
- `irrigation_amount_unit` (enum) allowed values: `gallon`, `liter`
- `irrigation_amount` (numeric) 
- `fail_safe` (numeric) 
- `create_datetime` (text): Create datetime in ISO format with timezone (e.g. YYYY-MM-DDTHH:mm:ss+08:00) 

### Irrigation plan remove (numeric)
The index of the irrigation plan to remove.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"irrigation_plan_remove": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5`.

### Rain delay (text)
Schedule delay end time in ISO format with timezone (e.g. YYYY-MM-DDTHH:mm:ss+08:00).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"rain_delay": NEW_VALUE}`.

