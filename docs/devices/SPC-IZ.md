---
title: 'Nobø SPC-IZ control via MQTT'
description: "Integrate your Nobø SPC-IZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-25T10:00:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Nobø SPC-IZ

|             |                                                                                  |
| ----------- | -------------------------------------------------------------------------------- |
| Model       | SPC-IZ                                                                           |
| Vendor      | [Nobø](/supported-devices/#v=Nobø)                                               |
| Description | Zigbee thermostat                                                                |
| Exposes     | climate (occupied_heating_setpoint, local_temperature, system_mode), linkquality |
| Picture     | ![Nobø SPC-IZ](https://www.zigbee2mqtt.io/images/devices/SPC-IZ.png)             |

<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

## Notes

### Pairing
The device requires firmware version v3.18 or newer to support Zigbee pairing. If your device has an older firmware version, you will need to update it using Glen Dimplex's ConfigR application. Update instructions can be found [here](https://cdn.sanity.io/files/0fq01xzs/production/8d81438f219b1099b35b6c896438bf2cdac1812b.pdf).

To pair the device:
1. Navigate to Settings → Comms → RF → Enable on the thermostat
2. The device will enter pairing mode
3. Zigbee2MQTT should automatically discover the device

<!-- Notes END: Do not edit below this line -->

## Exposes

### Climate

This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `system_mode`.

- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `5` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of the thermostat. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.

### Linkquality (numeric)

Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.
