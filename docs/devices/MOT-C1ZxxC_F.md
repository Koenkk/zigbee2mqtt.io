---
title: "Profalux MOT-C1ZxxC/F control via MQTT"
description: "Integrate your Profalux MOT-C1ZxxC/F via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-10-03T08:44:52
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Profalux MOT-C1ZxxC/F

|     |     |
|-----|-----|
| Model | MOT-C1ZxxC/F  |
| Vendor  | [Profalux](/supported-devices/#v=Profalux)  |
| Description | Cover |
| Exposes | cover (state, position, tilt), device_temperature |
| Picture | ![Profalux MOT-C1ZxxC/F](https://www.zigbee2mqtt.io/images/devices/MOT-C1ZxxC-F.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `invert_cover`: Inverts the reported cover position and the state derived from it, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.
To change the tilt publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tilt": VALUE}` where `VALUE` is a number between `0` and `100`.

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

