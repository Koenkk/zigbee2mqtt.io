---
title: "MakeDIY MD-GATE-ZB1 control via MQTT"
description: "Integrate your MakeDIY MD-GATE-ZB1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-10-31T19:31:40.326Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# MakeDIY MD-GATE-ZB1

|     |     |
|-----|-----|
| Model | MD-GATE-ZB1  |
| Vendor  | [MakeDIY](/supported-devices/#v=MakeDIY)  |
| Description | Gate controller with main and optional pedestrian pulse and one or two limit contacts |
| Exposes | door, movement, duration, door_state, mode, contact |
| Picture | ![MakeDIY MD-GATE-ZB1](https://www.zigbee2mqtt.io/images/devices/MD-GATE-ZB1.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Full gate (enum)
Full gate pulse (TX/RX board: S1, GPIO24). Firmware enforces pulse timing and the shared cooldown..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pulse": "VALUE"}`.
The possible values are: `PRESS`.

### Pedestrian gate (enum)
Pedestrian gate pulse (TX/RX board: S2, GPIO23). Firmware enforces pulse timing and the shared cooldown..
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"walk": "VALUE"}`.
The possible values are: `PRESS`.

### Pulse duration (numeric)
Relay pulse duration, saved on device. Zero disables pulses. Changing this does not activate the relay.
Value can be found in the published state on the `pulse_duration` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pulse_duration": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pulse_duration": VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `ms`.

### Gate state (enum)
One sensor: open means not at the closed limit. Two sensors: intermediate means neither limit is active; sensor_error means both are active..
Value can be found in the published state on the `gate_state` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"gate_state": ""}`.
It's not possible to write (`/set`) this value.
The possible values are: `open`, `closed`, `intermediate`, `sensor_error`, `unknown`.

### Sensor count (enum)
Number of limit sensors. One uses only the closed limit; two uses both limits. Stored in Zigbee2MQTT, default one..
Value can be found in the published state on the `sensor_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensor_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensor_mode": "VALUE"}`.
The possible values are: `one`, `two`.

### Closed limit (binary)
closed limit contact (TX/RX board: GPIO0, dry contact to GND).
Value can be found in the published state on the `closed` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"closed": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` closed limit is ON, if `false` OFF.

### Open limit (binary)
open limit contact (TX/RX board: GPIO1, dry contact to GND).
Value can be found in the published state on the `open` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"open": ""}`.
It's not possible to write (`/set`) this value.
If value equals `true` open limit is ON, if `false` OFF.

