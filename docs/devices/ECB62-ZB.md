---
title: "ENGO ECB62-ZB control via MQTT"
description: "Integrate your ENGO ECB62-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-07-01T17:54:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ENGO ECB62-ZB

|     |     |
|-----|-----|
| Model | ECB62-ZB  |
| Vendor  | [ENGO](/supported-devices/#v=ENGO)  |
| Description | Control box for underfloor heating system |
| Exposes | pump_delay_time, zone_1, zone_2, zone_3, zone_4, zone_5, zone_6, zone_a, zone_b, boiler_state, pump_state, zone_1_linked, zone_2_linked, zone_3_linked, zone_4_linked, zone_5_linked, zone_6_linked, zone_a_name, zone_b_name, zone_1_name, zone_2_name, zone_3_name, zone_4_name, zone_5_name, zone_6_name |
| Picture | ![ENGO ECB62-ZB](https://www.zigbee2mqtt.io/images/devices/ECB62-ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Pump delay time (enum)
Pump shutdown delay.
Value can be found in the published state on the `pump_delay_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pump_delay_time": NEW_VALUE}`.
The possible values are: `OFF`, `3_min`, `5_min`, `15_min`.

### Zone 1 (binary)
Zigbee zone 1 heat demand.
Value can be found in the published state on the `zone_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 1 is ON, if `OFF` OFF.

### Zone 2 (binary)
Zigbee zone 2 heat demand.
Value can be found in the published state on the `zone_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 2 is ON, if `OFF` OFF.

### Zone 3 (binary)
Zigbee zone 3 heat demand.
Value can be found in the published state on the `zone_3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 3 is ON, if `OFF` OFF.

### Zone 4 (binary)
Zigbee zone 4 heat demand.
Value can be found in the published state on the `zone_4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 4 is ON, if `OFF` OFF.

### Zone 5 (binary)
Zigbee zone 5 heat demand.
Value can be found in the published state on the `zone_5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 5 is ON, if `OFF` OFF.

### Zone 6 (binary)
Zigbee zone 6 heat demand.
Value can be found in the published state on the `zone_6` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 6 is ON, if `OFF` OFF.

### Zone a (binary)
Wired zone A heat demand.
Value can be found in the published state on the `zone_a` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone a is ON, if `OFF` OFF.

### Zone b (binary)
Wired zone B heat demand.
Value can be found in the published state on the `zone_b` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone b is ON, if `OFF` OFF.

### Boiler state (binary)
Boiler output.
Value can be found in the published state on the `boiler_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` boiler state is ON, if `OFF` OFF.

### Pump state (binary)
Pump output.
Value can be found in the published state on the `pump_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` pump state is ON, if `OFF` OFF.

### Zone 1 linked (binary)
Zone 1 thermostat connection status.
Value can be found in the published state on the `zone_1_linked` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 1 linked is ON, if `OFF` OFF.

### Zone 2 linked (binary)
Zone 2 thermostat connection status.
Value can be found in the published state on the `zone_2_linked` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 2 linked is ON, if `OFF` OFF.

### Zone 3 linked (binary)
Zone 3 thermostat connection status.
Value can be found in the published state on the `zone_3_linked` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 3 linked is ON, if `OFF` OFF.

### Zone 4 linked (binary)
Zone 4 thermostat connection status.
Value can be found in the published state on the `zone_4_linked` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 4 linked is ON, if `OFF` OFF.

### Zone 5 linked (binary)
Zone 5 thermostat connection status.
Value can be found in the published state on the `zone_5_linked` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 5 linked is ON, if `OFF` OFF.

### Zone 6 linked (binary)
Zone 6 thermostat connection status.
Value can be found in the published state on the `zone_6_linked` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` zone 6 linked is ON, if `OFF` OFF.

### Zone a name (text)
Custom name for wired zone A.
Value can be found in the published state on the `zone_a_name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_a_name": NEW_VALUE}`.

### Zone b name (text)
Custom name for wired zone B.
Value can be found in the published state on the `zone_b_name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_b_name": NEW_VALUE}`.

### Zone 1 name (text)
Custom name for zigbee zone 1.
Value can be found in the published state on the `zone_1_name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_1_name": NEW_VALUE}`.

### Zone 2 name (text)
Custom name for zigbee zone 2.
Value can be found in the published state on the `zone_2_name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_2_name": NEW_VALUE}`.

### Zone 3 name (text)
Custom name for zigbee zone 3.
Value can be found in the published state on the `zone_3_name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_3_name": NEW_VALUE}`.

### Zone 4 name (text)
Custom name for zigbee zone 4.
Value can be found in the published state on the `zone_4_name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_4_name": NEW_VALUE}`.

### Zone 5 name (text)
Custom name for zigbee zone 5.
Value can be found in the published state on the `zone_5_name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_5_name": NEW_VALUE}`.

### Zone 6 name (text)
Custom name for zigbee zone 6.
Value can be found in the published state on the `zone_6_name` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"zone_6_name": NEW_VALUE}`.

