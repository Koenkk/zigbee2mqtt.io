---
title: "Xiaomi ZNXNKG02LM control via MQTT"
description: "Integrate your Xiaomi ZNXNKG02LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-10-01T17:18:02Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi ZNXNKG02LM

|     |     |
|-----|-----|
| Model | ZNXNKG02LM  |
| Vendor  | [Xiaomi](/supported-devices/#v=Xiaomi)  |
| Description | Aqara knob H1 (wireless) |
| Exposes | battery, voltage, action, operation_mode, action_rotation_angle, action_rotation_angle_speed, action_rotation_percent, action_rotation_percent_speed, action_rotation_time, linkquality |
| Picture | ![Xiaomi ZNXNKG02LM](https://www.zigbee2mqtt.io/images/devices/ZNXNKG02LM.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing

Press and hold the button on the device until the blue light starts blinking, release it and the pairing should begin.
If you're having problems pairing, try keeping the device alive (press the button every second) after pairing started, until pairing completed

<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`



## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported..
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `hold`, `release`, `start_rotating`, `rotation`, `stop_rotating`.

### Operation_mode (enum)
Button mode.
Value can be found in the published state on the `operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `event`, `command`.

### Action_rotation_angle (numeric)
Rotation angle.
Value can be found in the published state on the `action_rotation_angle` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `*`.

### Action_rotation_angle_speed (numeric)
Rotation angle speed.
Value can be found in the published state on the `action_rotation_angle_speed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `*`.

### Action_rotation_percent (numeric)
Rotation percent.
Value can be found in the published state on the `action_rotation_percent` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Action_rotation_percent_speed (numeric)
Rotation percent speed.
Value can be found in the published state on the `action_rotation_percent_speed` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Action_rotation_time (numeric)
Rotation time.
Value can be found in the published state on the `action_rotation_time` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ms`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

