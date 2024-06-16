---
title: "Climax SRAC-23B-ZBSR control via MQTT"
description: "Integrate your Climax SRAC-23B-ZBSR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-02-13T14:40:13Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Climax SRAC-23B-ZBSR

|     |     |
|-----|-----|
| Model | SRAC-23B-ZBSR  |
| Vendor  | [Climax](/supported-devices/#v=Climax)  |
| Description | Smart siren |
| Exposes | battery_low, tamper, warning, squawk, max_duration, alarm, linkquality |
| Picture | ![Climax SRAC-23B-ZBSR](https://www.zigbee2mqtt.io/images/devices/SRAC-23B-ZBSR.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Warning usage
Warning only support a single mode, `burglar`

Duration of using `warning` can be shorter than `max_duration` but not longer. If `max_duration` are set to 60 seconds, and you try to set `warning` with `duration` of 90 seconds, the warning will only apply for 60 seconds. Default value of `max_duration` are 300 seconds

This device do not support the `strobe_duty_cycle` functionality


### Triggering alarm, Advanced
This siren can be triggered manually by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with the payloads:

To start :
* `{"warning":{"duration":60,"level":"low","mode":"burglar","strobe":false,"strobe_duty_cycle":0}}`
Where:
- `duration`: the number of seconds the alarm will be on
- `level`: `low`, `medium`, `high`, `very_high`
- `mode`: `stop`, `burglar`
- `strobe`: `true`, `false`
- `strobe_duty_cycle`: not supported

To stop:
* `{"warning":{"duration":60,"level":"low","mode":"stop","strobe":false,"strobe_duty_cycle":0}}`

### Triggering alarm, Simple
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": "START"}` and `{"alarm": "OFF"}`
Set `max_duration` from the Zigbee2MQTT UI or by publishing `{"max_duration": NEW_VALUE}`
This alarm are preset to highest volume
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Warning (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"warning": {"mode": VALUE, "level": VALUE, "strobe_level": VALUE, "strobe": VALUE, "strobe_duty_cycle": VALUE, "duration": VALUE}}`
- `mode` (enum): Mode of the warning (sound effect) allowed values: `stop`, `burglar`, `fire`, `emergency`, `police_panic`, `fire_panic`, `emergency_panic`
- `level` (enum): Sound level allowed values: `low`, `medium`, `high`, `very_high`
- `strobe_level` (enum): Intensity of the strobe allowed values: `low`, `medium`, `high`, `very_high`
- `strobe` (binary): Turn on/off the strobe (light) during warning allowed values: `true` or `false`
- `strobe_duty_cycle` (numeric): Length of the flash cycle max value is 10
- `duration` (numeric): Duration in seconds of the alarm unit is s

### Squawk (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"squawk": {"state": VALUE, "level": VALUE, "strobe": VALUE}}`
- `state` (enum): Set Squawk state allowed values: `system_is_armed`, `system_is_disarmed`
- `level` (enum): Sound level allowed values: `low`, `medium`, `high`, `very_high`
- `strobe` (binary): Turn on/off the strobe (light) for Squawk allowed values: `true` or `false`

### Max duration (numeric)
Duration of Siren.
Value can be found in the published state on the `max_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"max_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_duration": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `s`.

### Alarm (binary)
Manual start of siren.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"alarm": NEW_VALUE}`.
If value equals `START` alarm is ON, if `OFF` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

