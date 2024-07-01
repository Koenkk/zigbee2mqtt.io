---
title: "Tuya CTL-R1-TY-Zigbee control via MQTT"
description: "Integrate your Tuya CTL-R1-TY-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-01T18:54:40
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya CTL-R1-TY-Zigbee

|     |     |
|-----|-----|
| Model | CTL-R1-TY-Zigbee  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | 24G radar human presence motion sensor. |
| Exposes | illuminance, presence, presence_sensitivity, detection_range, detection_delay, illuminance_treshold_max, illuminance_treshold_min, presence_illuminance_switch, light_switch, light_linkage, detection_method, indicator_light, identify, linkquality |
| Picture | ![Tuya CTL-R1-TY-Zigbee](https://www.zigbee2mqtt.io/images/devices/CTL-R1-TY-Zigbee.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Illuminance (numeric)
Raw measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Presence sensitivity (numeric)
Presence sensitivity.
Value can be found in the published state on the `presence_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Detection range (numeric)
Detection range.
Value can be found in the published state on the `detection_range` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_range": NEW_VALUE}`.
The minimal value is `1.5` and the maximum value is `4.5`.
The unit of this value is `m`.

### Detection delay (numeric)
Presence detection delay.
Value can be found in the published state on the `detection_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_delay": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `600`.
The unit of this value is `s`.

### Illuminance treshold max (numeric)
The max illumiance threshold to turn on the light.
Value can be found in the published state on the `illuminance_treshold_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_treshold_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `lx`.

### Illuminance treshold min (numeric)
The min illumiance threshold to turn on the light.
Value can be found in the published state on the `illuminance_treshold_min` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"illuminance_treshold_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `2000`.
The unit of this value is `lx`.

### Presence illuminance switch (binary)
Whether to enable 'light_switch' illumination is between min/max threshold.
Value can be found in the published state on the `presence_illuminance_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_illuminance_switch": NEW_VALUE}`.
If value equals `true` presence illuminance switch is ON, if `false` OFF.

### Light switch (binary)
This state will determine the light on/off based on the lighting threshold and presence sensing.
Value can be found in the published state on the `light_switch` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` light switch is ON, if `OFF` OFF.

### Light linkage (binary)
Light linkage.
Value can be found in the published state on the `light_linkage` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"light_linkage": NEW_VALUE}`.
If value equals `true` light linkage is ON, if `false` OFF.

### Detection method (enum)
When 'only_move' is used, presence will only be triggered when there is movement.
Value can be found in the published state on the `detection_method` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"detection_method": NEW_VALUE}`.
The possible values are: `only_move`, `exist_move`.

### Indicator light (enum)
Controls when the indicator light is turned on.
Value can be found in the published state on the `indicator_light` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator_light": NEW_VALUE}`.
The possible values are: `presence`, `off`, `on`.

### Identify (binary)
After turning on, the indicator light quickly flashes, used to locate devices.
Value can be found in the published state on the `identify` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"identify": NEW_VALUE}`.
If value equals `true` identify is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

