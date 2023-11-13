---
title: "Custom devices (DiY) EFEKTA_miniPWS control via MQTT"
description: "Integrate your Custom devices (DiY) EFEKTA_miniPWS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2021-08-01T20:41:55Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) EFEKTA_miniPWS

|     |     |
|-----|-----|
| Model | EFEKTA_miniPWS  |
| Vendor  | [Custom devices (DiY)](/supported-devices/#v=Custom%20devices%20(DiY))  |
| Description | [Mini plant wattering sensor](http://efektalab.com/miniPWS) |
| Exposes | soil_moisture, battery, report_delay, linkquality |
| Picture | ![Custom devices (DiY) EFEKTA_miniPWS](https://www.zigbee2mqtt.io/images/devices/EFEKTA_miniPWS.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Build guide
Instructions on how to build this device can be found [here](https://github.com/smartboxchannel/Plant-Watering-Sensor-Zigbee)
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `soil_moisture_precision`: Number of digits after decimal point for soil_moisture, takes into effect on next report of device. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`

* `soil_moisture_calibration`: Calibrates the soil_moisture value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Soil moisture (numeric)
Measured soil moisture value.
Value can be found in the published state on the `soil_moisture` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `%`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported..
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Report delay (numeric)
Adjust Report Delay, by default 60 minutes.
Value can be found in the published state on the `report_delay` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"report_delay": NEW_VALUE}`.
The minimal value is `1` and the maximum value is `180`.
The unit of this value is `min`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

