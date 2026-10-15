---
title: "Novato ZAS-01P control via MQTT"
description: "Integrate your Novato ZAS-01P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:29:03.108Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Novato ZAS-01P

|     |     |
|-----|-----|
| Model | ZAS-01P  |
| Vendor  | [Novato](/supported-devices/#v=Novato)  |
| Description | Smart siren with night light |
| Exposes | alarm_state, volume, duration, melody, night_light, light_mode |
| Picture | ![Novato ZAS-01P](https://www.zigbee2mqtt.io/images/devices/ZAS-01P.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Alarm state (enum)
Trigger the alarm (sound, light or both) for the configured duration, or stop it with 'normal'.
Value can be found in the published state on the `alarm_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_state": NEW_VALUE}`.
The possible values are: `normal`, `alarm_sound`, `alarm_light`, `alarm_sound_light`.

### Volume (enum)
Alarm volume.
Value can be found in the published state on the `volume` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"volume": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Duration (numeric)
How long the alarm sounds for when triggered.
Value can be found in the published state on the `duration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"duration": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `1800`.
The unit of this value is `s`.

### Melody (enum)
Alarm melody.
Value can be found in the published state on the `melody` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"melody": NEW_VALUE}`.
The possible values are: `doorbell`, `alarm_1`, `alarm_2`, `alarm_clock`, `notification`, `countdown`, `emergency_button`, `fall_detected`, `equipment_moved`, `carbon_dioxide`, `circuit_breaker`, `door_open`, `window_open`, `air_quality`, `motion_detected`, `person_detected`, `camera`, `vibration`, `ambient_temperature`, `target_temperature_reached`, `heating`, `water_level_alarm`, `valve_closed`, `scheduled_task`, `door_lock_alarm`, `smoke_alarm`, `gas_alarm`, `low_battery`, `water_leak_alarm`, `device_offline`, `alarm_system_disarmed`, `alarm_system_armed`.

### Night light (binary)
Night light.
Value can be found in the published state on the `night_light` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"night_light": NEW_VALUE}`.
If value equals `ON` night light is ON, if `OFF` OFF.

### Light mode (enum)
Light mode.
Value can be found in the published state on the `light_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode": NEW_VALUE}`.
The possible values are: `breathing`, `red_flash`, `white`.

