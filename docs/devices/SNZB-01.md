---
title: "SONOFF SNZB-01 control via MQTT"
description: "Integrate your SONOFF SNZB-01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-07-10T21:02:58Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-01

|     |     |
|-----|-----|
| Model | SNZB-01  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Wireless button |
| Exposes | battery, voltage, action |
| Picture | ![SONOFF SNZB-01](https://www.zigbee2mqtt.io/images/devices/SNZB-01.png) |
| White-label | eWeLink RHK07 |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->

## Notes

Binding information is confirmed by [sniffing](../advanced/zigbee/04_sniff_zigbee_traffic.md).

### Battery
Uses 1 x CR2450

**This device *sleeps* to preserve energy when it's not actively used.**  
When sleeping, it will not respond to any Z2M commands.  
Press its button to keep it awake and allow interactions.

### Pairing
**Long press reset button for 5s** until the LED indicator flashes three times, which means the device has entered pairing mode.  
The reset button can be found by removing the back cover.

### Binding

**This button can directly control individual devices and/or groups.**

- Pairing inside the network is possible by [binding](../guide/usage/binding.md) the `OnOff` cluster.  
- Pairing outside the network through [Touchlink](../guide/usage/touchlink.md) is **not** supported.

### Action mapping

|                                     Real Action | Z2M Action | Bind Action |
| ----------------------------------------------: | ---------- | ----------- |
| Single press <br> *press + release + wait 0.6s* | single     | *Toggle*    |
|     Double press <br> *press + release + press* | double     | *On*        |
|               Long press <br> *press + hold 2s* | long       | *Off*       |

<!-- Notes END: Do not edit below this line -->




## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"battery": ""}`.
It's not possible to write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Reported battery voltage in millivolts.
Value can be found in the published state on the `voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `single`, `double`, `long`.

