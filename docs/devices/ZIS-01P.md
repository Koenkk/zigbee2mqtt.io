---
title: "Novato ZIS-01P control via MQTT"
description: "Integrate your Novato ZIS-01P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:20:01
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Novato ZIS-01P

|     |     |
|-----|-----|
| Model | ZIS-01P  |
| Vendor  | [Novato](/supported-devices/#v=Novato)  |
| Description | Dual-tech presence sensor (PIR + radar) |
| Exposes | occupancy, illuminance, battery, presence_distance, presence_sensitivity, radar_switch, pir_sensitivity, delay_time, led_switch |
| Picture | ![Novato ZIS-01P](https://www.zigbee2mqtt.io/images/devices/ZIS-01P.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Presence distance (numeric)
Maximum detection distance.
Value can be found in the published state on the `presence_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_distance": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `3`.
The unit of this value is `m`.

### Presence sensitivity (numeric)
Radar presence detection sensitivity (1=Low, 2=Medium, 3=High).
Value can be found in the published state on the `presence_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"presence_sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `3`.

### Radar switch (binary)
Enable or disable radar detection.
Value can be found in the published state on the `radar_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_switch": NEW_VALUE}`.
If value equals `ON` radar switch is ON, if `OFF` OFF.

### Pir sensitivity (numeric)
PIR motion sensor sensitivity (1=Low, 2=Medium, 3=High).
Value can be found in the published state on the `pir_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"pir_sensitivity": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `3`.

### Delay time (numeric)
Time delay before reporting no presence.
Value can be found in the published state on the `delay_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"delay_time": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `600`.
The unit of this value is `s`.

### Led switch (binary)
Enable or disable LED indicator.
Value can be found in the published state on the `led_switch` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"led_switch": NEW_VALUE}`.
If value equals `ON` led switch is ON, if `OFF` OFF.

