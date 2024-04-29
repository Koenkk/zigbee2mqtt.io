---
title: "Legrand ZLGP14/ZLGP15/ZLGP16 control via MQTT"
description: "Integrate your Legrand ZLGP14/ZLGP15/ZLGP16 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-06-01T08:09:29
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Legrand ZLGP14/ZLGP15/ZLGP16

|     |     |
|-----|-----|
| Model | ZLGP14/ZLGP15/ZLGP16  |
| Vendor  | [Legrand](/supported-devices/#v=Legrand)  |
| Description | Wireless and batteryless scenario switch (home arrival/departure, 1-4 switches, daytime day/night) |
| Exposes | action, linkquality |
| Picture | ![Legrand ZLGP14/ZLGP15/ZLGP16](https://www.zigbee2mqtt.io/images/devices/ZLGP14-ZLGP15-ZLGP16.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Green Power
This is a Zigbee Green Power device which allows it to be very energy efficient.  
The device identification is the same for several models ZLGP14, ZLGP15 and ZLGP16 (so far). Only command IDs differ (from 16 to 23).  
Current supported models are:   
- ZLGP14 (home arrival/home departure)
- ZLGP15 (1 to 4 numbered switches)
- ZLGP16 (daytime day/daytime night)

### Pairing
To pair this device, hold the configuration button (on the back of the device) and press any of the buttons.  
For further details, please refer to manufacturer documentation below.

### Manfacturer documentations
- ZLGP14 [EN](https://www.admin.legrandoc.com/files/documents/S000113314EN-00.pdf) [FR](https://www.admin.legrandoc.com/files/documents/S000113314FR-00.pdf)
- ZLGP15 [EN](https://www.admin.legrandoc.com/files/documents/S000113321EN-00.pdf) [FR](https://www.admin.legrandoc.com/files/documents/S000113321FR-00.pdf)
- ZLGP16 [EN](https://www.admin.legrandoc.com/files/documents/S000113317EN-00.pdf) [FR](https://www.admin.legrandoc.com/files/documents/S000113317FR-00.pdf)
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `home_arrival`, `home_departure`, `press_1`, `press_2`, `press_3`, `press_4`, `daytime_day`, `daytime_night`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

