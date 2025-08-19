---
title: "Sunricher SR-ZG9070A-SS control via MQTT"
description: "Integrate your Sunricher SR-ZG9070A-SS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-01T20:02:57
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9070A-SS

|     |     |
|-----|-----|
| Model | SR-ZG9070A-SS  |
| Vendor  | [Sunricher](/supported-devices/#v=Sunricher)  |
| Description | Smart photoelectric smoke alarm |
| Exposes | battery, smoke_alarm_1, smoke_alarm_2, tamper, battery_low, warning |
| Picture | ![Sunricher SR-ZG9070A-SS](https://www.zigbee2mqtt.io/images/devices/SR-ZG9070A-SS.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Smoke alarm 1 (binary)
Indicates whether the device detected smoke (alarm_1).
Value can be found in the published state on the `smoke_alarm_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke alarm 1 is ON, if `false` OFF.

### Smoke alarm 2 (binary)
Indicates whether the device detected smoke (alarm_2).
Value can be found in the published state on the `smoke_alarm_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` smoke alarm 2 is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Warning (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"warning": {"mode": VALUE, "level": VALUE, "strobe_level": VALUE, "strobe": VALUE, "strobe_duty_cycle": VALUE, "duration": VALUE}}`
- `mode` (enum): Mode of the warning (sound effect) allowed values: `stop`, `burglar`, `fire`, `emergency`, `police_panic`, `fire_panic`, `emergency_panic`
- `level` (enum): Sound level allowed values: `low`, `medium`, `high`, `very_high`
- `strobe_level` (enum): Intensity of the strobe allowed values: `low`, `medium`, `high`, `very_high`
- `strobe` (binary): Turn on/off the strobe (light) during warning allowed values: `true` or `false`
- `strobe_duty_cycle` (numeric): Length of the flash cycle max value is 10
- `duration` (numeric): Duration in seconds of the alarm unit is s

