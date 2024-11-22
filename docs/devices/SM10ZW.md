---
title: "ORVIBO SM10ZW control via MQTT"
description: "Integrate your ORVIBO SM10ZW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-03-16T20:41:09Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# ORVIBO SM10ZW

|     |     |
|-----|-----|
| Model | SM10ZW  |
| Vendor  | [ORVIBO](/supported-devices/#v=ORVIBO)  |
| Description | Door or window contact switch |
| Exposes | contact, battery_low, tamper, battery, linkquality |
| Picture | ![ORVIBO SM10ZW](https://www.zigbee2mqtt.io/images/devices/SM10ZW.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Interview fails
Interview fails for `modelId: 75a4bfe8ef9c4350830a25d13e3ab068` because
`ssIasZone:iasCieAddr` can not be read or written, all messages go to the coordinator
even without proper enrolment. Device correctly reports open or closed status.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

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

