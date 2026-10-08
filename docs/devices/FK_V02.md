---
title: "FrankEver FK_V02 control via MQTT"
description: "Integrate your FrankEver FK_V02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-05-01T14:47:09Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# FrankEver FK_V02

|     |     |
|-----|-----|
| Model | FK_V02  |
| Vendor  | [FrankEver](/supported-devices/#v=FrankEver)  |
| Description | Zigbee smart water valve |
| Exposes | switch (state), power_off_state, set_valve_position, countdown |
| Picture | ![FrankEver FK_V02](https://www.zigbee2mqtt.io/images/devices/FK_V02.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Power off state (enum)
Power-off status behavior.
Value can be found in the published state on the `power_off_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_off_state": NEW_VALUE}`.
The possible values are: `off`, `on`, `maintain`.

### Set valve position (numeric)
Value can be found in the published state on the `set_valve_position` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"set_valve_position": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Countdown (numeric)
Countdown timer in seconds.
Value can be found in the published state on the `countdown` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

