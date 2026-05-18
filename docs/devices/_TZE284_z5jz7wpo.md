---
title: "Tuya _TZE284_z5jz7wpo control via MQTT"
description: "Integrate your Tuya _TZE284_z5jz7wpo via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:20:17
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya _TZE284_z5jz7wpo

|     |     |
|-----|-----|
| Model | _TZE284_z5jz7wpo  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Ceiling fan control module |
| Exposes | fan (state, speed), power_on_behavior, countdown_hours, light_mode |
| Picture | ![Tuya _TZE284_z5jz7wpo](https://www.zigbee2mqtt.io/images/devices/_TZE284_z5jz7wpo.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Fan 
The current state of this fan is in the published state under the `state` property (value is `ON` or `OFF`).
To control this fan publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}` or `{"state": "OFF"}`.
To read the current state of this fan publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `restore`.

### Countdown hours (numeric)
Fan ON time in hours (15 min increments).
Value can be found in the published state on the `countdown_hours` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_hours": NEW_VALUE}`.
The minimal value is `0.25` and the maximum value is `12`.
The unit of this value is `h`.

### Light mode (enum)
Value can be found in the published state on the `light_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode": NEW_VALUE}`.
The possible values are: `none`, `relay`, `pos`.

