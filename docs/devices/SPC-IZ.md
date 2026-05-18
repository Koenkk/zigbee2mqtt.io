---
title: "Nobø SPC-IZ control via MQTT"
description: "Integrate your Nobø SPC-IZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:36:21
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nobø SPC-IZ

|     |     |
|-----|-----|
| Model | SPC-IZ  |
| Vendor  | [Nobø](/supported-devices/#v=Nob%C3%B8)  |
| Description | Control unit for panel heaters |
| Exposes | identify, climate (local_temperature, occupied_heating_setpoint, unoccupied_heating_setpoint, system_mode, running_mode) |
| Picture | ![Nobø SPC-IZ](https://www.zigbee2mqtt.io/images/devices/SPC-IZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
The device requires firmware version v3.18 or newer to support Zigbee pairing. If your device has an older firmware version, you will need to update it using Glen Dimplex's ConfigR application. Update instructions can be found [here](https://cdn.sanity.io/files/0fq01xzs/production/8d81438f219b1099b35b6c896438bf2cdac1812b.pdf).

To pair the device:
1. Navigate to Settings → Comms → RF → Enable on the thermostat
2. The device will enter pairing mode
3. Zigbee2MQTT should automatically discover the device
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `identify_timeout`: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of `1` and with a maximum value of `30`

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Identify (enum)
Initiate device identification.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
The possible values are: `identify`.

### Climate 
This climate device supports the following features: `local_temperature`, `occupied_heating_setpoint`, `unoccupied_heating_setpoint`, `system_mode`, `running_mode`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `7` and `32`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured by the internal sensor (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of this device. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.

