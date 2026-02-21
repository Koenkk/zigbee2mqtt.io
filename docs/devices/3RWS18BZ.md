---
title: "Third Reality 3RWS18BZ control via MQTT"
description: "Integrate your Third Reality 3RWS18BZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-07-01T18:17:29Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Third Reality 3RWS18BZ

|     |     |
|-----|-----|
| Model | 3RWS18BZ  |
| Vendor  | [Third Reality](/supported-devices/#v=Third%20Reality)  |
| Description | Water sensor |
| Exposes | water_leak, battery_low, battery, water_leak_buzzer, water_leak_buzzer_alarm_mode |
| Picture | ![Third Reality 3RWS18BZ](https://www.zigbee2mqtt.io/images/devices/3RWS18BZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Water leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water leak is ON, if `false` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Water leak buzzer (binary)
Turns the water-leak detection buzzer on or off..
Value can be found in the published state on the `water_leak_buzzer` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"water_leak_buzzer": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"water_leak_buzzer": NEW_VALUE}`.
If value equals `ON` water leak buzzer is ON, if `OFF` OFF.

### Water leak buzzer alarm mode (numeric)
Sets the buzzers beeping mode for water-leak alerts.(0 = continuous;values = beeping duration (minutes).).
Value can be found in the published state on the `water_leak_buzzer_alarm_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"water_leak_buzzer_alarm_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"water_leak_buzzer_alarm_mode": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `min`.

