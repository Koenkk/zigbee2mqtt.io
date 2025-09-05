---
title: "GammaTroniques TICMeter control via MQTT"
description: "Integrate your GammaTroniques TICMeter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-05-09T20:14:11
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# GammaTroniques TICMeter

|     |     |
|-----|-----|
| Model | TICMeter  |
| Vendor  | [GammaTroniques](/supported-devices/#v=GammaTroniques)  |
| Description | TICMeter pour Linky |
| Exposes |  |
| Picture | ![GammaTroniques TICMeter](https://www.zigbee2mqtt.io/images/devices/TICMeter.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `tic_mode`: Linky TIC communication mode. Defaults to AUTO mode. To be used in case of problem. The value must be one of `HISTORIQUE`, `STANDARD`, `AUTO`

* `contract_type`: Current electricity contract on Linky. Defaults to AUTO mode. Displays the correct entities. To be used in case of problem. The value must be one of `AUTO`, `BASE`, `HCHP`, `EJP`, `TEMPO`, `PRODUCTEUR`

* `linky_elec`: Linky electrical mode. Defaults to AUTO mode. To be used in case of problem. The value must be one of `MONOPHASE`, `TRIPHASE`, `AUTO`

* `producer`: Producer mode: displays electricity production indexes. Default: OFF. The value must be `ON` or `OFF`

* `advanced`: Displays all meter data. For advanced use. Default: OFF. The value must be `ON` or `OFF`

* `translation`: Language: Default French. The value must be one of `FRANCAIS`, `ENGLISH`

* `refresh_rate`: Refresh rate for static values (those with refresh buttons). Default: 120 s. The value must be a number with a minimum value of `60` and with a with a maximum value of `3600`


## Exposes



