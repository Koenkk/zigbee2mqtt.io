---
title: "iHseno iHsenso_TS0601_human_presence control via MQTT"
description: "Integrate your iHseno iHsenso_TS0601_human_presence via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# iHseno iHsenso_TS0601_human_presence

|     |     |
|-----|-----|
| Model | iHsenso_TS0601_human_presence  |
| Vendor  | [iHseno](/supported-devices/#v=iHseno)  |
| Description | Human presence sensor |
| Exposes | presence, battery, pir_sensitivity, pir_time |
| Picture | ![iHseno iHsenso_TS0601_human_presence](https://www.zigbee2mqtt.io/images/devices/iHsenso_TS0601_human_presence.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Presence (binary)
Human presence detected.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Battery (numeric)
Battery percentage.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Pir sensitivity (enum)
PIR sensor sensitivity.
Value can be found in the published state on the `pir_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pir_sensitivity": NEW_VALUE}`.
The possible values are: `low`, `middle`, `high`.

### Pir time (enum)
PIR delay time in seconds.
Value can be found in the published state on the `pir_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pir_time": NEW_VALUE}`.
The possible values are: `15s`, `30s`, `60s`.

