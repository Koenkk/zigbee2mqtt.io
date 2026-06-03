---
title: "Tuya ZY-ZHPS01-24G control via MQTT"
description: "Integrate your Tuya ZY-ZHPS01-24G via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-31T19:17:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya ZY-ZHPS01-24G

|     |     |
|-----|-----|
| Model | ZY-ZHPS01-24G  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 24GHz mmWave human presence sensor |
| Exposes | presence, illuminance, dis_current, presence_delay, movesensitivity, breathsensitivity, movedistance_max, movedistance_min, breathdistance_max, breathdistance_min, self_learning, restore_factory_setting |
| Picture | ![Tuya ZY-ZHPS01-24G](https://www.zigbee2mqtt.io/images/devices/ZY-ZHPS01-24G.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `measurement_poll_interval`: This device does not support reporting electric measurements so it is polled instead. The default poll interval is 60 seconds, set to -1 to disable. The value must be a number with a minimum value of `-1`

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Dis current (numeric)
Current detection distance.
Value can be found in the published state on the `dis_current` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `cm`.

### Presence delay (numeric)
Presence delay.
Value can be found in the published state on the `presence_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_delay": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `600`.
The unit of this value is `s`.

### Movesensitivity (numeric)
Move sensitivity.
Value can be found in the published state on the `movesensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"movesensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Breathsensitivity (numeric)
Breath sensitivity.
Value can be found in the published state on the `breathsensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breathsensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Movedistance max (numeric)
Move detection max distance.
Value can be found in the published state on the `movedistance_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"movedistance_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `cm`.

### Movedistance min (numeric)
Move detection min distance.
Value can be found in the published state on the `movedistance_min` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"movedistance_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `cm`.

### Breathdistance max (numeric)
Breath detection max distance.
Value can be found in the published state on the `breathdistance_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breathdistance_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `cm`.

### Breathdistance min (numeric)
Breath detection min distance.
Value can be found in the published state on the `breathdistance_min` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"breathdistance_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `cm`.

### Self learning (enum)
Self learning mode.
Value can be found in the published state on the `self_learning` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"self_learning": NEW_VALUE}`.
The possible values are: `start`, `stop`.

### Restore factory setting (binary)
Factory reset (behavior depends on firmware).
Value can be found in the published state on the `restore_factory_setting` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"restore_factory_setting": NEW_VALUE}`.
If value equals `true` restore factory setting is ON, if `false` OFF.

