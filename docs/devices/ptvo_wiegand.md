---
title: "ptvo.info ptvo_wiegand control via MQTT"
description: "Integrate your ptvo.info ptvo_wiegand via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-03T00:00:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ptvo.info ptvo_wiegand

|     |     |
|-----|-----|
| Model | ptvo_wiegand  |
| Vendor  | [ptvo.info](/supported-devices/#v=ptvo.info)  |
| Description | UART Wiegand badge reader |
| Exposes | action, delay_lockout, unlock_code, pin_number, badge_number, event |
| Picture | ![ptvo.info ptvo_wiegand](https://www.zigbee2mqtt.io/images/devices/ptvo_wiegand.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Hardware
This device is a Zigbee-to-Wiegand interface board based on a CC2530 module running [PTVO configurable firmware](https://ptvo.info/zigbee-configurable-firmware-features/uart/).
It bridges a standard Wiegand 26-bit badge reader or PIN keypad to Zigbee2MQTT via UART passthrough over the `genMultistateValue` cluster.

### Received events (fromZigbee)
When a badge is presented or a PIN is entered, the device publishes:

| Property | Value | Description |
|----------|-------|-------------|
| `action` | `BADGE:XXXXXXXXXX` | Badge number read from the Wiegand reader |
| `action` | `PIN:XXXXXX` | 6-digit PIN entered on the keypad |
| `action` | `ABANDON` | User pressed Cancel/Clear key |
| `action` | `TAMPER_ON` | Tamper switch activated |
| `action` | `TAMPER_OFF` | Tamper switch deactivated |
| `event` | `badge` / `pin` / `abandon` / `tamper_on` / `tamper_off` | Event type |
| `badge_number` | numeric | Badge number as integer |
| `pin_number` | numeric | PIN as integer |

All state properties are automatically cleared (reset to `none` / `0`) 5 seconds after publication.

### Sending commands (toZigbee)
To grant or deny access, publish to `zigbee2mqtt/FRIENDLY_NAME/set`:
```json
{"action": "CODE_OK"}
```
```json
{"action": "CODE_KO"}
```

### Jeedom plugin
A dedicated Jeedom plugin **Wiegand Access** is available to manage badge/PIN codes, schedules, and multi-reader setups:
[https://github.com/mickadam29/wiegandAccess](https://github.com/mickadam29/wiegandAccess)
<!-- Notes END: Do not edit below this line -->



## Exposes

### Action (enum)
Trigger an access control response.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"action": NEW_VALUE}`.
The possible values are: `CODE_OK`, `CODE_KO`.

### Delay lockout (numeric)
Lockout duration after too many wrong attempts (1-255 min, stored in EEPROM).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delay_lockout": NEW_VALUE}`.
The unit of this value is `min`.
The minimal value is `1` and the maximum value is `255`.

### Unlock code (numeric)
Emergency unlock code (10 digits, leading zeros preserved, stored in EEPROM).
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"unlock_code": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `9999999999`.

### Pin number (numeric)
Last PIN entered (cleared after 5 s).
Value can be found in the published state on the `pin_number` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Badge number (numeric)
Last badge number read (cleared after 5 s).
Value can be found in the published state on the `badge_number` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Event (enum)
Last event type (cleared after 5 s).
Value can be found in the published state on the `event` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `pin`, `badge`, `abandon`, `tamper_on`, `tamper_off`.
