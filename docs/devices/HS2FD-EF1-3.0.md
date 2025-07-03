---
title: "HEIMAN HS2FD-EF1-3.0 control via MQTT"
description: "Integrate your HEIMAN HS2FD-EF1-3.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-07-01T17:54:38
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HEIMAN HS2FD-EF1-3.0

|     |     |
|-----|-----|
| Model | HS2FD-EF1-3.0  |
| Vendor  | [HEIMAN](/supported-devices/#v=HEIMAN)  |
| Description | Fall Detection Sensor |
| Exposes | occupancy, sensor_status, fall_status, enable_indicator, sensitivity, enable_sub_region_isolation, installation_method, cell_mounted_table, wall_mounted_table, sub_region_isolation_table |
| Picture | ![HEIMAN HS2FD-EF1-3.0](https://www.zigbee2mqtt.io/images/devices/HS2FD-EF1-3.0.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Occupancy (binary)
Indicates if someone is present.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Sensor status (enum)
Sensor activity status.
Value can be found in the published state on the `sensor_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `none`, `activity`, `unknown`.

### Fall status (enum)
Fall detection status.
Value can be found in the published state on the `fall_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `normal`, `fall_warning`, `fall_alarm`, `unknown`.

### Enable indicator (enum)
0: Off, 1: Enable.
Value can be found in the published state on the `enable_indicator` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_indicator": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_indicator": NEW_VALUE}`.
The possible values are: `0`, `1`.

### Sensitivity (enum)
0: Off, 1: Low sensitivity, 2: High sensitivity.
Value can be found in the published state on the `sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `0`, `1`, `2`.

### Enable sub region isolation (enum)
0: Disable, 1: Enable.
Value can be found in the published state on the `enable_sub_region_isolation` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"enable_sub_region_isolation": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"enable_sub_region_isolation": NEW_VALUE}`.
The possible values are: `0`, `1`.

### Installation method (enum)
0: Wall-mounted, 1: Ceiling, 2: Rotate ceiling 45°.
Value can be found in the published state on the `installation_method` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"installation_method": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"installation_method": NEW_VALUE}`.
The possible values are: `0`, `1`, `2`.

### Cell mounted table (text)
Ceiling installation area coordinate table. Format: 'X1,X2,Y1,Y2,height'. Value range: -2000≤X1≤0, 0≤X2≤2000 -2500≤Y1≤0, 0≤Y2≤2500 2300≤height≤3000 Unit:mm.
Value can be found in the published state on the `cell_mounted_table` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"cell_mounted_table": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"cell_mounted_table": NEW_VALUE}`.

### Wall mounted table (text)
Wall-mounted installation area coordinate table. Format: 'X1,X2,Y2,height' Value range: -2000≤X1≤0, 0≤X2≤2000 200≤Y2≤4000 1500≤height≤1600  Unit:mm..
Value can be found in the published state on the `wall_mounted_table` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"wall_mounted_table": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"wall_mounted_table": NEW_VALUE}`.

### Sub region isolation table (text)
Undetectable area coordinate table. Format: 'x1,x2,y1,y2,z1,z2'. Ranges: X1≤x1≤x2≤X2 When wall-mounted:  200≤y1≤y2≤Y2 0≤z1≤z2≤2300 Ceiling installation: Y1≤y1≤y2≤Y2 0≤z1≤z2≤height Unit:mm.
Value can be found in the published state on the `sub_region_isolation_table` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sub_region_isolation_table": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sub_region_isolation_table": NEW_VALUE}`.

