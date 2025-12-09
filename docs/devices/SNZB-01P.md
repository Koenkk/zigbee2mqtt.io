---
title: "SONOFF SNZB-01P control via MQTT"
description: "Integrate your SONOFF SNZB-01P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-06-01T08:16:21
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF SNZB-01P

|     |     |
|-----|-----|
| Model | SNZB-01P  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Wireless button |
| Exposes | battery, voltage, action |
| Picture | ![SONOFF SNZB-01P](https://www.zigbee2mqtt.io/images/devices/SNZB-01P.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
Press and hold the reset button for 5 seconds to put device into pairing mode.

### Binding

This button can **not** directly control individual devices or groups (v2.2.0).
- Pairing inside the network is successful by [binding](../guide/usage/binding.md) the `OnOff` cluster, but clicks perform no action.
- Pairing outside the network through [Touchlink](../guide/usage/touchlink.md) is not supported.

### Action mapping

| Real Action  | Z2M Action | Bind Action |
|-------------:|------------|-------------|
| Single press | single     | nothing     |
| Double press | double     | nothing     |
| Long press   | long       | nothing     |

<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



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

