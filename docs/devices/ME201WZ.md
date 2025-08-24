---
title: "Tuya ME201WZ control via MQTT"
description: "Integrate your Tuya ME201WZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-11-30T20:27:20
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ME201WZ

|     |     |
|-----|-----|
| Model | ME201WZ  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Water level sensor |
| Exposes | liquid_level_percent, liquid_depth, liquid_state, max_set, mini_set, installation_height, liquid_depth_max |
| Picture | ![Tuya ME201WZ](https://www.zigbee2mqtt.io/images/devices/ME201WZ.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Liquid level percent (numeric)
Liquid level ratio.
Value can be found in the published state on the `liquid_level_percent` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Liquid depth (numeric)
Liquid Depth.
Value can be found in the published state on the `liquid_depth` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m`.

### Liquid state (enum)
Liquid level status.
Value can be found in the published state on the `liquid_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `normal`, `high`.

### Max set (numeric)
Liquid max percentage.
Value can be found in the published state on the `max_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Mini set (numeric)
Liquid minimal percentage.
Value can be found in the published state on the `mini_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mini_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Installation height (numeric)
Height from sensor to tank bottom.
Value can be found in the published state on the `installation_height` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"installation_height": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `4`.
The unit of this value is `m`.

### Liquid depth max (numeric)
Height from sensor to liquid level.
Value can be found in the published state on the `liquid_depth_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"liquid_depth_max": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `4`.
The unit of this value is `m`.

