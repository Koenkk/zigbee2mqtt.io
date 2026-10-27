---
title: "Salus Controls KL08RF control via MQTT"
description: "Integrate your Salus Controls KL08RF via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-10-17T16:44:18.326Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Salus Controls KL08RF

|     |     |
|-----|-----|
| Model | KL08RF  |
| Vendor  | [Salus Controls](/supported-devices/#v=Salus%20Controls)  |
| Description | iT600 8-zone wiring centre |
| Exposes | zone_1, zone_2, zone_3, zone_4, zone_5, zone_6, zone_7, zone_8, replaced_thermostat |
| Picture | ![Salus Controls KL08RF](https://www.zigbee2mqtt.io/images/devices/KL08RF.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

This device is also sold under the Neotherm brand in Denmark.

### Pairing
The wiring centre sends the same Salus specific greeting as the [SQ610RFNH](./SQ610RFNH.md) thermostat when it joins, and leaves again if nobody answers it. This converter answers it, and gives the wiring centre device number 1. Only one wiring centre per Zigbee network is supported.

1. Factory reset the wiring centre: hold Pair for 15 s until G1 and G2 turn red and go off. Its paired thermostats leave the network too, so they have to join and be paired again.
2. Cut its mains power and wait until the network LED has gone dark. A short cut is not enough: the radio keeps running, and after a reset the wiring centre does not look for a network by itself.
3. Permit join on the whole network: publish `{"time": 254}` to `zigbee2mqtt/bridge/request/permit_join`. Do not limit it to the wiring centre when you join thermostats.
4. Switch the wiring centre on. It joins at once and is recognised as a KL08RF.

### Zones
The wiring centre reports which thermostat holds which zone. `zone_1` to `zone_8` show the IEEE address of the thermostat in each zone, or its short address when no device has it (a thermostat that rejoined under a new one), and null while the zone is free. It reports the table by itself after each pairing and at boot, and a get on any zone asks for it again.

A zone is paired from the thermostat, not from the wiring centre: set `wiring_centre_zones` on the thermostat, see [Wiring centre zones](./SQ610RFNH.md#wiring-centre-zones). The thermostat leaves "go to the Smart Home app" when its zone is paired. A zone that another thermostat holds is refused unless the command has the replace flag, and the wiring centre then reports the thermostat it replaced as `replaced_thermostat`.

From then on the thermostats send their demand to the wiring centre, which switches the zone relays and the pump and boiler outputs.

### Firmware updates
The wiring centre lists the OTA client cluster (0x0019), and Salus ships its firmware as standard Zigbee OTA files. The OTA index has the image of the version it runs (20230222) under the manufacturer name SalusControls, which the definition uses, and Zigbee2MQTT matches the wiring centre to it. No newer image exists yet, so a transfer has not been tried.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Zone 1 (text)
IEEE address of the thermostat in zone 1, its short address while no device has it, null while the zone is free.
Value can be found in the published state on the `zone_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_1": ""}`.
It's not possible to write (`/set`) this value.

### Zone 2 (text)
IEEE address of the thermostat in zone 2, its short address while no device has it, null while the zone is free.
Value can be found in the published state on the `zone_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_2": ""}`.
It's not possible to write (`/set`) this value.

### Zone 3 (text)
IEEE address of the thermostat in zone 3, its short address while no device has it, null while the zone is free.
Value can be found in the published state on the `zone_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_3": ""}`.
It's not possible to write (`/set`) this value.

### Zone 4 (text)
IEEE address of the thermostat in zone 4, its short address while no device has it, null while the zone is free.
Value can be found in the published state on the `zone_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_4": ""}`.
It's not possible to write (`/set`) this value.

### Zone 5 (text)
IEEE address of the thermostat in zone 5, its short address while no device has it, null while the zone is free.
Value can be found in the published state on the `zone_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_5": ""}`.
It's not possible to write (`/set`) this value.

### Zone 6 (text)
IEEE address of the thermostat in zone 6, its short address while no device has it, null while the zone is free.
Value can be found in the published state on the `zone_6` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_6": ""}`.
It's not possible to write (`/set`) this value.

### Zone 7 (text)
IEEE address of the thermostat in zone 7, its short address while no device has it, null while the zone is free.
Value can be found in the published state on the `zone_7` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_7": ""}`.
It's not possible to write (`/set`) this value.

### Zone 8 (text)
IEEE address of the thermostat in zone 8, its short address while no device has it, null while the zone is free.
Value can be found in the published state on the `zone_8` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"zone_8": ""}`.
It's not possible to write (`/set`) this value.

### Replaced thermostat (text)
IEEE address of the thermostat the wiring centre last reported as replaced in a zone, its short address while no device has it.
Value can be found in the published state on the `replaced_thermostat` property.
It's not possible to read (`/get`) or write (`/set`) this value.

