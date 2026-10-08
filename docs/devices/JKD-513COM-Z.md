---
title: "Moes JKD-513COM-Z control via MQTT"
description: "Integrate your Moes JKD-513COM-Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-07-30T18:55:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Moes JKD-513COM-Z

|     |     |
|-----|-----|
| Model | JKD-513COM-Z  |
| Vendor  | [Moes](/supported-devices/#v=Moes)  |
| Description | Dual smoke & CO alarm |
| Exposes | smoke, smoke_state, alarm_volume, battery, silence, alarm_switch, carbon_monoxide |
| Picture | ![Moes JKD-513COM-Z](https://www.zigbee2mqtt.io/images/devices/JKD-513COM-Z.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Smoke (binary)
Indicates whether the device detected smoke.
Value can be found in the published state on the `smoke` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke is ON, if `false` OFF.

### Smoke sensor status (enum)
Possible states: alarm, none, detecting, unknown.
Value can be found in the published state on the `smoke_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `alarm`, `none`, `detecting`, `unknown`.

### Alarm volume (enum)
Alarm volume.
Value can be found in the published state on the `alarm_volume` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_volume": NEW_VALUE}`.
The possible values are: `mute`, `low`, `medium`, `high`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Silence (binary)
Silence the alarm.
Value can be found in the published state on the `silence` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"silence": NEW_VALUE}`.
If value equals `true` silence is ON, if `false` OFF.

### Alarm switch (binary)
Disable the alarm.
Value can be found in the published state on the `alarm_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_switch": NEW_VALUE}`.
If value equals `true` alarm switch is ON, if `false` OFF.

### Carbon monoxide (binary)
Indicates if CO (carbon monoxide) is detected.
Value can be found in the published state on the `carbon_monoxide` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` carbon monoxide is ON, if `false` OFF.

