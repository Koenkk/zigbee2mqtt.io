---
title: "Acova TAFFETAS2/PERCALE2 control via MQTT"
description: "Integrate your Acova TAFFETAS2/PERCALE2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-02-29T20:20:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Acova TAFFETAS2/PERCALE2

|     |     |
|-----|-----|
| Model | TAFFETAS2/PERCALE2  |
| Vendor  | [Acova](/supported-devices/#v=Acova)  |
| Description | Taffetas 2 / Percale 2 heater |
| Exposes | climate (occupied_heating_setpoint, unoccupied_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration), occupancy, linkquality |
| Picture | ![Acova TAFFETAS2/PERCALE2](https://www.zigbee2mqtt.io/images/devices/TAFFETAS2-PERCALE2.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing

- Press and hold the `Mode` button to enter configuration mode
- If already paired with the Enki box, press and hold the `-` (minus) button until `Off` is displayed (you'll probably also have to first remove the heater from the Enki box using the dedicated app)
- Press and hold the `+` (plus) button until a code appears on the screen (this is a pairing code used with the Enki box app we don't use here)
- Turn on pairing mode in zigbee2mqtt
- Press (and sometimes hold) the `+` button until a "progress bar" appears on the screen 
- Wait for pairing. The device should show up in zigbee2mqtt in a few seconds and the screen should now display `On`
- Press and hold the `Mode` button to leave configuration mode (or wait for ~ 30 sec to 1 minute). The device should now display "Box" on the top right corner of the screen and the temperature setpoint
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`

* `no_occupancy_since`: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a `{"no_occupancy_since": 10}` will be send after 10 seconds and a `{"no_occupancy_since": 60}` after 60 seconds. The value must be a list of [object Object].


## Exposes

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `unoccupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`, `local_temperature_calibration`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `7` and `28`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `auto`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-12.8` and the maximum value is `12.7` with a step size of `0.1`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

