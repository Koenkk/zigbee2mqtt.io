---
title: "MySmartHouse msh.ina226m control via MQTT"
description: "Integrate your MySmartHouse msh.ina226m via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-06-30T19:08:02
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# MySmartHouse msh.ina226m

|     |     |
|-----|-----|
| Model | msh.ina226m  |
| Vendor  | [MySmartHouse](/supported-devices/#v=MySmartHouse)  |
| Description | MSH 9-26V, 5A DC Power Meter, with CPU temperature support |
| Exposes | power, voltage, current, temperature, l4 |
| Picture | ![MySmartHouse msh.ina226m](https://www.zigbee2mqtt.io/images/devices/msh.ina226m.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

[MSH 9-26V, 5A DC Power Meter, with CPU temperature support](https://www.facebook.com/my.smart.house.in.ua)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `power_calibration`: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.

* `power_precision`: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `voltage_calibration`: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.

* `voltage_precision`: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `current_calibration`: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.

* `current_precision`: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Power (numeric, l2 endpoint)
Instantaneous measured power.
Value can be found in the published state on the `power_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"power_l2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `W`.

### Voltage (numeric, l2 endpoint)
Measured electrical potential value.
Value can be found in the published state on the `voltage_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"voltage_l2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `V`.

### Current (numeric, l2 endpoint)
Instantaneous measured electrical current.
Value can be found in the published state on the `current_l2` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"current_l2": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `A`.

### CPU Temperature (numeric, l5 endpoint)
Temperature of the CPU.
Value can be found in the published state on the `temperature_l5` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Uptime (numeric, l4 endpoint)
Uptime (seconds).
Value can be found in the published state on the `l4_l4` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `s`.

