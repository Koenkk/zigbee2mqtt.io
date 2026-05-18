---
title: "HomeSeer DS150ZB control via MQTT"
description: "Integrate your HomeSeer DS150ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2025-09-01T18:17:10
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# HomeSeer DS150ZB

|     |     |
|-----|-----|
| Model | DS150ZB  |
| Vendor  | [HomeSeer](/supported-devices/#v=HomeSeer)  |
| Description | Door sensor |
| Exposes | battery, contact, battery_low |
| Picture | ![HomeSeer DS150ZB](https://www.zigbee2mqtt.io/images/devices/DS150ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing 
Sqeeze the top of the sensor until you see a blue led flashing then release. After this the device will automatically join.
<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Contact (binary)
Indicates whether the device is opened or closed.
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

### Battery low (binary)
Indicates whether the battery of the device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

