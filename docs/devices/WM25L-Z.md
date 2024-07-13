---
title: "Smartwings WM25L-Z control via MQTT"
description: "Integrate your Smartwings WM25L-Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-03-03T21:28:38Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Smartwings WM25L-Z

|     |     |
|-----|-----|
| Model | WM25L-Z  |
| Vendor  | [Smartwings](/supported-devices/#v=Smartwings)  |
| Description | Roller shade |
| Exposes | cover (state, position), battery, linkquality |
| Picture | ![Smartwings WM25L-Z](https://www.zigbee2mqtt.io/images/devices/WM25L-Z.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Press and hold the button on the motor head for 6 seconds until the motor feedback twice then release the button. The red led light on indicate to enter the pairing mode.

### End Position
The roller blind maximum extension can be set by moving the blind to the desired position and then double pressing the up or down button.
To reset the end position so you can define a newer more extended end position, open the blind fully. Then double press the up or down button. You can now set the blind extension again.

### Open/Close Behavior
If the unit is shipped with the open and close actions swapped (where OPEN causes the shade to lengthen instead of shorten?), it can be reversed with the included remote. To reverse the open/close behavior:

1. open the back of the remote and press the P (program buttom) once - the motor will activate once briefly
2. press and hold the UP and DOWN arrow buttons on the remote briefly until you hear the motor activate once briefly
3. the open/close behavior should now be reversed
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `invert_cover`: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be `true` or `false`

* `cover_position_tilt_disable_report`: Do not publish set cover target position as a normal 'position' value (default false). The value must be `true` or `false`


## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

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

