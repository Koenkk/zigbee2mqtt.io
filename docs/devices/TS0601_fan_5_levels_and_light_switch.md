---
title: "Tuya TS0601_fan_5_levels_and_light_switch control via MQTT"
description: "Integrate your Tuya TS0601_fan_5_levels_and_light_switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-04-29T19:24:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_fan_5_levels_and_light_switch

|     |     |
|-----|-----|
| Model | TS0601_fan_5_levels_and_light_switch  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Fan with 5 levels & light switch |
| Exposes | fan (state, speed), status_indication, power_on_behavior |
| Picture | ![Tuya TS0601_fan_5_levels_and_light_switch](https://www.zigbee2mqtt.io/images/devices/TS0601_fan_5_levels_and_light_switch.png) |
| White-label | Liwokit Fan+Light-01 |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Fan 
The current state of this fan is in the published state under the `state` property (value is `ON` or `OFF`).
To control this fan publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}` or `{"state": "OFF"}`.
It's not possible to read (`/get`) this value.

### Status indication (binary)
Light switch.
Value can be found in the published state on the `status_indication` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"status_indication": NEW_VALUE}`.
If value equals `ON` status indication is ON, if `OFF` OFF.

### Power-on behavior (enum)
Fan On Off.
Value can be found in the published state on the `power_on_behavior` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_on_behavior": NEW_VALUE}`.
The possible values are: `OFF`, `ON`.

