---
title: "EFEKTA EFEKTA_TDS_Monitor control via MQTT"
description: "Integrate your EFEKTA EFEKTA_TDS_Monitor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-04-30T19:57:27
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_TDS_Monitor

|     |     |
|-----|-----|
| Model | EFEKTA_TDS_Monitor  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | TDS Monitor with DS18B20 temperature sensor |
| Exposes | temperature, tds, tds_coefficient, reading_interval, tds_offset, tx_radio_power, temperature_offset |
| Picture | ![EFEKTA EFEKTA_TDS_Monitor](https://www.zigbee2mqtt.io/images/devices/EFEKTA_TDS_Monitor.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a maximum value of `3`


## Exposes

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Tds (numeric)
Measured TDS value.
Value can be found in the published state on the `tds` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### Tds coefficient (enum)
TDS coefficient.
Value can be found in the published state on the `tds_coefficient` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tds_coefficient": NEW_VALUE}`.
The possible values are: `500`, `550`, `640`, `700`, `1000`.

### Reading interval (numeric)
Setting the sensor reading interval in seconds, by default 30 seconds.
Value can be found in the published state on the `reading_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"reading_interval": NEW_VALUE}`.
The minimal value is `10` and the maximum value is `360`.
The unit of this value is `Seconds`.

### Tds offset (numeric)
Adjust TDS.
Value can be found in the published state on the `tds_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tds_offset": NEW_VALUE}`.
The minimal value is `-100` and the maximum value is `100`.
The unit of this value is `ppm`.

### Tx radio power (enum)
Set TX Radio Power, dbm.
Value can be found in the published state on the `tx_radio_power` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"tx_radio_power": NEW_VALUE}`.
The possible values are: `0dbm`, `4dbm`, `10dbm`, `19dbm`.

### Temperature offset (numeric)
Adjust temperature.
Value can be found in the published state on the `temperature_offset` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"temperature_offset": NEW_VALUE}`.
The minimal value is `-50` and the maximum value is `50`.
The unit of this value is `°C`.

