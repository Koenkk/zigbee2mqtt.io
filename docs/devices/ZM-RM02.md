---
title: "Zemismart 6 Scene Switch ZM-RM02"
description: "Battery powered 6 key scene switch"
addedAt: 2021-12-24T21:49:06Z
pageClass: device-page
---


# Zemismart 6 Scene Switch

|     |     |
|-----|-----|
| Model | ZM-RM02  |
| Vendor  | Zemismart|
| Description | Battery powered 6 scene switch, with 3 actions each (single, double, and long click) |
| Exposes | action, linkquality |
| Picture | ![ZM-RM02](https://www.zigbee2mqtt.io/images/devices/ZM-RM02.jpg) |



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `button_*_single`, `button_*_double`, `button_*_hold`.


### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

