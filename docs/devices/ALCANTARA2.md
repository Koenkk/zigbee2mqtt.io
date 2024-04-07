---
title: "Acova ALCANTARA2 control via MQTT"
description: "Integrate your Acova ALCANTARA2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-02-01T18:08:24
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Acova ALCANTARA2

|     |     |
|-----|-----|
| Model | ALCANTARA2  |
| Vendor  | [Acova](/supported-devices/#v=Acova)  |
| Description | Alcantara 2 heater |
| Exposes | climate (occupied_heating_setpoint, unoccupied_heating_setpoint, local_temperature, system_mode, running_state), linkquality |
| Picture | ![Acova ALCANTARA2](https://www.zigbee2mqtt.io/images/devices/ALCANTARA2.png) |


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


## Exposes

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `unoccupied_heating_setpoint`, `local_temperature`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `7` and `28`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`, `auto`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

