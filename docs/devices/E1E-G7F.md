---
title: "Sengled E1E-G7F control via MQTT"
description: "Integrate your Sengled E1E-G7F via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-05-29T19:41:16Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sengled E1E-G7F

|     |     |
|-----|-----|
| Model | E1E-G7F  |
| Vendor  | [Sengled](/supported-devices/#v=Sengled)  |
| Description | Smart switch |
| Exposes | action |
| Picture | ![Sengled E1E-G7F](https://www.zigbee2mqtt.io/images/devices/E1E-G7F.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Pairing
Factory reset the switch by pressing and holding the on and off buttons at the same time for at least 3 seconds. The indicator will start flashing, indicating a successful reset. The device will enter pairing mode for one minute. If the device is not connected in one minute, you must restart the pairing process.

If device won't go in to pairing mode, try installing a fresh battery.

### Long press action
The device will sometimes output a single push in addition to a long press. You can mitigate this by using the Debounce device configuration. Refer to *[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*.

For the `up` and `down` buttons, they will first output the action, and then output `{action}_long` every approximately 1 second, repeating until the button is released.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `up`, `down`, `off`, `on_double`, `on_long`, `off_double`, `off_long`.

