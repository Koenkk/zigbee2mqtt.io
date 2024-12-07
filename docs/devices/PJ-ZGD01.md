---
title: "Tuya PJ-ZGD01 control via MQTT"
description: "Integrate your Tuya PJ-ZGD01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-01-31T17:42:44
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya PJ-ZGD01

|     |     |
|-----|-----|
| Model | PJ-ZGD01  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Garage door opener |
| Exposes | trigger, garage_door_contact, linkquality |
| Picture | ![Tuya PJ-ZGD01](https://www.zigbee2mqtt.io/images/devices/PJ-ZGD01.png) |
| White-label | MatSee Plus PJ-ZGD01 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### Trigger (binary)
Trigger the door movement.
Value can be found in the published state on the `trigger` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"trigger": NEW_VALUE}`.
If value equals `true` trigger is ON, if `false` OFF.

### Garage door contact (binary)
Value can be found in the published state on the `garage_door_contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` garage door contact is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

