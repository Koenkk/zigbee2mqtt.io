---
title: "Blaupunkt SCM-S1 control via MQTT"
description: "Integrate your Blaupunkt SCM-S1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section till next h1 (#) or h2 heading (##). -->
<!-- Do NOT use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Blaupunkt SCM-S1

|     |     |
|-----|-----|
| Model | SCM-S1  |
| Vendor  | Blaupunkt  |
| Description | Roller shutter |
| Exposes | cover (state, position), linkquality |
| Picture | ![Blaupunkt SCM-S1](https://psi-4ward.github.io/zigbee2mqtt.io/images/devices/SCM-S1.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: By default the position/tilt values mean: open = 100, closed = 0. This can be inverted by setting this option to true (so open = 0, close = 100).

<!-- Notes END: Do not edit below this line -->


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
To read the current state of this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

