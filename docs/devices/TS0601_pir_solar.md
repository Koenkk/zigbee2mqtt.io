---
title: "Tuya TS0601_pir_solar control via MQTT"
description: "Integrate your Tuya TS0601_pir_solar via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:20:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_pir_solar

|     |     |
|-----|-----|
| Model | TS0601_pir_solar  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Solar PIR occupancy sensor |
| Exposes | occupancy, battery, pir_sensitivity |
| Picture | ![Tuya TS0601_pir_solar](https://www.zigbee2mqtt.io/images/devices/TS0601_pir_solar.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Pir sensitivity (enum)
PIR sensitivity (0=high, 1=low).
Value can be found in the published state on the `pir_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pir_sensitivity": NEW_VALUE}`.
The possible values are: `high`, `low`.

