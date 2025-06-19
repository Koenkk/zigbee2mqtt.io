---
title: "smarthjemmet.dk QUAD-ZIG-SW control via MQTT"
description: "Integrate your smarthjemmet.dk QUAD-ZIG-SW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-01T18:52:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# smarthjemmet.dk QUAD-ZIG-SW

|     |     |
|-----|-----|
| Model | QUAD-ZIG-SW  |
| Vendor  | [smarthjemmet.dk](/supported-devices/#v=smarthjemmet.dk)  |
| Description | FUGA compatible switch from Smarthjemmet.dk |
| Exposes | switch_type_1, switch_type_2, switch_type_3, switch_type_4, battery, action, voltage |
| Picture | ![smarthjemmet.dk QUAD-ZIG-SW](https://www.zigbee2mqtt.io/images/devices/QUAD-ZIG-SW.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[FUGA compatible switch from Smarthjemmet.dk](https://smarthjemmet.dk)
### Pairing
If the device did not automatically start in pairing mode (LED blinking), you can start it manually by powering on and off the device four times, keeping it on the 4th time.

- Plug in battery and wait one second
- Pull out battery
- Plug in battery and wait one second
- Pull out battery
- Plug in battery and wait one second
- Pull out battery
- Plug in battery

The LED should now be blinking with 5-10 second interval.

Video guide: [https://www.youtube.com/watch?v=LkbnLPhi5Ts](https://www.youtube.com/watch?v=LkbnLPhi5Ts)

### Switch type
QUAD-ZIG-SW has two modes for the four inputs: Switch and multi-click.

Switch turns the input into an on/off switch like a lamp switch.
Multi-click allows the input to click multiple times. These are the different clicks:

- Single (button_X_single)
- Double (button_X_double)
- Triple (button_X_triple)
- Hold (button_X_hold)
- Release (button_X_release)

Since the device is battery powered, it will not switch mode until it's awake. Make sure to keep the device online when changing mode, by enabling the input with a click.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Switch type 1 (enum, button_1 endpoint)
Value can be found in the published state on the `switch_type_1_button_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_1_button_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_1_button_1": NEW_VALUE}`.
The possible values are: `switch`, `multi-click`.

### Switch type 2 (enum, button_2 endpoint)
Value can be found in the published state on the `switch_type_2_button_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_2_button_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_2_button_2": NEW_VALUE}`.
The possible values are: `switch`, `multi-click`.

### Switch type 3 (enum, button_3 endpoint)
Value can be found in the published state on the `switch_type_3_button_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_3_button_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_3_button_3": NEW_VALUE}`.
The possible values are: `switch`, `multi-click`.

### Switch type 4 (enum, button_4 endpoint)
Value can be found in the published state on the `switch_type_4_button_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"switch_type_4_button_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"switch_type_4_button_4": NEW_VALUE}`.
The possible values are: `switch`, `multi-click`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `triple`, `hold`, `release`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

