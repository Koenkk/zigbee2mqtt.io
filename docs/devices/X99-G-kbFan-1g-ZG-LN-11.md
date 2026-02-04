---
title: "Coswall X99-G-kbFan-1g-ZG-LN-11 control via MQTT"
description: "Integrate your Coswall X99-G-kbFan-1g-ZG-LN-11 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-01T13:30:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Coswall X99-G-kbFan-1g-ZG-LN-11

|     |     |
|-----|-----|
| Model | X99-G-kbFan-1g-ZG-LN-11  |
| Vendor  | [Coswall](/supported-devices/#v=Coswall)  |
| Description | Fan & light switch |
| Exposes | status_indication, fan_speed |
| Picture | ![Coswall X99-G-kbFan-1g-ZG-LN-11](https://www.zigbee2mqtt.io/images/devices/X99-G-kbFan-1g-ZG-LN-11.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Status indication (binary)
Light switch.
Value can be found in the published state on the `status_indication` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"status_indication": NEW_VALUE}`.
If value equals `ON` status indication is ON, if `OFF` OFF.

### Fan speed (numeric)
Fan Speed %.
Value can be found in the published state on the `fan_speed` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_speed": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.

