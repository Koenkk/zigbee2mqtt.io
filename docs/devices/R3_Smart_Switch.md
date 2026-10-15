---
title: "Tuya R3 Smart Switch control via MQTT"
description: "Integrate your Tuya R3 Smart Switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-07-01T17:54:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya R3 Smart Switch

|     |     |
|-----|-----|
| Model | R3 Smart Switch  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Circuit Breaker/Switch |
| Exposes | switch (state) |
| Picture | ![Tuya R3 Smart Switch](https://www.zigbee2mqtt.io/images/devices/R3-Smart-Switch.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `time_start`: Reply to Tuya-specific time synchronization requests: "1970" - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), "2000" - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), "off" - Don't reply (use if replying causes too much traffic). Default for this device: "off". The value must be one of `1970`, `2000`, `off`


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

