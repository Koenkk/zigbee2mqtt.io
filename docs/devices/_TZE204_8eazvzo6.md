---
title: "Tuya _TZE204_8eazvzo6 control via MQTT"
description: "Integrate your Tuya _TZE204_8eazvzo6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-08-30T18:06:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya _TZE204_8eazvzo6

|     |     |
|-----|-----|
| Model | _TZE204_8eazvzo6  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Semicom touch panel: 6 switches |
| Exposes | switch (state) |
| Picture | ![Tuya _TZE204_8eazvzo6](https://www.zigbee2mqtt.io/images/devices/_TZE204_8eazvzo6.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Switch (s1 endpoint)
The current state of this switch is in the published state under the `state_s1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_s1": "ON"}`, `{"state_s1": "OFF"}` or `{"state_s1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_s1": ""}`.

### Switch (s2 endpoint)
The current state of this switch is in the published state under the `state_s2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_s2": "ON"}`, `{"state_s2": "OFF"}` or `{"state_s2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_s2": ""}`.

### Switch (s3 endpoint)
The current state of this switch is in the published state under the `state_s3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_s3": "ON"}`, `{"state_s3": "OFF"}` or `{"state_s3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_s3": ""}`.

### Switch (s4 endpoint)
The current state of this switch is in the published state under the `state_s4` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_s4": "ON"}`, `{"state_s4": "OFF"}` or `{"state_s4": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_s4": ""}`.

### Switch (s5 endpoint)
The current state of this switch is in the published state under the `state_s5` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_s5": "ON"}`, `{"state_s5": "OFF"}` or `{"state_s5": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_s5": ""}`.

### Switch (s6 endpoint)
The current state of this switch is in the published state under the `state_s6` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_s6": "ON"}`, `{"state_s6": "OFF"}` or `{"state_s6": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_s6": ""}`.

