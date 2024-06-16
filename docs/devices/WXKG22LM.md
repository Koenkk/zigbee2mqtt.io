---
title: "Aqara WXKG22LM control via MQTT"
description: "Integrate your Aqara WXKG22LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-30T19:41:12
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aqara WXKG22LM

|     |     |
|-----|-----|
| Model | WXKG22LM  |
| Vendor  | [Aqara](/supported-devices/#v=Aqara)  |
| Description | Wireless remote switch H1M (double rocker) |
| Exposes | battery, voltage, click_mode, operation_mode, action, linkquality |
| Picture | ![Aqara WXKG22LM](https://www.zigbee2mqtt.io/images/devices/WXKG22LM.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Click mode (enum)
Click mode, fast: only supports single click which will be send immediately after clicking.multi: supports more events like double and hold.
Value can be found in the published state on the `click_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"click_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"click_mode": NEW_VALUE}`.
The possible values are: `fast`, `multi`.

### Operation mode (enum)
Operation mode, select "command" to enable bindings (wake up the device before changing modes!).
Value can be found in the published state on the `operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `command`, `event`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single_left`, `single_right`, `single_both`, `double_left`, `double_right`, `double_both`, `triple_left`, `triple_right`, `triple_both`, `hold_left`, `hold_right`, `hold_both`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

