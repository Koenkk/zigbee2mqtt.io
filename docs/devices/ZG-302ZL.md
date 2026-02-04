---
title: "HOBEIAN ZG-302ZL control via MQTT"
description: "Integrate your HOBEIAN ZG-302ZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-24T19:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HOBEIAN ZG-302ZL

|     |     |
|-----|-----|
| Model | ZG-302ZL  |
| Vendor  | [HOBEIAN](/supported-devices/#v=HOBEIAN)  |
| Description | Motion sensing switch |
| Exposes | presence, switch_1, switch_2, switch_3, sensitivity, backlight, trigger_hold, power_outage_memory, auto_on, auto_off |
| Picture | ![HOBEIAN ZG-302ZL](https://www.zigbee2mqtt.io/images/devices/ZG-302ZL.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
The power must be disconnected during installation
<!-- Notes END: Do not edit below this line -->




## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Switch 1 (binary)
Switch2.
Value can be found in the published state on the `switch_1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_1": NEW_VALUE}`.
If value equals `ON` switch 1 is ON, if `OFF` OFF.

### Switch 2 (binary)
Switch2.
Value can be found in the published state on the `switch_2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_2": NEW_VALUE}`.
If value equals `ON` switch 2 is ON, if `OFF` OFF.

### Switch 3 (binary)
Switch3.
Value can be found in the published state on the `switch_3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_3": NEW_VALUE}`.
If value equals `ON` switch 3 is ON, if `OFF` OFF.

### Sensitivity (numeric)
detection sensitivity.
Value can be found in the published state on the `sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `19`.
The unit of this value is `x`.

### Backlight (binary)
backlight.
Value can be found in the published state on the `backlight` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"backlight": NEW_VALUE}`.
If value equals `ON` backlight is ON, if `OFF` OFF.

### Trigger hold (numeric)
Trigger hold(second).
Value can be found in the published state on the `trigger_hold` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"trigger_hold": NEW_VALUE}`.
The minimal value is `5` and the maximum value is `28800`.
The unit of this value is `s`.

### Power outage memory (enum)
Recover state after power outage.
Value can be found in the published state on the `power_outage_memory` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_outage_memory": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"power_outage_memory": NEW_VALUE}`.
The possible values are: `on`, `off`, `restore`.

### Auto on (enum)
When somebody passes in front of their sensors, the lights turn.
Value can be found in the published state on the `auto_on` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_on": NEW_VALUE}`.
The possible values are: `off`, `all`, `ch1`, `ch2`, `ch3`, `ch1_and_ch2`, `ch2_and_ch3`, `ch1_and_ch3`.

### Auto off (enum)
No one turns off the lights.
Value can be found in the published state on the `auto_off` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_off": NEW_VALUE}`.
The possible values are: `off`, `all`, `ch1`, `ch2`, `ch3`, `ch1_and_ch2`, `ch2_and_ch3`, `ch1_and_ch3`.

