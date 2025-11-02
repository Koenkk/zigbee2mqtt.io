---
title: "HOBEIAN ZG-204ZE control via MQTT"
description: "Integrate your HOBEIAN ZG-204ZE via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-05-07T18:17:42
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HOBEIAN ZG-204ZE

|     |     |
|-----|-----|
| Model | ZG-204ZE  |
| Vendor  | [HOBEIAN](/supported-devices/#v=HOBEIAN)  |
| Description | 10G mw motion detection |
| Exposes | presence, battery, fading_time, indicator, motion_detection_sensitivity |
| Picture | ![HOBEIAN ZG-204ZE](https://www.zigbee2mqtt.io/images/devices/ZG-204ZE.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To start pairing, press the button (pinhole on the side of the device) using a
pin/paperclip for approx. 10 seconds. The led will turn on, then start blinking while the
pairing process is in progress.

### Reading and Setting Values

As a low power device, the motion sensor isn't reachable most of the time, but
only when active (e.g. because it detected motion). Therefore, requests to read
or set values (i.e. `sensitivity` or `keep_time`) will only work when the sensor detects motion.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Fading time (numeric)
Motion keep time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `28800`.
The unit of this value is `s`.

### Indicator (binary)
LED indicator mode.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
If value equals `ON` indicator is ON, if `OFF` OFF.

### Motion detection sensitivity (numeric)
The larger the value, the more sensitive it is (refresh and update only while active).
Value can be found in the published state on the `motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `19`.
The unit of this value is `x`.

