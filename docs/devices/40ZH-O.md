---
title: "Aubess 40ZH-O control via MQTT"
description: "Integrate your Aubess 40ZH-O via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-30T19:10:55
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Aubess 40ZH-O

|     |     |
|-----|-----|
| Model | 40ZH-O  |
| Vendor  | [Aubess](/supported-devices/#v=Aubess)  |
| Description | Motion sensor |
| Exposes | occupancy, battery_low, battery, sensitivity, keep_time |
| Picture | ![Aubess 40ZH-O](https://www.zigbee2mqtt.io/images/devices/40ZH-O.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To start pairing, press the button (pinhole on the side of the device) using a
pin/paperclip for approx. 10 seconds. The led will turn on, then start blinking while the
pairing process is in progress.

### Reading and Setting Values

As a low power device, the motion sensor isn't reachable most of the time, but
only when active (e.g. because it detected motion). Therefore, requests to read
or set values (i.e. `sensitivity` or `keep_time`) won't be processed right away,
typically. Instead, they will be queued and sent on the next occasion.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Sensitivity (enum)
PIR sensor sensitivity.
Value can be found in the published state on the `sensitivity` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sensitivity": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensitivity": NEW_VALUE}`.
The possible values are: `low`, `medium`, `high`.

### Keep time (enum)
PIR keep time in seconds.
Value can be found in the published state on the `keep_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"keep_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"keep_time": NEW_VALUE}`.
The possible values are: `30`, `60`, `120`.

