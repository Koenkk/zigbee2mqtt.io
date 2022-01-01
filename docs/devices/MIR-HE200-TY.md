---
title: "TuYa MIR-HE200-TY control via MQTT"
description: "Integrate your TuYa MIR-HE200-TY via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa MIR-HE200-TY

|     |     |
|-----|-----|
| Model | MIR-HE200-TY  |
| Vendor  | TuYa  |
| Description | Human presence sensor |
| Exposes | illuminance_lux, presence, motion, motion_speed, motion_direction, radar_sensitivity, radar_scene, linkquality |
| Picture | ![TuYa MIR-HE200-TY](https://www.zigbee2mqtt.io/images/devices/MIR-HE200-TY.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Factory resetting by pushing the "Reset-Button" longer than 5 seconds or by using Touchlink factory reset.
<!-- Notes END: Do not edit below this line -->



## Exposes

### Illuminance_lux (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance_lux` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Motion (binary)
moving inside the range of the sensor.
Value can be found in the published state on the `motion` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true,false` motion is ON, if `undefined` OFF.

### Motion_speed (numeric)
Speed of movement.
Value can be found in the published state on the `motion_speed` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Motion_direction (enum)
direction of movement from the point of view of the radar.
Value can be found in the published state on the `motion_direction` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `standing_still`, `moving_forward`, `moving_backward`.

### Radar_sensitivity (numeric)
sensitivity of the radar.
Value can be found in the published state on the `radar_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Radar_scene (enum)
presets for sensivity for presence and movement.
Value can be found in the published state on the `radar_scene` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_scene": NEW_VALUE}`.
The possible values are: `default`, `area`, `toilet`, `bedroom`, `parlour`, `office`, `hotel`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

