---
title: "Custom devices (DiY) MiCASAGasCounter control via MQTT"
description: "Integrate your Custom devices (DiY) MiCASAGasCounter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-01-31T13:09:55
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) MiCASAGasCounter

|     |     |
|-----|-----|
| Model | MiCASAGasCounter  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | Zigbee Gas counter |
| Exposes | gas, battery, voltage, battery_low |
| Picture | ![Custom devices (DiY) MiCASAGasCounter](https://www.zigbee2mqtt.io/images/devices/MiCASAGasCounter.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
>> ## Notes
Zigbee Gas Counter so it counts gas consumption from the counter directly and reports back the value to the coordinator.
The idea was to have a device counting without intervention of your server at home.
This is a DIY device so you have to checkout the documentation.
To use this device with Zigbee2MQTT a custom firmware has to be flashed which is explained [here](https://github.com/IgnacioHR/ZigbeeGasCounter) and build your own unit.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Gas (numeric)
Total gas consumption in m³.
Value can be found in the published state on the `gas` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"gas": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `m³`.

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

### Battery low (binary)
Empty battery indicator.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

