---
title: "Climax SCM-5ZBS control via MQTT"
description: "Integrate your Climax SCM-5ZBS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-07-22T20:08:17Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Climax SCM-5ZBS

|     |     |
|-----|-----|
| Model | SCM-5ZBS  |
| Vendor  | [Climax](/supported-devices/#v=Climax)  |
| Description | Roller shutter |
| Exposes | cover (state, position), linkquality |
| Picture | ![Climax SCM-5ZBS](https://www.zigbee2mqtt.io/images/devices/SCM-5ZBS.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Calibration
1. Before calibration, the external local switches must be connected to the Shutter Control.
2. Press and hold the Function button for 3~10 seconds and release to enter Calibration mode. The Shutter Controller will roll toward the "Open" direction for 4 minutes upon entering Calibration mode.
3. Wait for 4 minutes for Shutter Control to stop rolling to "Open" direction, then activate the connected external local "Close" switch to close the shutter.
4. Activate the "Open" external local switch the moment the shutter is fully closed. The Shutter control will record the time it took between step 3 and 4 as the new "close time"
5. The Shutter control will roll toward an open direction after step 4
6. Activate the "Close" external local switch the moment the shutter is fully opened. The Shutter control will record the time it took between step 5 and 6 as the new "open time"
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`


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

