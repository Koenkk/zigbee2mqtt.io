---
title: "Feibit FB56-DOS06HM1.1 control via MQTT"
description: "Integrate your Feibit FB56-DOS06HM1.1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-02-06T19:24:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Feibit FB56-DOS06HM1.1

|     |     |
|-----|-----|
| Model | FB56-DOS06HM1.1  |
| Vendor  | [Feibit](/supported-devices/#v=Feibit)  |
| Description | 3A / Nue Zigbee door sensor |
| Exposes | warning, alarm_1, alarm_2, tamper, battery_low |
| Picture | ![Feibit FB56-DOS06HM1.1](https://www.zigbee2mqtt.io/images/devices/FB56-DOS06HM1.1.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Warning (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"warning": {"mode": VALUE, "level": VALUE, "strobe_level": VALUE, "strobe": VALUE, "strobe_duty_cycle": VALUE, "duration": VALUE}}`
- `mode` (enum): Mode of the warning (sound effect) allowed values: `stop`, `burglar`, `fire`, `emergency`, `police_panic`, `fire_panic`, `emergency_panic`
- `level` (enum): Sound level allowed values: `low`, `medium`, `high`, `very_high`
- `strobe_level` (enum): Intensity of the strobe allowed values: `low`, `medium`, `high`, `very_high`
- `strobe` (binary): Turn on/off the strobe (light) during warning allowed values: `true` or `false`
- `strobe_duty_cycle` (numeric): Length of the flash cycle max value is 10
- `duration` (numeric): Duration in seconds of the alarm unit is s

### Alarm 1 (binary)
Indicates whether IAS Zone alarm 1 is active.
Value can be found in the published state on the `alarm_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm 1 is ON, if `false` OFF.

### Alarm 2 (binary)
Indicates whether IAS Zone alarm 2 is active.
Value can be found in the published state on the `alarm_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` alarm 2 is ON, if `false` OFF.

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

