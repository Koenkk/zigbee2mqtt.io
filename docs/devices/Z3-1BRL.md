---
title: "Lutron Z3-1BRL control via MQTT"
description: "Integrate your Lutron Z3-1BRL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2019-09-08T21:16:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lutron Z3-1BRL

|     |     |
|-----|-----|
| Model | Z3-1BRL  |
| Vendor  | [Lutron](/supported-devices/#v=Lutron)  |
| Description | Aurora smart bulb dimmer |
| Exposes | action, brightness, linkquality |
| Picture | ![Lutron Z3-1BRL](https://www.zigbee2mqtt.io/images/devices/Z3-1BRL.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Enter pairing mode

For new devices:
* Quickly double tap the dimmer button.

For previously paired devices:
1. Quickly tap the dimmer button 4x.
2. On the fourth tap, hold until the LED begins to blink.
3. Immediately, quickly tap the dimmer button 3 more times.

See this [configuration guide](https://www.lutron.com/TechnicalDocumentLibrary/0301916_Aurora_Advanced_Install_Guide.pdf#page=7) for more information.

If a red light flashes, the battery is low and must be replaced before pairing.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `legacy`: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be `true` or `false`


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `brightness`.

### Brightness (numeric)
Value can be found in the published state on the `brightness` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

