---
title: "TS0601_boiler_6 control via MQTT"
description: "Integrate your TS0601_boiler_6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-11-7T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TS0601_boiler_6

|     |     |
|-----|-----|
| Model | TS0601_boiler_6  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart boiler switch |
| Exposes | switch (state), current, power, level, countdown, linkquality |
| Picture | ![Tuya TS0601_boiler_6](https://www.zigbee2mqtt.io/images/devices/TS0601_boiler_6.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `countdown`: Set a countdown. The switch will turn off after the countdown ends. The value must be `Number` .
* `level`: Set the gear position. The switch can be quickly set to countdown 0, 30 minutes, 60 minutes, 90 minutes, 120 minutes, or remain on.



## Exposes

### current 
The real-time current value (mA) under the current working state.

### power 
The real-time power value (W) under the current working state.

### level (level endpoint)
the gear position. The switch can be quickly set to countdown 0, 30 minutes, 60 minutes, 90 minutes, 120 minutes, or remain on, property (value is `T0`,`T30`,`T60`,`T90`,`T120`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"level": "T0"}`, `{"level": "T30"}` , `{"level": "T60"}`,`{"level": "T120"}`..

### countdown (countdown endpoint)
The current state of this switch is in the published state under the `countdown` property (value is a number).

