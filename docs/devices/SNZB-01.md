---
title: "SONOFF SNZB-01 control via MQTT"
description: "Integrate your SONOFF SNZB-01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2020-07-10T21:02:58Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section till next h1 (#) or h2 heading (##). -->
<!-- Do NOT use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-01

|     |     |
|-----|-----|
| Model | SNZB-01  |
| Vendor  | SONOFF  |
| Description | Wireless button |
| Exposes | battery, action, linkquality |
| Picture | ![SONOFF SNZB-01](https://psi-4ward.github.io/zigbee2mqtt.io/images/devices/SNZB-01.jpg) |
| White-label | eWeLink RHK07 |


<!-- Notes BEGIN: You can edit here -->
## Notes


### Pairing
Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode.
The reset button can be found by removing the back cover.

<!-- Notes END: Do not edit below this line -->



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `long`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

