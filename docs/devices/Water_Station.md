---
title: "Bacchus Water_Station control via MQTT"
description: "Integrate your Bacchus Water_Station via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-05-01T17:56:31
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Bacchus Water_Station

|     |     |
|-----|-----|
| Model | Water_Station  |
| Vendor  | [Bacchus](/supported-devices/#v=Bacchus)  |
| Description | Water_Station |
| Exposes | pump_1, pump_1_duration, pump_2, pump_3_duration, pump_3, pump_all, beeper, beeper_on_leak, water_leak, full |
| Picture | ![Bacchus Water_Station](https://www.zigbee2mqtt.io/images/devices/Water_Station.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
[Original project description](https://github.com/Bacchus777/WaterStation_v2)
<!-- Notes END: Do not edit below this line -->




## Exposes

### Pump 1 (binary, 1 endpoint)
Enable first pump.
Value can be found in the published state on the `pump_1_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pump_1_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pump_1_1": NEW_VALUE}`.
If value equals `ON` pump 1 is ON, if `OFF` OFF.

### Pump 1 duration (numeric, 1 endpoint)
Duration of pump 1.
Value can be found in the published state on the `pump_1_duration_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pump_1_duration_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pump_1_duration_1": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `sec`.

### Pump 2 (binary, 2 endpoint)
Enable second pump.
Value can be found in the published state on the `pump_2_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pump_2_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pump_2_2": NEW_VALUE}`.
If value equals `ON` pump 2 is ON, if `OFF` OFF.

### Pump 3 duration (numeric, 2 endpoint)
Duration of pump 2.
Value can be found in the published state on the `pump_3_duration_2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pump_3_duration_2": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pump_3_duration_2": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `sec`.

### Pump 3 (binary, 3 endpoint)
Enable third pump.
Value can be found in the published state on the `pump_3_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pump_3_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pump_3_3": NEW_VALUE}`.
If value equals `ON` pump 3 is ON, if `OFF` OFF.

### Pump 3 duration (numeric, 3 endpoint)
Duration of pump 3.
Value can be found in the published state on the `pump_3_duration_3` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pump_3_duration_3": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pump_3_duration_3": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `sec`.

### Pump all (binary, 4 endpoint)
Enable all pumps.
Value can be found in the published state on the `pump_all_4` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"pump_all_4": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pump_all_4": NEW_VALUE}`.
If value equals `ON` pump all is ON, if `OFF` OFF.

### Beeper (binary, 5 endpoint)
Beeper.
Value can be found in the published state on the `beeper_5` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"beeper_5": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"beeper_5": NEW_VALUE}`.
If value equals `ON` beeper is ON, if `OFF` OFF.

### Beeper on leak (binary, 1 endpoint)
Beeper.
Value can be found in the published state on the `beeper_on_leak_1` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"beeper_on_leak_1": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"beeper_on_leak_1": NEW_VALUE}`.
If value equals `ON` beeper on leak is ON, if `OFF` OFF.

### Water leak (binary)
Indicates whether the device detected a water leak.
Value can be found in the published state on the `water_leak` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` water leak is ON, if `false` OFF.

### Full (binary)
Indicates whether the water tank is full.
Value can be found in the published state on the `full` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` full is ON, if `false` OFF.

