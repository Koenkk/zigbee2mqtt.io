---
title: "EFEKTA EFEKTA_miniPWS control via MQTT"
description: "Integrate your EFEKTA EFEKTA_miniPWS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-08-01T20:41:55Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# EFEKTA EFEKTA_miniPWS

|     |     |
|-----|-----|
| Model | EFEKTA_miniPWS  |
| Vendor  | [EFEKTA](/supported-devices/#v=EFEKTA)  |
| Description | Mini plant wattering sensor |
| Exposes | soil_moisture, battery, voltage, report_delay |
| Picture | ![EFEKTA EFEKTA_miniPWS](https://www.zigbee2mqtt.io/images/devices/EFEKTA_miniPWS.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
[Mini plant wattering sensor](http://efektalab.com/miniPWS)


### Build guide
Instructions on how to build this device can be found [here](https://github.com/smartboxchannel/Plant-Watering-Sensor-Zigbee)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `soil_moisture_calibration`: Calibrates the soil_moisture value (absolute offset), takes into effect on next report of device. The value must be a number.

* `soil_moisture_precision`: Number of digits after decimal point for soil_moisture, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Soil moisture (numeric)
Measured soil moisture value.
Value can be found in the published state on the `soil_moisture` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"soil_moisture": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `%`.

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

### Report delay (numeric)
Adjust Report Delay, by default 60 minutes.
Value can be found in the published state on the `report_delay` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"report_delay": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"report_delay": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `180`.
The unit of this value is `min`.

