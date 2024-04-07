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
| Exposes | battery, voltage, temperature, multiplier, divisor, unitOfMeasure, energy, linkquality |
| Picture | ![LiXee ZiPulses](https://www.zigbee2mqtt.io/images/devices/ZiPulses.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `energy_calibration`: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.

* `energy_precision`: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Multiplier (numeric)
It is necessary to press the link button to update.
Value can be found in the published state on the `multiplier` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"multiplier": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `1000`.

### Divisor (numeric)
It is necessary to press the link button to update.
Value can be found in the published state on the `divisor` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"divisor": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `1000`.

### UnitOfMeasure (enum)
It is necessary to press the link button to update.
Value can be found in the published state on the `unitOfMeasure` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"unitOfMeasure": NEW_VALUE}`.
The possible values are: `kWh`, `m3`, `ft3`, `ccf`, `US gl`, `IMP gl`, `BTUs`, `L (litre)`, `kPA (jauge)`, `kPA (absolu)`, `kPA (absolu)`, `sans unité`, `MJ`, `kVar`.

### Energy (numeric)
Value can be found in the published state on the `energy` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

