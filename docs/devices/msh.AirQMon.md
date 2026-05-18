---
title: "MySmartHouse msh.AirQMon control via MQTT"
description: "Integrate your MySmartHouse msh.AirQMon via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-03-31T19:04:19
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# MySmartHouse msh.AirQMon

|     |     |
|-----|-----|
| Model | msh.AirQMon  |
| Vendor  | [MySmartHouse](/supported-devices/#v=MySmartHouse)  |
| Description | MSH Air quality sensor |
| Exposes | action, calibrate, co2, l2, cpu_temperature, l4 |
| Picture | ![MySmartHouse msh.AirQMon](https://www.zigbee2mqtt.io/images/devices/msh.AirQMon.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

[MSH Air quality sensor](https://www.facebook.com/my.smart.house.in.ua)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `co2_calibration`: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Action (text)
button clicks or data from/to UART.
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"action": NEW_VALUE}`.

### Calibrate (enum, l2 endpoint)
Calibration.
Value can be found in the published state on the `calibrate_l2` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibrate_l2": NEW_VALUE}`.
The possible values are: `ZERO`, `SPAN`.

### CO2 (numeric)
The measured CO2 (carbon dioxide) value.
Value can be found in the published state on the `co2` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### L2 (numeric)
Error.
Value can be found in the published state on the `l2` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### CPU temperature (numeric, l3 endpoint)
Temperature of the CPU.
Value can be found in the published state on the `temperature_l3` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### L4 (numeric)
Uptime (seconds).
Value can be found in the published state on the `l4` property.
It's not possible to read (`/get`) or write (`/set`) this value.

