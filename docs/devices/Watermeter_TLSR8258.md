---
title: "Slacky-DIY Watermeter_TLSR8258 control via MQTT"
description: "Integrate your Slacky-DIY Watermeter_TLSR8258 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-04-01T18:29:09
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Slacky-DIY Watermeter_TLSR8258

|     |     |
|-----|-----|
| Model | Watermeter_TLSR8258  |
| Vendor  | [Slacky-DIY](/supported-devices/#v=Slacky-DIY)  |
| Description | Water Meter |
| Exposes | water_leak, battery, voltage, switch_actions, volume, preset |
| Picture | ![Slacky-DIY Watermeter_TLSR8258](https://www.zigbee2mqtt.io/images/devices/Watermeter_TLSR8258.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
[Original project description](https://github.com/slacky1965/watermeter_zed)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Water leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water leak is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Switch actions (enum, 4 endpoint)
Actions switch 1.
Value can be found in the published state on the `switch_actions_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_4": NEW_VALUE}`.
The possible values are: `on_off`, `off_on`, `toggle`.

### Switch actions (enum, 5 endpoint)
Actions switch 2.
Value can be found in the published state on the `switch_actions_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions_5": NEW_VALUE}`.
The possible values are: `on_off`, `off_on`, `toggle`.

### Volume (numeric, 1 endpoint)
Hot water.
Value can be found in the published state on the `volume_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"volume_1": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `L`.

### Volume (numeric, 2 endpoint)
Cold water.
Value can be found in the published state on the `volume_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"volume_2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `L`.

### Preset (composite)
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"preset": {"hot_water_preset": VALUE, "cold_water_preset": VALUE, "step_water_preset": VALUE}}`
- `hot_water_preset` (numeric): Preset hot water max value is 99999999, unit is L
- `cold_water_preset` (numeric): Preset cold water max value is 99999999, unit is L
- `step_water_preset` (numeric): Preset step water min value is 1, max value is 100, unit is L

