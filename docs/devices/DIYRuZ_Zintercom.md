---
title: "DIYRuZ DIYRuZ_Zintercom control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_Zintercom via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-08-01T20:41:55Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# DIYRuZ DIYRuZ_Zintercom

|     |     |
|-----|-----|
| Model | DIYRuZ_Zintercom  |
| Vendor  | [DIYRuZ](/supported-devices/#v=DIYRuZ)  |
| Description | Matrix intercom auto opener |
| Exposes | state, mode, sound, time_ring, time_talk, time_open, time_bell, time_report, battery, linkquality |
| Picture | ![DIYRuZ DIYRuZ_Zintercom](https://www.zigbee2mqtt.io/images/devices/DIYRuZ_Zintercom.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[Matrix intercom auto opener](https://diyruz.github.io/posts/zintercom/)
<!-- Notes END: Do not edit below this line -->




## Exposes

### State (enum)
Current state.
Value can be found in the published state on the `state` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `idle`, `ring`, `talk`, `open`, `drop`.

### Mode (enum)
Select open mode.
Value can be found in the published state on the `mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"mode": NEW_VALUE}`.
The possible values are: `never`, `once`, `always`, `drop`.

### Sound (binary)
Enable or disable sound.
Value can be found in the published state on the `sound` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"sound": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sound": NEW_VALUE}`.
If value equals `ON` sound is ON, if `OFF` OFF.

### Time ring (numeric)
Time to ring before answer.
Value can be found in the published state on the `time_ring` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"time_ring": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"time_ring": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `sec`.

### Time talk (numeric)
Time to hold before open.
Value can be found in the published state on the `time_talk` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"time_talk": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"time_talk": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `sec`.

### Time open (numeric)
Time to open before end.
Value can be found in the published state on the `time_open` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"time_open": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"time_open": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `sec`.

### Time bell (numeric)
Time after last bell to finish ring.
Value can be found in the published state on the `time_bell` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"time_bell": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"time_bell": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `600`.
The unit of this value is `sec`.

### Time report (numeric)
Reporting interval.
Value can be found in the published state on the `time_report` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"time_report": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"time_report": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1440`.
The unit of this value is `min`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

