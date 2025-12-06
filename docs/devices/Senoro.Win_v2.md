---
title: "Senoro Senoro.Win v2 control via MQTT"
description: "Integrate your Senoro Senoro.Win v2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-12-06T20:11:28
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Senoro Senoro.Win v2

|     |     |
|-----|-----|
| Model | Senoro.Win v2  |
| Vendor  | [Senoro](/supported-devices/#v=Senoro)  |
| Description | Window sensor with 3-state opening (DP101), optional alarm, battery |
| Exposes | opening_state, alarm_state, setup_mode, alarm_siren, alarm_siren_duration, vibration, vibration_limit, vibration_siren, vibration_siren_duration, close_signal, transmission_power, magnetic_status, battery |
| Picture | ![Senoro Senoro.Win v2](https://www.zigbee2mqtt.io/images/devices/Senoro.Win-v2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Opening state (enum)
Opening state.
Value can be found in the published state on the `opening_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `open`, `closed`, `tilted`.

### Alarm state (binary)
Alarm was triggered..
Value can be found in the published state on the `alarm_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_state": NEW_VALUE}`.
If value equals `true` alarm state is ON, if `false` OFF.

### Setup mode (binary)
Set mode status.
Value can be found in the published state on the `setup_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"setup_mode": NEW_VALUE}`.
If value equals `true` setup mode is ON, if `false` OFF.

### Alarm siren (binary)
Activate the siren when the alarm is triggered..
Value can be found in the published state on the `alarm_siren` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_siren": NEW_VALUE}`.
If value equals `true` alarm siren is ON, if `false` OFF.

### Alarm siren duration (numeric)
Duration of the alarm siren..
Value can be found in the published state on the `alarm_siren_duration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm_siren_duration": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `180`.

### Vibration (numeric)
Value of vibration..
Value can be found in the published state on the `vibration` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Vibration limit (numeric)
Limit at which a vibration is reported..
Value can be found in the published state on the `vibration_limit` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"vibration_limit": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

### Vibration siren (binary)
Activate the siren when vibrating..
Value can be found in the published state on the `vibration_siren` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"vibration_siren": NEW_VALUE}`.
If value equals `true` vibration siren is ON, if `false` OFF.

### Vibration siren duration (numeric)
Duration of the vibrating siren..
Value can be found in the published state on the `vibration_siren_duration` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"vibration_siren_duration": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `180`.

### Close signal (binary)
Enable sound when closing the window..
Value can be found in the published state on the `close_signal` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"close_signal": NEW_VALUE}`.
If value equals `true` close signal is ON, if `false` OFF.

### Transmission power (numeric)
Transmission power 11-19. High value > battery consumption..
Value can be found in the published state on the `transmission_power` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"transmission_power": NEW_VALUE}`.
The minimal value is `11` and the maximum value is `19`.

### Magnetic status (binary)
Magnetic status..
Value can be found in the published state on the `magnetic_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` magnetic status is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

