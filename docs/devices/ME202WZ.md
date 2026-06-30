---
title: "Tuya ME202WZ control via MQTT"
description: "Integrate your Tuya ME202WZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:20:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ME202WZ

|     |     |
|-----|-----|
| Model | ME202WZ  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Water level sensor |
| Exposes | liquid_state, liquid_level_percent, liquid_depth, voltage, max_set, min_set, liquid_depth_max, relay_switch, pump_mode, pump_control, version |
| Picture | ![Tuya ME202WZ](https://www.zigbee2mqtt.io/images/devices/ME202WZ.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Liquid state (enum)
Liquid level status.
Value can be found in the published state on the `liquid_state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `low`, `normal`, `high`.

### Liquid level percent (numeric)
Liquid level ratio.
Value can be found in the published state on the `liquid_level_percent` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Liquid depth (numeric)
Liquid depth.
Value can be found in the published state on the `liquid_depth` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `m`.

### Voltage (numeric)
Power supply voltage.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `V`.

### Max set (numeric)
Liquid maximum percentage.
Value can be found in the published state on the `max_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"max_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Min set (numeric)
Liquid minimum percentage.
Value can be found in the published state on the `min_set` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"min_set": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Liquid depth max (numeric)
Distance from sensor to liquid surface.
Value can be found in the published state on the `liquid_depth_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"liquid_depth_max": NEW_VALUE}`.
The minimal value is `0.1` and the maximum value is `10`.
The unit of this value is `m`.

### Relay switch (binary)
Value can be found in the published state on the `relay_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"relay_switch": NEW_VALUE}`.
If value equals `ON` relay switch is ON, if `OFF` OFF.

### Pump mode (enum)
Value can be found in the published state on the `pump_mode` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pump_mode": NEW_VALUE}`.
The possible values are: `supply`, `drainage`.

### Pump control (enum)
Value can be found in the published state on the `pump_control` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pump_control": NEW_VALUE}`.
The possible values are: `auto`, `manual`.

### Version (text)
Value can be found in the published state on the `version` property.
It's not possible to read (`/get`) or write (`/set`) this value.

