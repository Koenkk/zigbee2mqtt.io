---
title: "Tuya _TZE28C1000000_jaunkx9g control via MQTT"
description: "Integrate your Tuya _TZE28C1000000_jaunkx9g via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-07-30T18:55:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya _TZE28C1000000_jaunkx9g

|     |     |
|-----|-----|
| Model | _TZE28C1000000_jaunkx9g  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Human presence sensor 2-gang smart switch |
| Exposes | presence_state, switch (state), countdown_1, countdown_2, relay_status, light_mode, delays_time, sensitivity, turn_on_light_for_person, turn_off_light_for_person |
| Picture | ![Tuya _TZE28C1000000_jaunkx9g](https://www.zigbee2mqtt.io/images/devices/_TZE28C1000000_jaunkx9g.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Presence state (enum)
Presence Status.
Value can be found in the published state on the `presence_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `presence`.

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

### Countdown 1 (numeric)
Switch 1 Countdown.
Value can be found in the published state on the `countdown_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Countdown 2 (numeric)
Switch 2 Countdown.
Value can be found in the published state on the `countdown_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"countdown_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `43200`.
The unit of this value is `s`.

### Relay status (enum)
Power-on Status.
Value can be found in the published state on the `relay_status` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"relay_status": NEW_VALUE}`.
The possible values are: `off`, `on`, `memory`.

### Light mode (enum)
Indicator Light Status.
Value can be found in the published state on the `light_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_mode": NEW_VALUE}`.
The possible values are: `relay`, `none`, `pos`.

### Delays time (numeric)
Unoccupied Delay Time.
Value can be found in the published state on the `delays_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delays_time": NEW_VALUE}`.
The minimal value is `3` and the maximum value is `3600`.
The unit of this value is `s`.

### Sensitivity (numeric)
Trigger Sensitivity.
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `10`.

### Turn on light for person (enum)
Turn On Light When Human Detected.
Value can be found in the published state on the `turn_on_light_for_person` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"turn_on_light_for_person": NEW_VALUE}`.
The possible values are: `none`, `all`, `on_ch1`, `on_ch2`.

### Turn off light for person (enum)
Turn Off Light When Human Not Detected.
Value can be found in the published state on the `turn_off_light_for_person` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"turn_off_light_for_person": NEW_VALUE}`.
The possible values are: `none`, `all`, `off_ch1`, `off_ch2`.

