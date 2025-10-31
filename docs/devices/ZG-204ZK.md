---
title: "HOBEIAN ZG-204ZK control via MQTT"
description: "Integrate your HOBEIAN ZG-204ZK via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-03-31T18:43:56
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HOBEIAN ZG-204ZK

|     |     |
|-----|-----|
| Model | ZG-204ZK  |
| Vendor  | [HOBEIAN](/supported-devices/#v=HOBEIAN)  |
| Description | 24Ghz human presence sensor |
| Exposes | presence, battery, fading_time, static_detection_distance, static_detection_sensitivity, motion_detection_sensitivity, indicator |
| Picture | ![HOBEIAN ZG-204ZK](https://www.zigbee2mqtt.io/images/devices/ZG-204ZK.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

The manufacturer provides a good [technical in-depth document](https://doc.szalarm.com/zg-205Z/en/) that explains
what the various settings mean, good default values for those, a recommended method for trimming these values and 
various other considerations (like installation position) to get good results.

There seem to be multiple versions of this device which visually look the same. 
Devices which are detected as `Zigbee Model=TS0601, Zigbee Manufacturer=_TZE200_kb5noeto` are known to get stuck in "presence detected" state. See this [review](https://smarthomescene.com/reviews/zigbee-battery-powered-presence-sensor-zg-204zm-review/) for more user experiences.
One of the suggestions is to remove residual solder-flux from the PCB and/or to resolder some components.
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
Presence keep time.
Value can be found in the published state on the `fading_time` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"fading_time": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `28800`.
The unit of this value is `s`.

### Static detection distance (numeric)
Static detection distance.
Value can be found in the published state on the `static_detection_distance` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_distance": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `5`.
The unit of this value is `m`.

### Static detection sensitivity (numeric)
Static detection sensitivity.
Value can be found in the published state on the `static_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"static_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `x`.

### Motion detection sensitivity (numeric)
Motion detection sensitivity (Firmware version>=0122052017).
Value can be found in the published state on the `motion_detection_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motion_detection_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.
The unit of this value is `x`.

### Indicator (binary)
LED indicator mode.
Value can be found in the published state on the `indicator` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"indicator": NEW_VALUE}`.
If value equals `ON` indicator is ON, if `OFF` OFF.

