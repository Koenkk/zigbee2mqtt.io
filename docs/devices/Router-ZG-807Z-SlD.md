---
title: "Slacky-DIY Router-ZG-807Z-SlD control via MQTT"
description: "Integrate your Slacky-DIY Router-ZG-807Z-SlD via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-07-30T18:55:11
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Slacky-DIY Router-ZG-807Z-SlD

|     |     |
|-----|-----|
| Model | Router-ZG-807Z-SlD  |
| Vendor  | [Slacky-DIY](/supported-devices/#v=Slacky-DIY)  |
| Description | Tuya router with custom firmware |
| Exposes | battery, voltage, battery_low, uptime_time, tx_power, switch_actions |
| Picture | ![Slacky-DIY Router-ZG-807Z-SlD](https://www.zigbee2mqtt.io/images/devices/Router-ZG-807Z-SlD.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
[Original project description](https://github.com/slacky1965/router_zg_807z_zrd)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

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

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Uptime time (numeric)
Uptime of device.
Value can be found in the published state on the `uptime_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"uptime_time": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `sec`.

### Tx power (enum)
Rf power config.
Value can be found in the published state on the `tx_power` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"tx_power": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tx_power": NEW_VALUE}`.
The possible values are: `0 dBm`, `5 dBm`, `10 dBm`.

### Switch actions (enum)
Actions switch.
Value can be found in the published state on the `switch_actions` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_actions": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_actions": NEW_VALUE}`.
The possible values are: `on_off`, `off_on`, `toggle`.

