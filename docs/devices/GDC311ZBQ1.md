---
title: "Tuya GDC311ZBQ1 control via MQTT"
description: "Integrate your Tuya GDC311ZBQ1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-04-03T11:58:11
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya GDC311ZBQ1

|     |     |
|-----|-----|
| Model | GDC311ZBQ1  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | LoraTap garage door opener with wireless sensor |
| Exposes | trigger, garage_door_contact, linkquality |
| Picture | ![Tuya GDC311ZBQ1](https://www.zigbee2mqtt.io/images/devices/GDC311ZBQ1.png) |
| White-label | LoraTap GDC311ZBQ1 |


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
Indicates if the garage door contact is closed (= true) or open (= false).
Value can be found in the published state on the `garage_door_contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` garage door contact is ON, if `true` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

