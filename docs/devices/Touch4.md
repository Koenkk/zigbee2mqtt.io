---
title: "databyte.ch Touch4 control via MQTT"
description: "Integrate your databyte.ch Touch4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2022-09-30T19:10:55
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# databyte.ch Touch4

|     |     |
|-----|-----|
| Model | Touch4  |
| Vendor  | [databyte.ch](/supported-devices/#v=databyte.ch)  |
| Description | Wall touchsensor with 4 keys |
| Exposes | battery, linkquality, key_1, key_2, key_3, key_4 |
| Picture | ![databyte.ch Touch4](https://www.zigbee2mqtt.io/images/devices/Touch4.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Link
More information about this devices can be found here: https://databyte.ch/project/zigbee-touch-key
<!-- Notes END: Do not edit below this line -->




## Exposes

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

### Key 1 (binary)
Value can be found in the published state on the `key_1` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` key 1 is ON, if `OFF` OFF.

### Key 2 (binary)
Value can be found in the published state on the `key_2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` key 2 is ON, if `OFF` OFF.

### Key 3 (binary)
Value can be found in the published state on the `key_3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` key 3 is ON, if `OFF` OFF.

### Key 4 (binary)
Value can be found in the published state on the `key_4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `ON` key 4 is ON, if `OFF` OFF.

