---
title: "HEIMAN HS2WD-E control via MQTT"
description: "Integrate your HEIMAN HS2WD-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HEIMAN HS2WD-E

|     |     |
|-----|-----|
| Model | HS2WD-E  |
| Vendor  | [HEIMAN](/supported-devices/#v=HEIMAN)  |
| Description | Smart siren |
| Exposes | battery, warning, linkquality |
| Picture | ![HEIMAN HS2WD-E](https://www.zigbee2mqtt.io/images/devices/HS2WD-E.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing 

Push the included pin in the small hole on the case of the device and hold for ~5 seconds until the LED starts flashing.

### Triggering the alarm
The alarm can be trigged by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` message
`{"warning": {"duration": 10, "mode": "emergency", "strobe": false}}`.

Where:
- `duration`: the number of seconds the alarm will be on (max is 1800 seconds)
- `mode`: `stop` or `emergency`
- `strobe`: `true` or `false` will let the strobe flash once during the alarm
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Warning (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"warning": {"mode": VALUE, "level": VALUE, "strobe_level": VALUE, "strobe": VALUE, "strobe_duty_cycle": VALUE, "duration": VALUE}}`
- `mode` (enum): Mode of the warning (sound effect) allowed values: `stop`, `burglar`, `fire`, `emergency`, `police_panic`, `fire_panic`, `emergency_panic`
- `level` (enum): Sound level allowed values: `low`, `medium`, `high`, `very_high`
- `strobe_level` (enum): Intensity of the strobe allowed values: `low`, `medium`, `high`, `very_high`
- `strobe` (binary): Turn on/off the strobe (light) during warning allowed values: `true` or `false`
- `strobe_duty_cycle` (numeric): Length of the flash cycle max value is 10
- `duration` (numeric): Duration in seconds of the alarm unit is s

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

