---
title: "Somgoms SM-1CTW-EU control via MQTT"
description: "Integrate your Somgoms SM-1CTW-EU via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-05-17T18:42:00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Somgoms SM-1CTW-EU

|     |     |
|-----|-----|
| Model | SM-1CTW-EU  |
| Vendor  | [Somgoms](/supported-devices/#v=Somgoms)  |
| Description | Curtain switch |
| Exposes | cover (state, position), linkquality |
| Picture | ![Somgoms SM-1CTW-EU](https://www.zigbee2mqtt.io/images/devices/SM-1CTW-EU.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Pairing
Press and release the middle (stop) button 5 times and hold for a 6th time until you hear a beep and see the light flashing.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

