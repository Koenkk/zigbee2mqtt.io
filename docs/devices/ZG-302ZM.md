---
title: "HOBEIAN ZG-302ZM control via MQTT"
description: "Integrate your HOBEIAN ZG-302ZM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-01-24T19:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HOBEIAN ZG-302ZM

|     |     |
|-----|-----|
| Model | ZG-302ZM  |
| Vendor  | [HOBEIAN](/supported-devices/#v=HOBEIAN)  |
| Description | Motion sensing switch |
| Exposes | presence, switch1, switch2, switch3, sensitivity, backlight, trigger_hold, power_outage_memory, auto_on, auto_off, trigger_switch |
| Picture | ![HOBEIAN ZG-302ZM](https://www.zigbee2mqtt.io/images/devices/ZG-302ZM.png) |


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

### Switch1 (binary)
Switch1.
Value can be found in the published state on the `switch1` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch1": NEW_VALUE}`.
If value equals `ON` switch1 is ON, if `OFF` OFF.

### Switch2 (binary)
Switch2.
Value can be found in the published state on the `switch2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch2": NEW_VALUE}`.
If value equals `ON` switch2 is ON, if `OFF` OFF.

### Switch3 (binary)
Switch3.
Value can be found in the published state on the `switch3` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch3": NEW_VALUE}`.
If value equals `ON` switch3 is ON, if `OFF` OFF.

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
Someone turn on the light.
Value can be found in the published state on the `auto_on` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_on": NEW_VALUE}`.
The possible values are: `off`, `all`, `ch1`, `ch2`, `ch3`, `ch1_2`, `ch2_3`, `ch1_3`.

### Auto off (enum)
No one turns off the lights.
Value can be found in the published state on the `auto_off` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"auto_off": NEW_VALUE}`.
The possible values are: `off`, `all`, `ch1`, `ch2`, `ch3`, `ch1_2`, `ch2_3`, `ch1_3`.

### Trigger switch (enum)
Switch state reversal.
Value can be found in the published state on the `trigger_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"trigger_switch": NEW_VALUE}`.
The possible values are: `ch1`, `ch2`, `ch3`.

