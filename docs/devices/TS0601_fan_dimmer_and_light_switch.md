---
title: "Tuya TS0601_fan_dimmer_and_light_switch control via MQTT"
description: "Integrate your Tuya TS0601_fan_dimmer_and_light_switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-02-28T20:18:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_fan_dimmer_and_light_switch

|     |     |
|-----|-----|
| Model | TS0601_fan_dimmer_and_light_switch  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Fan Dimmer and 1 Gang Light Switch |
| Exposes | fan_speed, power_on_behavior, light_switch, indicator, child_lock, minimum_speed |
| Picture | ![Tuya TS0601_fan_dimmer_and_light_switch](https://www.zigbee2mqtt.io/images/devices/TS0601_fan_dimmer_and_light_switch.png) |
| White-label | Coswall X99-G-kbFan-1g-ZG-LN-11, Zemismart ZN2S-RS1E-FL / ZN2S-US1U-FL |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Fan speed (numeric)
Speed of the fan %.
Value can be found in the published state on the `fan_speed` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fan_speed": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Power-on behavior (enum)
Controls the behavior when the device is powered on after power loss.
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `off`, `on`, `previous`.

### Light switch (binary)
Light switch.
Value can be found in the published state on the `light_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_switch": NEW_VALUE}`.
If value equals `ON` light switch is ON, if `OFF` OFF.

### Indicator (enum)
LED indicator mode.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
The possible values are: `off`, `off/on`, `on`.

### Child lock (binary)
Child Lock.
Value can be found in the published state on the `child_lock` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `ON` child lock is ON, if `OFF` OFF.

### Minimum speed (numeric)
Vitesse minimale du ventilateur.
Value can be found in the published state on the `minimum_speed` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"minimum_speed": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

