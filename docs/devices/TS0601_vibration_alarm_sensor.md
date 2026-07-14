---
title: "Tuya TS0601_vibration_alarm_sensor control via MQTT"
description: "Integrate your Tuya TS0601_vibration_alarm_sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-04-30T19:57:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_vibration_alarm_sensor

|     |     |
|-----|-----|
| Model | TS0601_vibration_alarm_sensor  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Vibration alarm sensor |
| Exposes | alarm_status, sensitivity, dismiss_alarm, silent_mode, battery_state |
| Picture | ![Tuya TS0601_vibration_alarm_sensor](https://www.zigbee2mqtt.io/images/devices/TS0601_vibration_alarm_sensor.png) |
| White-label | Lincukoo V04-Z20T, Nous E14 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Battery

Uses 2 × AAA battery

### Pairing

**Press and hold the button for 5s** to put the device in pairing mode.  
The red LED will flash until it connects.

### Button actions

- Single press
  - if buzzer is ringing: stop buzzer (dismiss current alarm)
  - if buzzer is not ringing: change sensitivity (low/middle/high: 1/2/3 beeps)
- Double press to mute / unmute alarm (normal: do-re-mi, silent: mi-re-do)
- Long press to reset

### Firmware

- Device comes with appVersion `80`  
(reported in Tuya app as Zigbee module v1.1.0 + MCU v1.0.0)  
- Subscribed to *manufacturerCode* `4417`, *imageType* `54179`
<!-- Notes END: Do not edit below this line -->




## Exposes

### Alarm status (enum)
Indicates when vibration is detected.
Value can be found in the published state on the `alarm_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `alarm`.

### Sensitivity (enum)
Sensitivity level of the sensor.
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `middle`, `high`.

### Dismiss alarm (enum)
Stop the buzzer for the current alarm.
Value can be found in the published state on the `dismiss_alarm` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"dismiss_alarm": NEW_VALUE}`.
The possible values are: `DISMISS`.

### Silent mode (binary)
Mute the buzzer for all alarms.
Value can be found in the published state on the `silent_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"silent_mode": NEW_VALUE}`.
If value equals `ON` silent mode is ON, if `OFF` OFF.

### Battery state (enum)
State of the battery.
Value can be found in the published state on the `battery_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `medium`, `high`.

