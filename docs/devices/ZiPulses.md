---
title: "LiXee ZiPulses control via MQTT"
description: "Integrate your LiXee ZiPulses via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# LiXee ZiPulses

|     |     |
|-----|-----|
| Model | ZiPulses  |
| Vendor  | [LiXee](/supported-devices/#v=LiXee)  |
| Description | Lixee ZiPulses |
| Exposes | voltage, temperature, energy, divisor, multiplier, unitOfMeasure |
| Picture | ![LiXee ZiPulses](https://www.zigbee2mqtt.io/images/devices/ZLinky_TIC.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->

<!-- ## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).
 -->


## Exposes

### Energy (numeric)
Sum of consumed energy.
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`)


### divisor (numeric)
Impulse division factor for the calculation of the energy consumed
Value can be found in the published state on the `divisor` property.
It's not possible to read (`/get`) or write (`/set`) this value.


### multiplier (numeric)
Impulse multiplier factor for the calculation of the energy consumed
Value can be found in the published state on the `multiplier` property.
It's not possible to read (`/get`) or write (`/set`) this value.

## unitOfMeasure (enum)
Unit of the energy consumed
Value can be found in the published state on the `unitOfMeasure` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`)
The unit of this value is `°C`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.
