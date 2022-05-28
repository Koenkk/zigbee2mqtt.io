---
title: "AUBESS ZXZIR-02 control via MQTT"
description: "Integrate your AUBESS ZXZIR-02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-05-28T16:23:11Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# AUBESS ZXZIR-02

|     |     |
|-----|-----|
| Model | ZXZIR-02  |
| Vendor  | AUBESS  |
| Description | Universal Smart IR Remote Control |
| Exposes | linkquality |
| Picture | ![AUBESS ZXZIR-02](https://www.zigbee2mqtt.io/images/devices/ZXZIR-02.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


Device can learn IR codes and send already known IR codes.

### Control
By publishing to `zigbee2mqtt/FRIENDLY_NAME/set` various device attributes can control the device:

#### Switch to a learning mode

Request:
```json
{
    "learnIRCode":"ON"
}
```

The command activates the orange light on the device. You have several seconds to take source IR remote, move it closer to the device and press a button. The learned IR code will be exposed as "learnedIRCode".

#### Send already learned IR code

Request:
```json
{
    "IRCodeToSend": "<previously learned IR code>"
}
```
<!-- Notes END: Do not edit below this line -->

## Exposes

### LearnedIRCode (text)
The IR code learned by device.
Value can be found in the published state on the `learnedIRCode` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.
