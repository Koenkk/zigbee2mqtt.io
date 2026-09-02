---
title: "Tuya TS0601_human_presence_sensor control via MQTT"
description: "Integrate your Tuya TS0601_human_presence_sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-08-25T08:00:58
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya TS0601_human_presence_sensor

|     |     |
|-----|-----|
| Model | TS0601_human_presence_sensor  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Human presence sensor Zigbee |
| Exposes | presence, duration_of_attendance, duration_of_absence, led_state |
| Picture | ![Tuya TS0601_human_presence_sensor](https://www.zigbee2mqtt.io/images/devices/TS0601_human_presence_sensor.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Duration of attendance (numeric)
Shows the presence duration in minutes.
Value can be found in the published state on the `duration_of_attendance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### Duration of absence (numeric)
Shows the duration of the absence in minutes.
Value can be found in the published state on the `duration_of_absence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `min`.

### Led state (binary)
Turns the onboard LED on or off.
Value can be found in the published state on the `led_state` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_state": NEW_VALUE}`.
If value equals `true` led state is ON, if `false` OFF.

