---
title: "EVOLOGY PSE03-V1.1.0 control via MQTT"
description: "Integrate your EVOLOGY PSE03-V1.1.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-01T15:06:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EVOLOGY PSE03-V1.1.0

|     |     |
|-----|-----|
| Model | PSE03-V1.1.0  |
| Vendor  | [EVOLOGY](/supported-devices/#v=EVOLOGY)  |
| Description | Sound and flash siren |
| Exposes | warning, linkquality |
| Picture | ![EVOLOGY PSE03-V1.1.0](https://www.zigbee2mqtt.io/images/devices/PSE03-V1.1.0.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Warning (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"warning": {"mode": VALUE, "level": VALUE, "duration": VALUE}}`
- `mode` (enum): Mode of the warning (sound effect) allowed values: `stop`, `burglar`, `fire`, `emergency`, `police_panic`, `fire_panic`, `emergency_panic`
- `level` (enum): Sound level allowed values: `low`, `medium`, `high`, `very_high`
- `duration` (numeric): Duration in seconds of the alarm unit is s

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

