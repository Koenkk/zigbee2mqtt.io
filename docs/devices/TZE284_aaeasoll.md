---
title: "SMARTERCURRY TZE284_aaeasoll control via MQTT"
description: "Integrate your SMARTERCURRY TZE284_aaeasoll via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-05-31T19:17:59
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SMARTERCURRY TZE284_aaeasoll

|     |     |
|-----|-----|
| Model | TZE284_aaeasoll  |
| Vendor  | [SMARTERCURRY](/supported-devices/#v=SMARTERCURRY)  |
| Description | Illuminance sensor |
| Exposes | illuminance, battery, report_interval |
| Picture | ![SMARTERCURRY TZE284_aaeasoll](https://www.zigbee2mqtt.io/images/devices/TZE284_aaeasoll.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `illuminance_calibration`: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Illuminance (numeric)
Measured illuminance.
Value can be found in the published state on the `illuminance` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Report interval (enum)
Data reporting interval.
Value can be found in the published state on the `report_interval` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"report_interval": NEW_VALUE}`.
The possible values are: `5m`, `10m`, `15m`, `20m`, `30m`, `1h`.

