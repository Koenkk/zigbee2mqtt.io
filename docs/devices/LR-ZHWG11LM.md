---
title: "OpenLumi LR-ZHWG11LM control via MQTT"
description: "Integrate your OpenLumi LR-ZHWG11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2026-09-29T18:28:03
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# OpenLumi LR-ZHWG11LM

|     |     |
|-----|-----|
| Model | LR-ZHWG11LM  |
| Vendor  | [OpenLumi](/supported-devices/#v=OpenLumi)  |
| Description | Lumi Router (for Aqara ZHWG11LM) |
| Exposes | device_temperature |
| Picture | ![OpenLumi LR-ZHWG11LM](https://www.zigbee2mqtt.io/images/devices/LR-ZHWG11LM.png) |



<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

This device is an **Aqara ZHWG11LM** gateway with its JN5169 Zigbee module flashed with Lumi Router firmware, allowing it to operate as a Zigbee router.

### Firmware

Open source firmware and flashing instructions are available on [GitHub](https://github.com/igorlistopad/Lumi-Router-JN5169).

### Pairing

See the [reset and pairing instructions](https://github.com/igorlistopad/Lumi-Router-JN5169#reset-and-pairing).
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `device_temperature_calibration`: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.


## Exposes

### Device temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"device_temperature": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `°C`.

